/***************
ALL IMPORTS
****************/
/* header */

/* hero */

/* brand slider */
import { BrandLogo } from './components/brandLogo/BrandLogo.js';
import { brandLogoData } from './data/brandLogoData.js';

/* services */
import { serviceRenderFeatures } from './components/serviceSection/serviceRenderFeatures.js';
import { serviceData } from './data/serviceData.js';


/* info-techno */

/* hire us */
import { renderHireUs } from './components/hireUs/renderHireUs.js';
import { hireUsData } from './data/hireUsData.js';

/* fact wrapper */
import { FactWrapper } from './components/factWrapper/FactWrapper.js';
import { factWrapperData } from './data/factWrapperData.js';

/* video */

/* case studies */
import { caseStudiesData } from './data/caseStudiesData.js'
import { CaseStudiesRender } from './components/caseStudies/caseStudiesRender.js'

/* testimonials */
import { testimonialsData } from './data/testimonialsData.js';
import { Testimonials } from './components/testimonials/Testimonials.js';

/* blog & news */

/* contact us */

/* footer */

/* social icon & copyright */
import { iconsData } from './data/socialiconsData.js';
import { renderIcons } from './components/socialIcons/renderSocialIcons.js';


/* back to top */
import { animateBackToTop } from './components/backToTop/animateBackToTop.js'


/***************
EXECUTION
****************/
/* header */

/* hero */

/* brand slider */
new BrandLogo('#brands_slider', brandLogoData);

/* services */
serviceRenderFeatures('#service_features_block', serviceData)
/* info-techno */

/* hire us */
renderHireUs('#hireUs', hireUsData)

/* fact wrapper */
new FactWrapper({
    selector: '#factWrapper',
    data: factWrapperData,
})

/* video */

/* case studies */
new CaseStudiesRender({
    selector: '.cards',
    data: caseStudiesData,
})
window.addEventListener('resize', ()=> {
    new CaseStudiesRender({
         selector: '.cards',
         data: caseStudiesData,
        })
}) 

/* testimonials */
new Testimonials({
    selector: '#testimonials',
    data: testimonialsData,
})

/* blog & news */

/* contact us */

/* footer */

/* social icon & copyright */

renderIcons('#social_icons_block', iconsData)

/* back to top */
animateBackToTop();
