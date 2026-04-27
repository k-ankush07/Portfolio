import React from 'react'

import border from "../../assets/Images/Border (2).png"
import border2 from "../../assets/Images/Border (3).png"
import border3 from "../../assets/Images/Border (4).png"
import arrow from "../../assets/Images/arrow.svg"
import fullimage from "../../assets/Images/post.svg"


function Blogs() {
  return (
       <div className='flex relative w-full sm:w-[49%] md:w-[33.3%]'>
                <div className='border-[2px] border-[#292929] rounded-[8px] pt-3  w-[100%] '>
                  
                      <div className='flex items-center justify-between py-5 px-3 lg:pl-10 lg:pr-7'>
                        <h1 className='text-[#FFFFFF]  text-[10px] lg:text-[20px] font-bold'>Latest Blogs & Insights</h1>
                        <div className='flex justify-end items-end ' >
                            {/* <div className='bg-[#292929] lg:h-[30px] lg:w-[30px] w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] flex items-center justify-center rounded-full'> */}
                                <img src={arrow} alt='arrow' className='lg:h-10 lg:w-10 cursor-pointer ' />
                            {/* </div> */}
                        </div>
                    </div>
                  
                    <div className='flex  justify-center items-end px-2 pb-8 '>
                         <img src={fullimage} alt='image' className='' />
                     
                    </div>
                  
                </div>
    
    
            </div>
  )
}

export default Blogs
