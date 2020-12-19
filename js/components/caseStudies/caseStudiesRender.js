class CaseStudiesRender {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.DOM = null;
        this.clones = 2;

        this.activeBubbleIndex = 0;
        this.bubblesDOM = null;
        this.init()
    }
    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
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
        console.log(cardCount);

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
        const blockWidth = (this.data.length + 2 * this.clones) * 100;
        const HTML = `<div class="cards-block"style="width:${blockWidth}%; margin-left: -${this.clones + 65}%"> ${this.generate()}</div>
        ${this.generateControls()}`

        this.DOM.innerHTML = HTML;
    }
}
export { CaseStudiesRender }