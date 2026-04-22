import React from 'react'
import arrow from "../assets/Images/smallarrow.png"
import Overlay from "../assets/Images/Overlay.png"
import Overlay1 from "../assets/Images/Overlay (1).png"
import Overlay2 from "../assets/Images/Overlay (2).png"
import Overlay3 from "../assets/Images/Overlay (3).png"
import Overlay4 from "../assets/Images/Overlay (4).png"
import Overlay5 from "../assets/Images/Overlay (5).png"
import Overlay6 from "../assets/Images/Overlay (6).png"
import Overlay7 from "../assets/Images/Overlay (7).png"

function Tool() {
    return (
        <section className='bg-[#000000] py-5'>
            <div className='container'>
               {/* viww all section */}
                <div className='flex justify-between'>
                    <h1 className='text-[#FFFFFF] text-[44px]'>
                        Tools we{" "}
                        <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                            trust
                        </span>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse varius enim tristique.</p>
                    </h1>
                       <div className='flex justify-end items-end'>
                         <div className='bg-[#292929] h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                            <img src={arrow} alt='arrow' />
                        </div>
                       </div>
                   
                </div>

                
            {/* main div */} 
            <div className='bg-[#292929] pt-[212px] rounded-[8px] mt-[30px] flex flex-col  justify-center space-y-3'>
                <div className='flex justify-center' >
                    <div className='flex gap-2  '>
                         <img src={Overlay} alt='' className='w-9 h-9 md:w-full md:h-full' />
                        <img src={Overlay1} alt='' />
                        <img src={Overlay1} alt='' />
                        <img src={Overlay2} alt='' />
                        <img src={Overlay3} alt='' />
                        <img src={Overlay4} alt='' />
                        <img src={Overlay5} alt='' />
                       
                    </div>

                </div>
                 <div >
                    <div className='flex justify-center gap-2'>
                        <img src={Overlay1} alt='' />
                        <img src={Overlay2} alt='' />
                        <img src={Overlay3} alt='' />
                        <img src={Overlay4} alt='' />
                        <img src={Overlay5} alt='' />
                        <img src={Overlay6} alt='' />
                        <img src={Overlay7} alt='' />
                        <img src={Overlay2} alt='' />
                        <img src={Overlay1} alt='' />
                        <img src={Overlay3} alt='' />
                        <img src={Overlay4} alt='' />
                        <img src={Overlay5} alt='' />
                        <img src={Overlay6} alt='' />
                        <img src={Overlay7} alt='' />
                        <img src={Overlay7} alt='' />
                        <img src={Overlay7} alt='' />
                         
                    </div>

                </div>
                 <div className='mb-[20px]' >
                    <div className='flex justify-center gap-1 items-center w-full'>
                        <img src={Overlay1} alt='' />
                        <img src={Overlay2} alt='' />
                        <img src={Overlay3} alt='' />
                        <img src={Overlay4} alt='' />
                        <img src={Overlay5} alt='' />
                        <img src={Overlay6} alt='' />
                        <img src={Overlay7} alt='' />
                        <img src={Overlay1} alt='' />
                        <img src={Overlay2} alt='' />
                        <img src={Overlay3} alt='' />
                        <img src={Overlay4} alt='' />
                        <img src={Overlay5} alt='' />
                        <img src={Overlay6} alt='' />
                        <img src={Overlay1} alt='' />
                        <img src={Overlay2} alt='' />
                        <img src={Overlay3} alt='' />
                        <img src={Overlay4} alt='' />
                        {/* <img src={Overlay7} alt='' />    */}
                    </div>

                </div>

            </div>





            </div>

        </section>
    )
}

export default Tool
