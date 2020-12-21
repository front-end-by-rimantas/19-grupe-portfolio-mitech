class Testimonials {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.init();
    }
    
    init() {
        if (!this.isValidSelector()) {
            return;
        };
        this.render();
        /* this.addEvents(); */
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    generateTestimonials() {
        let HTML = '';
        const itemWidth = 100 / this.data.length;
        const dataCopy = [...this.data];

        for (let testimonial of dataCopy) {
            /* if (!this.isValidTestimonial(testimonial)) {
                continue;
            } */


            HTML += `<div class="card">
                        <div class="box">
                            <h6>${testimonial.descriptionOne}</h6>
                            <span class="testimo-text">${testimonial.descriptionTwo}</span>
                            <div class="author-info">
                                <img src="../${this.imgFolder}${testimonial.img}" alt="${testimonial.name} image">
                                <div class="author-title"> 
                                    <h6 class=author-name>${testimonial.name}</h6>
                                    <p class="author-specialty">${testimonial.duties}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
        return HTML;
    }

    render() {
        const HTML = `<div class="testimonialslide" >              
                        <div class="testimcards">
                            ${this.generateTestimonials()}
                        </div>
                    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Testimonials }