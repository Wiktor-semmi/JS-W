export class Home {
    constructor() {
        const that = this;
        this.processElementA = document.getElementById('nav_item');
        this.processElementA.onclick = function () {
            location.href = '#/income_expenses';
        }
        this.processElementB = document.getElementById('nav_income');
        this.processElementB.onclick = function () {
            location.href = '#/income';
        }
        this.processElementC = document.getElementById('nav_expenses');
        this.processElementC.onclick = function () {
            location.href = '#/expenses';
        }
        this.processElementD = document.getElementById('nav_home');
        this.processElementD.onclick = function () {
            location.href = '#/home';
        }
    }

}
