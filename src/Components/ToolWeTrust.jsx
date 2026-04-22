import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import React, { useState } from 'react'
import border from "../assets/Images/Border (2).png"
import border2 from "../assets/Images/Border (3).png"
import border3 from "../assets/Images/Border (4).png"
import arrow from "../assets/Images/smallarrow.png"

function ToolWeTrust() {


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

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='flex relative'>
            <div className='border-[2px] border-[#292929] rounded-[8px] pt-15  w-[300px] xl:w-[468px] '>
                <div className='flex  justify-center items-end py-6 '>
                     <Swiper
                    modules={[Autoplay]}
                    slidesPerView='auto'
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
                                className={`transition-all duration-500 rounded-xl border p-1 ${activeIndex === index
                                        ? "scale-105  "
                                        : "scale-90"
                                    }`}
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
                    {/* <img src={border2} alt='vs code' />
                    <img src={border} alt='vs code' />
                    <img src={border3} alt='vs code' /> */}
                </div>
                   <div className='absolute bottom-0 w-[100%]'>
                <div className='flex items-center justify-between py-5 px-6'>
                    <h1 className='text-[#FFFFFF]  text-[20px] font-bold'>Tools we trust</h1>
                    <div className='flex justify-end items-end ' >
                        <div className='bg-[#292929] h-[30px] w-[30px] flex items-center justify-center rounded-full'>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </div>
    )
}

export default ToolWeTrust
 