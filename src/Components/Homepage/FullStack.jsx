import React from 'react'
import cardCircle from "../../assets/Images/circlenew.svg"
import { FaLocationDot } from "react-icons/fa6";
import Overlay11 from "../../assets/Images/Overlay (38).svg"
import Overlay10 from "../../assets/Images/Overlay (39).svg"
import Overlay8 from "../../assets/Images/Overlay (40).svg"
import Overlay9 from "../../assets/Images/Overlay (41).svg"
import Overlay12 from "../../assets/Images/Overlay (42).svg"
import Overlay13 from "../../assets/Images/Overlay (43).svg"
import Overlay14 from "../../assets/Images/Overlay (44).svg"
import Overlay15 from "../../assets/Images/Overlay (45).svg"
import background1 from '../../assets/Images/Background+Blur.svg'
import background2 from '../../assets/Images/Background+Blur (1).svg'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


// for images
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
        },
    },
};



// for text
const textContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const textItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
const mainContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.4, // section-level delay
        },
    },
};
const skillItem = {
    hidden: { opacity: 0, y: 30, scale: 0.7 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 12,
        },
    },
};

function FullStack() {
    const skills = [
        "Brand Design",
        "UI Design",
        "Figma",
        "Adobe After Effects",
        "Sketch",
        "Pen & Paper",
    ];
    const logos = [Overlay12, Overlay13, Overlay14, Overlay15];
    const socialIcons = [Overlay11, Overlay10, Overlay8, Overlay9];
    return (
        <section className=' px-3 md:px-0 pt-5 lg:pt-[40px]'>

            <div className='container '>
                <div className='bg-[#000000] xl:flex lg:gap-5  border  items-center  border-[#292929] rounded-[8px] relative md:py-[39px] px-4 py-6 '>
                    <img src={background1} alt=' ' className='absolute bottom-0 -left-10 lg:right-70 opacity-20 overflow-hidden' />
                    <img src={background2} alt=' ' className='absolute bottom-0 right-0 opacity-25 overflow-hidden' />
                    {/* first card section */}
                    <div className='md:flex xl:pl-[20px] xl:pr-[40px]  xl:w-[30%] '>
                        <div className='border py-9 md:py-[40px] md:px-[65px] xl:px-[70px] border-[#8F74BF54] w-full rounded-[8px] bg-[#8F74BF1A] '>
                            <div className=' flex justify-center '>
                                <img src={cardCircle} alt='card circle' />
                            </div>
                            <motion.div
                                variants={textContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className='text-center mt-4'>
                                <motion.h1
                                    variants={textItem}
                                    className='text-[24px] font-bold text-[#FFFFFF]'>Jenny Wilson</motion.h1>
                                <motion.p
                                    variants={textItem}
                                    className='text-[14px] text-[#BDBDBD]'>Product Designer @ Google</motion.p>
                            </motion.div>
                            <div className='flex justify-center'>
                                <div className="flex justify-center">
                                    <div className="relative inline-block mt-3 rounded-md p-[1.5px] overflow-hidden">

                                        {/* SLOW ROTATING BORDER */}
                                        <span className="absolute -inset-[250%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(#3A1C71,#DF7A78,#DF7A78,#3A1C71)]"></span>

                                        {/* CONTENT */}
                                        <div className="relative z-10 flex items-center gap-1 rounded-md bg-[#181818] px-2 py-1.5 text-[10.59px] sm:text-[12px] xl:px-4 text-white">

                                            <span className="text-[#FFAF7B] px-1 py-1">
                                                <FaLocationDot />
                                            </span>

                                            <span className="text-[#c58962]">
                                                London, United Kingdom
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="flex justify-center gap-2 mt-5"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {socialIcons.map((img, i) => (
                                    <motion.img
                                        key={i}
                                        src={img}
                                        alt="logo"
                                        variants={item}
                                        className="cursor-pointer relative z-[1]"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                ))}
                            </motion.div>


                            <div className='flex justify-center'>
                                <Link to=""><button className=' btn-slide cursor-pointer relative z-1 rounded-[500px] bg-[#FFFFFF]  py-3 px-15 mt-5 sm:px-15 xl:px-16 '>
                                    Hire Me
                                </button></Link>
                            </div>
                        </div>

                    </div>


                    <div className='md:flex  gap-6 xl:w-[70%]'>
                        {/* second section */}
                        <div className=' sm:flex  justify-between lg:border-r-[1px]  border-gray-600 pr-[40px] mt-7 xl:mt-0 '>
                            <div className='w-[100%]'>
                                <motion.div
                                    variants={textContainer}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <motion.h1
                                        variants={textItem}
                                        className='text-[#FFFFFF] font-bold text-[20px]'
                                    >
                                        Work
                                    </motion.h1>

                                    <motion.p
                                        variants={textItem}
                                        className='text-[#BDBDBD]'
                                    >
                                        Osinski, Kohler and Bashirian 74-102565
                                    </motion.p>


                                    <motion.div className='mt-5'
                                        variants={textContainer}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.3 }}>
                                        <motion.h1
                                            variants={textItem} className='text-[#FFFFFF] text-[20px] font-bold'>Skills</motion.h1>
                                        <motion.p variants={textItem} className='text-[#BDBDBD] text-[14px]'>Osinski, Kohler and Bashirian 74-102565</motion.p>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="flex flex-wrap gap-2 mt-5 max-w-[350px] text-[12px]"
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    {skills.map((itemText, i) => (
                                        <motion.div
                                            key={i}
                                            variants={skillItem}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -3
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-3 py-1.5 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54] cursor-pointer"
                                        >
                                            {itemText}
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <div className='mt-8'>
                                    <h1 className='text-[#FFFFFF] text-[20px] font-bold mb-2 lg:mb-1'>Portfolio Links</h1>

                                    <motion.div
                                        className="flex gap-2"
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        {logos.map((img, i) => (
                                            <motion.img
                                                key={i}
                                                src={img}
                                                alt="logo"
                                                variants={item}
                                                className="cursor-pointer relative z-[1]"
                                                whileHover={{ scale: 1.1 }}
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>


                        {/* 3rd section */}
                        <motion.div
                            className='flex mt-5 lg:mt-0 lg:justify-center items-center lg:pl-[50px]'
                            variants={textContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div>
                                <div>
                                    <motion.h1
                                        variants={textItem}
                                        className='text-[#FFFFFF] text-[20px] font-bold max-w-[310px]'
                                    >
                                        Full-Stack Developer and a little bit of everything
                                    </motion.h1>

                                    <div className='space-y-2 text-[#BDBDBD] text-[14px] max-w-[400px]'>

                                        <motion.p variants={textItem} className='mt-5'>
                                            I'm Ankush Kumar, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
                                        </motion.p>

                                        <motion.p variants={textItem}>
                                            When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
                                        </motion.p>

                                        <motion.p variants={textItem}>
                                            I believe in waking up each day eager to make a difference!
                                        </motion.p>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullStack
