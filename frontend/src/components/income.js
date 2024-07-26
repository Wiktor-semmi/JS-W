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

            console.log(result)


          

            result.forEach(obj => {
                if (obj.title) {
                    // obj.income_text = obj.title;
                    console.log(obj.title)

                    document.getElementById('income_text').textContent = obj.title;
                    let cardDelete = document.getElementsByClassName('card_dell');
                    while (cardDelete.length > 0) {
                        cardDelete[0].parentNode.removeChild(cardDelete[0]);
                    }
                    console.log(cardDelete)
                }
            });
        }
    }




}


