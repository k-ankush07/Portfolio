import React from 'react'
import aicon from "../assets/Images/online.svg"
import group1 from "../assets/Images/yo.svg"
import Background1 from "../assets/Images/Background+Blur (2).svg"
import Background2 from "../assets/Images/Background+Blur (3).svg"
import Background3 from "../assets/Images/Background+Blur (4).svg"
import { Link } from 'react-router-dom'
function ConceptToCreation() {
    return (
        <section className=' py-5 px-2 md:px-0'>
            <div className='container'>
                <div className=' relative flex flex-col justify-center items-center border border-[#292929] rounded-[8px] md:py-10 lato-regular overflow-hidden py-[43px]' >
                    <img src={Background1} alt='background1' className='absolute left-0 top-0 ' />
                    <img src={Background2} alt='background1' className='absolute xl:left-40 bottom-0 top-0 ' />
                    <img src={Background3} alt='background1' className='absolute right-0 bottom-0 ' />
                    <div> 
                        <img src={aicon} alt=' Aicon' />
                    </div>
                    <div className=' text-[30px] lg:text-[44px] font-bold text-[#FFFFFF] mt-3 w-[321px] lg:w-full '>
                    <h2 className='text-center leading-8'>
                            Concept to Creation <span className="bg-gradient-to-r from-[#D76D77] leading-tight via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">Let’s Make It Happen.</span>
                    </h2>
                    </div>

                    <div className='flex justify-center items-center  text-[#FFFFFF] mt-2 lg:mt-7 relative'>
                        <div>
                            <h1 className=' text-[15px] text-center lg:text-[24px] font-bold'>I'm available for full-time roles & freelance projects.</h1>
                            <div className='flex justify-center '>
                                <p className='text-[11px]  max-w-[250px] mt-3 opacity-70 text-center'>I thrive on crafting dynamic web applications, and
                                delivering seamless user experiences.</p>
                            </div>
                            <div className=' text-center mt-7'>
                                <Link to=""><button className='btn-slide bg-[#FFFFFF] rounded-[500px] relative z-1 cursor-pointer text-[16px] text-[#000000] px-7 py-3'> Get in Touch</button>
</Link>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <img src={group1} alt='circle Icon' className='absolute top-5 ' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ConceptToCreation
