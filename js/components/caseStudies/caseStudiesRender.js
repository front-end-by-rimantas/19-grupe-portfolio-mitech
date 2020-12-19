class CaseStudiesRender {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.DOM = null;
        this.clones = 2;
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
        for (let item of this.data) {
            HTML += ` <div class="card">
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

        const HTML = `<div class="cards-block"> ${this.generate()}</div>
        ${this.generateControls()}`

        this.DOM.innerHTML = HTML;
    }
}
export { CaseStudiesRender }