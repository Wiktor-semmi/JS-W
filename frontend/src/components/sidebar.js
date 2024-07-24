import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config";


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
            return dataLink && window.location.href.includes(dataLink);
        });
        if (this.activeLink) {
            const activeLinkOld = document.querySelector('.nav-link.active');
            if (activeLinkOld) {
                activeLinkOld.classList.remove('active');
            }
            this.activeLink.classList.add('active');
        }


    }

    initAccordion() {
        const dataLink = this.activeLink.getAttribute('data-link');
        if (dataLink === "income" || dataLink === "expenses") {
            document.getElementById('flush-collapseThree').classList.add('show');
            const buttonId = document.getElementById('button_id');
            buttonId.classList.remove('collapsed');

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
                    location.href = `#/${dataLinkParent}`;
                }
            } else {
                location.href = `#/${dataLink}`;
            }
        })
    }


    async balance() {
        try {

            const result = await CustomHttp.request(config.host + '/balance');
            if (result) {
                if (result.error) {
                    const receivedBalance = 0 + ' - $';
                    const balanceElement = document.getElementById('profile-many');
                    balanceElement.textContent = receivedBalance;
                }

                const receivedBalance = result.balance + ' - $';
                const balanceElement = document.getElementById('profile-many');
                balanceElement.textContent = receivedBalance;
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);

        }

    }


}