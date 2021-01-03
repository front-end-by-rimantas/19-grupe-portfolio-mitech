class BrandLogo {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.originalCount = parameters.data.lenght; //how many orignals
        this.cloneCount = parameters.data.data.length * 2; //how many clones
        this.itemCount = parameters.data.data.length * 6; //how many logo in total
        this.itemView = 6; //how many logo visible

        this.containerDOM = null;
        this.sliderDOM = null;
        this.testimonialsDOMs = null;

        this.init();
    }
    // init() {
    //     if (!this.isValidSelector()) {
    //         return;
    //     };
    //     this.cardViewCount();
    //     this.render();
    // }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

//  //changes how many testimonial cards are going to be visisble depending on screen width
//  cardViewCount() {
//     if (window.innerWidth > 1300) {
//         this.cardView = 3;
//     } else if (window.innerWidth < 859) {
//         this.cardView = 1;
//     } else {
//         this.cardView = 2;
//     }
// }

// generates clone array which is gonna be added before original array
generateBeforeCloneArray() {
    const cloneBeforeCount = Math.floor(this.cloneCount / 2);
    let beforeArray = [];
    for ( let i = this.originalCount - cloneBeforeCount; i < this.originalCount ; i++) {
        beforeArray.push(this.data[i])
    };
    return beforeArray;
}

    generateBrandLogo() {
        let HTML = '';
        const itemWidth = 100 / this.itemCount;
        const wholeCount = [...this.generateBeforeCloneArray(), ...this.data, ...this.generateAfterCloneArray()];
        for (let brandLogo of wholeCount) {
            HTML +=`<div class="brand square">
            <a href="#">
                <img class="brand-logo" src="../img/brand-slider/logo-1.png" alt="logo-1">
                <img class="brand-logo-hover" src="./img/brand-slider/logo-1-hover.png" alt="logo-1">
            </a>
        </div>`
    }




}

export { BrandLogo }