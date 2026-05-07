import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Cards from './Cards'
import image from "../../assets/Images/Container.svg"
import image2 from "../../assets/Images/Testimonial Image.svg"
import image3 from "../../assets/Images/Testimonial Image (1).svg"
import image4 from "../../assets/Images/Container.svg"
import Background from "../../assets/Images/Background+Blur (2).png"
import Background2 from "../../assets/Images/Background+Blur (3).png"
import Background3 from "../../assets/Images/Background+Blur (4).png"
import Background4 from "../../assets/Images/Background+Blur (5).png"
import { motion } from "framer-motion";
function Developers({ }) {
    const developersData = [
        {
            desc: "I used to spend too much time debugging React components — CodeGent made that a thing of the past. The AI suggestions from CodeGent are a game-changer. I get instant feedback that improves both speed.  ",
            name: "Jaydon Gouse",
            picture: image,
            bg: Background,
        },
        {
            desc: "CodeGent is like a senior developer reviewing my work in real time with highly accurate, time-saving suggestions. CodeGent took my React workflow to another level. Clean, efficient code and a lot less time wasted on repetitive fixes. .",
            name: "Esther Howard",
            picture: image2,
            bg: Background2,
        },
        {
            desc: "Since using CodeGent, my code is more consistent and efficient. It’s a must-have tool daily. CodeGent transformed my React component writing. The suggestions save hours daily and improve code quality.",
            name: "Robert Fox",
            picture: image3,
            bg: Background3,
        },
        {
            desc: "CodeGent enables me to write improved, more reusable, and structured code more quickly. CodeGent has transformed how I build UI components, with smart hints saving hours and making   my code cleaner.",
            name: "Albert Flores",
            picture: image4,
            bg: Background4,
        },
        {
            desc: "I used to spend too much time debugging React components — CodeGent made that a thing of the past. The AI suggestions from CodeGent are a game-changer. I get instant feedback that improves both speed",
            name: "Jaydon Gouse",
            picture: image,
            bg: Background,
        },
        {
            desc: "CodeGent is like a senior developer reviewing my work in real time with highly accurate, time-saving suggestions. CodeGent took my React workflow to another level. Clean, efficient code, and a lot less time wasted on repetitive fixes..",
            name: "Esther Howard",
            picture: image2,
            bg: Background2,
        },
        {
            desc: "Since using CodeGent, my code is more consistent and efficient. It’s a must-have tool daily. CodeGent transformed my React component writing. The suggestions save hours daily and improve code quality.",
            name: "Robert Fox",
            picture: image3,
            bg: Background3,
        },
        {
            desc: "CodeGent enables me to write improved, more reusable, and structured code more quickly. CodeGent has transformed how I build UI components, with smart hints saving hours and making my code cleaner. ",
            name: "Albert Flores",
            picture: image4,
            bg: Background4,
        },
    ];


     const trustText = "Developers";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};
    return (
        <>
            <section className=' px-3 md:px-0 pt-[24px]  lg:pt-[49px] lg:py-0'>
                <div className='container'>
                    <div className=''>
                         <h1 className=' text-[22px] xl:text-[40px] font-bold text-[#FFFFFF] text-center'>
                          Loved by 10,000+ {' '}
                        
                          <motion.span
                            className="inline-block bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {trustText.split("").map((char, index) => (
                              <motion.span key={index} variants={letter} className="inline-block">
                                {char}
                              </motion.span>
                            ))}
                          </motion.span>
                        </h1>

                        <div className='flex justify-center'>
                            <p className='text-[#BDBDBD] text-[14px] lg:text-[18px]  max-w-[550px]  xl:w-[41%] text-center '>Join thousands of developers who have transformed their coding
                                workflow with AI-powered assistance.</p>
                        </div>

                    </div>
                    <div className="sm:flex gap-10 mt-[10px] ">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {developersData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Cards {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
        </section> 
 
        </> 
    )
}

export default Developers
