import React from "react";

import logo from "../../assets/Images/Vector (3).svg"
import Vector from "../../assets/Images/Vector (6).svg"
import Vector1 from "../../assets/Images/Vector (7).svg"
import Vector2 from "../../assets/Images/Vector (8).svg"
import GradientBorderButton from "../Homepage/GradientBorderButton";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <section className="pb-[21px] px-2 sm:px-0 pt-[20px]  sm:pt-[40px] ">
            <div className="container">
                <footer className=" lato-regular text-gray-400 pt-[30px] pl-[30px] pr-[31px] pb-[22px] lg:pt-[53px]  lg:pl-[64px]  lg:pr-[98px] lg:pb-[30px] rounded-[16px] border border-[#292929]  mx-auto ">

                    {/* TOP SECTION */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-[49px] lg:pb-[61px] ">

                        {/* LEFT */}
                        <div className="w-full lg:w-[36%] flex flex-col">
                            <img
                                src={logo}
                                alt="icon"
                                className="w-fit  cursor-pointer"
                            />

                            <p className="text-[16px] text-[#BDBDBD] opacity-80 max-w-[320px] pt-[14px] pb-[28px] lg:pt-[24px] lg:pb-[21px] leading-[26px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.
                            </p>

                            <GradientBorderButton data="Available for work" />
                        </div>

                        <div className="flex w-full justify-between   lg:w-[64%] xl:pr-20">
                            {/* COLUMN 1 */}
                            <div>
                                <h3 className=" text-[#FFFFFF] font-bold text-[16px] mb-[16px] ">General</h3>
                                <ul className="space-y-3 text-[14px] opacity-80 flex flex-col ">
                                    <Link to="/" className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100" > Home</Link>
                                    <Link to="/about" className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100" > About</Link>
                                    <Link to="/project" className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100" > Projects</Link>
                                    <Link to="/blog" className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100" > Blog</Link>

                                </ul>
                            </div>

                            {/* COLUMN 2 */}
                            <div>
                                <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4">Specifics</h3>
                                <ul className="space-y-3 text-[14px] opacity-80">
                                    <li className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Guest Book</li>
                                    <li className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Bucket List</li>
                                    <li className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Uses</li>
                                    <li className=" text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Attribution</li>
                                </ul>
                            </div>

                            {/* COLUMN 3 */}
                            <div>
                                <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4 sm:mb-1">More</h3>
                                <ul className="space-y-3 text-[14px] opacity-80 md:pt-2">
                                    <li className="text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Book a call</li>
                                    <li className="text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Links</li>
                                    <li className="text-[#BDBDBD]  cursor-pointer hover:text-gray-100">RSS</li>
                                    <li className="text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Privacy</li>
                                    <li className="text-[#BDBDBD]  cursor-pointer hover:text-gray-100">Terms</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* DIVIDER */}
{/* 
                    <div className="  " ></div> */}


                    {/* BOTTOM SECTION */}
                    <div className="flex flex-col justify-center border-t-2   border-[#292929] pt-[18px] lg:pt-[21px]  md:flex-row sm:justify-between  text-[#BDBDBD] items-center lg:gap-4 text-[12px] sm:text-[14px] ">

                        <div className="flex flex-col md:flex-row items-center justify-center md:gap-[45px] opacity-80">
                            <p className="text-center">© 2026 Ankush Kumar. All rights reserved</p>

                            <div className="flex justify-center pt-[11px] md:pt-0 gap-[23px]">
                                <Link to="/privacy" className=" cursor-pointer hover:text-gray-100">Privacy Policy</Link>
                                <Link to="/terms" className=" cursor-pointer hover:text-gray-100">Terms of Use</Link>

                            </div>
                        </div>

                        <div className="flex gap-[15px] lg:gap-[20px] pt-[23px]  sm:pt-0 text-white">
                            <img src={Vector1} alt="icon" className="cursor-pointer transition-all duration-400 hover:scale-110 h-[14px] w-[14px] md:w-[18px] md:h-[16px]" />
                            <img src={Vector2} alt="icon" className= " h-[14px] w-[14px] md:w-[18px] md:h-[16px] cursor-pointer transition-all duration-400 hover:scale-110" />
                            <img src={Vector} alt="icon" className=" h-[14px] w-[14px] md:w-[18px] md:h-[16px] cursor-pointer transition-all duration-400 hover:scale-110" />
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer;