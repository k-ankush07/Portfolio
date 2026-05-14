
import React from 'react'
import { motion } from "framer-motion";

import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image83 from "../../assets/Images/image 83.svg"

function Backend_Architecture() {
  return (
    <section className='pt-[20px] lg:pt-[40px]'>

      <motion.div
        className='px-2 md:px-0 lg:flex'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <SectionHeader
          number="03"
          title="Backend Architecture"
        />

        <motion.div
          className='pb-[20px] lg:pt-[38px] lg:pb-[33px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* first */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Heading>
              Rolling my own auth
            </Heading>

            <Paragraph>
              Bcrypt for hashing. Short-lived JWTs in memory. Refresh tokens in httpOnly cookies. OTP email verification. Role-based middleware — Student, Instructor, Admin. I wrote every layer instead of reaching for a library, and it paid off the first time something broke. (Cold starts on Render made the refresh endpoint take 3 seconds to wake. The Axios interceptor now retries with backoff and queues concurrent requests. That fix took an hour because I understood the full chain.)
            </Paragraph>
          </motion.div>

          {/* second */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Heading className="pt-[15px] lg:pt-[17px]">
              Razorpay payments
            </Heading>

            <Paragraph>
              HMAC signature verification, idempotent enrollment keyed on razorpay_order_id, CourseProgress creation, and confirmation emails via Resend. The Payment model tracks explicit status transitions — pending, success, failed — with the full Razorpay reference chain. I didn't build that tracing for fun. I built it after v1 had zero observability and debugging "where did my money go" was guesswork.
            </Paragraph>

          </motion.div>

          {/* image section */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Heading className='pt-[15px] lg:pt-[20px]'>
              Shared Zod schemas
            </Heading>

            <motion.img
              src={image83}
              alt='compiler'
              className='pb-[10px] lg:pb-[20px]'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            />

            <Paragraph>
              Both apps import CreateCourseInput directly. Before this, I maintained parallel interfaces that drifted. I'd find out from a 500 in production. Now a breaking change is a compile error. Simplest decision, highest return.
            </Paragraph>

          </motion.div>

          {/* last */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true }}
          >

            <Heading className='pt-[15px] lg:pt-[30px]'>
              Bun everywhere
            </Heading>

            <Paragraph>
              Both apps run on Bun — fast cold starts, native TypeScript, no dev build step. bun install at the root, Turbo orchestrates parallel builds, each app Dockerized with multi-stage builds (~30 lines per Dockerfile). One runtime, one package manager. The less context switching between tools, the faster I ship.
            </Paragraph>

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Backend_Architecture