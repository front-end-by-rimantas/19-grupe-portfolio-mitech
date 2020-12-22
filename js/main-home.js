/***************
ALL IMPORTS
****************/
/* header */

/* hero */

/* brand slider */

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

/* testimonials */

/* blog & news */

/* contact us */

/* footer */

/* social icon & copyright */

/* back to top */
import { animateBackToTop } from './components/backToTop/animateBackToTop.js'


/***************
EXECUTION
****************/
/* header */

/* hero */

/* brand slider */

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

/* testimonials */

/* blog & news */

/* contact us */

/* footer */

/* social icon & copyright */

/* back to top */
animateBackToTop();