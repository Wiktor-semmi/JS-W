import {AuthBase} from "../base/auth-base.js";
import {CustomHttp} from "../services/custom-http.js";
import {Auth} from "../services/auth.js";
import config from "../../config/config.js";

export class Login extends AuthBase {
    constructor() {
        super();

        const accessToken = localStorage.getItem(Auth.accessTokenKey);
        if (accessToken) {
            // location.href = '#/home';
            return;
        }

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

        this.init();

        // this.processElement = document.getElementById('authText');
        // this.processElement.onclick = function () {
        //     location.href = 'registration.html';
        // }


    }

    init() {
        super.init();

        this.processElement = document.getElementById('process');
        this.processElement.onclick = () => {
            this.processForm();
        }

        this.agreeElement = document.getElementById('flexCheckDefault');
        this.agreeElement.onchange = () => {
            this.validateForm();
        }
    }

   async processForm() {
        if (this.validateForm()) {
            const email = this.fields.find(item => item.name === 'email').element.value;
            const password = this.fields.find(item => item.name === 'password').element.value;
          await this.login(email, password)
            try {
                const result = await CustomHttp.request(config.host, 'POST', {
                    email: email,
                    password: password,
                })

                if (result) {
                    if (result.error || !result.accessToken || !result.refreshToken
                        || !result.fullName || !result.userId) {
                        throw new Error(result.message);
                    }
                    Auth.setTokens(result.accessToken, result.refreshToken);
                    Auth.setUserInfo({
                        fullName: result.fullName,
                        userId: result.userId,
                        email: email
                    })
                    location.href = '#/home';
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
