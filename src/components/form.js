export class Form {
    constructor() {
        this.agreeElement = null;
        this.processElement = null;
        this.fields = [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
                valid: false,
            },
        ];

        const that = this;
        this.fields.forEach(item => {
            item.element = document.getElementById(item.id);
            item.element.onchange = function () {
                that.validateField.call(that, item, this);
            }
        });

        this.processElement = document.getElementById('process');
        this.processElement.onclick = function () {
            that.processForm();
        }

        // this.processElement = document.getElementById('authText');
        // this.processElement.onclick = function () {
        //     location.href = 'registration.html';
        // }

        this.agreeElement = document.getElementById('flexCheckDefault');
        this.agreeElement.onchange = function () {
            that.validateForm();
        }
    }

    validateField(field, element) {
        if (!element.value || !element.value.match(field.regex)) {
            element.style.borderColor = 'red';
            field.valid = false;
        } else {
            element.removeAttribute('style');
            field.valid = true;
        }
        this.validateForm();
    }


    validateForm() {
        const validForm = this.fields.every(item => item.valid);
        const isValid = this.agreeElement.checked && validForm;
        if (isValid) {
            this.processElement.removeAttribute('disabled');
        } else {
            this.processElement.setAttribute('disabled', 'disabled');
        }
        return isValid;
    }


    processForm() {
        if (this.validateForm()) {

            let paramString = '';
            this.fields.forEach(item => {
                paramString += (!paramString ? '?' : '&') + item.name + '=' + item.element.value;
            })
            location.href = 'home.html' + paramString;
        }
    }
}
