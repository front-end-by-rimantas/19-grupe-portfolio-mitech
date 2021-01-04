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
        HTML += `<div class="header-block"><div class="header-nav"><a href="${item.link}" class="fa header" aria-hidden="true">${item.name}</a>
        <ul class="header-ul"> `;

        for (let menu of Object.entries(item.submenu)) {
            console.log(Object.values(menu)[1].name);
            HTML +=`  <li class="header-li"><a href="${Object.values(menu)[1].link}" id="submenu">${Object.values(menu)[1].name}</a></li>
            `;
        }
     //   for (let menu  of item.submenu) {
        //     HTML +=`  <li><a href="#" id="submenu">${item.submenu}</a></i>
        //    `;
     //   }
        HTML +=` </ul></div></div>`;
       //     
    } //item - mano saraso objektas (is headerData)

//post logic validation
    if (HTML === '') {
        return false;
    }
    console.log(HTML);
//return
    headerDOM.innerHTML = HTML;
    
    return true;
}

export { renderHeader }