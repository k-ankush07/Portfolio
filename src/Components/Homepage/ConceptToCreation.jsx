import React from 'react'
import { motion } from 'framer-motion'
import aicon from "../../assets/Images/online.svg"
import group1 from "../../assets/Images/yo.svg"
import Background1 from "../../assets/Images/Background+Blur (2).svg"
import Background2 from "../../assets/Images/Background+Blur (3).svg"
import Background3 from "../../assets/Images/Background+Blur (4).svg"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
function ConceptToCreation() {
    return (
        <section className='pt-5 px-2 md:px-0 lg:pt-[0px]'>
            <div className='container'>
                <div className='relative flex flex-col justify-center items-center border border-[#292929] rounded-[8px] md:py-10 lato-regular overflow-hidden py-[43px] lg:pb-[65px] lg:pt-[66px]'>

                    <img src={Background1} className='absolute left-0 top-0' />
                    <img src={Background2} className='absolute xl:left-40 bottom-0 top-0' />
                    <img src={Background3} className='absolute right-0 bottom-0' />

                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                       
                    >
                        <img src={aicon} alt='Aicon' />
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        className='text-[30px] lg:text-[44px] font-bold text-[#FFFFFF] mt-4 sm:mt-7 w-[321px] lg:w-full'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-center leading-8'>
                            Concept to Creation{" "}
                            <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                                Let’s Make It Happen.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className='flex justify-center items-center text-[#FFFFFF] mt-2 lg:mt-7 relative'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h1 className='text-[15px] text-center lg:text-[24px] font-bold'>
                                I'm available for full-time roles & freelance projects.
                            </h1>

                            <div className='flex justify-center'>
                                <p className='text-[11px] max-w-[390px] lg:text-[18px] mt-3 opacity-70 text-center'>
                                    I thrive on crafting dynamic web applications, and
                                    delivering seamless user experiences.
                                </p>
                            </div>

                            <div className='text-center mt-7 flex justify-center'>
                                <Link to="/">
                                   <button className="btn-slide group rounded-[500px]  bg-[#FFFFFF] cursor-pointer  flex items-center gap-5 text-[#000000]  text-[16px] pl-5 pr-3 py-3">
                                    Get in Touch
                                    <FaArrowRightLong className="text-[14.6px] opacity-0 translate-x-[-8px] transition-all opacity-100 duration-300 group-hover:opacity-100 group-hover:-translate-x-4" />
                                    </button>
                                    
                                </Link>
                            </div>
                        </div>

                        {/* Rotating Image */}
                        <div className='hidden lg:block'>
                            <img
                                src={group1}
                                alt='circle Icon'
                                className='absolute top-5  animate-spin-slow'
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default ConceptToCreation