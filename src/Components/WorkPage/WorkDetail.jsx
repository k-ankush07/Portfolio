// import React from 'react'
// import shopify from "../../assets/Images/Vector (5).svg";
// import ProjectTitle from './ProjectTitle';
// import new1 from "../../assets/Images/new1 (1).svg";
// import new2 from "../../assets/Images/new1 (2).svg";
// import new3 from "../../assets/Images/new1 (3).svg";
// import new4 from "../../assets/Images/new1 (4).svg";
// import new5 from "../../assets/Images/new1 (5).svg";
// import new6 from "../../assets/Images/new1 (6).svg";
// import Built from './Built';
// import WorksFull from './WorksFull';
// import Backend_Architecture from './Backend_Architecture';
// import Backend_ArchitectureSecond from './Backend_ArchitectureSecond';
// import Challenges from './Challenges';
// import Learned from './Learned';
// function WorkDetail() {
//     const logos = [
//         new2,new3,new1,new5,new4,new6,
//         new1,new2,new3,new4,new5,new6,];
//     return (
//         <section className='pt-[96px] lg:pt-[100px] lato-regular'>
//             <div className='container'>
//                 <div >


//                     {/* top heading */}
//                     <div className='px-2 sm:px-0'>
//                         <div className='  flex flex-wrap justify-between items-end pb-[15px] lg:pb-[30px]  border-b border-[#FFFFFF]/10'  >

//                         <div >
//                             <ProjectTitle logo={shopify} title="Recruiter" highlight=" One" />
//                             <p className='text-[14px] leading-[24px] text-[#BDBDBD] max-w-[684px] pt-[5px]'>Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards</p>
//                         </div>
//                         <div className='pt-[10px]'>
//                             <div className='border-[1px] border-[#8F74BF54] rounded-[8px] text-[12px] leading-[24px] text-[#FFAF7B] pt-[3px] pb-[5px] pl-[11px] pr-[12px] cursor-pointer'>Copy Page</div>
//                         </div>
//                     </div>
//                     </div>

                    
//                     <div className='lg:flex px-2 sm:px-0'>
//                         <div className='  border-b  border-[#FFFFFF]/10 lg:w-[60%]  pt-[20px] pb-[20px]  lg:pr-[80px] lg:pt-[32px] lg:pb-[47px]'>


//                             <div className='flex justify-between '>
//                                 <div className='flex flex-col gap-[15px] lg:gap-[24px] '>
//                                     <div>
//                                         <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>TECK STACK</p>
//                                         <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Web App</p>
//                                     </div>
//                                     <div>
//                                         <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>UPDATED</p>
//                                         <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Q4 2024</p>
//                                     </div>

//                                 </div>
//                                 <div className='flex flex-col gap-[15px] lg:gap-[24px] '>
//                                     <div>
//                                         <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>ROLE</p>
//                                         <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Full-stack Developer</p>
//                                     </div>

//                                     <div>
//                                         <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>VISIT</p>
//                                         <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>academy.aayushbharti.in</p>
//                                     </div>

//                                 </div>
//                                 <div className='flex flex-col gap-[15px] lg:gap-[24px] '>
//                                     <div>
//                                         <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>BUILT</p>
//                                         <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>Q4 2024</p>
//                                     </div>
//                                     <div>
//                                         <p className=' text-[10px] leading-[24px] text-[#BDBDBD] '>SOURCE</p>
//                                         <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>GitHub</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='lg:w-[40%]'>
//                             <div className='  border-b  lg:border-l border-[#FFFFFF]/10 h-full px-2 sm:px-0 pt-[20px] pb-[20px]  lg:pt-[32px] lg:pl-[40px]  lg:pb-[40px]'>
//                                 <div className=''>
//                                     <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>TECH STACK</p>
//                                     <div className="pt-[6px]">

                                    
//                                         <div className="flex flex-wrap gap-[6px] lg:gap-[11px]  max-w-[400px] sm:hidden">
//                                             {logos.slice(0, 8).map((img, i) => (
//                                                 <img key={i} src={img} alt="logo" className='' />
//                                             ))}
//                                         </div>

                                       
//                                         <div className="hidden sm:max-w-[610px] sm:flex flex-wrap gap-[9px]">
//                                             {logos.slice(0, 13).map((img, i) => (
//                                                 <img key={i} src={img} alt="logo" />
//                                             ))}
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <Built />
//                     <WorksFull />
//                     <Backend_Architecture />
//                     <Backend_ArchitectureSecond />
//                     <Challenges />
//                     <Learned />


//                 </div>
//             </div>
//         </section>
//     )
// }

// export default WorkDetail










import React from 'react'
import { motion } from "framer-motion";

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
        new2, new3, new1, new5, new4, new6,
        new1, new2, new3, new4, new5, new6,
    ];

    return (
        <section className='pt-[96px] lg:pt-[100px] lato-regular overflow-hidden'>
            <div className='container'>
                <div>

                    {/* top heading */}
                    <motion.div
                        className='px-2 sm:px-0'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className='flex flex-wrap justify-between items-end pb-[15px] lg:pb-[30px] border-b border-[#FFFFFF]/10'>

                            <div>
                                <ProjectTitle
                                    logo={shopify}
                                    title="Recruiter"
                                    highlight=" One"
                                />

                                <motion.p
                                    className='text-[14px] leading-[24px] text-[#BDBDBD] max-w-[684px] pt-[5px]'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.7 }}
                                >
                                    Developed a recruitment platform to connect
                                    job seekers and recruiters. Implemented job
                                    posting, candidate profiles, and application
                                    tracking. Built secure user authentication
                                    and role-based dashboards
                                </motion.p>
                            </div>

                            <div className='pt-[10px]'>

                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#8F74BF20"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className='border-[1px] border-[#8F74BF54] rounded-[8px] text-[12px] leading-[24px] text-[#FFAF7B] pt-[3px] pb-[5px] pl-[11px] pr-[12px] cursor-pointer'
                                >
                                    Copy Page
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>

                    {/* details section */}
                    <motion.div
                        className='lg:flex px-2 sm:px-0'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <div className='border-b border-[#FFFFFF]/10 lg:w-[60%] pt-[20px] pb-[20px] lg:pr-[80px] lg:pt-[32px] lg:pb-[47px]'>

                            <div className='flex justify-between'>

                                <motion.div
                                    className='flex flex-col gap-[15px] lg:gap-[24px]'
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{duration: 0.9 }}
                                    viewport={{ once: true }}
                                >

                                    <div>
                                        <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                            TECK STACK
                                        </p>

                                        <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>
                                            Web App
                                        </p>
                                    </div>

                                    <div>
                                        <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                            UPDATED
                                        </p>

                                        <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>
                                            Q4 2024
                                        </p>
                                    </div>

                                </motion.div>

                                <motion.div
                                    className='flex flex-col gap-[15px] lg:gap-[24px]'
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9 }}
                                    viewport={{ once: true }}
                                >

                                    <div>
                                        <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                            ROLE
                                        </p>

                                        <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>
                                            Full-stack Developer
                                        </p>
                                    </div>

                                    <div>
                                        <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                            VISIT
                                        </p>

                                        <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>
                                            academy.aayushbharti.in
                                        </p>
                                    </div>

                                </motion.div>

                                <motion.div
                                    className='flex flex-col gap-[15px] lg:gap-[24px]'
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9    }}
                                    viewport={{ once: true }}
                                >

                                    <div>
                                        <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                            BUILT
                                        </p>

                                        <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>
                                            Q4 2024
                                        </p>
                                    </div>

                                    <div>
                                        <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                            SOURCE
                                        </p>

                                        <p className='text-[14px] leading-[24px] text-[#FFFFFF] font-semibold'>
                                            GitHub
                                        </p>
                                    </div>

                                </motion.div>

                            </div>
                        </div>

                        {/* right section */}
                        <motion.div
                            className='lg:w-[40%]'
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                        >

                            <div className='border-b lg:border-l border-[#FFFFFF]/10 h-full px-2 sm:px-0 pt-[20px] pb-[20px] lg:pt-[32px] lg:pl-[40px] lg:pb-[40px]'>

                                <div>
                                    <p className='text-[10px] leading-[24px] text-[#BDBDBD]'>
                                        TECH STACK
                                    </p>

                                    <div className="pt-[6px]">

                                        {/* mobile */}
                                        <div className="flex flex-wrap gap-[6px] lg:gap-[11px] max-w-[400px] sm:hidden">

                                            {logos.slice(0, 8).map((img, i) => (
                                                <motion.img
                                                    key={i}
                                                    src={img}
                                                    alt="logo"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        delay: i * 0.08,
                                                        duration: 0.3
                                                    }}
                                                    whileHover={{
                                                        scale: 1.15,
                                                        rotate: 5
                                                    }}
                                                    viewport={{ once: true }}
                                                    className='cursor-pointer'
                                                />
                                            ))}

                                        </div>

                                        {/* desktop */}
                                        <div className="hidden sm:max-w-[610px] sm:flex flex-wrap gap-[9px]">

                                            {logos.slice(0, 13).map((img, i) => (
                                                <motion.img
                                                    key={i}
                                                    src={img}
                                                    alt="logo"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        delay: i * 0.08,
                                                        duration: 0.3
                                                    }}
                                                    whileHover={{
                                                        scale: 1.15,
                                                        y: -4
                                                    }}
                                                    viewport={{ once: true }}
                                                    className='cursor-pointer'
                                                />
                                            ))}

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

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
