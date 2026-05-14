import React from 'react'
import shopify from "../../assets/Images/Vector (5).svg";
import smallicon from "../../assets/Images/smallicon.svg";
import ViewDetail from '../Homepage/ViewDetail';
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
import Next from "../../assets/Images/rsection (3).svg";
import pnpm from "../../assets/Images/rsection (4).svg";
import PostgreSQL from "../../assets/Images/rsection (1).svg";
import Redis from "../../assets/Images/rsection (2).svg";
import Vercel from "../../assets/Images/rsection (3).svg";
import new1 from "../../assets/Images/new1 (1).svg";
import new2 from "../../assets/Images/new1 (2).svg";
import new3 from "../../assets/Images/new1 (3).svg";
import new4 from "../../assets/Images/new1 (4).svg";
import new5 from "../../assets/Images/new1 (5).svg";
import new6 from "../../assets/Images/new1 (6).svg";
import ProjectTitle from './ProjectTitle';
import { Link } from 'react-router-dom';
function WebApp({ single }) {
    const logos = [
        new2,new3,new1,new5,new4,new6,
        new1,new2,new3,new4,new5,new6,
    ];
    return (
        <section className='lato-regular'>
            <div className='container'>
                <div className='lg:flex '>



                    <div className=' relative px-2 pt-[40px] lg:pt-0 md:px-0 lg:border-r-[1px]  lg:border-[#FFFFFF]/10 lg:w-[50%]'>
                        {/* top section  */}
                        <div className='lg:pr-[57px] '>
                            <div className='  flex justify-between'>
                                <p className='text-[#BDBDBD] text-[12px]  lg:text-[14px] leading-[24px]'>01-Web App</p>
                                <p className='border-[1px] border-[#8F74BF54] text-[#FFAF7B] text-[10px] leading-[14px] lg:text-[12px] lg:leading-[18px] px-[9px] py-[4px] rounded-[8px]'>Q4 2024</p>
                            </div>
                            <ProjectTitle logo={shopify} title="Recruiter"  highlight =" One" />
                        </div>
                        <div className=' h-0 lg:h-[28px] flex  items-center'> <div className=" hidden lg:block h-[1px] w-full  bg-white/10"></div></div>
                        <div
                            className="hidden lg:block absolute -right-4 top-19  "
                        >
                            <img src={smallicon} alt="icon" />
                        </div>

                        <div className=' pt-[16px] lg:pt-0 lg:pr-[57px]  '>
                           <Link to="/work-detail">
                            <ViewDetail />
                           </Link>
                            <div className="pt-[20px] lg:pt-[24px]">

                                {/* Mobile = 8 */}
                                <div className="flex flex-wrap gap-[6px] sm:gap-[11px]  sm:max-w-[450px] xl:hidden">
                                    {logos.slice(0, 8).map((img, i) => (
                                        <img key={i} src={img} alt="logo"  className=''/>
                                    ))}
                                </div>

                                {/* Desktop = 13 */}
                                <div className="hidden sm:max-w-[610px] xl:flex flex-wrap gap-[11px]">
                                    {logos.slice(0, 13).map((img, i) => (
                                        <img key={i} src={img} alt="logo" className='' />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>



                    {/* 2nd  */}

                    {!single && (
                        <div className=' relative  px-2 lg:px-0 pt-[40px] lg:pt-[211px]  lg:w-[50%]'>
                            <div className=' lg:pl-[58px]'>
                                <div className='   flex justify-between'>
                                    <p className='text-[#BDBDBD] text-[12px]  lg:text-[14px] leading-[24px]'>01-Web App</p>
                                    <p className='border-[1px] border-[#8F74BF54] text-[#FFAF7B] text-[10px] leading-[14px] lg:text-[12px] lg:leading-[18px] px-[9px] py-[4px] rounded-[8px]'>Q4 2024</p>
                                </div>
                                 <ProjectTitle logo={shopify} title="Recruiter"  highlight =" One" />
                            </div>

                            <div className=' h-0 lg:h-[28px] flex  items-center'> <div className="hidden lg:block h-[1px] w-full  bg-white/10"></div></div>
                            <div
                                className="hidden lg:block absolute -left-3 top-[300px]  "
                            >
                                <img src={smallicon} alt="icon" />
                            </div>
                            <div className=' pt-[16px]  lg:pt-0 lg:pl-[57px]'>
                               <Link to="/work-Detail">
                            <ViewDetail />
                           </Link>
                                <div className="pt-[20px] lg:pt-[24px]">

                               
                                {/* Mobile = 8 */}
                                <div className="flex flex-wrap gap-[6px] sm:gap-[11px]  sm:max-w-[450px] xl:hidden">
                                    {logos.slice(0, 8).map((img, i) => (
                                        <img key={i} src={img} alt="logo"  className=''/>
                                    ))}
                                </div>

                                {/* Desktop = 13 */}
                                <div className="hidden sm:max-w-[610px] xl:flex flex-wrap gap-[11px]">
                                    {logos.slice(0, 13).map((img, i) => (
                                        <img key={i} src={img} alt="logo" className='' />
                                    ))}
                                </div>

                            </div>
                            </div>
                        </div>
                    )}




                </div>

            </div>
        </section>
    )
}

export default WebApp
