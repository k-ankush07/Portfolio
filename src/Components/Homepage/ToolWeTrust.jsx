import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import React, { useState } from 'react'

import imagenew1 from "../../assets/Images/slidernew (1).svg"
import imagenew2 from "../../assets/Images/slidernew (2).svg"
import imagenew3 from "../../assets/Images/slidernew (3).svg"
import imagenew4 from "../../assets/Images/slidernew (4).svg"
import imagenew5 from "../../assets/Images/slidernew (5).svg"

import arrow from "../../assets/Images/arrow.svg"
import { motion } from "framer-motion"
function ToolWeTrust() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        imagenew1,
        imagenew2,
        imagenew3,
        imagenew4,
        imagenew5,
        imagenew1,
        imagenew2,
        imagenew3,
        imagenew4,
        imagenew5,
        
    ];


    return (
        <div className='about_class flex relative w-full md:w-[33.3%] mb-0 cursor-pointer'
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >   
            <div className=' about_classinner border-[2px] border-[#292929] rounded-[8px] lg:pt-15 w-[100%]  '>
                <div className=' about_child flex  justify-center items-end py-20 lg:py-6 '>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        spaceBetween={20}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={600}
                        onSlideChange={(swiper) =>
                            setActiveIndex(swiper.realIndex % images.length)
                        }
                        className="abs"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="flex justify-center">

                                <div
                                    className={`transition-all duration-400  border-1 p-1
                                        
                                    `}
                                    style={{
                                        transitionDelay: isHovered
                                            ? `${index * 40}ms`
                                            : `${(images.length - index) * 30}ms`
                                    }}
                                >
                                    <img
  src={img}
  alt=""
  className={`toolWeTrust p-2 border transition-all duration-400 rounded-xl
    ${activeIndex === index ? "scale-105" : "scale-90"}
    ${isHovered ? "border-purple-500 -translate-y-2" : "border-transparent"}
  `}
/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <div className='absolute bottom-0 w-[100%]'>
                    <div className={`tool-text flex items-center justify-between py-5 px-4 lg:px-6 transition-all duration-400
                       
                        `}>
                     
                        <h1
                            className={`text-[#FFFFFF] text-[16px] lg:text-[20px] font-bold 
                           
                        `}
                        >
                            Tools we trust
                        </h1>
                        <div className='flex justify-end items-end ' >
                           <motion.img
                                         src={arrow}
                                         alt="arrow"
                                         className={`tool_arrow lg:h-10 lg:w-10 transition-all duration-200 ease-out
                               ${isHovered
                                             ? "translate-y-0 opacity-100"   
                                             : "translate-y-6 opacity-0"  
                                           }`}
                                                           // Arrow hover animation (only when visible)
                                                           whileHover={{ scale: 1.15,  }}
                           
                                                           transition={{ duration: 0.4 }}
                                       />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ToolWeTrust
