import React, { useRef } from "react";
import shopify from "../../assets/Images/Vector (5).svg";
import star from "../../assets/Images/star.svg";
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
import Next from "../../assets/Images/rsection (3).svg";
import pnpm from "../../assets/Images/rsection (4).svg";
import PostgreSQL from "../../assets/Images/rsection (1).svg";
import Redis from "../../assets/Images/rsection (2).svg";
import Vercel from "../../assets/Images/rsection (3).svg";
import ViewDetail from "./ViewDetail";

import {
  motion,
} from "framer-motion";

function RecruiterOne({ index, desc }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="sticky py-0 sm:py-0 flex items-start top-7 " //  MOBILE FIXES
      style={{
        zIndex: 10 + index,
      }}
    >
      <div className="container">

        <div className="w-full h-full flex items-start justify-center">
          <div className="  px-2 sm:px-0 w-full flex-1 flex flex-col justify-center">

            <motion.div
              className="w-full lg:px-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="pb-4 sm:pb-6 lg:pb-8 sm:pt-2"> {/*  Consistent padding */}
                <div className="image_background flex flex-col lg:flex-row gap-6 lg:gap-[75px] lg:pl-[40px] pb-8 lg:pb-[40px] pt-4 lg:pt-[30px] lg:pr-[53px]">

                  {/* Left */}
                  <motion.div
                    variants={itemVariants}
                    className="w-full lg:w-[60%] rounded-xl flex relative mx-auto lg:mx-0"
                  >
                    <ViewDetail />
                  </motion.div>

                  {/* Right */}
                  <div className="flex flex-col justify-center mt-6 lg:mt-0 w-full lg:w-auto">
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2 sm:gap-3 text-white mb-6 lg:mb-1 flex-wrap"
                      whileHover={{ y: -3 }}
                    >
                      <img
                        src={shopify}
                        alt="shopify logo"
                        className="h-[28px] w-[24px] sm:h-[42px] sm:w-[37px] flex-shrink-0"
                      />
                      <motion.h1
                        variants={itemVariants}
                        className="text-[20px] sm:text-[26px] lg:text-[40px] font-bold leading-tight text-left lg:text-left"
                      >
                        Recruiter
                        <motion.span
                          className="bg-gradient-to-r from-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent inline-block ml-1"
                          whileHover={{ scale: 1.03, rotate: [0, 2, -2, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          One
                        </motion.span>
                      </motion.h1>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="md:max-w-[430px] mb-2 w-full hidden lg:block"
                    >
                      <motion.p
                        variants={itemVariants}
                        className="text-[#BDBDBD] leading-relaxed text-[14px] sm:text-[15px] lg:text-[16px] tracking-wide"


                      >
                        {desc}
                      </motion.p>
                    </motion.div>

                    {/* <motion.div 
                    variants={itemVariants}
                    className="mb-8 lg:mb-2 space-y-3 w-full hidden lg:block"
                  >
                    {[1, 2, 3].map((_, i) => (
                      <motion.div 
                        key={i} 
                        variants={itemVariants}
                        className="flex items-center gap-3 text-[#BDBDBD] text-[13px] sm:text-[14px]"
                        
                      >
                        <motion.img 
                          src={star} 
                          alt="star" 
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 "
                          
                        />
                        <span className="text-[#BDBDBD] text-[14px group-hover:font-normal">Lorem ipsum dolor sit amet consectetur.</span>
                      </motion.div>
                    ))}
                  </motion.div> */}
                    <motion.div
                      variants={itemVariants}
                      className="mb-8 lg:mb-2 space-y-3 w-full hidden lg:block"
                    >
                      {[1, 2, 3].map((_, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="flex items-center gap-3 text-[#BDBDBD] text-[13px] sm:text-[14px]"
                        >
                          <motion.img
                            src={star}
                            alt="star"
                            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                            animate={{
                              opacity: [0.7, 1, 0.7],
                              filter: [
                                'brightness(1)',
                                'brightness(2) drop-shadow(0 0 6px #FFAF7B)',
                                'brightness(1)'
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: i * 0.4,
                              ease: 'easeInOut',
                            }}
                          />
                          <span className="text-[#BDBDBD] text-[14px] group-hover:font-normal">
                            Lorem ipsum dolor sit amet consectetur.
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className="flex flex-wrap gap-2 sm:w-[400px] lg:w-[384px] mt-3"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.7 }}
                    >
                      {[Bun, Docker, Next, pnpm, PostgreSQL, Redis, Vercel].map((img, i) => (
                        <motion.img key={i} variants={item} src={img} alt="logo" />
                      ))}
                    </motion.div>
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
export default RecruiterOne;


