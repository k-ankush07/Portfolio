import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import image1003 from "../../assets/Images/firstdion.svg"
import no from "../../assets/Images/no.svg"
import image997 from "../../assets/Images/dionchallenge.svg"
import image998 from "../../assets/Images/image 99 (8).svg"
import phone from "../../assets/Images/phone.svg"
import desktop from "../../assets/Images/desktop.svg"
import key from "../../assets/Images/beforeafterdion.svg"
import image993 from "../../assets/Images/image 99 (3).svg"
import gif from "../../assets/Images/doinkrollerz.mp4"
import outcomenew1 from "../../assets/Images/dionoutcome.svg"

function Doinkrollerz() {
  const project = {
    id: 1,
    slug: "Doinkrollerz",
    title: "Doinkrollerz",

    imageDoinkrollerz: image1003,
    reverseMobileDoinkrollerz: false,
    reverseDesktopDoinkrollerz: false,
    reverseFirstSectionDoinkrollerz: true,
    contentwidthDoinkrollerz: 35,
    imagewidthDoinkrollerz: 70,
    headingDoinkrollerz: "DoinkRoller — The Good Habit",
    descDoinkrollerz: "DoinkRollerz is an eCommerce brand that sells joint and blunt rolling tools along with smoking accessories. Its main product DoinkRoller making rolling faster, easier, and more consistent for beginners and experienced users. The store sells different roller sizes, multi-packs, rolling papers, grinders, pipes, ashtrays, and other accessories.",

    role: "Shopify Developer",
    visit: "https://www.doinkrollerz.com/",

    ourDoinkrollerz: "My Contribution",
    contrubutionimageDoinkrollerz: no,
    pointsDoinkrollerz: [
      "E-commerce Development",
      "Conversion Rate Optimization (CRO)",
      "UI/UX Design",
      "Strategic guidance"
    ],
    btnnameDoinkrollerz: "View the final experience",
    btnLinkDoinkrollerz: "https://www.doinkrollerz.com/",

    showBordercontentDoinkrollerz: true,
    showBorderImageDoinkrollerz: true,
    challengenewDoinkrollerz: image997,
    reversechallengeSectionDoinkrollerz: true,
    ChallheadingnewDoinkrollerz: "Challenges",
    ChalldescnewDoinkrollerz:
      "The biggest issue was that people didn't understand how the DoinkRoller actually worked just by looking at normal photos. Visitors come to the store, get confused, and leave without buying anything. <br/> Additionally, the store had low Average Order Value (AOV) because customers bought a single rolling tool and overlooked complementary accessories like papers, grinders, and ashtrays. <br/>  Most of the store's traffic came from mobile, but the old site was really hard to use on a mobile screen.",

    implementimageDoinkrollerz: image998,
    impheadingDoinkrollerz: "Implementation Process",
    impheadescDoinkrollerz:
      "During the store analysis the overall website design looked outdated and unpolished, which made the brand feel less trustworthy to new buyers. New store design focused on creating a cleaner visual structure, improving product presentation, and making the DoinkRoller easier to understand through clearer content and visuals. Product pages should have clear CTAs, trust elements, reviews, FAQs, and benefit-focused. <br/> <br/>Relevant accessories such as rolling papers, Mystery Box, and Glass Blizzy were integrated into the sticky add-to-cart to create more cross-selling and bundle opportunities. The overall implementation focused on improving brand perception, simplifying product discovery, and creating a smoother path to purchase.",

    imgsectionDoinkrollerz: [phone, desktop],
    keyheadingnewDoinkrollerz: "Key Areas of Improvements",
    firstdblnewDoinkrollerz: key,
    secondsnglnewDoinkrollerz: gif,
    keyPointsnewDoinkrollerz: [
      {
        heading: "Improved User Interface:",
        desc: " Enhance the website design to provide a more intuitive and visually appealing user experience. This includes optimizing layout, navigation, and overall layout to make it easier for visitors to find information and navigate the site.",
      },
      {
        heading: "Sticky \u201cAdd to Cart\u201d Button:",
        desc: "One of the key updates i made was adding a sticky \u201cAdd to Cart\u201d button to product pages on mobile. This means that as a user scrolls through a product's details, the button remains visible at the bottom of their screen. Shoppers can easily add items to their cart without having to scroll back up.",
      },
      {
        heading: "Cross-Selling & AOV:",
        desc: "Added relevant accessories and product recommendations instead of focusing only on the main roller to increase opportunities for multi-product purchases. Accessories such as rolling papers, Mystery Box, and Glass Blizzy on sliding cart drawer, creating more opportunities to increase the average order value.",
      },
      {
        heading: "Conversion-Focused Layout: ",
        desc: "Improve page structure, messaging, CTA placement, and customer flow while maintaining a strong and consistent brand identity throughout the shopping experience. Additionally video reviews, product information, guarantees, and other trust-building elements received stronger placement throughout the store. This approach helped address common concerns that first-time customers may have before purchasing.",
      },
    ],

    outcomeimageDoinkrollerz: outcomenew1,
    outcomeheadingDoinkrollerz: "Outcomes",
    outcomepointsDoinkrollerz: [
      "Increase conversion and AOV",
      "Strengthened brand trus",
      "Simplified product discovery",
      "Better product engagement",
    ],

    learnheadingDoinkrollerz: "What I Learned",
    learndescDoinkrollerz: "This project taught me how important brand trust is for eCommerce stores. Clear product information, professional design, customer reviews, trust signals, strong visuals, and consistent branding can make customers feel more confident about purchasing.",
  };

  return (
    <section className="container">
      <WorkDetail project={project} />
    </section>
  )
}

export default Doinkrollerz