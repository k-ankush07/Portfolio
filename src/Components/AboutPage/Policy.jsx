import React from "react";
import GradientBorderButton from "../Homepage/GradientBorderButton";
import { IoMdMailOpen } from "react-icons/io";

function Policy({
  date,
  heading,
  subheading,
  para1,
  query,
  lastdate,
  cards = [],
}) {
  return (
    <section className="pb-[40px]">
      <div className="container">

        {/* Main Card */}
        <div className="image_background rounded-[16px] flex flex-col lg:flex-row overflow-hidden">

          {/* LEFT SIDE */}
          <div className="lg:w-[35%] text-white space-y-6 pt-[40px] lg:pt-[60px] pl-[30px] lg:pl-[63px]">

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
          </div>


          {/* RIGHT SIDE */}
          <div className="lg:w-[65%]  text-white px-[20px]  pt-[20px] lg:pt-[50px] pb-[30px] lg:pb-[46px]">

            {/* Top paragraph */}
            <div className=" border-l-2  border-gray-500/30 lg:lg:px-[60px]">

                <p className="text-[14px] text-[#BDBDBD] leading-[24px] max-w-[630px]">
              {para1}
            </p>

            {/* Dynamic Cards */}
            <div className="mt-[15px] space-y-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start lg:pt-[35px] lg:pb-[31px] lg:pr-[36px] lg:pl-[30px] rounded-[10px] border-3 border-dotted border-[#8F74BF54] bg-[#8F74BF54]"
                >
                  {/* Icon */}
                  <div className="p-3 bg-[#2f2d31] rounded-[6px] flex items-center justify-center">
                    {card.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[20px] font-semibold text-white">
                      {card.heading}
                    </h3>
                    <p className="text-[14px] text-[#BDBDBD] leading-[24px]">
                      {card.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            

              {(query || lastdate) && (
  <div className="flex justify-between items-end mt-[20px] flex-wrap gap-4">

    {/* Left side */}
    {query && (
      <div className="space-y-2">
        <p>{query}</p>

        <GradientBorderButton
          data={
            <>
              <IoMdMailOpen className="inline mr-1" />
              hello@aayushbharti.in
            </>
          }
        />
      </div>
    )}

    {/* Right side */}
    {lastdate && (
      <p className="text-[12px] text-[#BDBDBD]">
        {lastdate}
      </p>
    )}

  </div>
)}
            </div>

          
        </div>
            </div>

      </div>
    </section>
  );
}

export default Policy;