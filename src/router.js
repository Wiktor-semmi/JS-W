import {Registration} from "./components/registration.js";
import {Login} from "./components/login.js";
import {Home} from "./components/home.js";
import {Auth} from "./services/auth.js";



export class Router {
    constructor() {
        this.contentElement = document.getElementById('content');
        this.stylesElement = document.getElementById('styles');
        this.titleElement = document.getElementById('title');
        this.profileElement = document.getElementById('profile');
        this.profileFullNameElement = document.getElementById('profile-ull-name');
        this.profileManylement = document.getElementById('profile-many');


        this.routes = [
            {
                route: '#/',
                title: 'Авторизация',
                template: 'templates/login.html',
                // styles: 'styles/form.css',
                load: () => {
                    new Login();
                }
            },
            {
                route: '#/registration',
                title: 'Регистрация',
                template: 'templates/registration.html',
                // styles: 'styles/auth.css',
                load: () => {
                    new Registration();
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
        const urlRoute = window.location.hash.split('?')[0];
        if (urlRoute === '#/logout') {
            await Auth.logout();
            window.location.href = '#/';
            return;
        }

        const newRoute = this.routes.find(item => {
            return item.route === urlRoute;
        });

        if (!newRoute) {
            window.location.href = '#/';
            return;
        }
        this.contentElement.innerHTML =
            await fetch(newRoute.template).then(response => response.text());
        // this.stylesElement.setAttribute('href', newRoute.styles);
        this.titleElement.innerText = newRoute.title;

        const userInfo = Auth.getUserInfo();
        const accessToken = localStorage.getItem(Auth.accessTokenKey);
        if (userInfo && accessToken) {
            // this.profileElement.style.display = 'flex';
            // this.profileFullNameElement.innerText = userInfo.name;
        } else {
            this.profileElement.style.display = 'none';
        }

        newRoute.load();
    }

}