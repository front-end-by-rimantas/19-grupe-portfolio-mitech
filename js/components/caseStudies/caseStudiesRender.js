class CaseStudiesRender {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.DOM = null;
        this.clones = 2;
        this.bubblesDOM = document.getElementsByClassName('bubble');
        this.activeBubbleIndex = 0;
        this.cardsBlockDOM = null;
        this.innerWidthLg = window.matchMedia("(min-width: 1080px) and (max-width: 1300px)"); //Tkrina ar ekran dydis yra tarp 1080 ir 1300px (Atsakymas true arba false)
        this.innerWidthMed = window.matchMedia("(min-width: 860px) and (max-width: 1080px)"); //TIkrina ar ekrano dydis yra tarp 860 ir 1080px (Atsakymas true arba false)
        console.log(this.innerWidthLg.matches);
        this.init();

    }
    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.addEvents();
        this.generate();
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
        const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - 1);
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
    }
    generate() {
        let itemWidth = 0;
        let HTML =''
        if(this.innerWidthMed.matches == true) { //Jeigu ekranas yra mazesnis nei 1080px
            itemWidth = 46.8 / (this.data.length + 2 * this.clones);
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
        
        if(this.innerWidthLg.matches == true){ //jeigu ekranas didesnis nei 1080 px
            itemWidth = 31 / (this.data.length + 2 * this.clones);
             const dataCopy = [this.data[2], this.data[3], ...this.data, this.data[0], this.data[1]];
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
        console.log(itemWidth);
    
    }


    render() {
        if(this.innerWidthMed.matches == true) {
            const marginLeft = 100;
        const blockWidth = (this.data.length + 2 * this.clones) * 100;
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft}%"> ${this.generate()}</div>
        ${this.generateControls()}`

        this.DOM.innerHTML = HTML;
        }
        if(this.innerWidthLg.matches == true) {
            const marginLeft = 66 + this.clones;
        const blockWidth = (this.data.length + 2 * this.clones) * 100;
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft}%"> ${this.generate()}</div>
        ${this.generateControls()}`

        this.DOM.innerHTML = HTML;
        }

        


    }

    clickBubble(bubbleIndex) {
        if(this.innerWidthMed.matches == true){
            const scroll = -50 * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')
        }
        if(this.innerWidthLg.matches == true){
            const scroll = -33.6 * (bubbleIndex + this.clones) + '%';
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


    
}
export { CaseStudiesRender }