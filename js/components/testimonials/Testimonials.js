class Testimonials {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.originalCount = parameters.data.data.length;
        this.cloneCount = 5; //how many clones
        this.cardView = 3; //how many testimonials visible

        this.testimcardsDOM = null;
        this.cardDOMs = null;
        this.bubblesDOMs = null;

        this.activeBubbleIndex = 0;

        this.init();
    }
    
    init() {
        if (!this.isValidSelector()) {
            return;
        };
        this.cardViewCount();
        this.render();
        this.cardDOMs[this.generateBeforeCloneArray().length].classList.remove('transparent'); // makes only active 
        this.widthAdjust();
        this.clickBubbleEvent();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    //changes how many testimonial cards are going to be visisble depending on screen width
    cardViewCount() {
        if (window.innerWidth > 1300) {
            this.cardView = 3;
        } else if (window.innerWidth < 859) {
            this.cardView = 1;
        } else {
            this.cardView = 2;
        }
    }

    generateBubbles() {
        let HTML = '<div class="bubble active"></div>';
        for (let i = 1; i < this.originalCount; i++) {
            HTML += `<div class="bubble"></div>`;
        }
        return HTML;
    }

    // generates clone array which is gonna be added before original array
    generateBeforeCloneArray() {
        const cloneBeforeCount = Math.ceil(this.cloneCount / 2);
        let beforeArray = [];
        for ( let i = this.originalCount - cloneBeforeCount; i < this.originalCount ; i++) {
            beforeArray.push(this.data[i])
        };
        return beforeArray;
    }

    // generates clone array which is gonna be added after original array
    generateAfterCloneArray() {
        const cloneAfterCount = Math.floor(this.cloneCount / 2);
        let afterArray = [];
        for ( let i = 0; i < cloneAfterCount ; i++) {
            afterArray.push(this.data[i])
        };
        return afterArray;
    }


    generateTestimonials() {
        let HTML = '';
        const itemCount = this.originalCount + this.cloneCount;
        let itemWidth = 100 / itemCount;
        const dataCopy = [...this.generateBeforeCloneArray(), ...this.data, ...this.generateAfterCloneArray()];
        for (let testimonial of dataCopy) {
            
            HTML += `<div class="testimonialcard transparent" style="width: ${itemWidth}%">
                        <div class="box">
                            <h4>${testimonial.descriptionOne}</h4>
                            <p class="testimo-text">${testimonial.descriptionTwo}</p>
                            <div class="author-info">
                                <img src="../${this.imgFolder}${testimonial.img}" alt="${testimonial.name} image">
                                <div class="author-title"> 
                                    <h4 class=author-name>${testimonial.name}</h4>
                                    <p class="author-specialty"> /  ${testimonial.duties}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
        return HTML;
    }

    render() {
        const itemCount = this.originalCount + this.cloneCount;
        const itemWidth = 100 * itemCount / this.cardView;
        // makes first original testimonial in the center
        const positionAdjust = 1.5 - (this.cardView / 2);
        const firstOriginalPosition = -itemWidth / itemCount * (this.generateAfterCloneArray().length + positionAdjust);
        const HTML =    `<div class="testimonialslide">              
                            <div class="testimcards" style="width: ${itemWidth}%; margin-left: ${firstOriginalPosition}%">
                                ${this.generateTestimonials()}
                            </div>
                        </div>
                        <div class="bubblerow">
                            ${this.generateBubbles()}
                        </div>`;

        this.DOM.innerHTML = HTML;
        this.testimcardsDOM = document.querySelector('.testimcards');
        this.cardDOMs = document.querySelectorAll('.testimonialcard');
        this.bubblesDOMs = document.querySelectorAll('#testimonials .bubble');
    }

    //change width of elements depeneding on screen width
    widthAdjust() {
        window.addEventListener('resize', () => {
            this.cardViewCount();
            const itemCount = this.originalCount + this.cloneCount;
            let containerWidth = 100 * itemCount / this.cardView;
            let positionAdjust = 1.5 + this.activeBubbleIndex - (this.cardView / 2);
            let firstOriginalPosition = -containerWidth / itemCount * (this.generateAfterCloneArray().length + positionAdjust);
            this.testimcardsDOM.style.width = `${containerWidth}%`;
            this.testimcardsDOM.style.marginLeft = `${firstOriginalPosition}%`;
        })
    }

    clickBubble(bubbleIndex) {
        const itemCount = this.originalCount + this.cloneCount;
        // activates/deactivates bubble
        for (let i = 0; i < this.bubblesDOMs.length; i++) {
            const bubble = this.bubblesDOMs[i];
            if (i != bubbleIndex) {
                bubble.classList.remove('active')
            }
            if (i === bubbleIndex) {
                bubble.classList.add('active')
            }
        }

        // changes transparencys of active/non-active testimonial
        const testimonialIndex = bubbleIndex + this.generateBeforeCloneArray().length;
        for (let i = 0; i < itemCount ; i++) {
            const testimonial = this.cardDOMs[i];
            if (i != testimonialIndex) {
                testimonial.classList.add('transparent')
            }
            if (i === testimonialIndex) {
                testimonial.classList.remove('transparent')
            }
        }

        this.activeBubbleIndex = bubbleIndex;
        // slides testimonials
        let containerWidth = 100 * itemCount / this.cardView;
        let positionAdjust = 1.5 + this.activeBubbleIndex - (this.cardView / 2);
        let activeTestimonialPosition = -containerWidth / itemCount * (this.generateAfterCloneArray().length + positionAdjust);
        this.testimcardsDOM.style.marginLeft = `${activeTestimonialPosition}%`;
    }

    clickBubbleEvent() {
        for (let i = 0; i < this.bubblesDOMs.length; i++) {
            const bubble = this.bubblesDOMs[i];
            bubble.addEventListener('click', () => {
                this.clickBubble(i);
            })
        }
    }

}

export { Testimonials }