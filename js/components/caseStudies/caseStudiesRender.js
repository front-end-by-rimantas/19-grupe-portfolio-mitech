class CaseStudiesRender {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.DOM = null;
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
        const HTML = ` ${this.generate()}
    <div class="bubbles">
        <span class="bubble active"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
    </div>`
        this.DOM.innerHTML = HTML;
    }
}
export { CaseStudiesRender }