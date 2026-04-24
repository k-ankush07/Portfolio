import React from 'react'
import arrow from "../assets/Images/arrow.png"
function ViewAll() {
  return (
    <div className='bg-[#000000] text-[#FFFFFF] text-[14px] md:text-[16px] py-2 lg:py-[22px]  '>
          <div className='flex gap-3 justify-center items-center'>
                        <h1>
                            View all Projects
                           
                        </h1>
                         <img src={arrow} alt='arrow' />
                    </div>
      
    </div>
  )
}

export default ViewAll
