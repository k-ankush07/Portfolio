import image99 from "../assets/Images/image 99.svg";
import image2 from "../assets/Images/secondSectionImage.svg";
import image3 from "../assets/Images/thirdSection.svg";
import imagefull from "../assets/Images/image1full.svg";
import imagefull2 from "../assets/Images/fullImage2.svg";
import newImage from "../assets/Images/newImage.svg";
import secondLastSection from "../assets/Images/secondLastSection.svg";


const projectsData = {

  tryfum: {
    title: "TryFum",
    highlight: "",
    description:
      "TryFum is a health-focused Shopify store built to improve conversion rates through a faster checkout flow, clearer product storytelling, and a custom-built subscription experience.",
    techStack: "Shopify (Custom Development)",
    updated: "Q4 2024",
    role: "Full-stack Developer",
    visit: "tryfum.com",
    built: "Q4 2024",
    source: "GitHub",

    sections: [
      {
        websitePt: "pt-[20px]",
        websitebp: "pb-[20px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: image99,
        fum: "TryFum — Breaking the Habit",
        websiteRedesign: "Website Redesign · Conversion Optimization · Health",
        fumpara:
          "TryFum wanted a store that felt less like a typical eCommerce checkout and more like a guided wellness journey. The focus was on reducing friction between discovery and purchase.",
      },
      {
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        reverse: true,
        websiteRedesign: "",
        image: image2,
        fum: "Our Contribution",
        pointes: [
          "Custom Shopify Theme Development",
          "Checkout Conversion Optimization",
          "Subscription Flow Design",
          "Product Page Restructuring",
          "Speed & Performance Tuning",
        ],
        buttonText: "View the final experience",
        buttonLink: "#",
      },
      {
        websitePt: "pt-[20px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        websiteRedesign: "",
        image: image3,
        fum: "The Challenge",
        fumpara:
          "TryFum's existing store had a high cart-abandonment rate due to a cluttered checkout and unclear subscription terms. <br/><br/> Customers needed to understand the health benefits, view transparent pricing, and commit to a subscription without confusion. <br/><br/> The challenge was to simplify this journey while keeping the storytelling around the brand's mission intact.",
      },
    ],

    keyInfo: {
      title: "Key Areas of Improvement",
      items: [
        {
          number: 1,
          heading: "Simplified Checkout",
          description:
            "The multi-step checkout was reduced into a single, guided flow.",
          bullets: [
            "Removed unnecessary form fields.",
            "Added a visible progress indicator.",
            "Introduced express payment options.",
          ],
        },
        {
          number: 2,
          heading: "Subscription Clarity",
          description:
            "Subscription terms are now shown clearly before checkout begins.",
          bullets: [
            "Added a transparent pricing breakdown.",
            "Explained pause/cancel options upfront.",
            "Highlighted savings for subscribers.",
          ],
        },
        {
          number: 3,
          heading: "Faster Load Times",
          description:
            "Page speed was optimized across the store.",
          bullets: [
            "Compressed and lazy-loaded images.",
            "Reduced third-party script bloat.",
            "Improved Core Web Vitals scores.",
          ],
        },

        { sectionHeading: "Process" },
        {
          headinginner: "Discovery",
          descriptioninner:
            "Reviewed existing analytics to identify where users were dropping off.",
        },
        {
          headinginner: "Wireframing",
          descriptioninner:
            "Simplified checkout and subscription flows were wireframed before development.",
        },
        {
          headinginner: "Development",
          descriptioninner:
            "Built using a custom Shopify theme with optimized Liquid templates.",
        },

        { sectionHeading: "Key Features" },
        {
          headinginner: "One-Page Checkout",
          descriptioninner:
            "Reduces steps needed to complete a purchase.",
        },
        {
          headinginner: "Subscription Manager",
          descriptioninner:
            "Lets customers manage frequency and pause subscriptions easily.",
        },
      ],
      cards: [
        { label: "Before", image: imagefull },
        { label: "After", image: imagefull2 },
      ],
    },

    afterSections: [
      {
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: secondLastSection,
        fum: "Key Outcomes",
        funparapt: "pt-[20px]",
        fumpara:
          "<b>Higher checkout completion</b><br/>Cart abandonment dropped significantly after the redesign.<br/><br/><b>Clearer subscription adoption</b><br/>More customers opted into subscriptions thanks to transparent terms.",
      },
      {
        reverse: true,
        paddinBottom: "pb-[10px] lg:pb-[52px]",
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        image: newImage,
        fum: "Result",
        funparapt: "pt-[20px]",
        fumpara:
          "TryFum now has a store that supports its health mission with a frictionless, trustworthy shopping experience. <br/><br/><b>A faster, clearer path from browsing to buying.</b>",
      },
    ],
  },

  
  syncform: {
    title: "Syncform",
    highlight: "",
    description:
      "SyncForm is a Shopify app that helps merchants create and customize forms for their stores without technical expertise. From contact and inquiry forms to custom data-collection forms, merchants can build forms through a simple interface and add them to their storefront without writing code.",
    role: "Shopify App Developer",
    visit: "https://apps.shopify.com/syncform",

    sections: [
    //   {
    //     websitePt: "pt-[20px]",
    //     websitebp: "pb-[20px]",
    //     leftwidth: "lg:w-[53%]",
    //     rightwidth: "lg:w-[47%]",
    //     image: image99,
    //     fum: "Syncform — Redefining Fashion Retail",
    //     websiteRedesign: "UI/UX Design · Shopify Development · Fashion",
    //     fumpara:
    //       "Syncform needed a store that matched the boldness of its fashion line — a visual identity that felt premium, modern, and easy to shop.",
    //   },
      {
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        reverse: true,
        websiteRedesign: "",
        image: image2,
        fum: "My Contribution:",
        pointes: [
          "UI/UX Design",
          "Shopify App Development",
          "Form Builder Architecture",
          "API Integration",
          "Performance & Usability",
        ],
        buttonText: "View the final experience",
        buttonLink: "https://apps.shopify.com/syncform",
      },
      {
        websitePt: "pt-[20px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        websiteRedesign: "",
        image: image3,
        fum: "The Challenge",
        fumpara:
          "Syncform's old store looked generic and didn't reflect the brand's fashion-forward identity. <br/><br/> Product discovery was difficult, with no clear way to browse by style or collection. <br/><br/> The goal was to design a visually striking, easy-to-navigate store that felt as premium as the products themselves.",
      },
    ],

    keyInfo: {
      title: "Key Areas of Improvement",
      items: [
        {
          number: 1,
          heading: "Visual Identity Overhaul",
          description:
            "A bold new design language was introduced across the store.",
          bullets: [
            "Custom typography and color palette.",
            "Editorial-style product photography layout.",
            "Consistent brand tone throughout.",
          ],
        },
        {
          number: 2,
          heading: "Improved Product Discovery",
          description:
            "Collections are now easier to browse and filter.",
          bullets: [
            "Added collection-based filtering.",
            "Introduced a lookbook-style gallery.",
            "Simplified category navigation.",
          ],
        },
        {
          number: 3,
          heading: "Mobile Experience",
          description:
            "The mobile store was redesigned for smoother browsing.",
          bullets: [
            "Optimized touch navigation.",
            "Faster mobile page loads.",
            "Simplified mobile checkout.",
          ],
        },

        { sectionHeading: "Process" },
        {
          headinginner: "Brand Discovery",
          descriptioninner:
            "Studied Syncform's fashion positioning to define the visual direction.",
        },
        {
          headinginner: "Design System",
          descriptioninner:
            "Built a reusable component library for consistent styling.",
        },
        {
          headinginner: "Development",
          descriptioninner:
            "Implemented the design into a fully custom Shopify theme.",
        },

        { sectionHeading: "Key Features" },
        {
          headinginner: "Lookbook Gallery",
          descriptioninner:
            "Showcases outfits in an editorial, scrollable format.",
        },
        {
          headinginner: "Collection Filters",
          descriptioninner:
            "Lets shoppers quickly narrow down by style, size, and color.",
        },
      ],
      cards: [
        { label: "Before", image: imagefull },
        { label: "After", image: imagefull2 },
      ],
    },

    afterSections: [
      {
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: secondLastSection,
        fum: "Key Outcomes",
        funparapt: "pt-[20px]",
        fumpara:
          "<b>Stronger brand perception</b><br/>The new visual identity elevated how customers perceive the brand.<br/><br/><b>Better product discovery</b><br/>Shoppers now find relevant items faster.",
      },
      {
        reverse: true,
        paddinBottom: "pb-[10px] lg:pb-[52px]",
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        image: newImage,
        fum: "Result",
        funparapt: "pt-[20px]",
        fumpara:
          "Syncform now has a store that feels as fashion-forward as the products it sells. <br/><br/><b>A premium shopping experience built for a modern fashion brand.</b>",
      },
    ],
  },

  
  cartplus: {
    title: "Cart Plus",
    highlight: "",
    description:
      "Cart Plus is a supplements brand focused on speed and subscription optimization, rebuilt to load faster and convert one-time buyers into subscribers.",
    techStack: "Shopify (Performance Optimization)",
    updated: "Q2 2024",
    role: "Performance Engineer",
    visit: "cartplus.com",
    built: "Q2 2024",
    source: "GitHub",

    sections: [
      {
        websitePt: "pt-[20px]",
        websitebp: "pb-[20px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: image99,
        fum: "Cart Plus — Built for Speed",
        websiteRedesign: "Speed Optimization · Subscription Growth · Supplements",
        fumpara:
          "Cart Plus needed a store that loaded instantly and made it effortless for customers to subscribe to their favorite supplements.",
      },
      {
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        reverse: true,
        websiteRedesign: "",
        image: image2,
        fum: "Our Contribution",
        pointes: [
          "Site Speed Optimization",
          "Subscription Flow Redesign",
          "Image & Script Optimization",
          "Checkout Improvements",
          "Performance Monitoring Setup",
        ],
        buttonText: "View the final experience",
        buttonLink: "#",
      },
      {
        websitePt: "pt-[20px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        websiteRedesign: "",
        image: image3,
        fum: "The Challenge",
        fumpara:
          "Cart Plus's store had slow load times, which was hurting both SEO and conversions. <br/><br/> Subscription sign-ups were also low due to a confusing sign-up flow. <br/><br/> The goal was to dramatically improve speed while making subscriptions the easy, obvious choice.",
      },
    ],

    keyInfo: {
      title: "Key Areas of Improvement",
      items: [
        {
          number: 1,
          heading: "Page Speed",
          description:
            "Core Web Vitals were significantly improved.",
          bullets: [
            "Reduced JavaScript bundle size.",
            "Implemented lazy loading for images.",
            "Removed unused third-party apps.",
          ],
        },
        {
          number: 2,
          heading: "Subscription Optimization",
          description:
            "The subscription flow was redesigned to boost sign-ups.",
          bullets: [
            "Added a one-click subscribe toggle.",
            "Highlighted subscriber discounts clearly.",
            "Simplified frequency selection.",
          ],
        },
        {
          number: 3,
          heading: "Checkout Speed",
          description:
            "Checkout was optimized for fewer steps and faster processing.",
          bullets: [
            "Reduced form fields.",
            "Added express payment options.",
            "Improved mobile checkout speed.",
          ],
        },

        { sectionHeading: "Process" },
        {
          headinginner: "Performance Audit",
          descriptioninner:
            "Ran detailed audits to identify speed bottlenecks.",
        },
        {
          headinginner: "Optimization",
          descriptioninner:
            "Implemented fixes across images, scripts, and third-party apps.",
        },
        {
          headinginner: "Subscription Redesign",
          descriptioninner:
            "Rebuilt the subscription UI for clarity and simplicity.",
        },

        { sectionHeading: "Key Features" },
        {
          headinginner: "Instant Load Pages",
          descriptioninner:
            "Pages now load significantly faster across devices.",
        },
        {
          headinginner: "One-Click Subscribe",
          descriptioninner:
            "Makes subscribing as easy as a single click.",
        },
      ],
      cards: [
        { label: "Before", image: imagefull },
        { label: "After", image: imagefull2 },
      ],
    },

    afterSections: [
      {
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: secondLastSection,
        fum: "Key Outcomes",
        funparapt: "pt-[20px]",
        fumpara:
          "<b>Faster load times</b><br/>Page speed improved dramatically across the store.<br/><br/><b>Higher subscription rate</b><br/>More customers converted to recurring subscribers.",
      },
      {
        reverse: true,
        paddinBottom: "pb-[10px] lg:pb-[52px]",
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        image: newImage,
        fum: "Result",
        funparapt: "pt-[20px]",
        fumpara:
          "Cart Plus now delivers a fast, subscription-friendly shopping experience. <br/><br/><b>Speed and simplicity working together to drive growth.</b>",
      },
    ],
  },

  
  woahbros: {
    title: "Woahbros",
    highlight: "",
    description:
      "Woahbros spans Auto & Moto and Cosmetics niches, launched with a custom landing page and Shopify theme customization to support multiple product lines.",
    techStack: "Shopify (Theme Customization)",
    updated: "Q1 2024",
    role: "Shopify Developer",
    visit: "woahbros.com",
    built: "Q1 2024",
    source: "GitHub",

    sections: [
      {
        websitePt: "pt-[20px]",
        websitebp: "pb-[20px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: image99,
        fum: "Woahbros — One Store, Two Worlds",
        websiteRedesign: "Landing Page · Theme Customization · Auto & Cosmetics",
        fumpara:
          "Woahbros needed a store that could support two very different product categories — auto & moto gear and cosmetics — without feeling disjointed.",
      },
      {
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        reverse: true,
        websiteRedesign: "",
        image: image2,
        fum: "Our Contribution",
        pointes: [
          "Custom Landing Page Design",
          "Shopify Theme Customization",
          "Multi-Category Navigation",
          "Brand-Specific Styling",
          "Cross-Category Cart Experience",
        ],
        buttonText: "View the final experience",
        buttonLink: "#",
      },
      {
        websitePt: "pt-[20px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        websiteRedesign: "",
        image: image3,
        fum: "The Challenge",
        fumpara:
          "Woahbros wanted to sell both auto & moto products and cosmetics from a single store without confusing customers. <br/><br/> The store needed a flexible navigation system and a landing page that could clearly introduce both categories. <br/><br/> The challenge was maintaining one cohesive brand while serving two very different audiences.",
      },
    ],

    keyInfo: {
      title: "Key Areas of Improvement",
      items: [
        {
          number: 1,
          heading: "Multi-Category Navigation",
          description:
            "A clear navigation system was built to separate the two product worlds.",
          bullets: [
            "Split navigation by category from the homepage.",
            "Added category-specific landing sections.",
            "Reduced cross-category confusion.",
          ],
        },
        {
          number: 2,
          heading: "Custom Landing Page",
          description:
            "A dedicated landing page introduces both product lines clearly.",
          bullets: [
            "Designed distinct visual sections per category.",
            "Added clear calls-to-action for each audience.",
            "Improved first-impression clarity.",
          ],
        },
        {
          number: 3,
          heading: "Theme Flexibility",
          description:
            "The Shopify theme was customized to support varied product types.",
          bullets: [
            "Built flexible product templates.",
            "Customized filtering per category.",
            "Unified checkout across both lines.",
          ],
        },

        { sectionHeading: "Process" },
        {
          headinginner: "Category Research",
          descriptioninner:
            "Studied how to present two unrelated product categories cohesively.",
        },
        {
          headinginner: "Landing Page Design",
          descriptioninner:
            "Designed a landing page that splits attention clearly between categories.",
        },
        {
          headinginner: "Theme Customization",
          descriptioninner:
            "Customized the Shopify theme to handle both catalogs smoothly.",
        },

        { sectionHeading: "Key Features" },
        {
          headinginner: "Dual-Category Landing",
          descriptioninner:
            "Introduces both auto & moto and cosmetics clearly on entry.",
        },
        {
          headinginner: "Unified Checkout",
          descriptioninner:
            "Customers can shop across both categories in a single cart.",
        },
      ],
      cards: [
        { label: "Before", image: imagefull },
        { label: "After", image: imagefull2 },
      ],
    },

    afterSections: [
      {
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: secondLastSection,
        fum: "Key Outcomes",
        funparapt: "pt-[20px]",
        fumpara:
          "<b>Clearer category separation</b><br/>Customers now navigate both product lines with ease.<br/><br/><b>Improved first impressions</b><br/>The new landing page communicates the brand instantly.",
      },
      {
        reverse: true,
        paddinBottom: "pb-[10px] lg:pb-[52px]",
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        image: newImage,
        fum: "Result",
        funparapt: "pt-[20px]",
        fumpara:
          "Woahbros now runs two product worlds under one seamless store experience. <br/><br/><b>One brand, two audiences, zero confusion.</b>",
      },
    ],
  },

  
  smash: {
    title: "Smash",
    highlight: "",
    description:
      "Smash is a multi-niche Shopify App supporting Art Gallery, Food & Beverages, Home & Furniture, and Jewelry sellers with a flexible, app-driven storefront.",
    techStack: "Shopify App Development",
    updated: "Q4 2023",
    role: "Shopify App Developer",
    visit: "smashapp.com",
    built: "Q4 2023",
    source: "GitHub",

    sections: [
      {
        websitePt: "pt-[20px]",
        websitebp: "pb-[20px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: image99,
        fum: "Smash — One App, Many Stores",
        websiteRedesign: "Shopify App · Multi-Niche Support",
        fumpara:
          "Smash was built as a Shopify App to give sellers across very different niches — art, food, furniture, and jewelry — a flexible way to customize their storefronts.",
      },
      {
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        reverse: true,
        websiteRedesign: "",
        image: image2,
        fum: "Our Contribution",
        pointes: [
          "Shopify App Architecture",
          "Multi-Niche Template System",
          "Merchant Dashboard Design",
          "App Store Listing Optimization",
          "Cross-Store Customization Tools",
        ],
        buttonText: "View the final experience",
        buttonLink: "#",
      },
      {
        websitePt: "pt-[20px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        ptsection: "lg:pt-[40px]",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        websiteRedesign: "",
        image: image3,
        fum: "The Challenge",
        fumpara:
          "Smash needed to serve merchants across completely different niches with a single app. <br/><br/> Each niche required different layout needs — art needed galleries, food needed menus, furniture needed room-view displays, jewelry needed zoom features. <br/><br/> The challenge was building one flexible system that could adapt to all of them.",
      },
    ],

    keyInfo: {
      title: "Key Areas of Improvement",
      items: [
        {
          number: 1,
          heading: "Flexible Template System",
          description:
            "A modular template system was built to adapt to different niches.",
          bullets: [
            "Created niche-specific layout modules.",
            "Allowed merchants to mix and match sections.",
            "Reduced setup time for new stores.",
          ],
        },
        {
          number: 2,
          heading: "Merchant Dashboard",
          description:
            "A simple dashboard lets merchants configure their storefront.",
          bullets: [
            "Added drag-and-drop section builder.",
            "Included live preview while editing.",
            "Simplified app installation flow.",
          ],
        },
        {
          number: 3,
          heading: "Performance Across Niches",
          description:
            "The app was optimized to perform well regardless of store type.",
          bullets: [
            "Reduced app load time on storefronts.",
            "Optimized image handling per niche.",
            "Ensured consistent performance at scale.",
          ],
        },

        { sectionHeading: "Process" },
        {
          headinginner: "Niche Research",
          descriptioninner:
            "Studied layout needs across art, food, furniture, and jewelry sellers.",
        },
        {
          headinginner: "App Architecture",
          descriptioninner:
            "Designed a modular system that adapts to different merchant needs.",
        },
        {
          headinginner: "Dashboard Development",
          descriptioninner:
            "Built an intuitive dashboard for merchants to configure their store.",
        },

        { sectionHeading: "Key Features" },
        {
          headinginner: "Modular Layout Builder",
          descriptioninner:
            "Lets merchants build a storefront suited to their niche.",
        },
        {
          headinginner: "Live Preview",
          descriptioninner:
            "Merchants see changes in real time while customizing.",
        },
      ],
      cards: [
        { label: "Before", image: imagefull },
        { label: "After", image: imagefull2 },
      ],
    },

    afterSections: [
      {
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[53%]",
        rightwidth: "lg:w-[47%]",
        image: secondLastSection,
        fum: "Key Outcomes",
        funparapt: "pt-[20px]",
        fumpara:
          "<b>Broader merchant adoption</b><br/>Sellers across multiple niches successfully use the app.<br/><br/><b>Faster store setup</b><br/>Merchants configure their storefront in significantly less time.",
      },
      {
        reverse: true,
        paddinBottom: "pb-[10px] lg:pb-[52px]",
        ptsection: "lg:pt-[40px]",
        borderTop: "lg:border-t",
        borderColor: "lg:border-[#FFFFFF]/10",
        leftwidth: "lg:w-[47%]",
        rightwidth: "lg:w-[53%]",
        image: newImage,
        fum: "Result",
        funparapt: "pt-[20px]",
        fumpara:
          "Smash now powers stores across four completely different niches from one flexible app. <br/><br/><b>One tool, endless storefront possibilities.</b>",
      },
    ],
  },

};

export default projectsData;