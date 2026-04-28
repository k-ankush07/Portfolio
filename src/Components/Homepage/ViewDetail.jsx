import React from 'react'
import mobile from "../../assets/Images/image 67.svg"
import circleImage from "../../assets/Images/circlesvg.svg"
function ViewDetail() {
    return (
        <div className='w-[100%]'>


      
                <div className=" w-[100%] inline-block relative sm:mt-3 rounded-[28px] p-[1.1px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78]">
                    <div className="  rounded-[26px] bg-[#181818] px-1 py-1 ">
                        <div className=' relative bg-gradient-to-b from-[#5F219E] to-[#C6A3EA]    rounded-[26px]'>
                            <div className=' pt-3 pl-5 pr-5 lg:pl-[29px] sm:pt-5 sm:px-5 flex justify-between' >
                                <p className='max-w-[395px] text-[14px] md:text-[20px] text-[#FFFFFF]'>Developed a recruitment platform to connect job seekers and recruiters</p>
                               <div className=' circlelogo hidden lg:block absolute xl:right-15 xl:top-10  lg:right-5 lg:top-15 lg:h-[90px] lg:w-[90px] xl:h-[120px] lg:w-[120px]'>
                                 <img src={circleImage} alt='circle image'  className=' h-full w-full   ' />
                               </div>
                            </div>
                            <div className='pt-10 flex justify-center px-10 lg:px-0 '>
                                <img src={mobile} alt='image image ' />
                            </div>
                        </div>
                        
                    </div>
                </div>
     
        </div>
    )
}

export default ViewDetail
