/***************
ALL IMPORTS
****************/
/* header */

/* hero */

/* brand slider */

/* services */

/* info-techno */

/* hire us */

/* fact wrapper */
import { FactWrapper } from './components/factWrapper/FactWrapper.js';
import { factWrapperData } from './data/factWrapperData.js';

/* video */

/* case studies */
import { caseStudiesData } from './data/caseStudiesData.js'
import { CaseStudiesRender } from './components/caseStudies/caseStudiesRender.js'

/* testimonials */

/* blog & news */

/* contact us */

/* footer */

/* social icon & copyright */


/***************
EXECUTION
****************/
/* header */

/* hero */

/* brand slider */

/* services */

/* info-techno */

/* hire us */

/* fact wrapper */
new FactWrapper({
    selector: '#factWrapper',
    data: factWrapperData,
})

/* video */

/* case studies */
new CaseStudiesRender({
    selector: '.cards-block',
    data: caseStudiesData,
})

/* testimonials */

/* blog & news */

/* contact us */

/* footer */

/* social icon & copyright */