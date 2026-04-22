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
    

           <section className='bg-[#000000]'>
            <div className='container'>
                <div className='  py-[6px]'>

            {/* Container */}
            <div className="md:flex  gap-[75px] md:pl-[40px] md:pb-[40px] md:pt-[40px] pr-[53px]"
                style={{
                    borderRadius: '15px',
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize:'cover',
                    width:'100%'
                }}
            >

                {/* First div */}
                <div className="rounded-xl flex relative w-[60%]">
                    <div className='text-[#FFFFFF] text-[20px] font-bold md:w-[409px] absolute top-[25px] left-[29px]'>
                        <p>Developed a recruitment platform to connect job seekers and recruiters</p>
                    </div>

                    <div className=' hidden md:block md:absolute right-[82px] top-[32px]'>
                        <img src={circleImage} alt='circle Image' />
                    </div>

                    <img src={fullImage} alt='background color' className='w-full' />
                </div>

                {/* Second div */}
                <div className=' flex flex-col justify-center  '>
                    <div className='flex items-center gap-3 text-[#FFFFFF]'>
                        <img src={shopify} alt='shopify logo' />
                        <h1 className='text-[40px] font-bold'>
                            Recruiter
                            <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                                One
                            </span>
                        </h1>
                    </div>

                    <div className='md:max-w-[430px] text-[#BDBDBD]'>
                        <p>
                            Developed a recruitment platform to connect job seekers and recruiters.
                            Implemented job posting, candidate profiles, and application tracking.
                            Built secure user authentication and role-based dashboards
                        </p>
                    </div>

                    <div>
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
                    <div className='flex flex-wrap gap-2 md:w-[384px] mt-7'>
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