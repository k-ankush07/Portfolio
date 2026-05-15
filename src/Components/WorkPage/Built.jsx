

import React from 'react'
import { motion } from "framer-motion";

function Built() {
  return (
    <section>

      <motion.div
        className='lg:flex px-2 md:px-0'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* left side */}
        <motion.div
          className='pt-[20px] pb-[10px] lg:pt-[42px] lg:pb-[37px] lg:w-[33%] lg:border-b border-[#FFFFFF]/10'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className='flex'>

            <motion.p
              whileHover={{
                scale: 1.1,
                rotate: 3
              }}
              transition={{ duration: 0.3 }}
              className='border-[1px] border-[#8F74BF54] text-[#FFAF7B] bg-[#8F74BF1A] text-[12px] leading-[18px] rounded-[6px] px-[6px] py-[4px] cursor-pointer'
            >
              01
            </motion.p>

          </div>

          <motion.h2
            className='text-[28px] sm:text-[30] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF] pt-[8px] lg:pt-[14px]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Why I Built This
          </motion.h2>

        </motion.div>

        {/* right side */}
        <motion.div
          className='pb-[20px] lg:pt-[38px] lg:pb-[33px] lg:pl-[51px] lg:w-[67%] border-b lg:border-l border-[#FFFFFF]/10'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >

          <motion.p
            className='text-[#BDBDBD] text-[14px] leading-[24px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
          >
            Most EdTech codebases I'd seen were monoliths held together by duct tape — tangled auth, payment flows with no observability, and frontend/backend types that drifted silently until something broke in production. I wanted to build one properly. Not to prove I could use the tech, but to prove I could make the hard calls: where to draw module boundaries, how to handle a payment webhook that fires twice, what breaks when your server cold-starts mid-token-refresh.
          </motion.p>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Built