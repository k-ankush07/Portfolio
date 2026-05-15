import React, { useState } from 'react'

import border from "../../assets/Images/Border (2).png"
import border2 from "../../assets/Images/Border (3).png"
import border3 from "../../assets/Images/Border (4).png"
import arrow from "../../assets/Images/arrow.svg"
import fullimage from "../../assets/Images/post.svg"
import {motion} from "framer-motion"

function Blogs() {
        const [isHovered, setIsHovered] = useState(false);
  return (
       <div className='flex  w-full sm:w-[49%] xl:w-[33.3%] cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}    
       >
                <div className='border-[1px] border-[#292929] rounded-[8px]   w-[100%]  overflow-hidden'>
                  
                      <div className={`flex items-center justify-between pt-[16px] pb-[11px] pl-[18px] pr-[20px] lg:pt-[20px] lg:pb-[19px] lg:pl-[36px] lg:pr-[21px] transition-all duration-400
                        `}>
                        <h1 className='text-[#FFFFFF]  text-[16px] sm:text-[13px] lg:text-[18px]  xl:text-[20px] font-bold'>Latest Blogs & Insights</h1>
                        <div className='flex justify-end items-end ' >
                          
        <motion.img
              src={arrow}
              alt="arrow"
              className={`lg:h-10 lg:w-10 transition-all duration-200 ease-out
    ${isHovered
                  ? "-translate-y-0 opacity-100"   
                  : "-translate-y-6 opacity-0"  
                }`}
                                whileHover={{ scale: 1.15}}

                                transition={{ duration: 0.4 }}
            />
                            {/* </div> */}
                        </div>
                    </div>
                  
                    <div className={`flex w-[100%] justify-center  px-[93px]  sm:px-[66px] pb-[20px] 
                      `}>
                         <img src={fullimage} alt='image' className={` w-[100%]  transition-all duration-400  ${isHovered ? "scale-105" : "scale-100"}`} />
                     
                    </div>
                  
                </div>
    
    
            </div>
  )
}

export default Blogs
