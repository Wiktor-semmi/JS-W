import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";
import {Auth} from "../services/auth.js";

export class Income {
    constructor() {

        this.init().then();

        this.processElementB = document.getElementById('open-card');
        this.processElementB.onclick = function () {
            location.href = '#/open_category_income';
        }


    }

    async init() {
        const userInfo = Auth.getUserInfo();


        if (userInfo) {

            const result = await CustomHttp.request(config.host + '/categories/income');
            // if (result) {
            //        if (result.error || !result.response || (result.response && (result.response.error || !result.response.id))) {
            //         return alert('Возникла ошибка при запросе доходов. Обратитесь в поддержку');
            //     }
            // }

            // result.responseType = "text";

            // result.send();
            console.log(result)
            this.processIncome();
        }

    }

    processIncome() {

    }
}


