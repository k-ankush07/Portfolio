
import React from 'react'
import { motion } from "framer-motion";

import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image85 from "../../assets/Images/image 85.svg"

function Challenges() {
  return (
    <section className='pt-[20px] px-2 sm:px-0 lg:pt-[40px]'>

      <motion.div
        className='lg:flex'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <SectionHeader
          number="05"
          title="Challenges"
        />

        <motion.div
          className='pb-[20px] lg:pt-[40px] lg:pb-[40px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >

          <motion.img
            src={image85}
            alt="image"
            className=''
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Challenges