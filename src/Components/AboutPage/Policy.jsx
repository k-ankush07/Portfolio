import React from "react";
import GradientBorderButton from "../Homepage/GradientBorderButton";
import { IoMdMailOpen } from "react-icons/io";
import { motion } from "framer-motion";

function Policy({
  index = 0,
  date,
  heading,
  subheading,
  para1,
  query,
  lastdate,
  cards = [],
}) {
  return (
    <section
      className="sticky top-10 flex items-center pb-[40px]"
      style={{ zIndex: 10 }}
    >
      <div className="container">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="image_background rounded-[16px] flex flex-col lg:flex-row overflow-hidden"
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }} 
            className="lg:w-[35%] text-white space-y-6 pt-[40px] lg:pt-[60px] pl-[20px] lg:pl-[63px] pr-[20px]"
          >
            <span className="text-[12px] px-3 py-1 text-[#FFAF7B] rounded-[6px] bg-white/10 border border-white/10 inline-block">
              {date}
            </span>

            <div>
              <h2 className="text-[28px] lg:text-[40px] font-bold leading-tight">
                {heading}
              </h2>
              <h2 className="text-[28px] lg:text-[40px] font-bold leading-tight">
                {subheading}
              </h2>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
             viewport={{ once: true }} 
            className="lg:w-[65%] text-white px-[20px] pt-[20px] lg:pt-[50px] pb-[30px] lg:pb-[46px]"
          >

            {/* Top paragraph */}
            <div className="border-l-2 border-gray-500/30 lg:px-[60px] pl-[15px]">
              <p className="text-[14px] text-[#BDBDBD] leading-[24px] max-w-[630px]">
                {para1}
              </p>

              {/* Cards */}
              <div className="mt-[15px] space-y-4">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex gap-4 items-start lg:pt-[35px] lg:pb-[31px] lg:pr-[36px] lg:pl-[30px] pt-[20px] pb-[20px] pr-[15px] pl-[15px] rounded-[10px] border-3 border-dotted border-[#8F74BF54] bg-[#8F74BF54]"
                  >
                    {/* Icon */}
                    <div className="p-4 w-[70px] h-[51px] bg-[#2f2d31]  rounded-[6px] flex items-center justify-center">
                      <div>{card.icon}</div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-[20px] font-semibold text-white">
                        {card.heading}
                      </h3>
                      <p className="text-[14px] text-[#BDBDBD] pr-6 leading-[24px]">
                        {card.para}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section */}
              {(query || lastdate) && (
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-[20px] gap-4">

                  {/* Left */}
                  {query && (
                    <div className="space-y-2 text-[#BDBDBD]">
                      <p >{query}</p>

                      <div className="hover:scale-105 transition">
                        <GradientBorderButton
                          data={
                            <>
                              <IoMdMailOpen className="inline mr-1" />
                              hello@aayushbharti.in
                            </>
                          }
                        />
                      </div>
                    </div>
                  )}

                  {/* Right */}
                  {lastdate && (
                    <p className="text-[12px] text-[#BDBDBD]">
                      {lastdate}
                    </p>
                  )}
                </div>
              )}
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Policy;