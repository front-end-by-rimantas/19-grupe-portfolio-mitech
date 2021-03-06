class Testimonials {
    constructor(parameters) {
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.imgFolder = parameters.data.imgFolder;

        this.originalCount = parameters.data.data.length; //how many orignals
        this.cloneCount = parameters.data.data.length * 2; //how many clones
        this.itemCount = parameters.data.data.length * 3; //how many testimonials in total
        this.itemView = 3; //how many testimonials visible

        this.containerDOM = null;
        this.sliderDOM = null;
        this.testimonialsDOMs = null;
        this.bubblesDOMs = null;

        this.sliderPosition = 0;

        this.activeBubbleIndex = 0;

        this.dragState = false; //true, kai pradedama dragginti
        this.sliderMargin = 0;

        this.init();
    }
    
    init() {
        if (!this.isValidSelector()) {
            return;
        };
        this.cardViewCount();
        this.render();
        this.testimonialsDOMs[this.generateBeforeCloneArray().length].classList.remove('transparent'); // makes only active 
        this.widthAdjust();
        this.clickBubbleEvent();
        this.drag();
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
        let HTML = '<div class="testibubble active"></div>';
        for (let i = 1; i < this.originalCount; i++) {
            HTML += `<div class="testibubble"></div>`;
        }
        return HTML;
    }

    // generates clone array which is gonna be added before original array
    generateBeforeCloneArray() {
        const cloneBeforeCount = Math.floor(this.cloneCount / 2);
        let beforeArray = [];
        for ( let i = this.originalCount - cloneBeforeCount; i < this.originalCount ; i++) {
            beforeArray.push(this.data[i])
        };
        return beforeArray;
    }

    // generates clone array which is gonna be added after original array
    generateAfterCloneArray() {
        const cloneAfterCount = Math.ceil(this.cloneCount / 2);
        let afterArray = [];
        for ( let i = 0; i < cloneAfterCount ; i++) {
            afterArray.push(this.data[i])
        };
        return afterArray;
    }


    generateTestimonials() {
        let HTML = '';
        const itemWidth = 100 / this.itemCount;
        const wholeCount = [...this.generateBeforeCloneArray(), ...this.data, ...this.generateAfterCloneArray()];
        for (let testimonial of wholeCount) {
            
            HTML += `<div class="testimonialcard transparent" style="width: ${itemWidth}%">
                        <div class="box">
                            <h4>${testimonial.descriptionOne}</h4>
                            <p class="testimo-text">${testimonial.descriptionTwo}</p>
                            <div class="author-info">
                                <img src="../${this.imgFolder}${testimonial.img}" alt="${testimonial.name}" draggable="false">
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
        const itemWidth = 100 * this.itemCount / this.cardView;
        // makes first original testimonial in the center
        const positionAdjust = 0.5 - (this.cardView / 2);
        const firstOriginalPosition = -itemWidth / this.itemCount * (this.generateBeforeCloneArray().length + positionAdjust);
        const HTML =    `<div class="testimonialslide">              
                            <div class="testimcards" style="width: ${itemWidth}%; margin-left: ${firstOriginalPosition}%">
                                ${this.generateTestimonials()}
                            </div>
                        </div>
                        <div class="bubblerow">
                            ${this.generateBubbles()}
                        </div>`;

        this.DOM.innerHTML = HTML;
        this.containerDOM = document.querySelector('.testimonialslide');
        this.sliderDOM = document.querySelector('.testimcards');
        this.testimonialsDOMs = document.querySelectorAll('.testimonialcard');
        this.bubblesDOMs = document.querySelectorAll('#testimonials .testibubble');
        this.sliderPosition = parseFloat(this.sliderDOM.style.marginLeft);
    }

    positioning() {
        let containerWidth = 100 * this.itemCount / this.cardView;
        let positionAdjust = 0.5 + this.activeBubbleIndex - (this.cardView / 2);
        let firstOriginalPosition = -containerWidth / this.itemCount * (this.generateBeforeCloneArray().length + positionAdjust);
        this.sliderDOM.style.width = `${containerWidth}%`;
        this.sliderDOM.style.marginLeft = `${firstOriginalPosition}%`;
        this.sliderPosition = parseFloat(this.sliderDOM.style.marginLeft);

        this.sliderMargin = parseFloat(this.sliderDOM.style.marginLeft);
    }

    //change width of elements depeneding on screen width
    widthAdjust() {
        window.addEventListener('resize', () => {
            this.cardViewCount();
            this.positioning();
        })
    }

    //changes element with bubble click
    clickBubble(bubbleIndex) {
        this.activeBubbleIndex = bubbleIndex;
        this.bubbleVisual(bubbleIndex)
        this.testimonialVisual(bubbleIndex)
        this.positioning();
    }

    //recognises which bubble was pressed
    clickBubbleEvent() {
        for (let i = 0; i < this.bubblesDOMs.length; i++) {
            const bubble = this.bubblesDOMs[i];
            bubble.addEventListener('click', () => {
                this.clickBubble(i);
            })
        }
    }
     
    // activates/deactivates bubble
    bubbleVisual(index) {
        for (let i = 0; i < this.bubblesDOMs.length; i++) {
            const bubble = this.bubblesDOMs[i];
            if (i != index) {
                bubble.classList.remove('active')
            }
            if (i === index) {
                bubble.classList.add('active')
            }
        }
    }
    // changes transparencys of active/non-active testimonial
    testimonialVisual(index) {
        const testimonialIndex = index + this.generateBeforeCloneArray().length;
        for (let i = 0; i < this.itemCount ; i++) {
            const testimonial = this.testimonialsDOMs[i];
            if (i != testimonialIndex) {
                testimonial.classList.add('transparent')
            }
            if (i === testimonialIndex) {
                testimonial.classList.remove('transparent')
            }
        }
    }

    // dragging section
    drag() {
        const slider = this.sliderDOM;
        let pressPosition = 0;
        let offset = 0;
        this.sliderMargin = parseFloat(slider.style.marginLeft);

        // recognises which area of slider is pressed with mouse press
        slider.addEventListener('mousedown', e => {
            this.dragState = true;
            slider.classList.add('nonanimated');
            pressPosition = e.clientX;
            }
        );

        // changes margin-left of slider so slider is dragged with mouse move
        slider.addEventListener('mousemove', e => {
            if (this.dragState === true) {
                offset = (pressPosition - e.clientX) / this.containerDOM.offsetWidth;
                let tempMovement = this.sliderMargin - (offset * 100);
                slider.style.marginLeft = `${tempMovement}%`;
            } else {
                return
            }
        });
        
        // when mouse is released rearranges position of current bubble and testimonial
        slider.addEventListener('mouseup', () => {
            if (!this.dragState) {
                return
            }
            let teleportation = false;
            this.dragState = false;

            this.activeBubbleIndex += Math.round(this.cardView * offset);
            
            slider.classList.remove('nonanimated');
            this.positioning();
            this.testimonialVisual(this.activeBubbleIndex);
        
            if (this.activeBubbleIndex < 0) {
                teleportation = true;
                this.activeBubbleIndex += this.originalCount;
                this.bubbleVisual(this.activeBubbleIndex);
            }
            if (this.activeBubbleIndex >= this.originalCount) {
                teleportation = true;
                this.activeBubbleIndex -= this.originalCount;
                this.bubbleVisual(this.activeBubbleIndex);
            }

            this.bubbleVisual(this.activeBubbleIndex);

            slider.addEventListener('transitionend', e => {
                    
                if (teleportation && e.target) {
                    slider.classList.add('nonanimated');
                    this.testimonialVisual(this.activeBubbleIndex);
                    this.positioning();
                    this.sliderMargin = parseFloat(slider.style.marginLeft);
                    offset = 0;
                    setTimeout(() => {
                        slider.classList.remove('nonanimated');
                    }, 50);
                }

            })
                        
            offset = 0;
            this.sliderMargin = parseFloat(slider.style.marginLeft);
        });

        // when mouse goes outside slider area rearranges position of current bubble and testimonial (clone of mouseup event)
        slider.addEventListener('mouseleave', () => {
            if (!this.dragState) {
                return
            }
            let teleportation = false;
            this.dragState = false;

            this.activeBubbleIndex += Math.round(this.cardView * offset);
            
            slider.classList.remove('nonanimated');
            this.positioning();
            this.testimonialVisual(this.activeBubbleIndex);
        
            if (this.activeBubbleIndex < 0) {
                teleportation = true;
                this.activeBubbleIndex += this.originalCount;
                this.bubbleVisual(this.activeBubbleIndex);
            }
            if (this.activeBubbleIndex >= this.originalCount) {
                teleportation = true;
                this.activeBubbleIndex -= this.originalCount;
                this.bubbleVisual(this.activeBubbleIndex);
            }

            this.bubbleVisual(this.activeBubbleIndex);

            slider.addEventListener('transitionend', e => {
                    
                if (teleportation && e.target) {
                    slider.classList.add('nonanimated');
                    this.testimonialVisual(this.activeBubbleIndex);
                    this.positioning();
                    this.sliderMargin = parseFloat(slider.style.marginLeft);
                    offset = 0;
                    setTimeout(() => {
                        slider.classList.remove('nonanimated');
                    }, 50);
                }

            });
                        
            offset = 0;
            this.sliderMargin = parseFloat(slider.style.marginLeft);
        })

    }

}

export { Testimonials }