import React from 'react'
import users from "../../assets/Images/onlinedots.png"
import Blur from "../../assets/Images/Gradient+Blur (1).svg"
import arrow from "../../assets/Images/arrow.svg"
// import arrow from "../assets/Images/smallarrow.png"
function Next_Project() {
    return (
        <>

            <div className='relative bg-[#000000] w-full xl:w-[60%]'>
                <img src={Blur} alt=' blur logo' className='absolute right-0  opacity-90' />
                <div className=' border  border-[#292929] pl-[30px] pr-[39px]   pt-[28px] lg:pt-[53px] pb-[45px] sm:pr-[100px] sm:pl-[150px] rounded-md flex flex-col gap-6'>
                    <div className='text-center flex flex-col lg:gap-2  '>
                        <h1 className='font-bold text-[18px] lg:text-[24px] text-[#FFFFFF]'>Let's work together on your next project</h1>
                        <p className='text-[12px] lg:text-[16px]  text-[#BDBDBD]'>Open communication, async updates, zero surprises</p>
                    </div>
                    <div>
                        <img src={users} alt='users' className='' />
                    </div>
                   
                    <div className=' z-50 '>
            <img src={arrow} alt='arrow' className= ' cursor-pointer  absolute cursor-pointer right-3  bottom-2   lg:right-8 h-6 w-6 lg:bottom-4 lg:h-10 lg:w-10 ' />
        </div>
                </div>
            </div>


        </>
    )
}

export default Next_Project