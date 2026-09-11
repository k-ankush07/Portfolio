import React from "react";
import arrow from "../../assets/Images/arrow.svg";
import RecruiterOne from "./RecruiterOne";
import { motion } from "framer-motion";

import first from "../../assets/Images/blacksale.svg";
import second from "../../assets/Images/new2.svg";
import third from "../../assets/Images/new3.svg";
import fourth from "../../assets/Images/response.svg";
import fifth from "../../assets/Images/new4 (2).svg";
import sixth from "../../assets/Images/new4 (3).svg";
import seventh from "../../assets/Images/new5 (1).svg";
import eighth from "../../assets/Images/new5 (2).svg";
import ninth from "../../assets/Images/new5 (3).svg";
import ten from "../../assets/Images/new6 (1).svg";
import eleven from "../../assets/Images/new6 (2).svg";
import new7 from "../../assets/Images/new7 (1).svg";
import new71 from "../../assets/Images/new7 (2).svg";
import new72 from "../../assets/Images/new7 (3).svg";
// import first from "../../assets/Images/1st.svg";
// import second from "../../assets/Images/2nd.svg";
// import third from "../../assets/Images/3rd.svg";
// import fourth from "../../assets/Images/4th.svg";
// import fifth from "../../assets/Images/5th.svg";
// import sixth from "../../assets/Images/6th.svg";
// import seventh from "../../assets/Images/7th.svg";
// import eighth from "../../assets/Images/8th.svg";
// import ninth from "../../assets/Images/9th.svg";
// import ten from "../../assets/Images/10th.svg";
// import eleven from "../../assets/Images/11th.svg";
import twelve from "../../assets/Images/12th.svg";
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
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
import { Link } from "react-router-dom";
function ViewAll() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col px-[20px] md:px-0 ">
          <RecruiterOne
            index={0}
            link="/work/tryfum"
            techStack={[liquid, html, css,javascript,jquery,]}
            headingText="TryFum"
            points={[
              "Custom Shopify theme development and section customization tailored to the provided designs.",
              "Advanced product selection experience with flavor options, product variants, bundles, and product information.",
              "Subscription and recurring-purchase functionality with optimized flows for repeat customers.",
              "Conversion-focused PDP improvements, including bundle selection, product benefits, social proof, and sticky purchase actions.",
              "Responsive, performance-focused storefront development across desktop, tablet, and mobile."
            ]}
            desc=" A high-converting DTC eCommerce store developed to showcase FÜM nicotine-free products and guide customers toward the right products, flavors, and bundles."
            
            leftImg={third}
            centerImg={second}
            rightImg={first}
          />
          <RecruiterOne
            index={1}
            link="/work/syncform"
            techStack={[html ,css, javascript,jquery,react,typescript,nodejs,tailwind,express,scscss,adminapi,storeapi,graphql,restfull,webhook,mongodb,cicd]}
            headingText="Syncform"
            desc="A Shopify form builder built to help merchants create and manage custom forms without complex development. "
            points={[
              "Developed custom form-building functionality for creating flexible forms based on different merchant requirements.",
              "Built the complete frontend and backend of the Shopify app, handling the project from development to feature implementation.",
              "Built customizable form fields, layouts, validation, and submission workflows.",
              "Developed the core app functionality and Shopify integration to connect forms with merchants’ stores.",
              "Improved the UI and overall user experience to make form creation simple and easy to navigate.",
              "Developed responsive interfaces that work consistently across desktop, tablet, and mobile devices."
            ]}
            leftImg={sixth}
            centerImg={fifth}
            rightImg={fourth}
          />
          <RecruiterOne
            index={2}
            link="/work/cartplus"
            techStack={[react,typescript,tailwind,jquery,nodejs,express,html,css,scscss,adminapi,storeapi,graphql,restfull,webhook,mongodb,git]}
            headingText=" Cart Plus"
            desc="A Shopify cart drawer app built to improve the shopping experience and increase cart conversions. The app focuses on cart customization, upselling, product recommendations, rewards, and a smoother checkout journey."
            points={[
              "Completely handling both frontend and backend development from feature development to ongoing improvements.",
              "Customizable cart drawer with dynamic product updates and cart management.",
              "Built customizable form fields, layouts, validation, and submission workflows.",
              "Upsell and cross-sell features that promote relevant products inside the cart.",
              "Worked on the overall app experience to make the cart faster, smoother, and easier for merchants and their customers to use.",
            ]}
            leftImg={ten}
            centerImg={eleven}
            // rightImg={seventh}
          />
          <RecruiterOne
            index={3}
            link="/work/woahbros"
            techStack={[html,scscss,liquid,jquery,javascript,graphql]}
            headingText="Woahbros"
            desc="A workwear eCommerce store focused on flame-resistant clothing and gear for welders and hardworking professionals"
            points={[
              "Custom Shopify storefront development and theme customization.",
              "Developed product pages for FR shirts, welding gear, tees, hats, and accessories.",
              "Integrated Klaviyo to support email marketing and customer communication.",
              "Customized the cart drawer with product recommendations, free-shipping messaging, and quick add-to-cart functionality.",
              "Implemented conversion-focused sections highlighting product quality, customer reviews, guarantees, and brand messaging.",
            ]}
            leftImg={new71}
            centerImg={new7}
            rightImg={new72}
          />
          <RecruiterOne
            index={4}
            link="/work/smash"
            techStack={[html,css,jquery,liquid,scscss,javascript]}
            headingText="Smash"
            desc="A fitness and nutrition eCommerce store selling supplements such as creatine gummies, pre-workout gummies, nitric oxide products, and performance-focused formulas."
            points={[
              "Designed the complete storefront UI, including layouts, product presentation, and visual elements based on the brand’s identity.",
              "Developed product pages with detailed product information, benefits, reviews, and purchase options.",
              "Built engaging product sections to showcase creatine gummies, pre-workout products, and other supplements.",
              "Optimized the storefront structure to improve product discovery and guide customers toward relevant products.",
            ]}
            leftImg={ninth}
            centerImg={eighth}
            rightImg={seventh}
          />
        </div>

        <div className="text-[#FFFFFF] text-[14px] md:text-[16px] flex justify-center pt-[17px] lg:pt-[12px]">
          <Link to="/work" >
          <div className="flex gap-[9px]  xl:gap-[10px] justify-center items-center group cursor-pointer">
            <h1 className="transition-all duration-300 group-hover:bg-[linear-gradient(to_right,#8F74BF_0%,#B57FA5_40%,#D76D77_99%,#FFAF7B_100%)] group-hover:bg-clip-text group-hover:text-transparent ">
              View all Projects
            </h1>

            <motion.img
              src={arrow}
              alt="arrow"
              className="lg:h-10 lg:w-10 group-hover:scale-110 transition-all duration-500"
              // whileHover={{ scale: 1.15 }}
              // transition={{ duration: 0.3 }}
            />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ViewAll;
