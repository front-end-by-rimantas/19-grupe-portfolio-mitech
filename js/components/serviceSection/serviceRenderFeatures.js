function serviceRenderFeatures(selector, duomenys) {

    if (typeof selector !== "string" || (!Array.isArray(duomenys.data))) {
        console.error("Netinkami duomenys");
        return false;
    }  /* jei selektorius ne stringas ir jei Array yra ne array - blogi duomenys*/
    
 
    const DOM = document.querySelector(selector)
    if (!DOM) {
        console.error("Netinkama vieta HTML");
        return false;
    }



    let HTML = '';
    const limit = duomenys.maxLimit || duomenys.data.length; /* limit - iesko maksimalaus leistino atvaizduoti skaiciaus ir data folderyje nurodytu duomenu ilgio, jei nebutu nurotyta max skaiciua, funkcija ziuretu duomenis */
    for (let i = 0; i < limit; i++) {
        const feature = duomenys.data[i];
        HTML += `<div class="service col-4 col-md-6 col-sm-12">
        <img src="./${duomenys.imgFolder}/${feature.img}" alt="${feature.title}">  
        <h3>${feature.title} </h3>
        <p>${feature.description}</p>
        <i class="fa fa-long-arrow-right btn" aria-hidden="true"></i>
        </div>`;
    }
    
    DOM.innerHTML = HTML;
    
}



export { serviceRenderFeatures }
