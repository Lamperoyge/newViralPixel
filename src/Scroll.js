export default class addScrolling {
    constructor() {
        this.navbarContact = document.getElementById('contactUsButton');
        this.navbarFAQ = document.getElementById('faqButton');
        this.whatWeDo = document.getElementById('whatWeDoButton')
        this.talkToUs = document.getElementById('talkToUsBanner');
        this.arrowState = false;
    }
    addScrollIntoView(nav, comp) {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            // document.getElementById(comp).scrollIntoView({block : 'start', behavior: 'smooth'})
            window.scrollTo({
                top: document.querySelector(`#${comp}`).offsetTop - 120,
                behavior : 'smooth'
            })
        })
        document.querySelector('.nav-02__logo_img').addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
    init() {
        document.querySelector('.open-nav-menu').addEventListener('click', () => {
            if(this.arrowState === false) {
                document.querySelector('.js-menu').style.left = "0%";
                document.querySelector('.fa').style.transform = "rotate(180deg)";
                this.arrowState = true
            }
            else {
                document.querySelector('.js-menu').style.left = "100%";
                document.querySelector('.fa').style.transform = "rotate(0deg)";
                this.arrowState = false
            }
        })
        this.addScrollIntoView(this.talkToUs, 'contactUsTitle')
        this.addScrollIntoView(this.navbarContact, 'contactUsTitle')
        this.addScrollIntoView(this.navbarFAQ, 'faqHeading')
        this.addScrollIntoView(this.whatWeDo, 'whatWeDoTitle')
    }
}

