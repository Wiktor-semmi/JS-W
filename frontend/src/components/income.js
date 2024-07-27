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

            this.procsessIncome(result);
        }
    }

   procsessIncome(result) {
        const cardsElement = document.getElementById('card-income');
        if (result && result.length > 0) {
            console.log(result)
            result.forEach(inc => {

                const cardElement = document.createElement('div');
                cardElement.className = 'card';

                const cardBodyElement = document.createElement('div');
                cardBodyElement.className = 'card-body';

                const cardTitleElement = document.createElement('h3');
                cardTitleElement.className = 'card-title';
                cardTitleElement.innerText = inc.title;

                const cardBtnElement = document.createElement('a');
                cardBtnElement.className = 'btn btn-primary';
                cardBtnElement.href = "#/kor_category";
                cardBtnElement.textContent = "Редактировать";

                const cardButtonElement = document.createElement('button');
                cardButtonElement.className = 'btn btn-danger';
                cardButtonElement.setAttribute('data-bs-toggle', "modal");
                cardButtonElement.setAttribute('data-bs-target', "#removeModal");
                cardButtonElement.textContent = 'Удалить';

                cardBodyElement.appendChild(cardTitleElement);
                cardBodyElement.appendChild(cardBtnElement);
                cardBodyElement.appendChild(cardButtonElement);

                cardElement.appendChild(cardBodyElement);


                cardsElement.appendChild(cardElement);
            })
        }


    }

}


