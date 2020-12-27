/**
 * 
 */
function renderLangHeader(selector, data) {

    const langDOM = document.querySelector(selector);
    if(!langDOM) {
        return false;
    }
    let HTML = '';
    for (let item of data) {
        HTML += `<select class="language fa"><img src="${item.flag}" alt="">
        <option value="0">${item.language}</option></select>`;
        
        // <div class="kalbos">
        // <select>
        //     <option value="">English</option>
        //  </select>
        console.log(item.flag);
    }
    if (HTML === '') {
        return false
    }
    console.log(HTML);
    // langDOM.innerHTML = HTML;
    
    let HTML2 = `<form>
    <input class="search" type="text" placeholder="Search...">
    <button class="searchsubmit fa fa-search" aria-hidden="true"></button>
</form>`;

    langDOM.innerHTML = HTML + HTML2;
    return true;

}


export { renderLangHeader }