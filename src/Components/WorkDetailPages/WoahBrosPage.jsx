import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import image101 from  "../../assets/Images/image 101.svg"
import my from  "../../assets/Images/my.svg"
import image99 from  "../../assets/Images/project.svg"
import image66 from  "../../assets/Images/image 99 (6).svg"
import woa1 from  "../../assets/Images/woa (1).svg"
import woa2 from  "../../assets/Images/woa (2).svg"
import first from  "../../assets/Images/first4 (1).svg"
import second from  "../../assets/Images/first4 (2).svg"
import out from  "../../assets/Images/outcome.svg"


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
function WoahBrospAGE() {
  const project = {
    id: 1,
    slug: "woahbros",
    title: "WoahBros",

    imageWoahBros: image101,
    reverseMobileWoahBros: false,
    reverseDesktopWoahBros: false,
    headingWoahBros: "WoahBros — The Good Habit",
    descWoahBros: "WoahBros is an eCommerce brand focused on flame-resistant (FR) workwear and welding gear for welders and industrial professionals. The store combines safety-focused products with bold, distinctive designs that appeal to the welding community. Its catalog includes FR shirts, welding hoods, gloves, arm pads, T-shirts, hoodies, hats, and stickers.",

    role: "Shopify and Klaviyo Developer",
    logo:[{html,scscss,liquid,jquery,javascript,graphql}],
    visit: "https://woahbros.us/",

    ourWoahBros: "My Contribution",
    contrubutionimageWoahBros: my,
    constributionitemcenterWoahBros: "item-center",
    pointsWoahBros: [
      "Landing Page Development",
      "Theme Upgrade",
      "Klaviyo Flows & Email Templates",
    ],
    btnnameWoahBros: "View the final experience",
    btnLinkWoahBros: "https://woahbros.us/",

    challengeWoahBros: image99,
    ChallheadingWoahBros: "Project Challenges",
    ChalldescWoahBros:
      "The client needed a reliable way to collect customer data and build a stronger customer database through the Shopify store. The existing storefront did not provide enough opportunities to capture customer information at important points in the customer journey. And want to set up Klaviyo so they use it for targeted email marketing to drive conversion.",

    implementimageWoahBros: image66,
    impheadingWoahBros: "Implementation Process",
    impheadescWoahBros:
      "I first reviewed the existing Shopify theme, customer journey, and available customer touchpoints to identify where the store could collect more customer data. During our initial work and store analysis, we identified several key challenges that the client was facing. The store needed better opportunities to collect customer data, a more structured theme experience, and stronger landing pages to support customer engagement. <br/> <br/> I connected the customer data collection points with Klaviyo and structured the required customer properties and events for marketing automation.",

    imgsectionWoahBros: [woa1, woa2],
    keyheadingWoahBros: "Key Areas of Improvements",
    firstdblWoahBros: first,
    secondsnglWoahBros: second,
    keyPointsWoahBros: [
      {
        heading: "Landing Page:",
        desc: "Developed dedicated landing pages with a stronger content structure, product-focused sections, clear calls to action, and strategically placed customer data collection areas. The new layouts helped customers understand the products quickly and provided more opportunities to capture customer information",
      },
      {
        heading: "Storefront Layout Fix:",
        desc: "Update the existing Shopify theme to create a cleaner and more flexible storefront structure. Custom Shopify Liquid sections and frontend components improved without breaking brand reputation. Responsive layouts also provided a consistent experience across desktop, tablet, and mobile devices.",
      },
      {
        heading: "Email Marketing with Klaviyo:",
        desc: "To align with the store's updates and branding refresh, we set up email marketing using Klaviyo. I created engaging email flows and templates, including:",
        bullets: [
          { label: "Welcome Series:", text: "Personalized introductions to welcome new subscribers and customers." },
          { label: "Abandoned Cart Reminders:", text: "Gentle nudges to encourage customers to complete their purchases." },
          { label: "Post-Purchase Flows:", text: "Nurturing customer relationships, building loyalty, and driving repeat sales." },
        ],
      },
      {
        heading: "Email Templates:",
        desc: "Designed and developed custom Klaviyo email templates that matched the WoahBros storefront. The templates used responsive layouts, product-focused content, clear calls to action, and consistent branding across different email campaigns and automated flows",
      },
    ],

    outcomeimageWoahBros: out,
    contentwidthWoahBros: 35,
    imgwidthWoahBros: 65,
    outcomeheadingWoahBros: "Outcomes",
    outcomepointsWoahBros: [
      "Reduced abandoned cart rates",
      "Increased customer engagement",
      "Improved customer retention rate",
    ],

    learnheadingWoahBros: "What I Learned",
    learndescWoahBros: "This project taught me how small changes in the customer journey can create better opportunities for data collection and engagement. Working on the landing pages, theme, and Klaviyo flows gave me a better understanding of how technical decisions should support real business goals and customer behavior.",
  };

  return (
    <section className="container">
      <WorkDetail project={project} />
    </section>
  )
}

export default WoahBrospAGE