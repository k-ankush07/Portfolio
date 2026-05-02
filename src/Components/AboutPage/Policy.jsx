import React from "react";
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
import Next from "../../assets/Images/rsection (3).svg";
import pnpm from "../../assets/Images/rsection (4).svg";
import PostgreSQL from "../../assets/Images/rsection (1).svg";
import Redis from "../../assets/Images/rsection (2).svg";
import Vercel from "../../assets/Images/rsection (3).svg";

import work from "../../assets/Images/work.svg";
import newlocation from "../../assets/Images/newlocation.svg";

function Policy({date, logo,heading,subheading,heading1,heading2,para1,span1,para2,span2,para3,span3,para4,span4}) {

  return (
   <section className="pb-[40px] bg-black "
        
        >
            <div className="container">

                {/* Card */}
                <div className=" image_background   bg-neutral-900  flex flex-col lg:flex-row ">



                    {/* LEFT SIDE */}
                    <div className=" lg:w-[30%] text-white space-y-6 lg:pt-[60px] lg:pl-[63px] ">

                        {/* Date */}
                        <span className="text-[12px] px-2 py-2 text-[#FFAF7B] rounded-[8px] bg-white/10 border border-white/10">
                            {date}
                        </span>

                        {/* Company */}
                        <div className=" pt-[15px] mb-0 gap-3">
                            <h2 className="lg:text-[40px] font-bold">{heading}</h2>
                            <h2 className="lg:text-[40px] font-bold">{subheading}</h2>
                        </div>
                    </div>

                    {/* Divider */}
                  <div className="flex items-center">
                      <div className="hidden lg:block  h-[80%] w-px bg-white/10" />
                  </div>

                    {/* RIGHT SIDE */}
                    <div className=" lg:w-[70%] text-white space-y-4  lg:pt-[50px] lg:pr-[63px] lg:pl-[53px] lg:pb-[46px] ">

                        <div className="">



                            <div className=" ">
                                <p className="para_class text-[14px] leading-[24px]">
                                    {para1} <span className=" text-[#BDBDBD] font-normal ">{span1}</span>
                                </p>
                            </div>
                            

                           
                        </div>

                    </div>
                </div>
            </div>
        </section>
  )
}

export default Policy
