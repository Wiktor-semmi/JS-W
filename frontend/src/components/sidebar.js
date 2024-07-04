export class Sidebar {
    constructor() {
        this.links = Array.from(document.querySelectorAll('.nav-link'));

        this.setActiveLink();
        this.initAccordion();
        this.initSidebar();
        this.balance();
    }
    setActiveLink() {
        this.activeLink = this.links.find(link => {
            const dataLink = link.getAttribute('data-link');
            return dataLink && window.location.href.includes(dataLink)
        });
        if (this.activeLink) {
            const activeLinkOld = document.querySelector('.nav-link.active');
            if (activeLinkOld) {
                activeLinkOld.classList.remove('active');
            }
        }
        this.activeLink.classList.add('active');
    }
    initAccordion() {
        const dataLink = this.activeLink.getAttribute('data-link');
        if (dataLink === "#/income" || dataLink === "#/expenses") {
            document.getElementById('flush-collapseThree').classList.add('show');
            // button.setAttribute("aria-expanded", 'true');
            const incomeLink = document.querySelector('[data-link="#/income"]');
            const expensesLink = document.querySelector('[data-link="#/expenses"]');
            const buttonId = document.getElementById('button_id');
            const spanId = document.getElementById('span_id');
            const svgId = document.getElementById('svg_id');
            if (!incomeLink.classList.contains('collapsed')) {
                // Если активен элемент "Доходы", меняем его фон на синий
                buttonId.style.background = 'var(--bs-blue)';
                spanId.style.color = 'var(--bs-white)';
                svgId.style.color = 'var(--bs-white)';
            } else if (!expensesLink.classList.contains('collapsed')) {
                // Если активен элемент "Расходы", меняем его фон на синий
                expensesLink.style.background = 'var(--bs-blue)';
            }
        }
    }
    initSidebar() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebar.addEventListener('click', (event) => {
            const target = event.target;
            const dataLink = target.getAttribute('data-link');
            if (!dataLink) {
                const dataLinkParent = target.parentElement.getAttribute('data-link');
                if (dataLinkParent) {
                    location.href = dataLinkParent;
                }
            } else {
                location.href = dataLink;
            }
        })
    }
    balance() {

            const receivedBalance = 100 + '$';
            const balanceElement = document.getElementById('profile-many');
            balanceElement.textContent = receivedBalance;

    }
}