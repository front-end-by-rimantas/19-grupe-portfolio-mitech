class CaseStudiesRender {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.DOM = null;
        this.clones = 2;
        this.bubblesDOM = document.getElementsByClassName('bubble');
        this.activeBubbleIndex = 0;
        this.cardsBlockDOM = null;
        this.init();

    }
    init() {
        if (!this.isValidSelector()) {
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
        const cardCount = this.data.length;
        let bubbleHTML = '<div class="bubble active"></div>';
        bubbleHTML += `<div class="bubble"></div>`.repeat(cardCount - 1);
        let HTML = `<div class="bubbles">${bubbleHTML}
        </div>`
        return HTML;
    }
    generate() {
        let HTML = '';
        const itemWidth = 31 / (this.data.length + 2 * this.clones);

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


    render() {
        const marginLeft = this.clones + 66
        const blockWidth = (this.data.length + 2 * this.clones) * 100;
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left:-${marginLeft}%"> ${this.generate()}</div>
        ${this.generateControls()}`

        this.DOM.innerHTML = HTML;


    }

    clickBubble(bubbleIndex) {
        const scroll = -33 * (bubbleIndex + this.clones) + '%';
        this.cardsBlockDOM = this.DOM.querySelector('.cards-block');
        const bubble = this.bubblesDOM[bubbleIndex];
        this.cardsBlockDOM.style.marginLeft = scroll
        this.bubblesDOM[this.activeBubbleIndex].classList.remove('active');
        this.activeBubbleIndex = bubbleIndex;
        bubble.classList.add('active')

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