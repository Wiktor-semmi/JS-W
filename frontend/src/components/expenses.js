export class Expenses {
    constructor() {

      this.processElementB = document.getElementById('open_card_expenses');
      this.processElementB.onclick = function () {
            location.href = '#/open_category_expenses';
        }
    }
}