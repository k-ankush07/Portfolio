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
      className="sticky top-20 flex items-center lg:pb-[20px]"
      style={{ zIndex: 10 }}
    >
      <div className="container">

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="image_background rounded-[16px] flex flex-col lg:flex-row overflow-hidden px-2 md:px-0"
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }} 
            className="lg:w-[46%] xl:w-[36%] text-white space-y-[13px] pt-[20px]  lg:pt-[60px] lg:pb-[145px]  lg:pl-[63px]  "
          >
            <span className="text-[12px] px-[5px] py-1 text-[#FFAF7B] rounded-[6px] leading-[18px] bg-[#8F74BF54]/20 border border-[#8F74BF54]/70 inline-block">
              {date}
            </span>

            <div>
              <h2 className="text-[28px] leading-[35px] lg:text-[40px] font-bold lg:leading-[48px]">
                {heading} <br/>  {subheading}
              </h2>
              
             
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
             viewport={{ once: true }} 
            className=" lg:w-[54%] xl:w-[64%] text-white  pt-[10px] pb-[30px] sm:pt-[5px] lg:pt-[60px]  lg:px-0 lg:pb-[60px]"
          >

            {/* Top paragraph */}
            <div className="lg:border-l-2 border-[#FFFFFF]/10 lg:pr-[60px]  lg:pl-[57px]">
              <p className="text-[14px] text-[#BDBDBD] leading-[19px] lg:leading-[24px] ">
                {para1}
              </p>

              {/* Cards */}
              <div className=" pt-[10px] sm:pt-[15px] lg:pt-[24px] space-y-[10px] ">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    
                    style={{
                      borderWidth: "1px",
                      borderStyle: "dashed",
                      borderColor: "#8F74BF54",
                      borderDasharray: "3 3",
                    
                    }}
                    className="flex gap-[14px]   rounded-[10px] bg-[#242129] pt-[20px] pl-[15px] pb-[20px] pr-[15px]  lg:pt-[35px] lg:pl-[30px] lg:pb-[31px] lg:pr-[36px]"
                  >
                    {/* Icon */}
                    <div className="w-[44px] h-[44px]  shrink-0 bg-[#2f2d31]  rounded-[6px] flex items-center justify-center">
                      {card.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-[20px] font-bold text-[#FFFFFF]">
                        {card.heading}
                      </h3>
                      <p className="text-[14px] text-[#BDBDBD] leading-[19px]  ">
                        {card.para}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section */}
              {(query || lastdate) && (
                <div className=" last-sections lg:pb-[14px] flex flex-row justify-between items-end mt-[10px] gap-4">

                  {/* Left */}
                  {query && (
                    <div className="space-y-[3px] text-[#BDBDBD]">
                      <p className="text-[14px] leading-[24px]">{query}</p>

                      <div className="hover:scale-105 transition ">
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
                    <p className="text-[12px] text-[#BDBDBD] leading-[18px] ">
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