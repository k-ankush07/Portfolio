import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import happyfirst from "../../assets/Images/happyfirst.svg"
import happycontribution from "../../assets/Images/happycontri.svg"
import happychallenge from "../../assets/Images/happychallenge.svg"
import happyimplement from "../../assets/Images/hapyimplement.svg"
import mobilehappy from "../../assets/Images/mobilehappy.svg"
import desktophappy from "../../assets/Images/desktophappy.svg"
import lionhappy from "../../assets/Images/lionhappy.svg"
import HAPPYSTUF from "../../assets/Images/HAPPYSTUF.mp4"

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
function HappyStufPage() {
      const project = {
         id: 1,
         slug: "happystuf",
         title: "Happy Stuf",
         imageHappyStuf: happyfirst,
         headingHappyStuf: "Happy Stuf — The Good Habit",
         descHappyStuf: "Happy Stuf is a wellness and supplement brand that sells vitamins, gummies, powders, and targeted wellness products. Its product range focuses on everyday needs such as energy, sleep, immunity, performance, recovery, and overall wellness. The store features different supplements and formulas created to support specific wellness goals and fit into everyday routines.",
         role: "Shopify Developer",
         logo:[{html,css,jquery,scscss,javascript,sass}],
         visit: " https://happystuf.com/",
         ourHappyStuf: "My Contribution",
         contrubutionimageHappyStuf: happycontribution,
         pointsHappyStuf: [
           "Shopify Store Optimization",
           "Conversion Rate Optimization (CRO)",
           "Product Page Optimization",
           "UI/UX Improvements",
           "Speed Optimization",
         ],
         btnnameHappyStuf: "View the final experience",
         btnLinkHappyStuf: " https://happystuf.com/",
         challengeHappyStuf: happychallenge,
         ChallheadingHappyStuf: "Challenges",
         ChalldescHappyStuf:
           "Happy Stuf had a growing range of vitamins, gummies, powders, and wellness formulas, but the store did not make it easy for shoppers to browse products based on their specific wellness needs. <br/> <br/>Product pages also lacked a strong purchase flow. Key product information, benefits, and buying elements competed for attention, making it harder for visitors to understand a product and move confidently toward checkout.<br/> <br/>The storefront also carried unnecessary elements and resources that affected page load times. This became more noticeable on mobile, where slower loading could interrupt the shopping experience. ",
         implementimageHappyStuf: happyimplement,
         impheadingHappyStuf: "Implementation Process",
         impheadescHappyStuf:
           "I started by reviewing the existing store structure, product organization, and shopping journey, then reorganized product discovery around key wellness benefits. I refined the product pages to give product information, benefits, quantity options, and purchase actions a clearer hierarchy.<br/> <br/>I also removed unnecessary storefront elements and resources to improve page loading, then refined the desktop and mobile layouts for a cleaner and more consistent shopping experience.",
         imgsectionHappyStuf: [mobilehappy, desktophappy],
         keyheadingHappyStuf: "Key Areas of Improvement",
         secondsnglHappyStuf: lionhappy,
         keyPointsHappyStuf: [
           {
             heading: "Intuitive, Goal-Oriented Product Discovery:",
             desc: "Restructured the storefront's catalog and navigation around specific wellness objectives—such as daily essentials, beauty, and fitness—rather than generic product types. By introducing clear, visual category pathways directly from the homepage, shoppers can quickly identify formulas tailored to their health goals, significantly reducing browsing friction across both desktop and mobile devices.",
           },
           {
             heading: "Stronger Product Experience:",
             desc: "Refined product pages to organize product information, benefits, ingredients, and usage details into a clearer content structure, helping shoppers understand the product before purchasing.",
           },
           {
             heading: "Clearer Purchase Options:",
             desc: "Improved the quantity-based purchase experience by clearly presenting single and multi-unit options, along with the savings for buying more, so shoppers can compare choices at a glance.",
           },
         ],
         outcomeimageHappyStuf: HAPPYSTUF,
        outcomeheadingHappyStuf: "Outcomes",
        outcomepointsHappyStuf: [
        "Simplified product discovery",
        "Improved product engagement",
        "Clearer purchase decisions",
        "Stronger brand presentation",
        ],
         learnheadingHappyStuf: "What I Learned",
         learndescHappyStuf: "This project taught me that simplifying the user journey directly drives sales. Organizing products around what customers are actually trying to achieve, making pricing and bulk savings obvious at a glance, and keeping pages fast and uncluttered makes the entire buying process effortless and builds real confidence to complete the purchase . ",
       };
  return (
    <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default HappyStufPage