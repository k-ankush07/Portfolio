import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import hopefirst from "../../assets/Images/hopefirst.svg"
import contributionhora from "../../assets/Images/contributionhora.svg"
import challengehora1 from "../../assets/Images/challengehora (1).svg"
import challengehora2 from "../../assets/Images/challengehora (2).svg"
import processhora from "../../assets/Images/processhora.svg"
import horamobile1 from "../../assets/Images/horamobile (1).svg"
import horamobile2 from "../../assets/Images/horamobile (2).svg"
import keyhora from "../../assets/Images/keyahora.svg"
import keyhora1 from "../../assets/Images/Luxury.mp4"

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
function HoperozaPage() {
    const project = {
        id: 1,
        slug: "hoperoza",
        title: "Hoperoza",
    
        imageHoperoza: hopefirst,
        reverseFirstSectionHoperoza: true,
        contentwidthHoperoza: 30,
        imagewidthHoperoza: 70,
        headingHoperoza: "Hoperoza — The Good Habit",
        descHoperoza: "HOPE ROZA is a premium women’s footwear and accessories brand focused on combining luxury fashion with everyday comfort. The store features heels, pumps, slingbacks, handbags, clutches, and accessories. This brand utilizes multi-layer cushioning and proprietary AirVault™ technology to provide pressure-dispersing, long-wear comfort without sacrificing high-end aesthetics.",
    
        role: "Shopify Developer",
        logo:[{html,css,jquery,liquid,scscss,javascript}],
        visit: " https://hoperoza.com/",
    
        ourHoperoza: "Contribution",
        contrubutionimageHoperoza: contributionhora,
        pointsHoperoza: [
          "Responsive Development",
          "Theme Customization",
          "Increase Response Time",
        ],
        btnnameHoperoza: "View the final experience",
        btnLinkHoperoza: " https://hoperoza.com/",
    
        challengenewHoperoza: challengehora1,
        mobilechallenegImageHoperoza: challengehora2,
        // ChallheadingnewHoperoza: "Challenges",
        showBordercontentHoperoza: false,
        showBorderImageHoperoza: true,
        ChalldescnewHoperoza:
          "The client provided a detailed Figma design and needed an exact 1:1 Shopify implementation that matched the approved visual direction across desktop and mobile devices. The storefront has to support a growing footwear and accessories catalog while maintaining a premium shopping experience. I needed to translate the design accurately into Shopify without sacrificing functionality, responsiveness, or page performance.",
    
        implementimageHoperoza: processhora,
        impheadingHoperoza: "Implementation Process",
        impheadescHoperoza:
          "I first analyzed the Figma designs and mapped each section to Shopify's theme structure. I then developed the storefront using custom Liquid sections, responsive HTML, CSS, and JavaScript to closely match the approved designs. I customized product, collection, navigation, and other key storefront components to fit the brand's requirements. <br/> <br/>After completing the core development, I optimized the theme by reducing unnecessary code, optimizing assets, improving image loading, and refining front-end scripts.",
    
        imgsectionHoperoza: [horamobile1, horamobile2],
        keyheadingHoperoza: "Key Areas of Improvement",
        firstdblHoperoza: keyhora,
        secondsnglHoperoza: keyhora1,
        paddingtopsecondimagemobileHoperoza: 25,
        paddingtopsecondimageHoperoza: 40,
        keyPointsHoperoza: [
          {
            heading: "1:1 Figma Implementation:",
            desc: "Converted the client-provided Figma designs into a fully functional Shopify storefront while maintaining the approved visual direction. I carefully matched the layouts, typography, spacing, product presentation, imagery, buttons, navigation, and other design elements across the storefront.",
          },
          {
            heading: "Theme Optimization:",
            desc: "Customize the Showcase Shopify theme components based on the Figma layouts instead of relying on standard theme sections. I created flexible Liquid sections and customized the theme structure to support the brand's product presentation, promotional content, collection layouts, and other custom storefront elements. This approach created a scalable theme structure that could support future product and content updates.",
          },
          {
            heading: "Responsive Layout:",
            desc: "Converted the desktop designs into responsive layouts for tablets and mobile devices while preserving the original design hierarchy. I adjusted grids, product cards, typography, spacing, images, navigation, buttons, and content sections based on different screen sizes. I also tested the layouts across multiple viewport sizes to maintain a consistent and polished shopping experience.",
          },
          {
            heading: "Speed Optimization:",
            desc: "Reviewed the theme structure and front-end assets to identify areas that could affect page performance. I optimized images, reduced unnecessary code, refined JavaScript execution, improved asset loading, and removed redundant front-end elements where possible.",
          },
        ],
    
        // outcomeimageHoperoza: Hoperoza,
        // outcomeheadingHoperoza: "Key Outcomes",
        // outcomepointsHoperoza: [
        //   "Better Performance",
        //   "Higher Conversion Potentials",
        //   "Increase AOV",
        //   "Better Product Discovery",
        // ],
      };
  return (
      <section className="container">
      <WorkDetail project={project} />
    </section>
  )
}

export default HoperozaPage