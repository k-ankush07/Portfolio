import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import lion from "../../assets/Images/lion.svg"
import contrinew from "../../assets/Images/contrinew.svg"
import challengenew from "../../assets/Images/challengenew.svg"
import pimage from "../../assets/Images/pimage.svg"
import double from "../../assets/Images/double.svg"
import single from "../../assets/Images/single.svg"
import lion1 from "../../assets/Images/lion12 (1).svg"
import true1 from "../../assets/Images/true.svg"
import Lonepouches1 from "../../assets/Images/Lonepouches.mp4"
function Lonepouches() {
    const project = {
        id: 1,
        slug: "tryfum",
        title: "TryFum",
        image: lion,
        reverseMobile: false,
        reverseDesktop: false,
        imagewidth: 63,     
        contentwidth: 37,
        contentpr: 87,
        heading: "Lonepouches— The Good Habit",
        desc: "Lone Pouches is a U.S.-based nicotine pouch brand that sells tobacco-free, smoke-free oral nicotine products for adults who already use nicotine. Its pouches use synthetic nicotine and six core ingredients, including xylitol, MCT oil, baking soda, and essential oils. The store sells multiple pouch flavors and strengths, including Crisp Menthol, Cinnamon, Wintergreen, and Variety Packs, along with branded apparel and accessories.",
        role: " Shopify Developer",
        visit: "https://lonepouches.com/",
        contributionwidth: 40,       
       contributionimagewidth: 60,
       contributionimagepr: 116,
        our: "My Contribution",
        contrubutionimage: contrinew,
        points: [
          "E-commerce Development",
          "Theme Upgrade",
          "Subscription optimization",
        ],
        btnname: "View the final experience",
        btnLink: "https://lonepouches.com/",
        challenge: challengenew,
        Challheading: "Challenges",
        challengeimagepl: 81,
        Challdesc:
          "The primary challenges for the Lone Pouches project were optimizing the store while maintaining compliance and a smooth shopping experience. The project required a strict age-verification process that did not interrupt the customer journey. The theme upgrade also needed to maintain existing app integrations, subscription functionality, and strong mobile performance without disrupting the live store.",
        implementimageprocess: pimage,
        impheadingprocess: "Implementation Process",
        impheadescprocess:
          "I first deeply analyzed the existing Shopify store to identify areas for improvement across the Lone Pouches. Based on the findings, upgrade the theme with cleaner layouts and improved navigation, optimized the subscription experience, refined product pages with clearer information and stronger CTAs, and improved mobile responsiveness.",
        imgsection: [single, double],
        reverseKeyAreas: true,   
keyareaspx: 117,  
        keyheading: "Key Areas of Improvements",
        firstdbl: lion1,
        secondsngl: Lonepouches1,
        paddingtopsecondimagemobile:9,
        paddingtopsecondimage:10,
        keyPoints: [
          {
            heading: "Theme Upgrade & Architecture Modernization:",
            desc: " Upgrade the storefront to a high-performance Online Store 2.0 theme. Rebuilt the Liquid code structure, modularized page sections, remove unnecessary third-party apps, and optimized asset delivery to ensure sub-second mobile load speeds and seamless app compatibility.",
          },
          {
            heading: "Frictionless Age Verification Integration:",
            desc: "Implemented a non-intrusive age-verification (21+) system that validates age seamlessly on store opens and before checkout, maintaining full regulatory compliance while preventing unnecessary drop-offs in the sales funnel.",
          },
          {
            heading: "Variant & Bundle Display Optimization:",
            desc: "Built custom product template layouts and intuitive selector interfaces for multi-variant combinations. Developed dedicated 'Variety Pack' UI modules to simplify complex purchasing options and drive higher average order value (AOV).",
          },
          {
            heading: "Conversion Optimization:",
            desc: "Because ad platform policies strictly limit paid acquisition for nicotine products, the site layout had to maximize organic traffic conversions. Optimizing single-page checkout flows, mobile navigation, trust badging, and strategic capture popups significantly improved overall site conversion rate and customer lifetime value..",
          },
        ],
        reverseOutcome: true,
        outcomeContentEnd: true,     
        outcomeImageBorderMobile: false,  
        // outcomeimagepbmobile: 30,
        outcomecontentmaxw: 293,      
        outcomepx: 152,
        imgwidth: 60,
        contentwidth: 40,
        outcomeimage: true1,
        outcomeheading: "Outcomes",
        outcomepoints: [
          "Lift in overall site conversion rate",
          "Reduced subscriber churn & higher retention",
          "Mobile & desktop load times cut off",
          "Higher average order value",
        ],
        learnheading: "What I learned",
        learndesc: "Working on the Lone Pouches project enhanced my expertise in modern theme engineering, regulated e-commerce UX, and organic conversion strategies. Upgrading to a modular Shopify OS 2.0, eliminating app bloat, and optimizing mobile speeds directly boost search rankings and customer retention. .",
      };
  return (
    <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default Lonepouches