import {Account} from "./components/account.js";
import {Form} from "./components/form.js";
import {Home} from "./components/home.js";



export class Router {
    constructor() {
        this.routes = [
            {
                route: '#/',
                title: 'Авторизация',
                template: 'templates/login.html',
                // styles: 'styles/form.css',
                load: () => {
                    new Form();
                }
            },
            {
                route: '#/registration',
                title: 'Регистрация',
                template: 'templates/registration.html',
                // styles: 'styles/account.css',
                load: () => {
                    new Account();
                }
            },

            {
                route: '#/home',
                title: 'Главная',
                template: 'templates/home.html',
                // styles: 'styles/index.css',
                load: () => {
                    new Home();
                }
            },
            {
                route: '#/category',
                title: 'Категории',
                template: 'templates/category.html',
                // styles: '',
                load: () => {
                }
            },
            {
                route: '#/open_category',
                title: 'Создание категории расходов',
                template: 'templates/open_category.html',
                // styles: '',
                load: () => {
                }
            },
            {
                route: '#/kor_category',
                title: 'Редактирование дохода/расхода',
                template: 'templates/kor_category.html',
                // styles: '',
                load: () => {
                }
            },
            {
                route: '#/expenses',
                title: 'Расходы',
                template: 'templates/expenses.html',
                // styles: '',
                load: () => {
                }
            },

            {
                route: '#/income',
                title: 'Доходы',
                template: 'templates/income.html',
                // styles: 'styles/income.css',
                load: () => {
                }
            },
            {
                route: '#/income_expenses',
                title: 'Доходы и расходы',
                template: 'templates/income_expenses.html',
                // styles: 'styles/income_expenses.css',
                load: () => {
                }
            },
            {
                route: '#/kor_category',
                title: 'Редактирование категории доходов',
                template: 'templates/kor_category.html',
                // styles: '',
                load: () => {
                }
            },
            {
                route: '#/kor_expenses',
                title: 'Редактирование категории расходов',
                template: 'templates/kor_expenses.html',
                // styles: '',
                load: () => {
                }
            },
            {
                route: '#/operations',
                title: 'Создание дохода/расхода',
                template: 'templates/operations.html',
                // styles: '',
                load: () => {
                }
            },

        ]
    }

    async openRoute() {
        const newRoute = this.routes.find(item => {
            return item.route === window.location.hash.split('?')[0];
        });

        if (!newRoute) {
            window.location.href = '#/';
            return;
        }
        document.getElementById('content').innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        // document.getElementById('styles').setAttribute('href', newRoute.styles);
        document.getElementById('title').innerText = newRoute.title;
        newRoute.load();
    }
}