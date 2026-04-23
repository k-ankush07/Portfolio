import React from 'react'
import shopify from "../assets/Images/shopify.png"
import fullImage from "../assets/Images/fullImage.png"
import circleImage from "../assets/Images/circleImage.png"
import Background from "../assets/Images/Background.png"
import star from "../assets/Images/vector3.png"
import Bun from "../assets/Images/Bun.png"
import Docker from "../assets/Images/Docker.png"
import Next from "../assets/Images/Next.js.png"
import pnpm from "../assets/Images/pnpm.png"
import PostgreSQL from "../assets/Images/PostgreSQL.png"
import Redis from "../assets/Images/Redis.png"
import Vercel from "../assets/Images/Vercel.png";

function RecruiterOne() {
    return (
        <>
    

           <section className='bg-[#000000] py-3 sm:py-0'>
            <div className='container'>
                <div className=' px-2   lg:px-0 py-[6px]'>

            {/* Container */}
            <div className="image_background lg:flex gap-5 lg:gap-[75px] lg:pl-[40px] md:pb-[40px] lg:pt-[40px] lg:pr-[53px]  "
                style={{
                    
                }}
            >

                {/* First div */}
                <div className="rounded-xl flex relative lg:w-[60%] ">
                    <div className='text-[#FFFFFF] text-[14px] w-[300px] sm:text-[20px] lg:text-[16px] font-bold sm:w-[420px] lg:w-[340px] xl:w-[420px] absolute left-[20px] top-[10px] sm:top-[20px]  sm:left-[30px]  lg:top-[30px] lg:left-[40px]'>
                        <p>Developed a recruitment platform to connect job seekers and recruiters</p>
                    </div>

                    <div className=' hidden md:w-[70px] lg:block md:absolute md:top-[30px] md:right-[20px]  lg:top-[28px] xl:right-[82px] xl:top-[32px]'>
                        <img src={circleImage} alt='circle Image' />
                    </div>

                    <img src={fullImage} alt='background color' className='w-full ' />
                </div>

                {/* Second div */}
                <div className=' flex flex-col justify-center  mt-10 lg:mt-0 '>
                    <div className='flex items-center gap-3 text-[#FFFFFF]'>
                        <img src={shopify} alt='shopify logo' />
                        <h1 className='text-[26px] lg:text-[40px] font-bold'>
                            Recruiter
                            <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                                One
                            </span>
                        </h1>
                    </div>

                    <div className='md:max-w-[430px] hidden lg:block text-[#BDBDBD]'>
                        <p>
                            Developed a recruitment platform to connect job seekers and recruiters.
                            Implemented job posting, candidate profiles, and application tracking.
                            Built secure user authentication and role-based dashboards
                        </p>
                    </div>

                    <div className='hidden lg:block'>
                        <div className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                            <img src={star} alt="star" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>

                        <div className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                            <img src={star} alt="star" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>

                        <div className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                            <img src={star} alt="star" />
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>

                    {/* skills section */}
                    <div className='flex flex-wrap gap-2 space-y-2  sm:w-[400px] lg:w-[384px] mt-7'>
                        <img src={Bun} alt=' logo' />
                        <img src={Docker} alt=' logo' />
                        <img src={Next} alt=' logo' />
                        <img src={pnpm} alt=' logo' />
                        <img src={PostgreSQL} alt=' logo' />
                        <img src={Redis} alt=' logo' />
                        <img src={Vercel} alt=' logo' />
                    </div>
                    
                </div>

            </div>
           
        </div>
            </div>
           </section>
     
                    </>
    )
}

export default RecruiterOne;