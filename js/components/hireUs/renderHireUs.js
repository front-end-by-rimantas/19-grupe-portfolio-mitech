/**
 * Hire-Us sekcija generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sarasas objektu aprasanciu kiekviena Hire Us skilti
 * @returns {*}
 */
function renderHireUs(selector, data) {
    // input validation
    /* if (!isValidInput(selector, data)) {
        return false;
    } */ /* no validation yet */

    // logic
    const DOM = document.querySelector(selector);
    /* if (!DOM) {
        console.error('ERROR: could not find an elements by a given selector.');
        return false;
    } */ /* no validation yet */

    let HTML = '';
    const count = data.maxLimit || data.data.length;

    for (let i = 0; i < count; i++) {
        const feature = data.data[i];
        /* if (!isValidFeature(feature)) {
            continue;
        } */ /* no validation yet */

        HTML += `<div class="hireus-container" >
                    <a href="#">
                        <div class="curtain"></div>
                        <img src="./img/${data.imgFolder}/${feature.img}" alt="${feature.title} image">
                        <div class="learn">
                            <span>Learn</span>
                            <span> more</span>
                        </div>
                        <div class="overflow">
                            <h5>${feature.title}</h5>
                        </div>
                    </a>
                    <p>${feature.description}
                    </p>
                </div>`;
    }


    // post logic validation
     if (HTML === '') {
        return false;
    }

    // return
    DOM.innerHTML = HTML;
    return true;
}

export { renderHireUs }