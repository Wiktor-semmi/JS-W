import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";
import {Auth} from "../services/auth";

export class AuthBase {

    constructor() {
        this.processElement = null;
        this.agreeElement = null;
        this.isRegistration = false;
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
        if (this.isRegistration) {
            const password = this.fields.find(field => field.name === 'password');
            const repeatPassword = this.fields.find(field => field.name === 'repeat_password');
            if (password && repeatPassword && password.element.value && repeatPassword.element.value) {
                if (password.element.value === repeatPassword.element.value) {
                    element.removeAttribute('style');
                    field.valid = true;
                } else {
                    element.style.borderColor = 'red';
                    field.valid = false;
                }
            }
        }
        this.validateForm();
    }

    validateForm() {
        const validForm = this.fields.every(item => item.valid);
        let isValid = false;
        console.log(this.fields)

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

        try {
            const result = await CustomHttp.request(config.host + '/login', 'POST', {
                email: email,
                password: password,
            })

            if (result) {
                if (result.error || !result.tokens.accessToken || !result.tokens.refreshToken
                    || !result.user.name || !result.user.lastName || !result.user.id) {
                    throw new Error(result.message);
                }
                Auth.setTokens(result.tokens.accessToken, result.tokens.refreshToken);
                Auth.setUserInfo({
                    name: result.user.name,
                    lastName : result.user.lastName,
                    userId: result.user.id,
                    email: email,
                })
                location.href = '#/home';
            }
        } catch (error) {
            console.log(error);
        }
    }
}