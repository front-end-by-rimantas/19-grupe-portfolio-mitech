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
        const fact = factData.data[i];
        
        HTML += `<div class="facts">
                    <span class="upper" >${fact.description}</span>
                    <div class="numbers">${fact.count}</div>
                    <span class="bottom">${fact.title}</span>
                </div>`;
    }
    
    DOM.innerHTML = HTML
}


export { renderFactWrapper }