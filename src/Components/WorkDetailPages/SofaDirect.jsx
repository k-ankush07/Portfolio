import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';

function SofaDirect() {
    const project = {
        id: 1,
        slug: "SofaDirect",
        title: "SofaDirect",
        // imageSofaDirect: image100,
        headingSofaDirect: "SofaDirect — The Good Habit",
        descSofaDirect: "SofaDirect is a DTC outdoor and active-lifestyle brand that sells products designed for everyday movement, recreation, fitness, and outdoor adventures. Its product range covers bikes and e-bikes, skateboards, scooters, paddle boards, snow gear, camping equipment, fitness products, and outdoor accessories, giving customers products for different activities throughout the year. The brand focuses on making outdoor products accessible, practical, and affordable while maintaining a strong emphasis on product design and everyday usability.",
        role: " Shopify App Developer",
        visit: "https://SofaDirect.com/",
        ourSofaDirect: "Our Contribution",
        // contrubutionimageSofaDirect: restroour,
        pointsSofaDirect: [
          "Custom Shopify App",
          "Custom Functionality",
          "Admin & Storefront Integration",
          "Shopify API Integrations",
        ],
        btnnameSofaDirect: "View the final experience",
        btnLinkSofaDirect: "https://SofaDirect.com/",
        // challengeSofaDirect: challengeimg,
        ChallheadingSofaDirect: "Challenges",
        ChalldescSofaDirect:
          "As SofaDirect expanded its product catalog across bikes, skateboards, accessories, and different product variants, customers needed a simpler way to explore and compare their options. The client needed an interface that organized product choices, variants, and key details while reducing the need to manage similar content across multiple product templates.",
        // implementimageSofaDirect: processimg,
        impheadingSofaDirect: "Implementation Process",
        impheadescSofaDirect:
          "To enhance the customer experience, I developed a Custom Shopify App. I first structured the product data and mapped the different product types, variants, sizes, and purchasing options. Then, I connected the app with Shopify's product data so the interface could display and manage the required options dynamically. Also, created reusable components for product information and options, which reduced repeated development across different product templates",
        // imgsectionSofaDirect: [fresh, first],
        keyheadingSofaDirect: "Key Areas of Improvements",
        // secondsnglSofaDirect: image1001,
        keyPointsSofaDirect: [
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
        learnheadingSofaDirect: "What I Learned",
        learndescSofaDirect: "This project taught me that building a custom Shopify app is not just about connecting APIs and developing features. I learned how important it is to understand the client product structure first and then develop the app around how customers actually shop. I also gained practical experience in handling complex Shopify data, managing different product variants dynamically, and building reusable components that make future updates easier. ",
      };
  return (
    <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default SofaDirect