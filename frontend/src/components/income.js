import {Sidebar} from "./sidebar.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";
import {Auth} from "../services/auth.js";

export class Income {
    constructor() {
        this.incomeFull = [];
        this.incomeResult = null;
        this.init();


        this.processElementB = document.getElementById('income_btn');
        this.processElementB.onclick = function () {
            location.href = '#/kor_category';
        }

        this.processElementB = document.getElementById('open-card');
        this.processElementB.onclick = function () {
            location.href = '#/open_category';
        }

    }

    async init() {
        const userInfo = Auth.getUserInfo();


        // const userInfo = Auth.getUserInfo();
        if (userInfo) {
            try {
                const result = await CustomHttp.request(config.host + '/categories/income/results?userId=' + userInfo.userId);
                if (result) {
                    if (result.error) {
                        throw new Error(result.error);
                    }
                    this.incomeResult = result;

                }
            } catch (error) {
                return console.log(error);
            }
        }
        this.processIncome();
    }
    processIncome() {

    }
}


