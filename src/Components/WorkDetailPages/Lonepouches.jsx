import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import lion from "../../assets/Images/firstnewlion.svg"
import contrinew from "../../assets/Images/contrinew.svg"
import challengenew from "../../assets/Images/linonew.svg"
import pimage from "../../assets/Images/newr.svg"
import double from "../../assets/Images/double.svg"
import single from "../../assets/Images/single.svg"
import lion1 from "../../assets/Images/keynew.svg"
import true1 from "../../assets/Images/true.svg"
import Lonepouches1 from "../../assets/Images/Lonepouches.mp4"

function Lonepouches() {
  const project = {
    id: 1,
    slug: "tryfum",
    title: "TryFum",

    imageLonepouches: lion,
    reverseMobileLonepouches: false,
    reverseDesktopLonepouches: false,
    imagewidthLonepouches: 63,
    contentwidthLonepouches: 37,
    contentprLonepouches: 87,
    headingLonepouches: "Lonepouches— The Good Habit",
    descLonepouches: "Lone Pouches is a U.S.-based nicotine pouch brand that sells tobacco-free, smoke-free oral nicotine products for adults who already use nicotine. Its pouches use synthetic nicotine and six core ingredients, including xylitol, MCT oil, baking soda, and essential oils. The store sells multiple pouch flavors and strengths, including Crisp Menthol, Cinnamon, Wintergreen, and Variety Packs, along with branded apparel and accessories.",

    role: " Shopify Developer",
    visit: "https://lonepouches.com/",

    contributionwidthLonepouches: 40,
    contributionimagewidthLonepouches: 60,
    contributionimageprLonepouches: 116,
    ourLonepouches: "My Contribution",
    contrubutionimageLonepouches: contrinew,
    pointsLonepouches: [
      "E-commerce Development",
      "Theme Upgrade",
      "Subscription optimization",
    ],
    btnnameLonepouches: "View the final experience",
    btnLinkLonepouches: "https://lonepouches.com/",

    challengeLonepouches: challengenew,
    ChallheadingLonepouches: "Challenges",
    challengeimageplLonepouches: 81,
    ChalldescLonepouches:
      "The primary challenges for the Lone Pouches project were optimizing the store while maintaining compliance and a smooth shopping experience. The project required a strict age-verification process that did not interrupt the customer journey. The theme upgrade also needed to maintain existing app integrations, subscription functionality, and strong mobile performance without disrupting the live store.",

    implementimageprocessLonepouches: pimage,
    impheadingprocessLonepouches: "Implementation Process",
    impheadescprocessLonepouches:
      "I first deeply analyzed the existing Shopify store to identify areas for improvement across the Lone Pouches. Based on the findings, upgrade the theme with cleaner layouts and improved navigation, optimized the subscription experience, refined product pages with clearer information and stronger CTAs, and improved mobile responsiveness.",

    imgsectionLonepouches: [single, double],
    reverseKeyAreasLonepouches: true,
    keyareapxLonepouches: 117,
    keyheadingLonepouches: "Key Areas of Improvements",
    firstdblLonepouches: lion1,
    secondsnglLonepouches: Lonepouches1,
    paddingtopsecondimagemobileLonepouches: 9,
    paddingtopsecondimageLonepouches: 10,
    keyPointsLonepouches: [
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

    reverseOutcomeLonepouches: true,
    outcomeContentEndLonepouches: true,
    outcomeImageBorderMobileLonepouches: false,
    outcomecontentmaxwLonepouches: 293,
    outcomepxLonepouches: 152,
    imgwidthLonepouches: 60,
    outcomeimageLonepouches: true1,
    outcomeheadingLonepouches: "Outcomes",
    outcomepointsLonepouches: [
      "Lift in overall site conversion rate",
      "Reduced subscriber churn & higher retention",
      "Mobile & desktop load times cut off",
      "Higher average order value",
    ],

    learnheadingLonepouches: "What I learned",
    learndescLonepouches: "Working on the Lone Pouches project enhanced my expertise in modern theme engineering, regulated e-commerce UX, and organic conversion strategies. Upgrading to a modular Shopify OS 2.0, eliminating app bloat, and optimizing mobile speeds directly boost search rankings and customer retention. .",
  };

  return (
    <section className="container">
      <WorkDetail project={project} />
    </section>
  )
}

export default Lonepouches