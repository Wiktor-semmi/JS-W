import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";

export class CreateCategory {
    constructor(categoryType) {
        this.categoryType = categoryType;
        this.categoryTitle = document.getElementById('categoryTitle');

        this.categoryTitle.innerText = `Создание категории ${this.categoryType === 'income' ? 'доходов' : 'расходов'}`;

        this.input = document.getElementById('text');

        this.createButton = document.getElementById('create');
        this.cancelButton = document.getElementById('cancel');


        this.createButton.addEventListener('click', () => this.createCategory())
        this.cancelButton.onclick = function () {
            location.href = '#/income';
        }

    }

    async createCategory() {
        if (this.input.value) {
            const body = {title: this.input.value};
            const result = await CustomHttp.request(config.host + '/categories/' + this.categoryType, 'POST', body);
            console.log(result)
            if (result) {
                if (result.error) {
                    alert('Данная категория уже существует')
                } else {

                    location.href = '#/income';
                }
            }


        }


    }



}