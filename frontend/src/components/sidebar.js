export class Sidebar {
    constructor() {
        this.links = Array.from(document.querySelectorAll('.nav-link'));

        const activeLink = this.links.find(link => {
            const dataLink = link.getAttribute('data-link');
            return dataLink && window.location.href.includes(dataLink)
        });
        if (activeLink) {
            const activeLinkOld = document.querySelector('.nav-link.active');
            if (activeLinkOld) {
                activeLinkOld.classList.remove('active');
            }


        }
        activeLink.classList.add('active');

        const incomeSpan = document.querySelector('[data-link="#/income"]');
        const expensesSpan = document.querySelector('[data-link="#/expenses"]');
        const collapseElement = document.querySelector('.collapse:not(.show)');

        incomeSpan.addEventListener('click', () => {
            collapseElement.style.display = 'block';
        });

        expensesSpan.addEventListener('click', () => {
            collapseElement.style.display = 'block';
        });



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
}