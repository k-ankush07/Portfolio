import React from 'react'
import curveLine from "../../assets/Images/curveline.svg"
import Blur from "../../assets/Images/Gradient+Blur (1).svg"
import skilss1 from "../../assets/Images/skilssimages (1).svg"
import skilss2 from "../../assets/Images/skilssimages (2).svg"
import skilss3 from "../../assets/Images/skilssimages (3).svg"
import skilss4 from "../../assets/Images/skilssimages (4).svg"
import skilss5 from "../../assets/Images/skilssimages (5).svg"
import skilss6 from "../../assets/Images/skilssimages (6).svg"
import skilss7 from "../../assets/Images/skilssimages (7).svg"
import arrow from "../../assets/Images/arrow.svg"
function Nextproject() {
  return (
   <>
  <div className='bg-[#000000] xl:w-[60%]'>
     <div className=' bg-[#000000] relative flex flex-col justify-center items-center  md:px-15 py-4 rounded-[8px] border border-[#292929]  mx-auto px-[39px]'>
    <img src={Blur} alt='blur gradient' className='absolute right-0 overflow-hidden top-0' />
    <div className='text-[#FFFFFF] lg:pt-10  '>
        <h2 className=' text-[12px] lg:text-[24px] text-center '>Let's work together on your next project</h2>
        <p className='text-[#BDBDBD] text-[8px] lg:text-[16px] text-center'>Open communication, async updates, zero surprises</p>
    </div>
    {/* users and curve line */}
    <div className='relative mt-4 lg:-mt-4 group '>
      <div className='xl:pl-[10px] lg:pb-[42px] lg:pt-[59px]  relative' >
      <div>
      
          {/* left bottom */}
             <img src={skilss5} alt='images'  className='absolute h-[36px] w-[36px]  md:h-[48px] md:w-[48px] -left-3 -bottom-2 md:-left-[28px] md:-bottom[14px]  lg:bottom-7 lg:-left-3 '
              style={{
    "--x": "-120px",
    "--y": "80px",
    animationDelay: "0.1s",
  }}
   />
             {/* left top */}
              <img src={skilss6} alt='images' className='absolute h-[28px] w-[28px] md:h-[48px] md:w-[48px]  -left-3 -top-2 md:-left-[25px] md:-top-[17px] lg:-left-3  lg:top-7 ' />
              {/* right top */}
        <img src={skilss2} alt='images' className='absolute h-[36px] w-[36px] -right-1 -top-2 md:h-[48px] md:w-[48px] md:-right-[20px] md:-top-[13px] lg:-right-5 lg:top-10 '/>
          {/* right bottom */}
          <img src={skilss1} alt='images' className='absolute h-[36px] w-[36px] md:h-[48px] md:w-[48px] right-0 -bottom-1 md:-right-[20px] md:-bottom-[13px] lg:-right-9 lg:bottom-7' />
        {/* right center */}
        <img src={skilss3} alt='images'  className='absolute h-[36px] w-[36px] right-[86px] top-[44px]  md:right-[97px] md:top-[54px] md:h-[48px] md:w-[48px]  lg:right-25 lg:top-28 left-center-5'/>
         {/* left center */}
        <img src={skilss7} alt='images' className='absolute h-[36px] w-[36px] md:h-[48px] md:w-[48px] left-[18%] top-[44px] max-xs:top-[36px] md:left-[90px] md:top-[51px] lg:left-25 lg:top-28 left-center' />
        {/* main center image */}
        <img src={skilss4} alt='images' className='absolute  h-[70px] w-[70px] left-[41%] max-xs:top-[14px]  max-xs:h-[54px] max-xs:w-[54px] sm:left-[41%] top-[25px] sm:top-[26px] sm:h-[100px] sm:w-[100px]  md:left-[41%] md:top-[25px] md:h-[100px] md:w-[100px] lg:h-[117px] lg:w-[117px]  lg:left-55 lg:top-[80px] full_image ' 
      />
      </div>
      <img src={curveLine}  alt='curve line' className='' />
      
    </div> 
    <div className=' mt-6'>
      <img src={arrow} alt='arrow' className='absolute -right-5 -bottom-3 sm:-right-15  md:-right-25 lg:bottom-0 lg:-right-30 lg:h-10 lg:w-10 cursor-pointer'  />
    </div>
    </div>

   </div>
  </div>
   </>
  )
}

export default Nextproject
