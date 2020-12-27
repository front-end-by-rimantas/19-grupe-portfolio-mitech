/**
 * Navigacijos generavimas
 * @param {string} CSS like selector, kaip rasti norima vieta komponento generavimui 
 * @param {Array} data 
 */
function renderHeader(selector, data) {
//input validation

//logic
    const headerDOM = document.querySelector(selector);
    if (!headerDOM) {
        return false;
    }
    let HTML = '';
    for (let item of data) {
        HTML += `<a href="${item.link}" class="fa" aria-hidden="true">${item.name}</a>`
    } //item - mano saraso objektas (is headerData)

//post logic validation
    if (HTML === '') {
        return false;
    }
    
//return
    headerDOM.innerHTML = HTML;
    return true;
}

export { renderHeader }