import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import lion from "../../assets/Images/lion.svg"
import contrinew from "../../assets/Images/contrinew.svg"
import challengenew from "../../assets/Images/challengenew.svg"
function Lonepouches() {
    const project = {
        id: 1,
        slug: "tryfum",
        title: "TryFum",
        image: lion,
        reverseMobile: true,
        reverseDesktop: false,
        imagewidth: 63,     
        contentwidth: 37,
        contentpr: 87,
        heading: "Lonepouches— The Good Habit",
        desc: "Lone Pouches is a U.S.-based nicotine pouch brand that sells tobacco-free, smoke-free oral nicotine products for adults who already use nicotine. Its pouches use synthetic nicotine and six core ingredients, including xylitol, MCT oil, baking soda, and essential oils. The store sells multiple pouch flavors and strengths, including Crisp Menthol, Cinnamon, Wintergreen, and Variety Packs, along with branded apparel and accessories.",
        role: " Shopify Developer",
        visit: "https://lonepouches.com/",
        contributionwidth: 40,       
       contributionimagewidth: 60,
       contributionimagepr: 116,
        our: "My Contribution",
        contrubutionimage: contrinew,
        points: [
          "E-commerce Development",
          "Theme Upgrade",
          "Subscription optimization",
        ],
        btnname: "View the final experience",
        btnLink: "https://lonepouches.com/",
        challenge: challengenew,
        Challheading: "Challenges",
        Challdesc:
          "The primary challenges for the Lone Pouches project were optimizing the store while maintaining compliance and a smooth shopping experience. The project required a strict age-verification process that did not interrupt the customer journey. The theme upgrade also needed to maintain existing app integrations, subscription functionality, and strong mobile performance without disrupting the live store.",
        // implementimage: impimg,
        impheading: "Implementation Process",
        impheadesc:
          "I started with discovery, clarifying their website’s needs and requirements. By analyzing the existing Shopify store, product catalog, customer journey, and overall user experience. I identified areas where customers could face friction, especially when browsing the wide range of flavors, selecting products, and exploring different bundles <br/> <br/> I customized the Shopify theme and developed reusable Shopify 2.0 sections to create a flexible and scalable storefront. I worked on key product sections to present product benefits, flavor options, variants, and reviews <br/> <br/> I worked on the bundle and subscription experience to simplify product selection and purchasing. I refined the product layouts, CTAs, navigation, and supporting content to create a smoother customer journey from product discovery to checkout.",
        // imgsection: [bothimage, fullImage],
        keyheading: "Key Areas of Improvement",
        // firstdbl: firstdouble,
        // secondsngl: secondsingle,
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
    
        // outcomeimage: outcomeimage,
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
    <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default Lonepouches