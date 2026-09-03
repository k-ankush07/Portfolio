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
        <div className='px-2 md:px-0  lg:flex  lg:justify-between gap-[92px] '> 

            {/* left section  */}
            <div className='max-w-[689px] '>
                <div className='max-w-[329px] '>
                    <h2 className='text-[40px] leading-[48px] font-bold '>I'm Aayush, a <br/>creative <span className='bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent'>engineer</span></h2>
                </div>
                <div className='pt-[10px] text-[#BDBDBD]'>
                    <p>I'm Aayush Bharti, a passionate full-stack developer focused on creating modern, responsive, and engaging digital experiences. I enjoy turning ideas into clean, functional websites and applications that feel as good as they work.<br/> <br/>
From frontend interfaces to backend functionality, I love working across the stack and solving complex problems with thoughtful, efficient code. I'm constantly exploring new technologies, improving my skills, and finding better ways to build for the web.<br/> <br/>
When I'm not coding, I'm usually exploring new ideas, experimenting with creative concepts, or learning something new. I believe great work comes from staying curious, paying attention to details, and continuously pushing yourself forward.</p>
<br/> <br/>

<p>I build with curiosity, create with purpose, and always look for what's next.</p>
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