import React from "react";
import { motion } from "framer-motion";

// Common animation variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const Breadcrumb = ({ children }) => (
  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    className="text-[#BDBDBD] text-center text-[12px] lg:text-[14.4px] leading-[15px] lg:leading-[21.6px]"
  >
    {children}
  </motion.p>
);

export const Title = ({ children }) => (
  <motion.h1
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="text-[30px] pt-[4px] sm:pt-[0] sm:text-[35px] lg:text-[44px] leading-[40px] sm:leading-[50px] lg:leading-[76.8px] font-bold text-white"
  >
    {children}
  </motion.h1>
);

export const Subtitle = ({ children }) => (
  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    className="text-[12px] pt-[4px] sm:pt-0 lg:text-[18px] leading-[19px] lg:leading-[27px] text-[#FFFFFF]"
  >
    {children}
  </motion.p>
);

export const Heading = ({ children }) => (
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    className="text-[18px] lg:text-[24px] leading-[25px] lg:leading-[33px] font-bold text-white"
  >
    {children}
  </motion.h2>
);

export const Paragraph = ({ children, className = "" }) => (
  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    className={`text-[12px] lg:text-[16px] leading-[19px] lg:leading-[24px] text-[#BDBDBD] ${className}`}
  >
    {children}
  </motion.p>
);