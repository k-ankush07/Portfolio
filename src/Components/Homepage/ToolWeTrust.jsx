import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import React, { useState } from 'react'
import border from "../../assets/Images/Border.svg"
import border2 from "../../assets/Images/Border (1).svg"
import border3 from "../../assets/Images/Border (2).svg"
import arrow from "../../assets/Images/arrow.svg"

function ToolWeTrust() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        border2,
        border3,
        border,
        border2,
        border3,
        border,
        border2,
        border3,
        border,
        border2,
        border3,
        border,
    ];


    return (
        <div className='flex relative w-full md:w-[33.3%] cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='border-[2px] border-[#292929] rounded-[8px] lg:pt-15 w-[100%]  '>
                <div className='flex  justify-center items-end py-20 lg:py-6 '>
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
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                            
                                <div
                                    className={`transition-all duration-400 rounded-xl border p-1
                                         ${activeIndex === index ? "scale-105" : "scale-90"}
                                         ${isHovered ? "border-purple-500 -translate-y-2" : "border-transparent"}
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
                                        className="toolWeTrust"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <div className='absolute bottom-0 w-[100%]'>
                    <div className={`flex items-center justify-between py-5 px-6 transition-all duration-400
                         ${isHovered ? " -translate-y-2" : "scale-100"}
                        `}>
                        {/* <h1 className='text-[#FFFFFF] text-[10px] lg:text-[20px] font-bold'>Tools we trust</h1> */}
                        <h1
                            className={`text-[#FFFFFF] text-[10px] lg:text-[20px] font-bold 
                           
                        `}
                        >
                            Tools we trust
                        </h1>
                        <div className='flex justify-end items-end ' >
                            <img src={arrow} alt='arrow' className={`lg:h-10 lg:w-10  cursor-pointer 
                                 `} />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ToolWeTrust
