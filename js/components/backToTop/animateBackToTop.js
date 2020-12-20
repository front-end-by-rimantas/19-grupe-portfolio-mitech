function animateBackToTop() {
    const backToTop = document.querySelector('.backtotop > a')
    addEventListener('wheel', event => {
        console.log(window.scrollY);
        if (window.scrollY < window.innerHeight / 2) /* back to top never appears while at the top of website */ {
            backToTop.classList.add('hidden')
        } else {
            if (event.deltaY > 0) /* while scrolling down */ {
                backToTop.classList.add('hidden')
            }
            if (event.deltaY < 0) /* while scrolling up */ {
                backToTop.classList.remove('hidden')
            }
        }
    })
}


export { animateBackToTop }