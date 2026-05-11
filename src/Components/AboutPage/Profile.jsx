import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import profileblur from "../../assets/Images/profileblur.svg";
import name from "../../assets/Images/name.svg";

import Overlay11 from "../../assets/Images/Overlay (38).svg";
import Overlay10 from "../../assets/Images/Overlay (39).svg";
import Overlay8 from "../../assets/Images/Overlay (40).svg";
import Overlay9 from "../../assets/Images/Overlay (41).svg";

import Overlay12 from "../../assets/Images/Overlay (42).svg";
import Overlay13 from "../../assets/Images/Overlay (43).svg";
import Overlay14 from "../../assets/Images/Overlay (44).svg";
import Overlay15 from "../../assets/Images/Overlay (45).svg";

function Profile() {
  const skills = [
    "Brand Design",
    "UI Design",
    "Figma",
    "Adobe After Effects",
    "Sketch",
    "Pen & Paper",
  ];

  const socialIcons = [Overlay11, Overlay10, Overlay8, Overlay9];
  const logos = [Overlay12, Overlay13, Overlay14, Overlay15];

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

  const skillItem = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      className="pt-[96px] lg:pt-[60px] text-white"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="container">
        <div className="px-[19px] sm:px-0 ">
          <div className="border border-[#1f1c1c] rounded-[8px] overflow-hidden">

          {/* HEADER BG */}
          <motion.img
            src={profileblur}
            alt="bg"
            className="w-full "
            variants={item}
          />

          <div className="px-[21px]  sm:px-[60px]">

            {/* HEADER */}
            <motion.div
              className="relative -mt-10 sm:-mt-14 lg:-mt-20 pb-[28px] lg:pb-[40px]"
              variants={container}
            >
              <div className="flex flex-row lg:items-end lg:justify-between ">

                {/* LEFT */}
                <motion.div className="w-full lg:w-auto text-left" variants={container}>

                  <motion.div
                    className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[172px] lg:h-[172px]"
                    variants={item}
                  >
                    <img src={name} alt="profile" className="w-full h-full" />
                  </motion.div>

                  <motion.h2
                    variants={item}
                    className=" text-[21px] lg:text-[34px] leading-[42px] lg:pt-[23px] font-bold"
                  >
                    Jenny Wilson
                  </motion.h2>

                  <motion.p
                    variants={item}
                    className="text-[#BDBDBD] text-[12px] lg:text-[20px] "
                  >
                    Product Designer @ Google
                  </motion.p>

                  {/* LOCATION MOBILE */}
                  <motion.div variants={item} className="pt-[10px] lg:hidden flex">
                    <LocationTag />
                  </motion.div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap items-center gap-[17px] justify-center xl:gap-[41px]"
                  variants={container}
                >

                  {/* LOCATION DESKTOP */}
                  <motion.div variants={item} className="hidden lg:block">
                    <LocationTag />
                  </motion.div>

                  {/* SOCIAL */}
                  <motion.div className="flex gap-[10px] mt-[90px] lg:mt-0" variants={container}>
                    {socialIcons.map((icon, i) => (
                      <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center cursor-pointer"
                      >
                        <img src={icon} alt="icon" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* BUTTON */}
                  <motion.div variants={item}>
                    <Link to="/">
                      <button className="btn-slide text-[14px] lg:text-[16px] cursor-pointer rounded-[500px] text-black bg-white py-2 px-7 sm:px-17 lg:py-3 xl:px-16">
                        Hire Me
                      </button>
                    </Link>
                  </motion.div>

                </motion.div>
              </div>
            </motion.div>

            {/* CARDS */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[20px] pb-[31px] lg:pb-[30px]"
              variants={container}
            >

              {/* WORK */}
              <motion.div variants={item} className="md:bg-[#0E0C13] md:border-1 md:border-[#201c2c] md:pt-[32px] md:pl-[30px] md:pr-[92px] md:pb-[101px] rounded-[8px]">
                <h3 className="text-[18px] sm:text-[20px] pb-[4px]  font-bold lg:pb-[8px]">Work</h3>
                <p className="text-[12px] lg:text-[14px]  text-[#BDBDBD]">
                  Osinski, Kohler and Bashirian 74-102565
                </p>
              </motion.div>

              {/* SKILLS */}
              <motion.div variants={item} className="md:bg-[#0E0C13] md:border-1 md:border-[#201c2c]  md:pt-[32px] md:pl-[30px] md:pb-[30px] md:pr-[57px] rounded-[8px] ">
                <h3 className="text-[18px] pb-[4px] sm:text-[20px] font-bold lg:pb-[8px]">Skills</h3>
                <p className="text-[12px] lg:text-[14px] text-[#BDBDBD]">Osinski, Kohler and Bashirian 74-102565</p>
                <motion.div className="flex flex-wrap gap-[10px] pt-[9px]" variants={container}>
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillItem}
                      className="px-3 py-1.5 rounded-[8px] text-[12px] leading-[18px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#2c273c]"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* PORTFOLIO */}
              <motion.div variants={item} className="md:bg-[#0E0C13] md:border-1 md:border-[#201c2c] md:pt-[32px] md:pl-[30px] md:pb-[30px] md:pr-[154px] rounded-[8px]">
                <h3 className="text-[18px] sm:text-[20px] font-bold pb-2 md:pb-[10px]">
                  Portfolio Links
                </h3>

                <motion.div className="flex gap-[10px]" variants={container}>
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
              </motion.div>

            </motion.div>

            {/* ABOUT */}
            <motion.div className="pb-[23px] lg:pb-[42px]" variants={container}>
              <motion.h3 variants={item} className="text-[18px] lg:text-[20px] leading-[30px] font-bold pb-[16px] lg:pb-[20px]">
                Full-Stack Developer and a little bit of everything
              </motion.h3>

              <motion.p variants={item} className="text-[12px] lg:text-[14px] leading-[24px] text-[#BDBDBD]">
              I'm Ankush Kumar, a proactive full-stack developer passionate about  creating dynamic web experiences. From frontend to backend, I thrive on  solving complex problems with clean, efficient code. My expertise spans  React, Next.js, and Node.js, and I'm always eager to learn more.
              </motion.p>

              <motion.p variants={item} className="text-[12px] lg:text-[14px] text-[#BDBDBD] leading-[24px]">
               When I'm not immersed in work, I'm exploring new ideas and staying curious.  Life's about balance, and I love embracing every part of it.
              </motion.p>

              <motion.p variants={item} className="text-[12px] lg:text-[14px] text-[#BDBDBD] leading-[24px]">
                I believe in waking up each day eager to make a difference!
              </motion.p>
            </motion.div>

          </div>
        </div>

        </div>
      </div>
    </motion.section>
  );
}

function LocationTag() {
  return (
    <div className="relative inline-block rounded-md p-[1.5px] overflow-hidden lg:mt-4">
      <span className="absolute -inset-[264%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(#3A1C71,#DF7A78,#DF7A78,#3A1C71)]"></span>

      <div className="relative z-10 flex items-center gap-1 rounded-md bg-[#181818] px-2 py-1 text-[10px] sm:text-sm text-white">
        <FaLocationDot className="text-[#FFAF7B]" />
        <span className="text-[#c58962]">London, United Kingdom</span>
      </div>
    </div>
  );
}

export default Profile;