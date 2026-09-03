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
      <div className="  flex flex-col-reverse xl:flex-row lg:justify-between gap-[23px] lg:gap-[92px]  pt-[60px]">
        {/* left section  */}
        <div className="max-w-[689px] ">
          <div className="max-w-[329px] ">
            <h2 className=" text-[30px] leading-[27px] lg:text-[40px] text-[#FCFCFC] lg:leading-[48px] font-bold ">
              I'm Aayush, a <br />
              creative{" "}
              <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                engineer
              </span>
            </h2>
          </div>
          <div className=" pt-[5px] lg:pt-[10px] text-[#BDBDBD] text-[12px] leading-[20px]  lg:text-[14px] lg:leading-[24px] ">
            <p>
              I'm Aayush Bharti, a passionate full-stack developer focused on
              creating modern, responsive, and engaging digital experiences. I
              enjoy turning ideas into clean, functional websites and
              applications that feel as good as they work.
              <br /> <br />
              From frontend interfaces to backend functionality, I love working
              across the stack and solving complex problems with thoughtful,
              efficient code. I'm constantly exploring new technologies,
              improving my skills, and finding better ways to build for the web.
              <br /> <br />
              When I'm not coding, I'm usually exploring new ideas,
              experimenting with creative concepts, or learning something new. I
              believe great work comes from staying curious, paying attention to
              details, and continuously pushing yourself forward.
            </p>
            <br /> <br />
            <p>
              I build with curiosity, create with purpose, and always look for
              what's next.
            </p>
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
        <div className="flex  px-[27px]">
          <div className="border-[1px] border-[#FFFFFF] rounded-[18px] lg:rounded-[30px] p-[15px] ">
            <div className="border-[1px] rounded-[18px] lg:rounded-[30px] border-[#FFFFFF]/30">
              <img src={userImage} alt="User"  className="max-w-max-[449.px] scale-110 lg:scale-105"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
