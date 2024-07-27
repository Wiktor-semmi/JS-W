import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";

export class Delete {
    constructor() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (!id) {
            return
        }
        this.deleteIncome(id).then();
    }



    async deleteIncome(id) {

        const result = await CustomHttp.request(config.host + '/categories/income' + id, 'DELETE', true);
        if (result.redirect) {
            const processDeleteIncome = document.getElementById('delete-income');
            processDeleteIncome.onclick = function () {
                location.href = '/delete';
            }
            return result.redirect;
        }
        if (result.error) {
            return alert('Возникла ошибка при удалении категории доходов')
        }

        console.log(result)
        return location.href = '#/income';


    }

}