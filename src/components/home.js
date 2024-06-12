export class Home {
    constructor() {
        const that = this;
        this.processElement = document.getElementById('nav_item');
        this.processElement.onclick = function () {
            location.href = 'income_expenses.html';
        }
    }

}
