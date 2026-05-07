import React from 'react'
import { motion } from "framer-motion";
function Privacy({colorText,first_letter,para}) {

       const text = `${colorText}`;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06, //  faster (was 0.15)
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
     <div className="text-center text-[#FFFFFF]  mt-0 sm:mt-0 md:pt-10 lg:p-0">
        <div className="text-[30px] md:text-[44px] leading-[76px] font-bold flex  gap-2 justify-center">
         <h2>{first_letter}</h2>{" "}

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

        <div className="flex justify-center">
          <p className="text-[12px] md:text-[18px] ">
          {para}
          </p>
        </div>
      </div>
  )
}

export default Privacy
