/**
 * Fact Wrapper sekcija generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sarasas objektu aprassanciu kiekviena Fact
 * @returns {*}
 */


function renderFactWrapper (selector, factData) {

    const DOM = document.querySelector(selector);
    let HTML = '';
    const amount = factData.maxLimit || factData.data.length;

    for (let i = 0; i < amount; i++) {
        const feature = factData.data[i];
        console.log(feature);
    }
}


export { renderFactWrapper }