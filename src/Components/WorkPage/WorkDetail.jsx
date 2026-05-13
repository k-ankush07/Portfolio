import React from 'react'
import shopify from "../../assets/Images/Vector (5).svg";
import ProjectTitle from './ProjectTitle';
import new1 from "../../assets/Images/new1 (1).svg";
import new2 from "../../assets/Images/new1 (2).svg";
import new3 from "../../assets/Images/new1 (3).svg";
import new4 from "../../assets/Images/new1 (4).svg";
import new5 from "../../assets/Images/new1 (5).svg";
import new6 from "../../assets/Images/new1 (6).svg";
import Built from './Built';
import WorksFull from './WorksFull';
import Backend_Architecture from './Backend_Architecture';
import Backend_ArchitectureSecond from './Backend_ArchitectureSecond';
import Challenges from './Challenges';
import Learned from './Learned';
function WorkDetail() {
    const logos = [

        new2,
        new3,
        new1,
        new5,
        new4,

        new6,
        new1,
        new2,
        new3,
        new4,
        new5,
        new6,

    ];
    return (
        <section className='pt-[96px] lg:pt-[100px] lato-regular'>
            <div className='container'>
                <div >


                    {/* top heading */}
                    <div className='flex justify-between items-end pb-[30px] border-b border-[#FFFFFF]/10'  >

                        <div >
                            <ProjectTitle logo={shopify} title="Recruiter" highlight=" One" />
                            <p className='text-[14px] leading-[24px] text-[#BDBDBD] max-w-[684px] pt-[5px]'>Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards</p>
                        </div>
                        <div>
                            <div className='border-[1px] border-[#8F74BF54] rounded-[8px] text-[12px] leading-[24px] text-[#FFAF7B] pt-[3px] pb-[5px] pl-[11px] pr-[12px] cursor-pointer'>Copy Page</div>
                        </div>
                    </div>

                    {/* 2nd section skills */}
                    <div className='flex'>
                        <div className='  border-b  border-[#FFFFFF]/10 lg:w-[60%]  pr-[80px] pt-[32px] pb-[47px]'>
                           

                           <div className='flex justify-between '>
                             <div className='flex flex-col gap-[24px] '>
                                <div>
                                    <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>TECK STACK</p>
                                    <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Web App</p>
                                </div>
                                <div>
                                    <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>UPDATED</p>
                                    <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Q4 2024</p>
                                </div>
                              
                            </div>
                             <div className='flex flex-col gap-[24px] '>
                                  <div>
                                    <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>ROLE</p>
                                    <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Full-stack Developer</p>
                                </div>
                               
                                <div>
                                    <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>VISIT</p>
                                    <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>academy.aayushbharti.in</p>
                                </div>
                                
                            </div>
                             <div className='flex flex-col gap-[24px] '>
                                 <div>
                                    <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>BUILT</p>
                                    <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Q4 2024</p>
                                </div>
                                <div>
                                    <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>SOURCE</p>
                                    <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>GitHub</p>
                                </div>
                            </div>
                           </div>
                        </div>

                        <div className='w-[40%]'>
                            <div className='  border-b  border-l border-[#FFFFFF]/10 h-full pl-[40px]  pb-[40px]'>
                                <div className='pt-[32px]'>
                                    <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>TECH STACK</p>
                                    <div className="pt-[6px]">

                                        {/* Mobile = 8 */}
                                        <div className="flex flex-wrap gap-[6px] lg:gap-[11px]  xl:hidden">
                                            {logos.slice(0, 8).map((img, i) => (
                                                <img key={i} src={img} alt="logo" />
                                            ))}
                                        </div>

                                        {/* Desktop = 13 */}
                                        <div className="hidden sm:max-w-[610px] xl:flex flex-wrap gap-[9px]">
                                            {logos.slice(0, 13).map((img, i) => (
                                                <img key={i} src={img} alt="logo" />
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Built />
                    <WorksFull />
                    <Backend_Architecture />
                    <Backend_ArchitectureSecond />
                    <Challenges />
                    <Learned />


                </div>
            </div>
        </section>
    )
}

export default WorkDetail
