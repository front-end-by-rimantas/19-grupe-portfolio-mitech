class Testimonials {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.count = parameters.data.data.length;
        this.clones = 5; //how many clones

        this.width = 3; //how many testimonials visible

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
        this.count += this.clones;
        const itemWidth = 100 / this.data.length;
        const dataCopy = [this.data[1], this.data[2], this.data[3], ...this.data, this.data[0], this.data[1]];

        for (let testimonial of dataCopy) {
            /* if (!this.isValidTestimonial(testimonial)) {
                continue;
            } */


            HTML += `<div class="card" style="width: ${ 100 / this.width }%">
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
        this.count += this.clones;
        console.log(this.count);
        const HTML =    `<div class="testimonialslide">              
                            <div class="testimcards" style="width: ${ 100 * this.count / this.width }%; margin-left: ${ -100 / this.width * 2}%">
                                ${this.generateTestimonials()}
                            </div>
                        </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Testimonials }