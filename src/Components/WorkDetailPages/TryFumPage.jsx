import React from "react";
import WorkDetail from "../WorkPage/WorkDetail";
import first from "../../assets/Images/new1.svg";
import second from "../../assets/Images/new2.svg";
import third from "../../assets/Images/new3.svg";
import firstImg from "../../assets/Images/FIRST.svg";
import contribution from "../../assets/Images/contribution.svg";
import newchall from "../../assets/Images/newchall.svg";
import impimg from "../../assets/Images/impimg.svg";
import fullImage from "../../assets/Images/fullImage.svg";
import firstdouble from "../../assets/Images/firstdouble.svg";
import secondsingle from "../../assets/Images/secondsinle.svg";
import bothimage from "../../assets/Images/bothimage.svg";
import outcomeimage from "../../assets/Images/outcomeimage.svg";
function TryFumPage() {
  const project = {
    id: 1,
    slug: "tryfum",
    title: "TryFum",
    image: firstImg,
    heading: "FÜM — The Good Habit",
    desc: "FÜM is a DTC eCommerce brand that provides nicotine-free products designed to help people replace smoking and vaping habits. The brand sells reusable flavored-air devices, flavor cores, and accessory products through its online store.",
    role: "Full Stack Shopify Developer",
    visit: " https://tryfum.com/",
    our: "Our Contribution",
    contrubutionimage: contribution,
    points: [
      "Custom Shopify development",
      "Theme customization",
      "CRO optimization",
      "Custom sections",
      "Upsell",
      "UX improvements",
      "Mobile optimization",
      "Performance optimization",
    ],
    btnname: "View the final experience",
    btnLink: "https://tryfum.com/",
    challenge: newchall,
    Challheading: "Challenges",
    Challdesc:
      "The client wanted to increase online sales, improve product discovery, and make it easier for customers to understand and choose the right FÜM products<br/> <br/> One of the key challenges was managing a variety of flavors and presenting them clearly without overwhelming customers. Another challenge involved creating an intuitive product-selection flow so customers could easily choose their preferred flavors. <br/> <br/> We also had to maintain consistent product information across multiple variants while keeping the storefront fast, responsive, and easy to navigate on mobile device",
    implementimage: impimg,
    impheading: "Implementation Process",
    impheadesc:
      "I started with discovery, clarifying their website’s needs and requirements. By analyzing the existing Shopify store, product catalog, customer journey, and overall user experience. I identified areas where customers could face friction, especially when browsing the wide range of flavors, selecting products, and exploring different bundles <br/> <br/> I customized the Shopify theme and developed reusable Shopify 2.0 sections to create a flexible and scalable storefront. I worked on key product sections to present product benefits, flavor options, variants, and reviews <br/> <br/> I worked on the bundle and subscription experience to simplify product selection and purchasing. I refined the product layouts, CTAs, navigation, and supporting content to create a smoother customer journey from product discovery to checkout.",
    imgsection: [bothimage, fullImage],
    keyheading: "Key Areas of Improvement",
    firstdbl: firstdouble,
    secondsngl: secondsingle,
    keyPoints: [
      {
        heading: "Flavor Selection:",
        desc: " I worked on the flavor-selection process where customers can choose from multiple FÜM Core flavors such as Mango, Crisp Mint, Peach Blush, Sparkling Grapefruit, Spearmint Ice, and other options. The selection interface also shows flavor characteristics such as sweetness, throat hit, and flavor notes.",
      },
      {
        heading: "Bundle Selection:",
        desc: "Create bundles so customers could quickly compare different bundles and choose the one that best matched their requirements, including Journey Pack, Everything Pack, Cores Bundle, and Complete Cores Bundle.",
      },
      {
        heading: "Subscription:",
        desc: "Integrate subscription purchasing across key bundle offerings, including the Journey Pack and Everything Pack, giving customers a straightforward way to select recurring purchases alongside one-time purchase options. The store currently promotes Cores Club with a 30% savings message.",
      },
      {
        heading: "Accessory Upsells:",
        desc: " Add accessory selection directly into the product journey, including Toppers, FÜM Base, and alternative device barrels. This gives customers the option to add accessories while they build their main product package.",
      },
      {
        heading: "Product Page Optimization:",
        desc: "I optimized the product pages directly around the purchasing flow, including product details, flavor options, pricing, subscription choices, and key product benefits in a clear structure. This approach gives customers relevant information while they make their selections",
      },
    ],

    outcomeimage: outcomeimage,
    outcomeheading: "Outcomes",
    outcomepoints: [
      "Improved Clarity & Conversion",
      "Mobile-Optimized Buying Experience",
      "Improved overall customer journey from product selection to checkout.",
      "Increased conversions through CRO and UX improvements.",
    ],
    learnheading: "What I Learned",
    learndesc: "This project strengthened my ability to work with a complex DTC eCommerce brand and make practical decisions around product presentation and customer behavior. I also deeper my understanding of building conversion-focused Shopify storefronts for products with multiple variants and purchasing options. It helped to balance design flexibility, business goals, custom Shopify development, responsive UX, performance, and conversion optimization within Shopify.",
  };

  return (
    <>
      <section className="container">
        <WorkDetail project={project} />
      </section>
    </>
  );
}

export default TryFumPage;
