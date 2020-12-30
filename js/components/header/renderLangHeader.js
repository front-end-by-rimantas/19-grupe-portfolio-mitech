/**
 * Duomenys bus aprasyti veliau
 * 
 */
function renderLangHeader(selector, duomenys) {
    
    if (typeof selector !== "string" || (!Array.isArray(duomenys.data))) {
        console.error("Netinkami duomenys");
        return false;
    }  /* jei selektorius ne stringas ir jei Array yra ne array - blogi duomenys*/
    

    const langDOM = document.querySelector(selector);
    if(!langDOM) {
        return false;
    }
    let HTML = '';
    // const limit = duomenys.maxLimit;
     const limit = duomenys.data.length;
    HTML += `<div class="dropdown">
    <div class="langbtn">
        <img class="lang" src="${duomenys.data[0].flag}" alt="en">${duomenys.data[0].language}
    </div>
    <div class="dropdown-content">`;
    for (let i = 1; i < limit; i++) {
        const features = duomenys.data[i];
        HTML += `
          <a href="#">
            <img class="lang" src="${features.flag}" alt="fr">${features.language}</a>`;
    }
     HTML +=` </div></div> 
        <span class="custom-arrow"></span>
        <form>
            <input class="search" type="text" placeholder="Search...">
            <button class="searchsubmit fa fa-search" aria-hidden="true"></button>
        </form>`;
    
     if (HTML === '') {
        return false
    }
    langDOM.innerHTML = HTML;
    return true;
}
export { renderLangHeader }