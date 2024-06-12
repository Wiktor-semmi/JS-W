import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.css";
import "../styles/index.css";
import "../styles/form.css";
import "../styles/account.css";
import "../styles/income.css";
import "../styles/income_expenses.css";

import "bootstrap/dist/js/bootstrap.min.js"

import {Router} from "./router.js";

class App {
    constructor() {
        this.router = new Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
    }

    handleRouteChanging() {
        this.router.openRoute();
    }
}

(new App());