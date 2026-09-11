import React from "react";
import cardCircle from "../../assets/Images/circlenew.svg";
import { FaLocationDot } from "react-icons/fa6";
import Overlay11 from "../../assets/Images/Overlay (38).svg";
import Overlay10 from "../../assets/Images/Overlay (39).svg";
import Overlay8 from "../../assets/Images/Overlay (40).svg";
import Overlay9 from "../../assets/Images/Overlay (41).svg";
import Overlay12 from "../../assets/Images/Overlay (42).svg";
import Overlay13 from "../../assets/Images/Overlay (43).svg";
import Overlay14 from "../../assets/Images/Overlay (44).svg";
import Overlay15 from "../../assets/Images/Overlay (45).svg";
import background1 from "../../assets/Images/Background+Blur.svg";
import background2 from "../../assets/Images/Background+Blur (1).svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// for images
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

// for text
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const mainContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4, // section-level delay
    },
  },
};
const skillItem = {
  hidden: { opacity: 0, y: 30, scale: 0.7 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 12,
    },
  },
};

function FullStack() {
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN;
  const credly = import.meta.env.VITE_CREDLY;

  const EMAIL = import.meta.env.VITE_EMAIL;
  const CALENDLY = import.meta.env.VITE_CALENDLY;
  const WHATSAPP = import.meta.env.VITE_WHATSAPP;

  const emailLink = `mailto:${EMAIL}`;
  const calendlyLink = CALENDLY;
  const whatsappLink = `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}`;
  const skills = [
    "Web Development",
    "CRO",
    "A/B Testing",
    "AI Automation",
    "Performance Optimization",
    "Speed Optimization",
    "SEO",
    "Brand Design",
    "UI/UX",
    "Analytics & Tracking",
  ];
  // const logos = [Overlay12, Overlay13, Overlay15];
  // const socialIcons = [ Overlay10, Overlay8, Overlay9];
  const logos = [
    { img: Overlay12, link: "https://your-link-4.com" },
    { img: Overlay13, link: "https://your-link-5.com" },
    { img: Overlay14, link: "https://your-link-6.com" },
    { img: Overlay15, link: "https://your-link-7.com" },
  ];
  const socialIcons = [
    { img: Overlay10, link: emailLink },
    { img: Overlay8, link: calendlyLink },
    { img: Overlay9, link: whatsappLink },
  ];
  return (
    <section className=" px-[20px] md:px-0 ">
      <div className="container ">
        <div className="bg-[#000000] xl:flex   border  items-center  border-[#292929] rounded-[8px] relative pt-[29px] pb-[25px] pr-[28px] pl-[30px]  lg:py-0  lg:px-0 lg:pt-[39px] lg:pb-[38px] lg:pl-[40px] lg:pr-[59px]">
          <img
            src={background1}
            alt=" "
            className="absolute bottom-0 -left-10 lg:right-70 opacity-20 overflow-hidden"
          />
          <img
            src={background2}
            alt=" "
            className="absolute bottom-0 right-0 opacity-25 overflow-hidden"
          />
          {/* first card section */}
          <div className="md:flex  xl:pr-[67px]  xl:w-[30%]  ">
            <div className="border pt-[30px] lg:pt-[40px] pb-[30px] z-50 lg:pb-[40px]  2xl:px-[75px] border-[#8F74BF54] w-full rounded-[8px] bg-[#8F74BF1A] ">
              <div className=" flex justify-center ">
                <img src={cardCircle} alt="card circle" />
              </div>
              <motion.div
                variants={textContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mt-4 z-50"
              >
                <motion.h1
                  variants={textItem}
                  className="text-[21px]  leading-[42px] sm:text-[24px] lg:leading-[48px] font-bold text-[#FFFFFF]"
                >
                  Ankush Kumar
                </motion.h1>
                <motion.p
                  variants={textItem}
                  className=" text-[12px] sm:text-[13px] lg:text-[14px] leading-[21px] lg:leading-[24px] text-[#BDBDBD]"
                >
                  Shopify Developer & CRO Specialist
                </motion.p>
              </motion.div>
              {/* <div className='flex justify-center'>
                                <div className="flex justify-center">
                                    <div className="relative inline-block mt-[11px] rounded-md p-[1.5px] overflow-hidden">

                                       
                                        <span className="absolute -inset-[250%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(#3A1C71,#DF7A78,#DF7A78,#3A1C71)]"></span>

                                       
                                        <div className="relative z-10 flex items-center gap-1 rounded-md bg-[#181818] px-2 py-1.5 text-[10.59px] sm:text-[12px] leading-[15px] lg:leading-[18px] xl:px-2 text-white">

                                            <span className="text-[#FFAF7B] px-1 py-1">
                                                <FaLocationDot />
                                            </span>

                                            <span className="text-[#c58962]">
                                                London, United Kingdom
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div> */}

              <motion.div
                className="flex justify-center gap-[8px] pt-[17px]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {socialIcons.map(({ img, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={item}
                    className="cursor-pointer relative z-[1]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={img} alt="logo" />
                  </motion.a>
                ))}
              </motion.div>
              {/* <motion.div
                                className="flex justify-center gap-[8px] pt-[17px]"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {socialIcons.map((img, i) => (
                                    <motion.img
                                        key={i}
                                        src={img}
                                        alt="logo"
                                        variants={item}
                                        className="cursor-pointer relative z-[1]"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                ))}
                            </motion.div> */}

              <div className="flex justify-center">
                <Link to="">
                  <button className=" btn-slide cursor-pointer relative z-1 text-[#000] rounded-[500px] bg-[#FFFFFF]  py-3 px-[55px] mt-[17px] sm:px-15 xl:px-14 text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] ">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:flex sm:pt-[10px] xl:pt-[0px]  xl:w-[70%] z-50   ">
            {/* second section */}
            <div className=" sm:flex  justify-between md:border-r-[1px] w-[287px] lg:w-auto  border-[#FFFFFF]/10 xl:pr-[67px] pt-[32px] xl:pt-0 ">
              <div className="w-[100%]">
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h1
                    variants={textItem}
                    className="text-[#FFFFFF] font-bold text-[18px] lg:text-[20px]"
                  >
                    Work
                  </motion.h1>

                  <motion.p
                    variants={textItem}
                    className="text-[#BDBDBD] text-[12px] lg:text-[14px]"
                  >
                    8+ Years of Experience
                  </motion.p>
                  <motion.p
                    variants={textItem}
                    className="text-[#BDBDBD] text-[12px] lg:text-[14px]"
                  >
                    Shopify Development, CRO & E-commerce
                  </motion.p>

                  <motion.div
                    className="pt-[15px] lg:pt-[33px]"
                    variants={textContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.h1
                      variants={textItem}
                      className="text-[#FFFFFF] text-[18px]  lg:text-[20px] font-bold"
                    >
                      Skills
                    </motion.h1>
                    {/* <motion.p variants={textItem} className='text-[#BDBDBD] text-[12px] lg:text-[14px]'>Osinski, Kohler and Bashirian 74-102565</motion.p> */}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex flex-wrap gap-[10px] pt-[9px] max-w-[350px] text-[12px]"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {skills.map((itemText, i) => (
                    <motion.div
                      key={i}
                      variants={skillItem}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="pt-[3px] pb-[4px] px-[10px]  rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54] cursor-pointer"
                    >
                      {itemText}
                    </motion.div>
                  ))}
                </motion.div>
                <div className="pt-[20px] lg:pt-[39px]">
                  <h1 className="text-[#FFFFFF] text-[18px] leading-[48px] lg:text-[20px] font-bold lg:mb-1">
                    Portfolio Links
                  </h1>

                  <motion.div
                    className="flex gap-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {logos.map(({ img, link }, i) => (
                      <motion.a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={item}
                        className="cursor-pointer relative z-[1]"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img src={img} alt="logo" />
                      </motion.a>
                    ))}
                  </motion.div>
                  {/* <motion.div
                                        className="flex gap-2"
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        {logos.map((img, i) => (
                                            <motion.img
                                                key={i}
                                                src={img}
                                                alt="logo"
                                                variants={item}
                                                className="cursor-pointer relative z-[1]"
                                                whileHover={{ scale: 1.1 }}
                                            />
                                        ))}
                                    </motion.div> */}
                </div>
              </div>
            </div>

            {/* 3rd section */}
            <motion.div
              className="flex pt-[31px]  lg:justify-center items-center md:pt-0 md:pl-[67px]"
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <div>
                  <motion.h1
                    variants={textItem}
                    className="text-[#FFFFFF] text-[18px] leading-[24px] lg:text-[20px] lg:leading-[30px] font-bold max-w-[282px] lg:max-w-[310px]"
                  >
                    {/* Full-Stack Developer and a little bit of everything */}
                    Shopify Developer, CRO Specialist, and a Little Bit of
                    Myself
                  </motion.h1>

                  <div className="space-y-1 text-[#BDBDBD] text-[12px] leading-[20px] lg:text-[14px] lg:leading-[24px] max-w-[400px]">
                    <motion.p
                      variants={textItem}
                      className=" pt-[16px] lg:pt-[24px]"
                    >
                      I'm Ankush, a Shopify Developer and conversion specialist
                      passionate about building and scaling ecommerce brands. I
                      handle both frontend and backend development, from
                      creating custom Shopify stores and optimizing store
                      performance to improving user journeys and conversion
                      rates. I have gained a lot of valuable experience from
                      previous work and achieved what i set out to do. Build
                      fully custom code stores, integrate AI workflows, a/b
                      test, store optimization, custom theme and app
                      development, speed optimization, and SEO practices. I
                      enjoy learning latest technologies, testing different
                      ideas, and finding better ways to improve store results.
                    </motion.p>

                    <motion.p variants={textItem}>
                      When I'm not working on Shopify stores, I'm exploring new
                      technologies, studying ecommerce trends, and looking for
                      better ways to create seamless shopping experiences.
                    </motion.p>

                    {/* <motion.p variants={textItem}>
                                            I believe in waking up each day eager to make a difference!
                                        </motion.p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullStack;
