



import React from 'react'
import { motion } from "framer-motion";

import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image86 from "../../assets/Images/image 86.svg"

function Backend_ArchitectureSecond() {

  return (
    <section className='pt-[20px] px-2 md:px-0 lg:pt-[40px]'>

      <motion.div
        className='lg:flex'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <SectionHeader
          number="04"
          title="Backend Architecture"
        />

        <motion.div
          className='pb-[20px] lg:pt-[38px] lg:pb-[40px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* paragraph 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Paragraph>
              The Express API is organized by domain, not technical layer. Each module — auth, course, payment, profile, upload — co-locates its routes, controllers, services, and Mongoose models. Controllers validate input against shared Zod schemas, delegate to services, return through a standardized ApiResponse utility. No controller touches res.status().json() directly — that inconsistency bit me in a previous project. Once two controllers format errors differently, every frontend dev writes defensive parsing forever.
            </Paragraph>

          </motion.div>

          {/* paragraph 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Paragraph className='pt-[15px] lg:pt-[23px]'>

              Middleware runs in a deliberate order: rate limiting → body parsing → CORS → Helmet → cookies → Morgan → mongo-sanitize → routes → global error handler. Auth middleware lives at the route level, not globally. (I learned why after accidentally gating my health check and watching the load balancer panic.) <br />

              <span className='leading-[30px] text-[14px]'>
                Error handling is discriminated:
              </span>

            </Paragraph>

          </motion.div>

          {/* image */}
          <motion.img
            src={image86}
            alt="image"
            className='pt-[10px] pb-[15px] lg:pt-[20px] lg:pb-[30px]'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* last paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Paragraph>
              I added that "never leak" rule after a Mongoose validation error exposed the entire document schema to a user.
            </Paragraph>

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Backend_ArchitectureSecond