class FactWrapper {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;

        this.DOM = null;
        this.countersDOMs = null;

        this.animationDuration = 5;
        this.animationFPS = 30;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        let HTML = '';

        for (let fact of this.data) {
            HTML += `<div class="facts">
                        <span class="upper" >${fact.description}</span>
                        <div class="numbers">0</div>
                        <span class="bottom">${fact.title}</span>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
        this.countersDOMs = this.DOM.querySelectorAll('.facts');
    }

    counterAnimation(counterIndex) {
        let count = 0;
        
        const countResolution = Math.round(this.data[counterIndex].count / 45); // makes all animations to take 1.5s(45 / 30fps)
        const numberDOM = this.countersDOMs[counterIndex].querySelector('.numbers');

        const timer = setInterval(() => {
            count += countResolution;
            numberDOM.innerText = count;

            if (this.data[counterIndex].count <= count) {
                clearInterval(timer);
                numberDOM.innerText = this.data[counterIndex].count;
            }
        }, 1000 / this.animationFPS)
    }

    addEvents() {

        addEventListener('scroll', () => {
            const windowBottom = scrollY + innerHeight;
            let counterBottom = 0;

            for (let i = 0; i < this.countersDOMs.length; i++) {
                if (this.data[i].animated) {
                    continue;
                }

                const counter = this.countersDOMs[i];
                counterBottom = counter.clientHeight + counter.offsetTop - 120; //subtract some area from container bottom to start animation slightly earlier

                if (counterBottom < windowBottom) {
                    this.data[i].animated = true;
                    this.counterAnimation(i);
                }
            }
        })
    }
}

export { FactWrapper }