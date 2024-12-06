import {AuthBase} from "../base/auth-base.js";
import {Auth} from "../services/auth.js";


export class Login extends AuthBase {
    constructor() {
        super();



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

        }
    }
}
