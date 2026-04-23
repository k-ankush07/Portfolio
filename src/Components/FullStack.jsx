import React from 'react'
import cardCircle from "../assets/Images/cardCircle.png"
import { FaLocationDot } from "react-icons/fa6";
import Overlay11 from "../assets/Images/Overlay (11).png"
import Overlay10 from "../assets/Images/Overlay (10).png"
import Overlay8 from "../assets/Images/Overlay (8).png"
import Overlay9 from "../assets/Images/Overlay (9).png"
import Overlay12 from "../assets/Images/Overlay (12).png"
import Overlay13 from "../assets/Images/Overlay (13).png"
import Overlay14 from "../assets/Images/Overlay (14).png"
import Overlay15 from "../assets/Images/Overlay (15).png"
import background1 from '../assets/Images/Background+Blur.png'
import background2 from '../assets/Images/Background+Blur (1).png'
function FullStack() {
    return (
        <section className='bg-[#000000] px-3 py-5'>

            <div className='container '>
                <div className='bg-[#000000] lg:flex lg:gap-5 justify-around border items-center  border-[#292929] rounded-[8px] relative md:py-[39px] px-6 py-6 '>
                    <img src={background1} alt=' ' className='absolute bottom-0 -left-10 lg:right-70 opacity-20 overflow-hidden' />
                    <img src={background2} alt=' ' className='absolute bottom-0 right-0 opacity-25 overflow-hidden' />
                    {/* first card section */}
                    <div className='md:flex  '>
                        <div className='border py-9 md:py-[40px] md:px-[75px] border-[#8F74BF54] w-full rounded-[8px] bg-[#8F74BF1A] '>
                            <div className=' flex justify-center '>
                                <img src={cardCircle} alt='card circle' />
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='text-[24px] font-bold text-[#FFFFFF]'>Jenny Wilson</h1>
                                <p className='text-[14px] text-[#BDBDBD]'>Product Designer @ Google</p>
                            </div>
                            <div className='flex justify-center'>
                                <div className="inline-block mt-3 rounded-md p-[2px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78]">
                                    <div className="flex items-center gap-1 rounded-md bg-[#181818] px-2 py-1.5 text-[10.59px] sm:text-[12px] text-white">
                                        <span className="text-[#FFAF7B] px-1 py-1"><FaLocationDot /> </span>
                                        <span className="text-[#c58962]">London, United Kingdom</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center gap-2 mt-5'>
                                <img src={Overlay11} alt=' overlay 18' />
                                <img src={Overlay10} alt=' overlay 18' />
                                <img src={Overlay8} alt=' overlay 18' />
                                <img src={Overlay9} alt=' overlay 18' />
                            </div>
                            <div className='flex justify-center'>
                                <div className='rounded-[500px] bg-[#FFFFFF] border border-[#FCFCFC] py-3 px-15 mt-5'>
                                    Hire Me
                                </div>
                            </div>
                        </div>

                    </div>


                   <div className='md:flex gap-6'>
                     {/* second section */}
                    <div className=' sm:flex  lg:border-r-[1px]  border-gray-600 pr-[40px] mt-7 lg:mt-0 '>
                        <div >
                            <div>
                                <h1 className='text-[#FFFFFF] font-bold text-[20px]'>Work</h1>
                                <p className='text-[#BDBDBD]'>Osinski, Kohler and Bashirian 74-102565</p>
                            </div>

                            <div className='mt-5'>
                                <h1 className='text-[#FFFFFF] text-[20px] font-bold'>Skills</h1>
                                <p className='text-[#BDBDBD] text-[14px]'>Osinski, Kohler and Bashirian 74-102565</p>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-5 max-w-[350px]  text-[12px]'>
                                <div className='px-2 py-1 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]'>Brand Design </div>
                                <div className='px-2 py-1 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]'>UI Design </div>
                                <div className='px-2 py-1 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]'>Figma </div>
                                <div className='px-2 py-1 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]'>Adobe After Effects </div>
                                <div className='px-2 py-1 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]'>Sketch</div>
                                <div className='px-2 py-1 rounded-[8px] bg-[#8F74BF1A] text-[#FFAF7B] border border-[#8F74BF54]'>Pen & Paper</div>
                            </div>
                            <div className='mt-8'>
                                <h1 className='text-[#FFFFFF] text-[20px] font-bold mb-2 lg:mb-1'>Portfolio Links</h1>

                                <div className='flex gap-2'>
                                    <img src={Overlay12} alt='logo' />
                                    <img src={Overlay13} alt='logo' />
                                    <img src={Overlay14} alt='logo' />
                                    <img src={Overlay15} alt='logo' />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 3rd section */}
                    <div className='flex mt-5 lg:mt-0 lg:justify-center items-center xl:w-[362px]'>
                        <div>
                            <div>
                                <h1 className='text-[#FFFFFF] text-[20px] font-bold max-w-[310px]'>Full-Stack Developer and a little bit of everything</h1>
                               <div className='space-y-2 text-[#BDBDBD] text-[14px] max-w-[300px]'>
                                 <p className=' mt-5 '>I'm Aayush Bharti, a proactive full-stack developer passionate about  creating dynamic web experiences. From frontend to backend, I thrive on  solving complex problems with clean, efficient code. My expertise spans  React, Next.js, and Node.js, and I'm always eager to learn more.</p>
                                <p>When I'm not immersed in work, I'm exploring new ideas and staying curious.  Life's about balance, and I love embracing every part of it.</p>
                                <p>I believe in waking up each day eager to make a difference!</p>
                               </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default FullStack
