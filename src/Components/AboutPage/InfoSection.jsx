import React from 'react'
import userImage from "../../assets/Images/userimage.svg"
import Overlay12 from "../../assets/Images/Overlay (42).svg";
import Overlay13 from "../../assets/Images/Overlay (43).svg";
import Overlay14 from "../../assets/Images/Overlay (44).svg";
import Overlay15 from "../../assets/Images/Overlay (45).svg";
function InfoSection() {

    const logos = [Overlay12, Overlay13, Overlay14, Overlay15];
  return (
    <section className='container'>
        <div className='px-2 md:px-0  lg:flex '> 

            {/* left section  */}
            <div>
                <div className='max-w-[329px] '>
                    <h2 className='text-[40px] leading-[48px] '>I'm Aayush, a <br/>creative <span>engineer</span></h2>
                </div>
            </div>
            <div className='flex '>
                <div className='border-[1px] border-[#FFFFFF] rounded-[8px] p-[15px] ' > 
                    <div className='border-[1px] rounded-[8px] border-[#FFFFFF]/30'>
                        <img src={userImage} alt="User" />
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default InfoSection