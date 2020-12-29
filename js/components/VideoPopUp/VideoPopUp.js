class VideoPopUp {
    constructor(parameters){
        this.selector = parameters.selector;
        this.data = parameters.data.data;
        this.PlayDOM = null;
        this.DOM = null;
        this.closeVideo = null;
        this.toolBarDOM = null;
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
        const HTML = `<div class="toolbar hidden">
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
        // Atidaro paslepta DIV kuomet paspaudziamas video play mygtukas
        this.PlayDOM.addEventListener('click', () => {
            this.DOM.classList.remove('hidden')

        })
        const closeDOM = document.querySelector('.toolbar > span .fa-times')
        this.closeVideo = closeDOM;
        //uzdaro video langa kuomet paspaudziamas X
        this.closeVideo.addEventListener('click', ()=>{
            this.DOM.classList.add('hidden')
        })
        // Isjungia video langa kuomet paspaustaqs mygtukas escape
        addEventListener('keyup',({ key })=> {
            if(key === 'Escape'){
                this.DOM.classList.add('hidden')
                
            }
        })

        const toolbar = document.querySelector('.pop-up > .toolbar')
        this.toolBarDOM = toolbar;
        addEventListener('mousemove', () => {
            // nieko nedaro, kol neatidarytas video langas
                if (this.DOM.classList.contains('hidden')) {
                    return
                } else {
            // parodo ikonas vos tik atsidarius video langui ir sujudejus cursoriui
                    if (toolbar.classList.contains('hidden')) {
                        toolbar.classList.remove('hidden');
                    } else {
            // jei ikonos matomos inicijuoja timeri, kad jos dingtu uz 5 sekundziu
                        const timer =
                            setTimeout(() => {
                                toolbar.classList.add('hidden')
                            }, 5000)
            // jei ikonos matomos, bet pele vis dar juda timeris cancel'inamas ir inicijuojamas is naujo del auksciau buvusio eventListenerio
                        addEventListener('mousemove', ()=> {
                            if (!toolbar.classList.contains('hidden')) {
                                clearTimeout(timer);
                            }
                        })
                    }
                }
            })
        }
    }

export {VideoPopUp}