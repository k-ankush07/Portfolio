import React from 'react'

import border from "../assets/Images/Border (2).png"
import border2 from "../assets/Images/Border (3).png"
import border3 from "../assets/Images/Border (4).png"
import arrow from "../assets/Images/smallarrow.png"
import arrow1 from "../assets/Images/SVG.png"
import arrow2 from "../assets/Images/SVG (1).png"
function CustomerReview() {
  return (
   <div className='flex relative w-full  sm:w-[49%] md:w-[33.3%] '>
            <div className='border-[2px] border-[#292929] rounded-[8px] py-30 sm:pt-15  w-[100%] '>
                <img src={arrow1} alt='phone cll' className=' w-[40%] sm:w-[40%] absolute top-0 left-10' />
                <img src={arrow2} alt='phone cll' className= ' w-[55%] sm:w-[60%]  absolute  sm:top-6 sm:right-10 right-20 top-0' />
                <div className='flex  justify-center items-end py-6 '>
                     
                 
                </div>
              <div className='absolute bottom-0 w-[100%]'>
                  <div className='flex items-center justify-between py-5 lg:px-6 px-4'>
                    <h1 className='text-[#FFFFFF]  text-[10px] lg:text-[20px] font-bold'>Customer reviews/Feedback</h1>
                    <div className='flex justify-end items-end ' >
                        <div className='bg-[#292929] lg:h-[30px] lg:w-[30px] w-[20px] h-[20px] lg:h-[30px] lg:w-[30px]  flex items-center justify-center rounded-full'>
                            <img src={arrow} alt='arrow' className='w-[50%] h-[50%] ' />
                        </div>
                    </div>
                </div>
              </div>
            </div>


        </div>
  )
}

export default CustomerReview
