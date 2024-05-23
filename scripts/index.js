(function () {
    const Index = {
        init() {
            checkUserData();
            const that = this;
            this.processElement = document.getElementById('nav_item');
            this.processElement.onclick = function () {

                location.href = 'income_expenses.html';
            }

        },

    }
    Index.init()
})();