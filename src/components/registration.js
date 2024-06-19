import {AuthBase} from "../base/auth-base.js";
import {CustomHttp} from "../services/custom-http.js";
import {Auth} from "../services/auth.js";
import config from "../../config/config.js";

export class Registration extends AuthBase {
    constructor() {
        super();

        this.isRegistration = true;

        const accessToken = localStorage.getItem(Auth.accessTokenKey);
        if (accessToken) {
            // location.href = '#/home';
            return;
        }

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
                regex: null,
                valid: false,
            }
        ];


        this.init();

        this.processElement = document.getElementById('process');
        this.processElement.onclick = () => {
            this.processForm();
        }
    }

    async processForm() {

        if (this.validateForm()) {
            const [name, lastName] = this.fields.find(item => item.name === 'name').element.value.split(' ');
            const email = this.fields.find(item => item.name === 'email').element.value;
            const password = this.fields.find(item => item.name === 'password').element.value;


            try {
                const result = await CustomHttp.request(config.host + '/signup', 'POST', {
                    name: name,
                    lastName: lastName,
                    email: email,
                    password: password,
                    passwordRepeat: this.fields.find(item => item.name === 'repeat_password').element.value,
                })

                if (result) {
                    if (result.error || !result.user) {
                        throw new Error(result.message);
                    }

                    // Auth.setUserInfo({
                    //     name: name,
                    //     lastName: lastName,
                    //     userId: result.user.id,
                    //     email: email
                    // })
                }
            } catch (error) {
                return console.log(error);
            }
            await this.login(email, password);
        }
    }
}