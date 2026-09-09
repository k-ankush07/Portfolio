import React from 'react'
import WorkDetail from '../WorkPage/WorkDetail';
import image101 from  "../../assets/Images/image 101.svg"
import my from  "../../assets/Images/my.svg"
import image99 from  "../../assets/Images/image 99 (5).svg"
import image66 from  "../../assets/Images/image 99 (6).svg"
import woa1 from  "../../assets/Images/woa (1).svg"
import woa2 from  "../../assets/Images/woa (2).svg"
import first from  "../../assets/Images/first4 (1).svg"
import second from  "../../assets/Images/first4 (2).svg"
import out from  "../../assets/Images/out.svg"
function WoahBrospAGE() {
      const project = {
        id: 1,
        slug: "woahbros",
        title: "WoahBros",
        image: image101,
        reverseMobile: false,
        reverseDesktop: false,
        heading: "WoahBros — The Good Habit",
        desc: "WoahBros is an eCommerce brand focused on flame-resistant (FR) workwear and welding gear for welders and industrial professionals. The store combines safety-focused products with bold, distinctive designs that appeal to the welding community. Its catalog includes FR shirts, welding hoods, gloves, arm pads, T-shirts, hoodies, hats, and stickers.",
        role: "Shopify and Klaviyo Developer",
        visit: "https://woahbros.us/",
        our: "My Contribution",
        contrubutionimage: my,
        points: [
          "Landing Page Development",
          "Theme Upgrade",
          "Klaviyo Flows & Email Templates",
        ],
        btnname: "View the final experience",
        btnLink: "https://woahbros.us/",
        challenge: image99,
        Challheading: "Project Challenges",
        Challdesc:
          "The client needed a reliable way to collect customer data and build a stronger customer database through the Shopify store. The existing storefront did not provide enough opportunities to capture customer information at important points in the customer journey. And want to set up Klaviyo so they use it for targeted email marketing to drive conversion.",
        implementimage: image66,
        impheading: "Implementation Process",
        impheadesc:
          "I first reviewed the existing Shopify theme, customer journey, and available customer touchpoints to identify where the store could collect more customer data. During our initial work and store analysis, we identified several key challenges that the client was facing. The store needed better opportunities to collect customer data, a more structured theme experience, and stronger landing pages to support customer engagement. <br/> <br/> I connected the customer data collection points with Klaviyo and structured the required customer properties and events for marketing automation.",
        imgsection: [woa1, woa2],
        keyheading: "Key Areas of Improvements",
        firstdbl: first,
        secondsngl: second,
        keyPoints: [
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
            desc: "To align with the store’s updates and branding refresh, we set up email marketing using Klaviyo. I created engaging email flows and templates, including:",
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
    
        outcomeimage: out,
        contentwidth:35,
        imgwidth:65,
        outcomeheading: "Outcomes",
        outcomepoints: [
          "Reduced abandoned cart rates",
          "Increased customer engagement",
          "Improved customer retention rate",
        ],
        learnheading: "What I Learned",
        learndesc: "This project taught me how small changes in the customer journey can create better opportunities for data collection and engagement. Working on the landing pages, theme, and Klaviyo flows gave me a better understanding of how technical decisions should support real business goals and customer behavior.",
      };
  return (
   <section className="container">
        <WorkDetail project={project} />
      </section>
  )
}

export default WoahBrospAGE