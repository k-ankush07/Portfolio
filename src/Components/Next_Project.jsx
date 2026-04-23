import React from 'react'
import users from "../assets/Images/onlinedots.png"
import Blur from "../assets/Images/Gradient+Blur.png"
import arrow from "../assets/Images/arrow.png"
function Next_Project() {
  return (
    <>
   
            <div className='relative bg-[#000000] w-full xl:w-[60%]'>
        <img src={Blur} alt=' blur logo'  className='absolute right-0'/>
        <div className=' border  border-[#292929] pl-[38px] pr-[39px] pt-[53px] pb-[54px] sm:pr-[100px] sm:pl-[150px] rounded-md flex flex-col gap-6'>
            <div className='text-center flex flex-col gap-2  '>
            <h1 className='font-bold text-[24px] text-[#FFFFFF]'>Let's work together on your next project</h1>
            <p className='text-[16px]  text-[#BDBDBD]'>Open communication, async updates, zero surprises</p>
        </div>
        <div>
            <img src={users} alt='users' className='' />
        </div>
        <div className='relative'>
            <img src={arrow} alt='arrow' className='absolute -right-9  top-1 lg:-right-22' />
        </div>
        </div>
    </div>
        
      
    </>
  )
}

export default Next_Project