export class Home {
    constructor() {
        const that = this;
        this.processElement = document.getElementById('nav_item');
        this.processElement.onclick = function () {
            location.href = '#/income_expenses';
        }
        this.processElement = document.getElementById('nav_income');
        this.processElement.onclick = function () {
            location.href = '#/income';
        }
        this.processElement = document.getElementById('nav_expenses');
        this.processElement.onclick = function () {
            location.href = '#/expenses';
        }
    }

}
