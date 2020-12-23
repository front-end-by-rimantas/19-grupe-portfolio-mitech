class VideoPopUp {
    constructor(parameters){
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.PlayDOM = null;
        this.DOM = null;
        this.closeVideo = null;
        this.init();
    }



    isValidSelector(){
        const DOM = document.querySelector('.pop-up')
        if(!DOM) {
            console.error("Selector is not valid");
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    init(){
        if(!this.isValidSelector()){
        return false;
        }
        this.render();
        this.addEvents();
    }

    generate(){
        let HTML = '';
        for(let item of this.data){
            HTML+= `<span><i class="fa fa-${item.icon}" aria-hidden="true"></i></span>`
        }
        return HTML;
    }

    render(){
        const HTML = `<div class="toolbar">
        ${this.generate()}
        <div class="counter">1/1</div>
    </div>
    <div class="video-content">
        <iframe class="video-object" src="//www.youtube.com/embed/9No-FiEInLA?wmode=opaque&autoplay=1&enablejsapi=1" frameborder="0" allowfullscreen></iframe>
    </div>`
    this.DOM.innerHTML = HTML

    }

    addEvents(){
        const playButtonDOM = document.querySelector('.video-play > a')
        this.PlayDOM = playButtonDOM;
        this.PlayDOM.addEventListener('click', () => {
            this.DOM.classList.remove('hidden')

        })
        const closeDOM = document.querySelector('.toolbar > span .fa-times')
        this.closeVideo = closeDOM;
        this.closeVideo.addEventListener('click', ()=>{
            this.DOM.classList.add('hidden')
        })
    }

}

export {VideoPopUp}