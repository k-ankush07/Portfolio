import React from 'react'
import ToolWeTrust from './ToolWeTrust'
import CustomerReview from './CustomerReview'
import Blogs from './Blogs'
import { motion } from "framer-motion"

function Explore() {

  const trustText = `&& say hello`;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  return (
    <>
      <section className=' px-2  md:px-0 pb-6 pt-5'>

        <div className='container'>
          <div className='text-center bg-[#000000] text-[#FFFFFF]  py-3 lg:py-8   '>
            <div className=' text-[30px] lg:text-[44px] font-bold flex  justify-center w-[100%]     '>

              <h2 className='tool_div max-w-[700px] '>
                Loved by 10,000+ {' '}

                <motion.span
                  className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {trustText.split("").map((char, index) => (
                    <motion.span key={index} variants={letter} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </h2>
            </div>
            <p className='text-[18px] mt-2 text-[#BDBDBD] hidden md:block'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex gap-2 justify-around dolor_container '>
            <ToolWeTrust />
            <CustomerReview />
            <Blogs />
          </div>


        </div>
      </section>

    </>
  )
}

export default Explore
