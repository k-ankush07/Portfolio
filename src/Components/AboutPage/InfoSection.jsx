import React from "react";
import { motion } from "framer-motion";
import userImage from "../../assets/Images/userimage.svg";
import Overlay12 from "../../assets/Images/Overlay (42).svg";
import Overlay13 from "../../assets/Images/Overlay (43).svg";
import Overlay14 from "../../assets/Images/Overlay (44).svg";
import Overlay15 from "../../assets/Images/Overlay (45).svg";
function InfoSection() {
     const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const logos = [Overlay12, Overlay13, Overlay14, Overlay15];
  return (
    <section className="container">
      <div className="  flex flex-col-reverse lg:flex-row lg:justify-between gap-[23px] lg:gap-[92px]  pt-[60px]">
        {/* left section  */}
        <div className="max-w-[689px] lg:w-[50%] ">
          <div className="max-w-[500px] ">
            <h2 className=" text-[30px] leading-[27px] lg:text-[40px] text-[#FCFCFC] lg:leading-[48px] font-bold ">
              I’m Ankush, a  <br />
              creative{" "}
              <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                {/* engineer */}
                Shopify Developer
              </span>
            </h2>
          </div>
          <div className=" pt-[5px] lg:pt-[10px] text-[#BDBDBD] text-[12px] leading-[20px]  lg:text-[14px] lg:leading-[24px] ">
            <p>
              I'm Ankush, a Shopify developer and conversion rate optimization specialist focused on building fast, modern, and high-converting e-commerce experiences. I turn custom Figma designs and complex ideas into clean, seamless Shopify stores that look high-end and convert browsers into buyers.

              <br /> <br />
              From custom Liquid themes and app integrations to page speed optimization, I love working across the e-commerce stack to solve technical challenges with efficient code. I'm constantly analyzing user journeys, testing CRO strategies, and refining store performance to make sure every visitor interaction drives revenue.

              <br /> <br />
              When I'm not optimizing stores, I'm usually exploring new web frameworks, testing fresh design trends, or refining my development workflow. I believe great e-commerce sites come from paying close attention to user psychology, writing clean maintainable code, and constantly pushing for better results.
            </p>
            <br /> <br />
            {/* <p>
              I build with curiosity, create with purpose, and always look for
              what's next.
            </p> */}
            <motion.div className="flex gap-[11px] pt-[17px]  lg:pt-[30px]" variants={container}>
                  {logos.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      variants={item}
                      whileHover={{ scale: 1.1 }}
                      className="cursor-pointer"
                      alt="logo"
                    />
                  ))}
                </motion.div>
          </div>
        </div>
        <div className="flex lg:w-[50%] px-[27px] ">
          <div>
            <div className="border-[1px] lg:shrink-0 border-[#FFFFFF] rounded-[18px] lg:rounded-[30px] p-[15px] ">
            <div className="border-[1px] rounded-[18px] lg:rounded-[30px] border-[#FFFFFF]/30">
              <img src={userImage} alt="User"  className=" w-full   h-auto object-cover  scale-110  md:scale-105"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
