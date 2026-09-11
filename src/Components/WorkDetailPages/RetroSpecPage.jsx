import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail'
import image100 from "../../assets/Images/image 100.svg"
import restroour from "../../assets/Images/neimage.svg"
import challengeimg from "../../assets/Images/image 99 (3).svg"
import processimg from "../../assets/Images/image 99 (4).svg"
import first from "../../assets/Images/group1 (1).svg"
import fresh from "../../assets/Images/fresh.svg"
import image1001 from "../../assets/Images/RetroSpec.mp4"

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


function RetroSpecPage() {
  const project = {
    id: 1,
    slug: "RetroSpec",
    title: "RetroSpec",
    reverseMobileRetroSpec: false,
    reverseDesktopRetroSpec: false,
    imageRetroSpec: image100,
    reverseFirstSectionRetroSpec: true,
    headingRetroSpec: "Retrospec — The Good Habit",
    descRetroSpec: "Retrospec is a DTC outdoor and active-lifestyle brand that sells products designed for everyday movement, recreation, fitness, and outdoor adventures. Its product range covers bikes and e-bikes, skateboards, scooters, paddle boards, snow gear, camping equipment, fitness products, and outdoor accessories, giving customers products for different activities throughout the year. The brand focuses on making outdoor products accessible, practical, and affordable while maintaining a strong emphasis on product design and everyday usability.",
    role: " Shopify App Developer",
    logo:[{liquid,html,css,jquery,javascript,restfull,adminapi,react,typescript,nodejs}],
    visit: "https://retrospec.com/",
    ourRetroSpec: "Our Contribution",
    contrubutionimageRetroSpec: restroour,
    pointsRetroSpec: [
      "Custom Shopify App",
      "Custom Functionality",
      "Admin & Storefront Integration",
      "Shopify API Integrations",
    ],
    btnnameRetroSpec: "View the final experience",
    btnLinkRetroSpec: "https://retrospec.com/",
    challengeRetroSpec: challengeimg,
    ChallheadingRetroSpec: "Challenges",
    ChalldescRetroSpec:
      "As Retrospec expanded its product catalog across bikes, skateboards, accessories, and different product variants, customers needed a simpler way to explore and compare their options. The client needed an interface that organized product choices, variants, and key details while reducing the need to manage similar content across multiple product templates.",
    implementimageRetroSpec: processimg,
    impheadingRetroSpec: "Implementation Process",
    impheadescRetroSpec:
      "To enhance the customer experience, I developed a Custom Shopify App. I first structured the product data and mapped the different product types, variants, sizes, and purchasing options. Then, I connected the app with Shopify's product data so the interface could display and manage the required options dynamically. Also, created reusable components for product information and options, which reduced repeated development across different product templates",
    imgsectionRetroSpec: [fresh, first],
    keyheadingRetroSpec: "Key Areas of Improvements",
    secondsnglRetroSpec: image1001,
    keyPointsRetroSpec: [
      {
        heading: "Simplified Product Selection:",
        desc: " I made it easier for customers to explore different products, sizes, and variants without navigating multiple pages.",
      },
      {
        heading: "Shopify API Integration:",
        desc: " I connected the custom app with Shopify APIs to retrieve and manage product, variant, inventory, and pricing data dynamically.",
      },
      {
        heading: "Real-Time Product Data:",
        desc: "I structured API-based data handling so the interface could display updated product and variant information.",
      },
      {
        heading: "Improved Purchase Flow:",
        desc: "I connected product selection directly with the Shopify storefront flow to reduce unnecessary navigation and friction.",
      },
    ],
    learnheadingRetroSpec: "What I Learned",
    learndescRetroSpec: "This project taught me that building a custom Shopify app is not just about connecting APIs and developing features. I learned how important it is to understand the client product structure first and then develop the app around how customers actually shop. I also gained practical experience in handling complex Shopify data, managing different product variants dynamically, and building reusable components that make future updates easier. ",
  };
  return (
     <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default RetroSpecPage