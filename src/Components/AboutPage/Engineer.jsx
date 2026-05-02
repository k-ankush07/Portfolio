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
import {
    motion,
} from "framer-motion";

function Engineer({date, logo,heading,heading1,heading2,para1,span1,para2,span2,para3,span3,para4,span4}) {

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    return (
        <section className="pb-[40px]  "
        
        >
            <div className="container">

                {/* Card */}
                <div className=" image_background   bg-neutral-900  flex flex-col lg:flex-row ">



                    {/* LEFT SIDE */}
                    <div className=" lg:w-[30%] text-white space-y-6 lg:pt-[60px] lg:pl-[63px] ">

                        {/* Date */}
                        <span className="text-[12px] px-3 py-1 text-[#FFAF7B] rounded-[8px] bg-white/10 border border-white/10">
                            {date}
                        </span>

                        {/* Company */}
                        <div className="flex items-center pt-[15px] mb-0 gap-3">
                            <div className="">
                                <img src={logo}  alt="Roboto icon" />
                            </div>
                            <h2 className="lg:text-[40px] font-bold">{heading}</h2>
                        </div>

                        {/* Info */}
                        <div className=" text-sm pt-[15px] text-[#BDBDBD] space-y-2">
                            <p className="flex gap-2 items-center"><img src={newlocation}  alt="location logo" />London Area, United Kingdom</p>
                            <p className="flex gap-2 items-center"><img src={work} alt="worl icon" />Full-time · Remote</p>
                        </div> 
                    </div>

                    {/* Divider */}
                  <div className="flex items-center">
                      <div className="hidden lg:block  h-[80%] w-px bg-white/10" />
                  </div>

                    {/* RIGHT SIDE */}
                    <div className=" lg:w-[70%] text-white space-y-4  lg:pt-[50px] lg:pr-[63px] lg:pl-[53px] lg:pb-[46px] ">

                        <div className="">
                            <h2 className="text-[40px] font-bold">
                               {heading1}{" "}
                                <span className="bg-[linear-gradient(to_right,#FF9A8B_0%,#FF6A88_50%,#FFB199_100%)] bg-clip-text text-transparent">
                                    {heading2}
                                </span>
                            </h2>



                            <div className=" ">
                                <p className="para_class text-[14px] leading-[24px]">
                                    {para1} <span className=" text-[#BDBDBD] font-normal ">{span1}</span>
                                </p>
                            </div>
                            <div className="pt-4">
                                <p className= "para_class text-[14px]   font-normal">
                                  {para2} <span className=" text-[#BDBDBD] leading-[24px]"> {span2}</span>
                                </p>
                            </div>
                            <div className="pt-4">
                                <p className=" para_class text-[14px]  leading-[24px]">
                                    {para3} <span className=" text-[#BDBDBD] font-normal ">{span3}</span>
                                </p>
                            </div>
                            <div className="pt-4 lg:pb-[33px]">
                                <p className=" para_class text-[14px] leading-[24px]">
                                   {para4} <span className=" text-[#BDBDBD] text-[#BDBDBD] font-normal ">{span4}</span>
                                </p>
                            </div>

                            <motion.div
                                className="flex flex-wrap gap-2 sm:w-[400px] lg:w-[384px] "
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.7 }}
                            >
                                {[Docker,Bun, Next,pnpm, PostgreSQL, Redis, Vercel,pnpm].map((img, i) => (
                                    <motion.img key={i} variants={item} src={img} alt="logo" />
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Engineer;