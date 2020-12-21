/**
 * Bus aprasyta veliau
 * @param {*} selector 
 * @param {*} data 
 */
function renderIcons(selector, data) {
        //logic 
    
        const socialsDOM = document.querySelector(selector);
        
        if (!socialsDOM) {
            console.error('Error: nera turinio generavimo vietos');
            return false;
        }
        let HTML = '';
    
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            HTML +=`<a href="${item.link}" class="fa fa-${item.icon}"><span class="tooltiptext">${item.name}</span></a>`;
        }
        
        // post logic validation
        
        if (HTML === "") {
                console.error('ERROR: nepavyko sugeneruoti social ikonu/nuorodu');
                return false;
            }
        socialsDOM.innerHTML += HTML;
        
    }
export { renderIcons }