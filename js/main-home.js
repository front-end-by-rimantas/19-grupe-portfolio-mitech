/***************
ALL IMPORTS
****************/
/* header */
import { renderHeader } from './components/header/renderHeader.js';
import { headerData } from './data/headerData/headerData.js';
import { renderLangHeader } from './components/header/renderLangHeader.js';
import { languages } from './data/headerData/headerLangData.js';
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
import { iconsData } from './data/socialiconsData.js';
import { renderIcons } from './components/socialIcons/renderSocialIcons.js';


/* back to top */
import { animateBackToTop } from './components/backToTop/animateBackToTop.js'


/***************
EXECUTION
****************/
/* header */
renderHeader('#nav_block', headerData);
renderLangHeader('#lang_block', languages);
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

renderIcons('#social_icons_block', iconsData)

/* back to top */
animateBackToTop();
