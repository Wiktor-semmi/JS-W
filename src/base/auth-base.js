export class AuthBase {

constructor() {
    this.processElement = null;
    this.agreeElement = null;
    this.fields = [];
}
init() {
    const that = this;
    this.fields.forEach(item => {
        item.element = document.getElementById(item.id);
        item.element.onchange = function () {
            that.validateField.call(that, item, this);
        }
    });


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
        let isValid = false;

        if (this.agreeElement) {
            isValid = this.agreeElement.checked && validForm;
        } else {
            isValid = validForm;
        }

        if (isValid) {
            this.processElement.removeAttribute('disabled');
        } else {
            this.processElement.setAttribute('disabled', 'disabled');
        }
        return isValid;
    }
    async login(email, password) {

    }
}