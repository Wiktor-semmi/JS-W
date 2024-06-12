export class Account  {
    constructor() {
       this.processElement = null;
           this.fields = [
            {
                name: 'name',
                id: 'name',
                element: null,
                regex: /[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]*$/,
                valid: false,
            },

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
            {
                name: 'repeat_password',
                id: 'repeat_password',
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
            that.processAccount();
        }

        this.lastElement = document.getElementById('auth_text');
        this.lastElement.onclick = function () {
            location.href = 'login.html';
        }
    }
    validateField(field, element) {
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('repeat_password').value;
        if (!element.value || !element.value.match(field.regex)) {
            element.style.borderColor = 'red';
            field.valid = false;

        } else {
            element.removeAttribute('style');
            field.valid = true;

        }

        this.validateAccount();
    }


        validateAccount() {
            const validAccount = this.fields.every(item => item.valid);

            if (validAccount) {
                this.processElement.removeAttribute('disabled');
            } else {
                this.processElement.setAttribute('disabled', 'disabled');
            }
            return validAccount;
        }
        processAccount() {
            if (this.validateAccount()) {

                let paramString = '';
                this.fields.forEach(item => {
                    paramString += (!paramString ? '?' : '&') + item.name + '=' + item.element.value;
                })
                location.href = 'home.html' + paramString;
            }
        }
    }