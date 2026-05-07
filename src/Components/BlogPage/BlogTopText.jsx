import React from 'react'
import {motion} from "framer-motion"
function BlogTopText() {
       const text = `Posts`;

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
   <section>
     <div className='container  '>
          <div className="text-center text-[#FFFFFF] border-t-1 border-white/10  px-0">
        <div className="text-[30px] lg:pt-[20px] md:text-[44px] leading-[76px] font-bold flex  gap-2 justify-center">
         <h2>More</h2>{" "}

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
   </section>
  )
}

export default BlogTopText
