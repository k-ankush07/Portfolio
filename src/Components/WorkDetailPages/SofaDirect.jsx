import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import sofafirst from "../../assets/Images/sofafirst.svg"
import sofacontri from "../../assets/Images/sofacontri.svg"
import sofachallenge from "../../assets/Images/sofachallenge.svg"
import sofaimplii from "../../assets/Images/sofaimplii.svg"
import journeysofa1 from "../../assets/Images/journeysofa (1).svg"
import journeysofa2 from "../../assets/Images/journeysofa (2).svg"
import sofakey from "../../assets/Images/sofakey.svg"
import sofaout from "../../assets/Images/sofaout.svg"
import sofachallenge2 from "../../assets/Images/sofachallenge2.svg"


 import liquid from "../../assets/Images/tryfumimages (1).svg"
import html from "../../assets/Images/tryfumimages (2).svg"
import css from "../../assets/Images/tryfumimages (3).svg"
import jquery from "../../assets/Images/tryfumimages (4).svg"
import javascript from "../../assets/Images/tryfumimages (5).svg"
import react from "../../assets/Images/syncform (1).svg"
import typescript from "../../assets/Images/syncform (2).svg"
import nodejs from "../../assets/Images/syncform (3).svg"
import tailwind from "../../assets/Images/syncform (4).svg"
import express from "../../assets/Images/syncform (5).svg"
import scscss from "../../assets/Images/syncform (6).svg"
import adminapi from "../../assets/Images/syncform (7).svg"
import storeapi from "../../assets/Images/syncform (8).svg"
import graphql from "../../assets/Images/syncform (9).svg"
import restfull from "../../assets/Images/syncform (10).svg"
import webhook from "../../assets/Images/syncform (11).svg"
import mongodb from "../../assets/Images/syncform (12).svg"
import cicd from "../../assets/Images/syncform (13).svg"
import git from "../../assets/Images/cart.svg"
import sass from "../../assets/Images/sass.svg"
function SofaDirect() {
    const project = {
        id: 1,
        slug: "sofadirect",
        title: "SofaDirect",
        imageSofaDirect: sofafirst,
        headingSofaDirect: "Sofa Direct",
        descSofaDirect: "Sofa Direct is a UK-based e-commerce store specializing in sofas, corner sofas, recliners, sofa beds, armchairs, and other furniture products. The website features a large product catalogue with multiple purchasing options and product discovery paths based on type, size, colour, material, brand, and price.",
        role: "Shopify Developer and Designer",
        logo:[{html,css,jquery,scscss,javascript,sass,liquid,adminapi,storeapi}],
        visit: "https://sofa-direct.co.uk/",
        ourSofaDirect: "My Contribution",
        contrubutionimageSofaDirect: sofacontri,
        pointsSofaDirect: [
          "Ecommerce Development",
          "Theme Customization",
          "UI/UX Design",
          "UX Improvement",
          "Performance Optimization",
        ],
        btnnameSofaDirect: "View the final experience",
        btnLinkSofaDirect: "https://sofa-direct.co.uk/",
        challengeSofaDirect: sofachallenge,
        mobilechallenegImageHoperoza: sofachallenge2,
        // ChallheadingSofaDirect: "Challenges",
        ChalldescSofaDirect:
          "When taking on the project, the primary challenge was that the storefront lacked visual consistency and clean navigation across its main shopping pages, making it difficult for customers to naturally browse and evaluate sofa specifications on both desktop and mobile. Additionally, the default Shopify setup was too rigid for the brand’s specific needs, requiring custom Liquid components and tailor-made sections rather than generic templates. At the same time, the site was bogged down by leftover scripts and unoptimized media, which meant I had to tackle a thorough front-end cleanup to strip out unnecessary bloat and bring overall load speeds up to standard. ",
        implementimageSofaDirect: sofaimplii,
        impheadingSofaDirect: "Implementation Process",
        impheadescSofaDirect:
          "I kicked off the project by auditing the storefront’s key templates and performance bottlenecks to identify where users were dropping off. From there, I wireframed and designed cleaner, mobile-friendly layouts in Figma to bring visual consistency to the browsing experience. During development, I moved beyond the default theme constraints by building custom Liquid components, streamlining the product detail views, and styling responsive elements to make navigation feel seamless. Finally, I went through a thorough code and asset cleanup—removing redundant scripts, optimizing image delivery, and minifying front-end files to ensure the store loaded fast and ran smoothly across all devices.",
        imgsectionSofaDirect: [journeysofa2, journeysofa1],
        keyheadingSofaDirect: "Key Areas of Improvement",
        secondsnglSofaDirect: sofakey,
        keyPointsSofaDirect: [
          {
            heading: "Integrated Delivery & Service Upsell Module:",
            desc: " Built a unified delivery and installation module directly into the product template, pairing an instant postcode-based lead time checker with selectable service add-ons—including Premier Assembly & Packaging Recycling and Old Sofa Removal—to eliminate fulfillment doubts upfront while driving higher average order value (AOV) before checkout.",
          },
          {
            heading: "Structured Spec Tabs & Trust Architecture:",
            desc: " Replaced dense product copy with expandable tap-to-read specification accordions, dimensions breakdowns, and visual trust banners (warranty, delivery terms, and phone order options).",
          },
          {
            heading: "Front-End Asset & Speed Optimization:",
            desc: " Streamlined front-end assets by minifying CSS/JavaScript, optimizing image delivery for high-res furniture swatches, and removing redundant render-blocking scripts to ensure smooth mobile performance.",
          },
          {
            heading: "Mobile-First UX & Layout Architecture:",
            desc: "Redesigned key shopping templates with a mobile-first mindset, restructuring product card layouts, category filters, and product detail hierarchy. By introducing tap-friendly touchpoints, sticky purchase flows, and intuitive visual cues, I eliminated navigation friction and made evaluating large furniture effortless on smaller screens.",
          },
        ],
         outcomeimageSofaDirect: sofaout,
            outcomeheadingSofaDirect: "Outcomes",
            outcomepointsSofaDirect: [
              "Improved product discovery across a large catalogue",
              "Clearer category and collection navigation",
              "Better presentation of products and promotional content",
              "Improved responsive experience",
              "More consistent UI across key e-commerce pages",
              "Better balance between visual content and performance",
              "A more polished and conversion-focused storefront",
            ],
        learnheadingSofaDirect: "What I Learned",
        learndescSofaDirect: "This project taught me how to balance a large product catalog with custom Shopify development, mobile UX, and performance. I also learned how thoughtful product layouts and simpler navigation can make it easier for customers to explore and compare furniture across different devices.",
      };
  return (
    <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default SofaDirect