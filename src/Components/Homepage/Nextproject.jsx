import React, { useState } from "react";
import curveLine from "../../assets/Images/curveline.svg";
import Blur from "../../assets/Images/Gradient+Blur (1).svg";
import skilss1 from "../../assets/Images/skilssimages (1).svg";
import skilss2 from "../../assets/Images/skilssimages (2).svg";
import skilss3 from "../../assets/Images/skilssimages (3).svg";
// import skilss4 from "../../assets/Images/skilssimages (4).svg"
import skilss4 from "../../assets/Images/circlenews.svg";
import skilss5 from "../../assets/Images/skilssimages (5).svg";
import skilss6 from "../../assets/Images/skilssimages (6).svg";
import skilss7 from "../../assets/Images/skilssimages (7).svg";
import clippath from "../../assets/Images/clippath.svg";
import arrow from "../../assets/Images/arrow.svg";
import { motion } from "framer-motion";
function Nextproject() {
  const [show, setShow] = useState(false);

  const hideClass =
    "opacity-0 scale-75 -translate-y-8 transition-all duration-700";

  const showClass =
    "opacity-100 scale-100 translate-y-0 transition-all duration-700";

  // const container = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.15, //  delay between each image
  //     },
  //   },
  // };

const container = {
  hidden: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1, // ulta order me gayab hongi (last aayi wo pehle jayegi)
    },
  },
  show: {
    transition: {
      staggerChildren: 0.15, // delay between each image
    },
  },
};
  const item = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.55,
      duration: 0.7,
    },
  },
};
  // const item = {
  //   hidden: {
  //     opacity: 0,
  //     scale: 0.6,
  //     y: -30,
  //   },
  //   show: {
  //     opacity: 1,
  //     scale: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.1,
  //       ease: "easeOut",
  //     },
  //   },
  // };
  return (
    <>
      <div className=" next-Project bg-[#000000]  rounded-[8px] xl:w-[60%] z-10 group">
        <div
          className="innerNext group bg-[#000000] h-[100%] relative flex flex-col justify-center items-center pt-[28px] pb-[39px] pl-[38px] pr-[39px] lg:pt-[53px] lg:pb-[50px]   rounded-[8px] border border-[#292929]   cursor-pointer"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <img
            src={Blur}
            alt="blur gradient"
            className="absolute right-0 overflow-hidden top-0 opacity-85 transition-all duration-400 group-hover:opacity-100 pointer-events-none z-0"
          />
          <div className="text-[#FFFFFF]  relative z-50">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-next sm:w-full text-[18px] sm:text-[24px] leading-[17px] sm:leading-[33px] text-center font-bold"
            >
              Let's work together on your next project
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[#BDBDBD] text-[12px] sm:text-[16px] pt-[4px] leading-[12px] sm:leading-[24px] text-center"
            >
              Open communication, async updates, zero surprises
            </motion.p>
          </div>

          <motion.div
            className="relative pt-4 lg:pt-[0px]"
            variants={container}
            initial="hidden"
            animate={show ? "show" : "hidden"}
          >
            <div className="xl:pl-[10px]  lg:pt-[26px]  relative">
              <div>
                {/* left bottom */}
                <motion.img
                  variants={item}
                  src={skilss5}
                  alt="images"
     className={`absolute h-[36px] w-[36px] z-50  md:h-[48px] md:w-[48px] left-4 -bottom-0 md:left-[130px] md:bottom-[-3px]  lg:bottom-0 lg:left-33  left-bottom`}
                />
                {/* left top */}
                <motion.img
                  variants={item}
                  src={skilss6}
                  alt="images"
                  className={`absolute h-[36px] w-[36px] z-50 md:h-[48px] md:w-[48px]  -left-3 -top-2 md:-left-[10px] md:top-[8px] lg:-left-3  lg:top-8 left_top `}
                />
                {/* right top */}
                <motion.img
                  variants={item}
                  src={skilss2}
                  alt="images"
                  className={`absolute h-[36px] w-[36px] z-50 right-1 -top-0 md:h-[48px] md:w-[48px] md:right-[10px] md:top-[16px] lg:right-6 lg:top-9  right_top`}
                />
                {/* right bottom */}
                {/* <motion.img
                  variants={item}
                  src={skilss1}
                  alt="images"
                  className={`absolute h-[36px] w-[36px] z-50 md:h-[48px] md:w-[48px] right-0 -bottom-1 md:-right-[20px] md:-bottom-[13px] lg:-right-9 lg:bottom-7  `}
                /> */}
                {/* right center */}
                <motion.img
                  variants={item}
                  src={skilss3}
                  alt="images"
                  className={`absolute h-[36px] w-[36px] z-50 right-[86px] top-[44px]  md:right-[140px] md:top-[130px] md:h-[48px] md:w-[48px]  lg:right-35 lg:top-40 left-center-5  `}
                />
                {/* left center */}
                <motion.img
                  variants={item}
                  src={skilss7}
                  alt="images"
                  className={`absolute h-[36px] w-[36px] z-50 md:h-[48px] md:w-[48px] left-[27%] top-[40px] max-xs:top-[36px] md:left-[170px] md:top-[10px] lg:left-42 lg:top-8 left-center  `}
                />
                {/* main center image */}
                {/* <img src={skilss4} alt='images' className='absolute scale-100  group-hover:scale-105  group-hover:border-2 group-hover:rounded-full group-hover:border-[#D76D77] transition-all duration-300 h-[70px] w-[70px] left-[41%] max-xs:top-[14px]  max-xs:h-[54px] max-xs:w-[54px] sm:left-[41%] top-[25px] sm:top-[26px] sm:h-[100px] sm:w-[100px]  md:left-[41%] md:top-[25px] md:h-[100px] md:w-[100px] lg:h-[117px] lg:w-[117px]  lg:left-55 lg:top-[80px] z-50 full_image '
                /> */}

                <img
                  src={skilss4}
                  alt="images"
                  className="absolute scale-100 border-2 border-transparent rounded-full group-hover:scale-105 group-hover:border-[#D76D77] transition-all duration-300 h-[70px] w-[70px] left-[40.5%] max-xs:top-[14px] max-xs:h-[54px] max-xs:w-[54px] sm:left-[41%] top-[25px] sm:top-[45px] sm:h-[100px] sm:w-[100px] md:left-[41%] md:top-[45px] md:h-[100px] md:w-[100px] lg:h-[100px] lg:w-[100px] lg:left-57 lg:top-[71px] xl:left-60 z-50 full_image"
                />
              </div>
              <img src={clippath} alt="curve line" className=" " />
            </div>
          </motion.div>

          
          <div className=" mt-6 lg:mt-0">
            <motion.img
              src={arrow}
              alt="arrow"
              className={`absolute bottom-[20px] right-[20px] lg:h-10 lg:w-10 cursor-pointer `}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nextproject;
