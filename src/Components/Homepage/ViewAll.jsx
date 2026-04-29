import React from 'react'
import arrow from "../../assets/Images/arrow.svg"
import RecruiterOne from "./RecruiterOne"
function ViewAll() {
  
  return (
   <>
   
   <div>
    <div className="flex flex-col">
        <RecruiterOne index={0} />
        <RecruiterOne index={0} />
        <RecruiterOne index={0} />
      </div>

     <div className=' text-[#FFFFFF] text-[14px] md:text-[16px] py-2 lg:py-[22px]  '>
          <div className='flex gap-3 justify-center items-center'>
                        <h1>
                            View all Projects
                           
                        </h1>
                         <img src={arrow} alt='arrow' className='lg:h-10 lg:w-10 cursor-pointer' />
                    </div>
      
    </div>
   </div>
   </>
  )
}

export default ViewAll
