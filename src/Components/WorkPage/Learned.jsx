


import React from 'react'
import { motion } from "framer-motion";

import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image86 from "../../assets/Images/image 86.svg"

function Learned() {
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
          number="06"
          title="What I Learned"
        />

        <motion.div
          className='pb-[20px] lg:pt-[38px] lg:pb-[40px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Heading>
              Shared types are the highest-leverage thing you can add to a full-stack repo.
            </Heading>

            <Paragraph>
              The Turborepo setup took an afternoon. It's caught type drift every week since. Every full-stack project I build from now on starts with a shared schema package.
            </Paragraph>

          </motion.div>

          {/* item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Heading className='pt-[15px] lg:pt-[17px]'>
              Shared types are the highest-leverage thing you can add to a full-stack repo.
            </Heading>

            <Paragraph>
              The Turborepo setup took an afternoon. It's caught type drift every week since. Every full-stack project I build from now on starts with a shared schema package.
            </Paragraph>

          </motion.div>

          {/* item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Heading className='pt-[10px] lg:pt-[14px]'>
              Shared types are the highest-leverage thing you can add to a full-stack repo.
            </Heading>

            <Paragraph>
              The Turborepo setup took an afternoon. It's caught type drift every week since. Every full-stack project I build from now on starts with a shared schema package.
            </Paragraph>

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Learned