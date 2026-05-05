import React from "react";
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
import Next from "../../assets/Images/rsection (3).svg";
import pnpm from "../../assets/Images/rsection (4).svg";
import PostgreSQL from "../../assets/Images/rsection (1).svg";
import Redis from "../../assets/Images/rsection (2).svg";
import Vercel from "../../assets/Images/rsection (3).svg";

import work from "../../assets/Images/work.svg";
import newlocation from "../../assets/Images/newlocation.svg";
import { motion } from "framer-motion";

function Engineer({
  index = 0,
  date,
  logo,
  heading,
  heading1,
  heading2,
  para1,
  span1,
  para2,
  span2,
  para3,
  span3,
  para4,
  span4,
}) {

  //  container stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  //  common item animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="sticky py-0 flex top-10 lg:pb-[40px]"
      style={{ zIndex: 10 }}
    >
      <div className="container">

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="image_background bg-neutral-900 flex flex-col lg:flex-row rounded-[8px]"
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }} 
            className="lg:w-[30%] text-white space-y-4 sm:space-y-6 pt-[20px] sm:pt-[30px] lg:pt-[60px] px-[15px] sm:px-[25px] lg:pl-[63px]"
          >

            <span className="text-[11px] sm:text-[12px] px-3 py-1 text-[#FFAF7B] rounded-[8px] bg-white/10 border border-white/10 inline-block">
              {date}
            </span>

            <div className="flex items-center pt-[10px] sm:pt-[15px] gap-2 sm:gap-3">
              <img src={logo} alt="logo" className="w-[28px] sm:w-[36px]" />
              <h2 className="text-[20px] sm:text-[26px] lg:text-[40px] font-bold">
                {heading}
              </h2>
            </div>

            <div className="text-[12px] sm:text-sm pt-[10px] sm:pt-[15px] text-[#BDBDBD] space-y-1 sm:space-y-2">
              <p className="flex gap-2 items-center">
                <img src={newlocation} alt="location" className="w-4 h-4" />
                London Area, United Kingdom
              </p>
              <p className="flex gap-2 items-center">
                <img src={work} alt="work" className="w-4 h-4" />
                Full-time · Remote
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="hidden lg:block h-[80%] w-px bg-white/10" />
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-[70%] text-white space-y-3 sm:space-y-4 pt-[20px] sm:pt-[30px] lg:pt-[50px] px-[15px] sm:px-[25px] lg:pr-[63px] lg:pl-[53px] pb-[25px] sm:pb-[35px] lg:pb-[46px]"
          >

            <div>

              <motion.h2
                variants={item}
                className="text-[22px] sm:text-[28px] lg:text-[40px] font-bold leading-tight"
              >
                {heading1}{" "}
                <span className="bg-[linear-gradient(to_right,#FF9A8B_0%,#FF6A88_50%,#FFB199_100%)] bg-clip-text text-transparent">
                  {heading2}
                </span>
              </motion.h2>

              <motion.p variants={item} className="para_class text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] mt-3">
                {para1} <span className="text-[#BDBDBD]">{span1}</span>
              </motion.p>

              <motion.p variants={item} className="para_class text-[13px] sm:text-[14px] mt-3">
                {para2} <span className="text-[#BDBDBD]">{span2}</span>
              </motion.p>

              <motion.p variants={item} className="para_class text-[13px] sm:text-[14px] mt-3">
                {para3} <span className="text-[#BDBDBD]">{span3}</span>
              </motion.p>

              <motion.p variants={item} className="para_class text-[13px] sm:text-[14px] mt-3">
                {para4} <span className="text-[#BDBDBD]">{span4}</span>
              </motion.p>

              {/* Icons */}
              <motion.div
                className="flex flex-wrap gap-2 mt-4 sm:w-[320px] lg:w-[384px]"
                variants={container}
              >
                {[Docker, Bun, Next, pnpm, PostgreSQL, Redis, Vercel].map((img, i) => (
                  <motion.img
                    key={i}
                    variants={item}
                    whileHover={{ scale: 1.15 }}
                    src={img}
                    alt="logo"
                  />
                ))}
              </motion.div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Engineer;