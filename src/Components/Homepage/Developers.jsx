// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay } from "swiper/modules";
// import Cards from './Cards'
// // import image from "../../assets/Images/Container.svg"
// // import image2 from "../../assets/Images/Testimonial Image.svg"
// // import image3 from "../../assets/Images/Testimonial Image (1).svg"
// // import image4 from "../../assets/Images/Container.svg"
// import image from "../../assets/Images/feedback (1).svg"
// import image2 from "../../assets/Images/feedback (2).svg"
// import image3 from "../../assets/Images/feedback (3).svg"
// import image4 from "../../assets/Images/feedback (4).svg"
// import Background from "../../assets/Images/Background+Blur (2).png"
// import Background2 from "../../assets/Images/Background+Blur (3).png"
// import Background3 from "../../assets/Images/Background+Blur (4).png"
// import Background4 from "../../assets/Images/Background+Blur (5).png"
// import { motion } from "framer-motion";
// function Developers({ }) {
//     const developersData = [
//         {
//             desc: "I used to spend too much time debugging React components — CodeGent made that a thing of the past. The AI suggestions from CodeGent are a game-changer. I get instant feedback that improves both speed.  ",
//             name: "Jaydon Gouse",
//             picture: image,
//             bg: Background,
//         },
//         {
//             desc: "CodeGent is like a senior developer reviewing my work in real time with highly accurate, time-saving suggestions. CodeGent took my React workflow to another level. Clean, efficient code and a lot less time wasted on repetitive fixes. .",
//             name: "Esther Howard",
//             picture: image2,
//             bg: Background2,
//         },
//         {
//             desc: "Since using CodeGent, my code is more consistent and efficient. It’s a must-have tool daily. CodeGent transformed my React component writing. The suggestions save hours daily and improve code quality.",
//             name: "Robert Fox",
//             picture: image3,
//             bg: Background3,
//         },
//         {
//             desc: "CodeGent enables me to write improved, more reusable, and structured code more quickly. CodeGent has transformed how I build UI components, with smart hints saving hours and making   my code cleaner.",
//             name: "Albert Flores",
//             picture: image4,
//             bg: Background4,
//         },
//         {
//             desc: "I used to spend too much time debugging React components — CodeGent made that a thing of the past. The AI suggestions from CodeGent are a game-changer. I get instant feedback that improves both speed",
//             name: "Jaydon Gouse",
//             picture: image,
//             bg: Background,
//         },
//         {
//             desc: "CodeGent is like a senior developer reviewing my work in real time with highly accurate, time-saving suggestions. CodeGent took my React workflow to another level. Clean, efficient code, and a lot less time wasted on repetitive fixes..",
//             name: "Esther Howard",
//             picture: image2,
//             bg: Background2,
//         },
//         {
//             desc: "Since using CodeGent, my code is more consistent and efficient. It’s a must-have tool daily. CodeGent transformed my React component writing. The suggestions save hours daily and improve code quality.",
//             name: "Robert Fox",
//             picture: image3,
//             bg: Background3,
//         },
//         {
//             desc: "CodeGent enables me to write improved, more reusable, and structured code more quickly. CodeGent has transformed how I build UI components, with smart hints saving hours and making my code cleaner. ",
//             name: "Albert Flores",
//             picture: image4,
//             bg: Background4,
//         },
//     ];


//      const trustText = "Developers";

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };

// const letter = {
//   hidden: { opacity: 0, y: 25 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.30,
//       ease: [0.25, 0.8, 0.25, 1],
//     },
//   },
// };
//     return (
//         <>
//             <section className=' px-2 md:px-0 pt-[24px]  lg:pt-[49px] lg:py-0'>
//                 <div className='container'>
//                     <div className=''>
//                          <h1 className=' developer_text text-[30px] sm:text-[35px] lg:text-[44px] leading-[35px] sm:leading-[57px] font-bold text-[#FFFFFF] text-center'>
//                           Loved by 10,000+ {' '}
                        
//                           <motion.span
//                             className="inline-block bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
//                             variants={container}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                           >
//                             {trustText.split("").map((char, index) => (
//                               <motion.span key={index} variants={letter} className="inline-block">
//                                 {char}
//                               </motion.span>
//                             ))}
//                           </motion.span>
//                         </h1>

//                         <div className='flex justify-center'>
//                             <p className='text-[#BDBDBD] text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]   sm:max-w-[500px]  max-w-[550px]  xl:w-[41%] text-center '>Join thousands of developers who have transformed their coding
//                                 workflow with AI-powered assistance.</p>
//                         </div>

//                     </div>
//                     <div className="sm:flex gap-10 pt-[23px] lg:pt-[33px] ">
//                         <Swiper
//                             modules={[Autoplay]}
//                             spaceBetween={20}
//                             slidesPerView={1.1}
//                             loop={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
                            
//                             breakpoints={{
//                                 640: {
//                                     slidesPerView: 1.2,
//                                 },
//                                 768: {
//                                     slidesPerView: 2,
//                                 },
//                                 1024: {
//                                     slidesPerView: 3,
//                                 },
//                                 1280: {
//                                     slidesPerView: 4,
//                                 },
//                             }}
//                         >
//                             {developersData.map((item, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Cards {...item} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//         </section> 
 
//         </> 
//     )
// }

// export default Developers

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Cards from './Cards'
// import image from "../../assets/Images/Container.svg"
// import image2 from "../../assets/Images/Testimonial Image.svg"
// import image3 from "../../assets/Images/Testimonial Image (1).svg"
// import image4 from "../../assets/Images/Container.svg"
import image from "../../assets/Images/feedback (1).svg"
import image2 from "../../assets/Images/feedback (2).svg"
import image3 from "../../assets/Images/feedback (3).svg"
import image4 from "../../assets/Images/feedback (4).svg"
import Background from "../../assets/Images/Background+Blur (2).png"
import Background2 from "../../assets/Images/Background+Blur (3).png"
import Background3 from "../../assets/Images/Background+Blur (4).png"
import Background4 from "../../assets/Images/Background+Blur (5).png"
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react"

function Developers({ }) {

    // 👇 naya add kiya — slider control ke liye
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const AUTOPLAY_DELAY = 2500;

    const togglePlay = () => {
        if (!swiperRef.current) return;
        if (isPlaying) {
            swiperRef.current.autoplay.stop();
        } else {
            swiperRef.current.autoplay.start();
        }
        setIsPlaying((prev) => !prev);
    };

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
                duration: 0.30,
                ease: [0.25, 0.8, 0.25, 1],
            },
        },
    };
    return (
        <>
            <section className=' px-2 md:px-0 pt-[24px]  lg:pt-[49px] lg:py-0'>
                <div className='container'>
                    <div className=''>
                         <h1 className=' developer_text text-[30px] sm:text-[35px] lg:text-[44px] leading-[35px] sm:leading-[57px] font-bold text-[#FFFFFF] text-center'>
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
                            <p className='text-[#BDBDBD] text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]   sm:max-w-[500px]  max-w-[550px]  xl:w-[41%] text-center '>Join thousands of developers who have transformed their coding
                                workflow with AI-powered assistance.</p>
                        </div>

                    </div>
                    <div className="sm:flex gap-10 pt-[23px] lg:pt-[33px] ">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.1}
                            loop={true}
                            autoplay={{
                                delay: AUTOPLAY_DELAY,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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

                   
                    <div className="flex items-center justify-center gap-3 pt-[10px]">
                        <div className="flex items-center gap-2">
                            {developersData.slice(0, 8).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => swiperRef.current?.slideToLoop(i)}
                                    className={`h-[8px] rounded-full transition-all cursor-pointer duration-300 relative overflow-hidden bg-[#3a3a3a] ${
                                        i === activeIndex ? "w-[32px]" : "w-[8px]"
                                    }`}
                                >
                                    {i === activeIndex && (
                                        <span
                                            key={activeIndex + "-" + isPlaying}
                                            className="absolute top-0 left-0 h-full bg-white  rounded-full"
                                            style={{
                                                animation: isPlaying
                                                    ? `fillBar ${AUTOPLAY_DELAY}ms linear forwards`
                                                    : "none",
                                                width: isPlaying ? undefined : "40%",
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={togglePlay}
                            className="w-[36px] h-[36px] rounded-full bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-[#3a3a3a] transition-colors"
                        >
                            {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" />}
                        </button>
                    </div>
        </div>
        </section> 
 
        </> 
    )
}

export default Developers
