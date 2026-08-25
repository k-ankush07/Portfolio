
import React from 'react'
import { motion } from "framer-motion";

function Built({ websitePt, websitebp, funparapt, paddinBottom,image, fum, websiteRedesign, fumpara, reverse = false , leftwidth , rightwidth, ptsection, borderTop,borderColor , pointes=[], buttonText, buttonLink="#"}) {
  return (
    <section className={`${ptsection}  ${paddinBottom} `}>
      <motion.div
        className={`lg:flex px-2 md:px-0  ${reverse ? "lg:flex-row-reverse" : ""} ${borderTop} ${borderColor} `}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* image side */}
        <motion.div
          className={`pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px] ${leftwidth} border-b border-[#FFFFFF]/10 ${
            reverse ? "lg:pl-[40px]" : "lg:pr-[40px]"
          }`}
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img  className=" w-full" src={image} alt='image' />
        </motion.div>

        {/* text side */}
        <motion.div
          className={`flex flex-col justify-center pt-[20px]   ${rightwidth} lg:border-b ${
            reverse ? "lg:border-r " : "lg:border-l lg:pl-[40px] lg:pt-[38px] lg:pb-[33px]"
          } border-[#FFFFFF]/10`}
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='text-[#BDBDBD] text-[14px] leading-[24px]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className='text-white text-[24px] lg:text-[40px] lg:leading-[48px] font-bold'>{fum}</h2>
            <p className={`text-[18px] lg:text-[24px] text-[#FFFFFF] leading-[33px]  ${websitePt} ${websitebp}`}>{websiteRedesign}</p>
            <p 
              className={`text-[14px] leading-[24px] text-[#BDBDBD] lg:w-[600px] ${funparapt}`}
              dangerouslySetInnerHTML={{ __html: fumpara }}
            />

            {/* points list */}
            {pointes.length > 0 && (
              <ul className='flex flex-col gap-[12px] pt-[20px]'>
                {pointes.map((point, index) => (
                  <motion.li
                    key={index}
                    className='flex items-center gap-[10px] leading-[24px] text-[14px] lg:text-[16px] text-[#BDBDBD]'
                    initial={{ opacity: 0, x: reverse ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className='flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#BDBDBD]' />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* button */}
            {buttonText && (
              <motion.a
                href={buttonLink}
                className='inline-block mt-[20px] w-fit px-[25px] py-[12px] rounded-[500px] bg-white text-[#000000] text-[16px] '
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonText}
              </motion.a>
            )}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Built