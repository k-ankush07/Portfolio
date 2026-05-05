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
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, y: 30, scale: 0.7 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 12 },
    },
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-black text-white">
      <div className="container">
        <div className="border border-[#1f1c1c] rounded-[8px] overflow-hidden">

          {/* HEADER BG */}
          <img src={profileblur} alt="bg" className="w-full" />

          <div className="px-4 sm:px-6 lg:px-[60px]">

            {/* HEADER */}
            <div className="relative -mt-10 sm:-mt-14 lg:-mt-20 pb-8">
              <div className="flex flex-row lg:items-end lg:justify-between lg:gap-6">

                {/* LEFT */}
                <div className="w-full lg:w-auto text-left">
                  <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[172px] lg:h-[172px]  lg:mx-0">
                    <img src={name} alt="profile" className="w-full h-full" />
                  </div>

                  <h2 className="mt-3 text-[21px] sm:text-2xl lg:text-[34px] font-bold">
                    Jenny Wilson
                  </h2>

                  <p className="text-[#BDBDBD] text-[12px] sm:text-base">
                    Product Designer @ Google
                  </p>

                  {/* LOCATION (mobile) */}
                  <div className="mt-3 lg:hidden flex lg:justify-center">
                    <LocationTag />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center xl:gap-15">

                  {/* LOCATION (desktop) */}
                  <div className="hidden lg:block">
                    <LocationTag />
                  </div>

                  {/* SOCIAL */}
                  <motion.div
                    className="flex gap-2 mt-[90px] lg:mt-0"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {socialIcons.map((icon, i) => (
                      <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        className=" flex items-center justify-center rounded-md bg-[#1a1a1a] cursor-pointer"
                      >
                        <img src={icon} alt="icon" className="" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* BUTTON */}
                  <Link to="/" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto text-black rounded-full bg-white py-3 px-7 sm:px-17 lg:py-3 lg:px-8  xl:px-17 text-[14px] sm:text-base">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">

              {/* WORK */}
              <div className="bg-[#0E0C13] border border-[#1f1f1f] p-5 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Work</h3>
                <p className="text-sm text-[#BDBDBD]">
                  Osinski, Kohler and Bashirian 74-102565
                </p>
              </div>

              {/* SKILLS */}
              <div className="bg-[#0E0C13] border border-[#1f1f1f] p-5 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Skills</h3>
                <p className="text-sm text-[#BDBDBD]">
                  Osinski, Kohler and Bashirian 74-102565
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillItem}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="px-3 py-1.5 rounded-[8px] text-xs bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* PORTFOLIO */}
              <div className="bg-[#0E0C13] border border-[#1f1f1f] p-5 rounded-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Portfolio Links
                </h3>

                <motion.div
                  className="flex gap-3 mt-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
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

            {/* ABOUT */}
            <div className="pb-10">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Full-Stack Developer and a little bit of everything
              </h3>
              <p className="text-sm text-[#BDBDBD] leading-relaxed">
                I'm Aayush Bharti, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to backend,
                I thrive on solving complex problems with clean, efficient code.
                My expertise spans React, Next.js, and Node.js, and I'm always
                eager to learn more.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/*  Reusable Location Component */
function LocationTag() {
  return (
    <div className="relative inline-block rounded-md p-[1.5px] overflow-hidden lg:mt-4">
      <span className="absolute -inset-[250%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(#3A1C71,#DF7A78,#DF7A78,#3A1C71)]"></span>

      <div className="relative z-10 flex items-center gap-1  rounded-md bg-[#181818] px-2 py-1 text-[10px] sm:text-sm text-white">
        <FaLocationDot className="text-[#FFAF7B]" />
        <span className="text-[#c58962]">
          London, United Kingdom
        </span>
      </div>
    </div>
  );
}

export default Profile;