import React from 'react'
import { motion } from "framer-motion";
function Journey() {
      const text = "Journey";

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
        <div className="text-center text-[#FFFFFF] pt-4  px-4 pb-[15px] lg:pb-[30px] md:pt-10  lg:pt-6">
        <div className="text-[30px] md:text-[44px] font-bold">
         The{" "}

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
           Crafting Experiences That Bring Ideas to Life
          </p>
        </div>
      </div>
  )
}

export default Journey
