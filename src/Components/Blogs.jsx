import React from 'react'

import border from "../assets/Images/Border (2).png"
import border2 from "../assets/Images/Border (3).png"
import border3 from "../assets/Images/Border (4).png"
import arrow from "../assets/Images/smallarrow.png"
import fullimage from "../assets/Images/fuulimage.png"


function Blogs() {
  return (
       <div className='flex relative '>
                <div className='border-[2px] border-[#292929] rounded-[8px] pt-3  w-[465px] '>
                  
                      <div className='flex items-center justify-between py-5 pl-10 pr-7'>
                        <h1 className='text-[#FFFFFF]  text-[20px] font-bold'>Latest Blogs & Insights</h1>
                        <div className='flex justify-end items-end ' >
                            <div className='bg-[#292929] h-[30px] w-[30px] flex items-center justify-center rounded-full'>
                                <img src={arrow} alt='arrow' />
                            </div>
                        </div>
                    </div>
                  
                    <div className='flex  justify-center items-end pt- pb-8 '>
                         <img src={fullimage} alt='image' />
                     
                    </div>
                  
                </div>
    
    
            </div>
  )
}

export default Blogs
