import React from 'react'
import { motion } from "framer-motion";
function Collaboration() {
     const text = "Collaboration";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06, 
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // quick animation
        ease: "easeOut", //  smooth feel
      },
    },
  };
  return (
    <div className='px-[9px] pt-[20px] md:pt-[0]'>
      <div className="text-center text-[#FFFFFF] pt-[14px]    border-t-1 border-[#FFFFFF]/10 sm:border-none lg:pt-[40px] lg:pb-[18px]">
           <div className="text-[30px] leading-[76px] md:text-[44px] font-bold">
           Code &{" "}
   
             <motion.span
               className="inline-block bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
               variants={container}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
             >
               {text.split("").map((char, index) => (
                 <motion.span
                   key={index}
                   variants={letter}
                   className="inline-block"
                 >
                   {char}
                 </motion.span>
               ))}
             </motion.span>
   
           </div>
         </div>

    </div>
  )
}

export default Collaboration
