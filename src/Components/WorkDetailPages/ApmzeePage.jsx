import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import image101 from "../../assets/Images/d.svg"
import image1012 from "../../assets/Images/p.svg"
import image10172 from "../../assets/Images/o.svg"
import image101723 from "../../assets/Images/t.svg"
import first from "../../assets/Images/first1 (1).svg"
import first1 from "../../assets/Images/first1 (2).svg"
import challenegmobile from "../../assets/Images/challenegmobile.svg"
import new341 from "../../assets/Images/new34 (1).svg"
import new342 from "../../assets/Images/new34 (2).svg"
import new3422 from "../../assets/Images/Apmzee 2.svg"
import Apmzee from "../../assets/Images/Apmzee.mp4"

function ApmzeePage() {
     const project = {
                id: 1,
                slug: "apmzee",
                title: "WoahBros",
                image: image101,
                reverseFirstSection: true,
                contentwidth:30,
                imagewidth:70,
                heading: "Apmzee— The Good Habit",
                desc: "APMZEE is a UK-based health and wellness ecommerce brand focused on active longevity, everyday performance, and long-term vitality. This is for primarily adults aged 30+, who want to maintain their energy, strength, mental sharpness, recovery, movement, and sleep as they get older. It is different from traditional supplements by presenting nutrition as part of a broader lifestyle and performance system.",
                role: "Shopify Developer",
                visit: " https://apmzee.com/",
                our: "My Contribution",
                contrubutionimage: image1012,
                // constributionitemcenter:"item-center",
                points: [
                  "Theme Customization",
                  "Conversion Rate Optimization (CRO)",
                  "Ecommerce Development",
                ],
                btnname: "View the final experience",
                btnLink: " https://apmzee.com/",
                challengenew: image10172,
                mobilechallenegImage:challenegmobile,
                // reversechallengeSection: true,
                Challheadingnew: "Challenges",
                showBordercontent:false,
                showBorderImage:true,
                Challdescnew:
                  "The primary goal is to optimize the Product and Collection pages, focusing on user interface improvements to make customer journey more seamless and enjoyable. <br/> <br/> Apmzee had a Concept Shopify theme with several code issues adversely affecting website page load speed and the overall customer experience. This was especially a concern on mobile devices. In addition, they lacked an upsell strategy and were looking at UX improvements and increasing their conversion rate and average order value (AOV).",
                implementimage:image101723 ,
                impheading: "Implementation Process",
                impheadesc:
                  "I started by auditing the existing Concept Shopify theme, focusing on the Product and Collection pages, mobile experience, theme structure, and overall customer journey. I identified areas where the existing layout, navigation, content hierarchy, and theme code created friction for customers. I then optimized the Liquid, CSS, and JavaScript code to remove unnecessary elements, improve asset loading, and create a faster storefront experience on desktop, tablet, and mobile",
                imgsection: [new341, new342],
                keyheading: "Key Areas of Improvements",
                firstdbl: first,
                secondsngl: new3422,
                paddingtopsecondimagemobile:25,
                paddingtopsecondimage:40,
                keyPoints: [
                  {
                    heading: "Product Page UX:",
                    desc: "Restructured product pages to present key product benefits, pricing, subscription options, reviews, product details, and CTAs in a clearer hierarchy. Improved the overall layout to help customers understand the product and make purchasing decisions faster.",
                  },
                  {
                    heading: "Theme Performance:",
                    desc: "Reviewed the existing Shopify theme code and optimized Liquid, CSS, JavaScript, and page assets. Reduced unnecessary code and optimized storefront elements to improve loading speed and overall performance.",
                  },
                  {
                    heading: "Slide Cart & Dynamic Upsells::",
                    desc: "Integrated an inline slide-out cart with progress bars for free shipping and targeted cross-sell recommendations. And the recently viewed column on the cart drawer.",
                  },
                  {
                    heading: "Sticky “Add to Cart” Button: ",
                    desc: "Adding a sticky “Add to Cart” button to product pages on both desktop and mobile. This means that as a user scrolls through a product’s details, the button remains visible at the bottom of their screen. Shoppers can easily add items to their cart without having to scroll back up.",
                  },
                ],
            
                outcomeimage: Apmzee,
                // contentwidth:35,
                // imgwidth:65,
                outcomeheading: "Key Outcomes",
                outcomepoints: [
                  "Better Performance",
                  "Higher Conversion Potentials",
                  "Increase AOV",
                  "Better Product Discovery",
                ],
                // learnheading: "What I Learned",
                // learndesc: "This project taught me how important brand trust is for eCommerce stores. Clear product information, professional design, customer reviews, trust signals, strong visuals, and consistent branding can make customers feel more confident about purchasing.",
              };
  return (
    <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default ApmzeePage