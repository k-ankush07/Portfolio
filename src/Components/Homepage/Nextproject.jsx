import React, { useState } from 'react'
import curveLine from "../../assets/Images/curveline.svg"
import Blur from "../../assets/Images/Gradient+Blur (1).svg"
import skilss1 from "../../assets/Images/skilssimages (1).svg"
import skilss2 from "../../assets/Images/skilssimages (2).svg"
import skilss3 from "../../assets/Images/skilssimages (3).svg"
import skilss4 from "../../assets/Images/skilssimages (4).svg"
import skilss5 from "../../assets/Images/skilssimages (5).svg"
import skilss6 from "../../assets/Images/skilssimages (6).svg"
import skilss7 from "../../assets/Images/skilssimages (7).svg"
import arrow from "../../assets/Images/arrow.svg"
import { motion } from "framer-motion";
function Nextproject() {
   const [show, setShow] = useState(false);

  const hideClass =
    "opacity-0 scale-75 -translate-y-8 transition-all duration-700";

  const showClass =
    "opacity-100 scale-100 translate-y-0 transition-all duration-700";


    const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, //  delay between each image
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: -30,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};
  return (
   <>
  <div className=' next-Project bg-[#000000] xl:w-[60%] z-10 group'>
     <div className=' group bg-[#000000] h-[100%] relative flex flex-col justify-center items-center  md:px-15 py-4 rounded-[8px] border border-[#292929]  mx-auto px-[39px] cursor-pointer'
     onMouseEnter={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
     >
    <img src={Blur} alt='blur gradient' className='absolute right-0 overflow-hidden top-0 opacity-85 transition-all duration-400 group-hover:opacity-100' />
     <div className="text-[#FFFFFF] lg:pt-9 relative z-50">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[17px] lg:text-[24px] text-center font-bold"
          >
            Let's work together on your next project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#BDBDBD] text-[12px] lg:text-[16px] text-center"
          >
            Open communication, async updates, zero surprises
          </motion.p>
        </div>

    {/* users and curve line */}
    {/* <div className='relative mt-4 lg:-mt-4 group '> */}
    <motion.div
  className="relative mt-4 lg:-mt-4"
  variants={container}
  initial="hidden"
  animate={show ? "show" : "hidden"}
>
      <div className='xl:pl-[10px] lg:pb-[42px] lg:pt-[59px]  relative' >
      <div>
      
          {/* left bottom */}
            <motion.img
  variants={item} src={skilss5} alt='images'  className={`absolute h-[36px] w-[36px] z-50  md:h-[48px] md:w-[48px] -left-3 -bottom-2 md:-left-[28px] md:-bottom[14px]  lg:bottom-7 lg:-left-3 `}
       
   />
             {/* left top */}
             <motion.img
  variants={item}  src={skilss6} alt='images' className={`absolute h-[36px] w-[36px] z-50 md:h-[48px] md:w-[48px]  -left-3 -top-2 md:-left-[25px] md:-top-[17px] lg:-left-3  lg:top-7 `}
         
              
              />
              {/* right top */}
       <motion.img
  variants={item}src={skilss2} alt='images' className={`absolute h-[36px] w-[36px] z-50 -right-1 -top-2 md:h-[48px] md:w-[48px] md:-right-[20px] md:-top-[13px] lg:-right-5 lg:top-10 `}
         />
          {/* right bottom */}
          <motion.img
  variants={item} src={skilss1} alt='images' className={`absolute h-[36px] w-[36px] z-50 md:h-[48px] md:w-[48px] right-0 -bottom-1 md:-right-[20px] md:-bottom-[13px] lg:-right-9 lg:bottom-7  `}
        />
        {/* right center */}
        <motion.img
  variants={item} src={skilss3} alt='images'  className={`absolute h-[36px] w-[36px] z-50 right-[86px] top-[44px]  md:right-[97px] md:top-[54px] md:h-[48px] md:w-[48px]  lg:right-25 lg:top-28 left-center-5  `}
             />
         {/* left center */}
       <motion.img
  variants={item} src={skilss7} alt='images' className={`absolute h-[36px] w-[36px] z-50 md:h-[48px] md:w-[48px] left-[18%] top-[44px] max-xs:top-[36px] md:left-[90px] md:top-[51px] lg:left-25 lg:top-28 left-center  `}
               />
        {/* main center image */}
       <img src={skilss4} alt='images' className='absolute scale-100  group-hover:scale-105 border-2 group-hover:border-2 group-hover:rounded-full group-hover:border-[#D76D77] transition-all duration-300 h-[70px] w-[70px] left-[41%] max-xs:top-[14px]  max-xs:h-[54px] max-xs:w-[54px] sm:left-[41%] top-[25px] sm:top-[26px] sm:h-[100px] sm:w-[100px]  md:left-[41%] md:top-[25px] md:h-[100px] md:w-[100px] lg:h-[117px] lg:w-[117px]  lg:left-55 lg:top-[80px] z-50 full_image ' 
      />
      </div>
      {/* <img src={curveLine}  alt='curve line' className={`  ${
                    show ? showClass : hideClass
                  } `}
              style={{
    "--x": "-120px",
    "--y": "80px",
    animationDelay: "0.1s",
  }}  /> */}
      <img src={curveLine}  alt='curve line' className=" "  />
      
    </div> 
    </motion.div>
    {/* </div> */}
<div className=' mt-6'>
     <motion.img
                   src={arrow}
                   alt="arrow"
                   className={`absolute bottom-4 right-4 lg:h-10 lg:w-10 cursor-pointer `}
                   initial={{ opacity: 0, }}
                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                   viewport={{ once: true, amount: 0.35 }}
                   whileHover={{ scale: 1.15}}
                   transition={{ duration: 0.8 }}
                 />
     
    </div>
   </div>
  </div>
   </>
  )
}

export default Nextproject