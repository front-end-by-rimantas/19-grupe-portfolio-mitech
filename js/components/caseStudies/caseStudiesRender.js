class CaseStudiesRender {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.DOM = null;
        this.clones = 2;
        this.bubblesDOM = document.getElementsByClassName('bubble');
        this.activeBubbleIndex = 0;
        this.cardsBlockDOM = null;
        this.showCards = 3;

        this.innerWidthDesk = window.matchMedia("(min-width: 1300px)"); //TIkrina ar ekrano dydis yra daugiau nei 1300px (Atsakymas true arba false)
        this.innerWidthLg = window.matchMedia("(min-width: 1080px) and (max-width: 1300px)"); //TIkrina ar ekrano dydis yra tarp 1080px ir 1300px (Atsakymas true arba false)
        this.innerWidthMd = window.matchMedia("(min-width: 860px) and (max-width: 1080px)"); //TIkrina ar ekrano dydis yra tarp 860 ir 1080px (Atsakymas true arba false)
        this.innerWidthSm = window.matchMedia("(min-width: 680px) and (max-width: 860px)"); //TIkrina ar ekrano dydis yra tarp 680 ir 860 (Atsakymas true arba false)
        this.innerWidthXs = window.matchMedia("(max-width: 680px)"); //TIkrina ar ekrano dydis yra mazesnis nei 680px (Atsakymas true arba false)

        this.init();

    }
    init() {
        if (!this.isValidSelector()) {
            console.error('There is no such selector');
            return;
        }     
        this.render();
        this.addEvents();
    }
    isValidSelector() {
        const DOM = document.querySelector(this.selector)
        if (!DOM) {
            return false
        }
        this.DOM = DOM;
        return true;
    }

    generateControls() {

        if(this.innerWidthDesk.matches){ //Tikrina kiek turime aprasytu korteliu ir skaiciuoja kiek parodyt navigacijos burbulu pvz(Turim 4 aprasytas korteles ir 3 korteles ant ekrano, reiskias reikia atvaizduot 2 burbulus pirmas burbulas trim pirmom kortelem o antras burbulas ketvirtai kortelei)
            const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - this.showCards );
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
        }
        if(this.innerWidthLg.matches){
            const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - this.showCards );
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
        }
        if(this.innerWidthMd.matches){
            const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - 2 );
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
        }
        if(this.innerWidthSm.matches){
            const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - 2 );
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
        }
        if(this.innerWidthXs.matches){
            const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - 1 );
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
        }
        
        


    }
    generate() {

        if(this.isDataValid(this.data)) {
            return
        }
        if(this.innerWidthDesk.matches) { //tikrina ar aprasytas dydis atitinka ekrano dydi ir jeigu true paleidzia metoda
            let itemWidth = 0;
            let HTML ='';
            itemWidth = 100 / (this.data.length + 2 * this.clones);
            const dataCopy = [this.data[2], this.data[3], ...this.data, this.data[0], this.data[1]];
            for (let item of dataCopy) {
                HTML += ` <div class="card" style="width:${itemWidth / this.showCards }%">
                <img src="${item.img}" alt="card1">
                <div class="content">
                    <h4>${item.title}</h4>
                    <u>Cyber security</u>
                    <p>${item.description}
                    </p>
                    <div class="view">View case study
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>                                                                         
            </div>`
            }
            return HTML;
        }
        if(this.innerWidthLg.matches) {
            let itemWidth = 0;
        let HTML ='';
            itemWidth = 100 / (this.data.length + 2 * this.clones);
            const dataCopy = [this.data[0], this.data[3], ...this.data, this.data[0], this.data[1]];
            for (let item of dataCopy) {
                HTML += ` <div class="card" style="width:${itemWidth / this.showCards}%">
                <img src="${item.img}" alt="card1">
                <div class="content">
                    <h4>${item.title}</h4>
                    <u>Cyber security</u>
                    <p>${item.description}
                    </p>
                    <div class="view">View case study
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>                                                                         
            </div>`
            }
            return HTML;
        }

        if( this.innerWidthMd.matches) {
            let itemWidth = 0;
            let HTML ='';
            itemWidth = 100 / (this.data.length + 2 * this.clones);
            const dataCopy = [this.data[0], this.data[3], ...this.data, this.data[0], this.data[1]];
            for (let item of dataCopy) {
                HTML += ` <div class="card" style="width:${itemWidth / 2}%">
                <img src="${item.img}" alt="card1">
                <div class="content">
                    <h4>${item.title}</h4>
                    <u>Cyber security</u>
                    <p>${item.description}
                    </p>
                    <div class="view">View case study
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>                                                                         
            </div>`
            }
            return HTML;
            }
            if( this.innerWidthSm.matches) {
                let itemWidth = 0;
                let HTML ='';
                itemWidth = 100 / (this.data.length + 2 * this.clones);
                const dataCopy = [this.data[0], this.data[3], ...this.data, this.data[0], this.data[1]];
                for (let item of dataCopy) {
                    HTML += ` <div class="card" style="width:${itemWidth / 2}%">
                    <img src="${item.img}" alt="card1">
                    <div class="content">
                        <h4>${item.title}</h4>
                        <u>Cyber security</u>
                        <p>${item.description}
                        </p>
                        <div class="view">View case study
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>                                                                         
                </div>`
                }
                return HTML;
            }
            if( this.innerWidthXs.matches) {
                let itemWidth = 0;
                let HTML ='';
                itemWidth = 100 / (this.data.length + 2 * this.clones);
                const dataCopy = [this.data[0], this.data[3], ...this.data, this.data[0], this.data[1]];
                for (let item of dataCopy) {
                    HTML += ` <div class="card" style="width:${itemWidth}%">
                    <img src="${item.img}" alt="card1">
                    <div class="content">
                        <h4>${item.title}</h4>
                        <u>Cyber security</u>
                        <p>${item.description}
                        </p>
                        <div class="view">View case study
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>                                                                         
                </div>`
                }
                return HTML;
            }
        }
        
    render() {
        if(!this.cards(this.showCards)) {
            return
        }
        if (this.innerWidthDesk.matches) { //tikrina ar aprasytas dydis atitinka ekrano dydi ir jeigu true paleidzia metoda
            const marginLeft = 100 *this.clones;
        const blockWidth = (this.data.length + 2 * this.clones) * 100;  //Skaiciuoja pirmini atsistumima priklausomai nuo to kiek koreliu noriu matyt ir klonu skaiciaus tam, kad klonai nesimatytu pradineje reiksmeje
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft / this.showCards }%"> ${this.generate()}</div>
        ${this.generateControls()}`
        this.DOM.innerHTML = HTML;
        }

        if (this.innerWidthLg.matches) {
            const marginLeft = 100 *this.clones;
        const blockWidth = (this.data.length + 2 * this.clones) * 100;
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft / this.showCards }%"> ${this.generate()}</div>
        ${this.generateControls()}`
        this.DOM.innerHTML = HTML;
        }

        if( this.innerWidthMd.matches) {
            const marginLeft = 100 *this.clones;
            const blockWidth = (this.data.length + 2 * this.clones) * 100;
            const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft / 2}%"> ${this.generate()}</div>
            ${this.generateControls()}`
            this.DOM.innerHTML = HTML;
        }

        if( this.innerWidthSm.matches) {
            const marginLeft = 100 *this.clones;
            const blockWidth = (this.data.length + 2 * this.clones) * 100;
            const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft / 2 }%"> ${this.generate()}</div>
            ${this.generateControls()}`
            this.DOM.innerHTML = HTML;
        }
        if (this.innerWidthXs.matches) {
            const marginLeft = 100 *this.clones;
        const blockWidth = (this.data.length + 2 * this.clones) * 100;
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft}%"> ${this.generate()}</div>
        ${this.generateControls()}`
        this.DOM.innerHTML = HTML;
        }
    }

    clickBubble(bubbleIndex) {

        if(this.innerWidthDesk.matches){ //tikrina ar aprasytas dydis atitinka ekrano dydi ir jeigu true paleidzia metoda\
        const scroll = -100 / this.showCards * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')
        }

        if(this.innerWidthLg.matches){
            const scroll = -100 / this.showCards * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')
        }

        if( this.innerWidthMd.matches) {
            const scroll = -100 / 2 * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')
        }
        if( this.innerWidthSm.matches) {
            const scroll = -100 / 2 * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')
        }
        if( this.innerWidthXs.matches) {
            const scroll = -100 * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')
        }

        
            
    
}

    addEvents() {
        for (let i = 0; i < this.bubblesDOM.length; i++) {
            const bubble = this.bubblesDOM[i]
            bubble.addEventListener('click', () => {
                this.clickBubble(i)
            })
        }

    }

    cards(number) {

            
        if(typeof number !== 'number') {
            console.error('Please enter number to show cards');
            return false;
        }  
        if(isNaN(number)){
            console.error('Please enter number to show cards');
            return false;
            
        } 
        if(!Number.isInteger(number)){
            console.error("To show cards please enter whole number");
            
            
        }
        if(number > 3) {
            console.error("You can't show more than 3 cards at the same time");
            this.showCards = 3;
            return true
        }  
        else {
            return true
        }
    }

    isDataValid(data) {
        if(!Array.isArray(data) || data.length === 0) {
            console.error('Provided data is not array type or empty');
        }
    }


    
}
export { CaseStudiesRender }