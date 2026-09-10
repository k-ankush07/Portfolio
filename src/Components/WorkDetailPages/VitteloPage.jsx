import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import vitoleFirst from "../../assets/Images/vitolefirst.svg"
import vitolecontribution from "../../assets/Images/vitolecontribution.svg"
import vitolechallenge from "../../assets/Images/vitolechallenge.svg"
import vitoleprocess from "../../assets/Images/vitoleprocess.svg"
import vitolejourney1 from "../../assets/Images/vitolejourney (1).svg"
import vitolejourney2 from "../../assets/Images/vitolejourney (2).svg"
import vitolekey from "../../assets/Images/vitolekey.svg"
import Vittelo from "../../assets/Images/Vittelo.mp4"

function VitteloPage() {
       const project = {
            id: 1,
            slug: "vittelo",
            title: "Vittelo",
            imageVittelo: vitoleFirst,
            reverseFirstSectionVittelo: true,
            contentwidthVittelo: 30,
            imagewidthVittelo: 70,
            headingVittelo: "Vittelo — The Good Habit",
            descVittelo: "Vittelo is a Canada-based belt brand focused on creating durable, comfortable belts that offer a better fit for everyday wear. The brand resolves common issues with traditional belts, such as cracking, stretching, and inconsistent fit, by creating belts that look great, feel comfortable, and adjust just right every time. Built for durability and easy everyday wear, Vittelo combines practical design with a modern style that fits the way people move.",
        
            role: "Shopify Developer and Designer",
            visit: " https://www.vittelo.com/",
        
            ourVittelo: "My Contribution",
            contrubutionimageVittelo: vitolecontribution,
            pointsVittelo: [
              "E-commerce Development",
              "Conversion Rate Optimization (CRO)",
              "UI/UX Design",
              "Strategic guidance",
            ],
            btnnameVittelo: "View the final experience",
            btnLinkVittelo: " https://www.vittelo.com/",
        
            challengenewVittelo: vitolechallenge,
            // mobilechallenegImageVittelo: challengehora2,
            ChallheadingnewVittelo: "Challenges",
            showBordercontentVittelo: false,
            showBorderImageVittelo: true,
            ChalldescnewVittelo:
              "The old Vittelo website had an outdated UI, inconsistent page layouts, and slow-loading pages that affected the overall shopping experience. <br/> <br/>Product information and visuals also needed a clearer structure so customers could better understand the belts, their fit, and key benefits.<br/> <br/>The existing layout wasn’t fully responsive, making the store harder to navigate and browse on mobile devices.",
        
            implementimageVittelo: vitoleprocess,
            impheadingVittelo: "Implementation Process",
            impheadescVittelo:
              "The implementation focused on reshaping Vittelo’s storefront around a more modern visual direction and a clearer shopping journey. The website structure was reorganized to create a stronger content flow, with visual hierarchy used to guide customers from the brand story and product benefits toward the purchase. <br/> <br/>Custom Shopify sections were built around the specific needs of the store, including an interactive belt customization experience where customers could choose their preferred buckle and build their belt based on their style. Product content, visuals, and supporting information were arranged into dedicated sections to make the products easier to explore and understand. The redesigned experience was then adapted across desktop and mobile to maintain a consistent look and smooth browsing experience.",
        
            imgsectionVittelo: [vitolejourney2, vitolejourney1],
            keyheadingVittelo: "Key Areas of Improvement",
            firstdblVittelo: vitolekey,
            keyPointsVittelo: [
              {
                heading: "Website Structure:",
                desc: "Reworked the overall page structure to create a clearer content flow and make it easier for customers to move through the storefront. Key sections were arranged around product discovery, benefits, customization, and purchase.",
              },
              {
                heading: "Visual Hierarchy:",
                desc: " Improved the visual hierarchy across the website by refining typography, spacing, imagery, and section placement. Important product details and benefits now stand out more clearly without making the pages feel cluttered..",
              },
              {
                heading: "Product Presentation:",
                desc: "Restructured product content and visuals to give customers a clearer understanding of the belts, their features, fit, and benefits. Product-focused sections were also arranged to create a more consistent presentation throughout the store.",
              },
              {
                heading: "Custom Belt Builder:",
                desc: "Built a custom belt customization section where customers can select their preferred buckle and create a belt based on their personal style. The experience was structured to make the available choices easy to understand and navigate.",
              },
              {
                heading: "Shopify Implementation:",
                desc: " Turned the approved design direction into a functional Shopify storefront using theme customization and custom sections. The development focused on matching the new layouts while keeping the storefront flexible for Vittelo’s products and content.",
              },
            ],
        
            outcomeimageVittelo: Vittelo,
            outcomeheadingVittelo: "Outcome",
            outcomepointsVittelo: "The redesign made Vittelo’s products easier to understand by organizing the belt features, fit, benefits, and customization options around the customer’s buying journey. The custom belt builder gives customers a more direct way to choose their preferred buckle and create a belt that fits their style, while the new Shopify sections give Vittelo more flexibility to present its products and content. ",
             learnheadingVittelo: "What I learned",
    learndescVittelo: "This project taught me how to design a product customization flow that feels simple and intuitive. I also learned how to present multiple product choices without making the buying process feel overwhelming.",
          };
  return (
    <section className="container">
      <WorkDetail project={project} />
    </section>
  )
}

export default VitteloPage