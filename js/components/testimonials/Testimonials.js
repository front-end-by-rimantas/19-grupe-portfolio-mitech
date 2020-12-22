class Testimonials {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.originalCount = parameters.data.data.length;
        this.cloneCount = 5; //how many clones
        this.itemView = 3; //how many testimonials visible

        this.testimcardsDOM = null;

        this.init();
    }
    
    init() {
        if (!this.isValidSelector()) {
            return;
        };
        this.render();
        this.itemViewAdjust();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
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
        let itemWidth = 100 / this.itemView;
        const dataCopy = [...this.generateBeforeCloneArray(), ...this.data, ...this.generateAfterCloneArray()];
        for (let testimonial of dataCopy) {
            
            HTML += `<div class="card" style="width: ${itemWidth}%">
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
        let itemWidth = 100 * itemCount / this.itemView;
        // centers first original testimonial
        let positionAdjust = 1.5 - (this.itemView / 2);
        const firstOriginalPosition = -itemWidth / itemCount * (this.generateAfterCloneArray().length + positionAdjust);
        const HTML =    `<div class="testimonialslide">              
                            <div class="testimcards" style="width: ${itemWidth}%; margin-left: ${firstOriginalPosition}%">
                                ${this.generateTestimonials()}
                            </div>
                        </div>`;

        this.DOM.innerHTML = HTML;
        this.testimcardsDOM = document.querySelector('.testimcards');
        console.log(this.testimcardsDOM);
    }

    itemViewAdjust() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1300) {
                this.itemView = 3;
            } else if (window.innerWidth < 859) {
                this.itemView = 1;
            } else {
                this.itemView = 2;
            }
            const itemCount = this.originalCount + this.cloneCount;
            this.testimcardsDOM.style.width = `${100 * itemCount / this.itemView}%`;
            console.log(this.testimcardsDOM.style.width);
        })
    }

}

export { Testimonials }