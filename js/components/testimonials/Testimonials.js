class Testimonials {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.originalCount = parameters.data.data.length;
        this.cloneCount = 5; //how many clones
        this.cardView = 3; //how many testimonials visible

        this.animationDuration = 600;

        this.testimcardsDOM = null;
        this.cardDOM = null;
        this.bubblesDOM = null;

        this.activeBubbleIndex = 0;

        this.isAnimating = false;

        this.init();
    }
    
    init() {
        if (!this.isValidSelector()) {
            return;
        };
        this.cardViewCount();
        this.render();
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
        let itemWidth = 100 / this.cardView;
        const dataCopy = [...this.generateBeforeCloneArray(), ...this.data, ...this.generateAfterCloneArray()];
        for (let testimonial of dataCopy) {
            
            HTML += `<div class="testimonialcard" style="width: ${itemWidth}%">
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
        this.cardDOM = document.querySelectorAll('.testimonialcard');
        this.bubblesDOMs = document.querySelectorAll('#testimonials .bubble');
    }

    //change width of elements depeneding on screen width
    widthAdjust() {
        window.addEventListener('resize', () => {
            this.cardViewCount();
            const itemCount = this.originalCount + this.cloneCount;
            let containerWidth = 100 * itemCount / this.cardView;
            let itemWidth = 100 / this.cardView;
            let positionAdjust = 1.5 + this.activeBubbleIndex - (this.cardView / 2);
            let firstOriginalPosition = -containerWidth / itemCount * (this.generateAfterCloneArray().length + positionAdjust);
            this.testimcardsDOM.style.width = `${containerWidth}%`;
            this.testimcardsDOM.style.marginLeft = `${firstOriginalPosition}%`;
            for (let i = 0; i < this.cardDOM.length; i++) {
                this.cardDOM[i].style.width = `${itemWidth}%`
            }
        })
    }

    clickBubble(bubbleIndex) {
        for (let i = 0; i < this.bubblesDOMs.length; i++) {
            const bubble = this.bubblesDOMs[i];
            if (i != bubbleIndex) {
                bubble.classList.remove('active')
            }
            if (i === bubbleIndex) {
                bubble.classList.add('active')
            }
        }
        this.activeBubbleIndex = bubbleIndex;
        const itemCount = this.originalCount + this.cloneCount;
        let containerWidth = 100 * itemCount / this.cardView;
        let positionAdjust = 1.5 + this.activeBubbleIndex - (this.cardView / 2);
        let firstOriginalPosition = -containerWidth / itemCount * (this.generateAfterCloneArray().length + positionAdjust);
        this.testimcardsDOM.style.marginLeft = `${firstOriginalPosition}%`;
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