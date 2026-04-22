import React from "react";
import logo from "../assets/Images/navlogo.png"
import Vector from "../assets/Images/Vector (7).png"
import Vector1 from "../assets/Images/Vector (5).png"
import Vector2 from "../assets/Images/Vector (6).png"
function Footer() {
    return (
        <section className="bg-[#000000] py-7 ">
            <div className="container">
                <footer className=" lato-regular text-gray-400 px-8 md:px-15 py-10 rounded-[16px] border border-[#292929]  mx-auto ">

                    {/* TOP SECTION */}
                    <div className="flex md:justify-between ">

                        {/* LEFT */}
                        <div className=" md:w-[36%]">
                            {/* <h1 className="text-white text-2xl font-bold mb-4">AK</h1> */}
                            <img src={logo} alt="icon" className="mb-4" />

                            <p className="text-[16px] text-[#BDBDBD] opacity-80 md:w-[70%]  mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.
                            </p>

                            
                                <div className="inline-block mt-3 rounded-md p-[2px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78]">
                                    <div className="flex items-center gap-1 rounded-md bg-[#181818] px-2 py-1.5 text-[10.59px] sm:text-[12px] text-white">

                                        <span className="text-[#c58962]">Available for work</span>
                                    </div>
                                </div>
                            
                        </div>

                       <div className="flex md:justify-between md:w-[64%] md:pr-20">
                         {/* COLUMN 1 */}
                        <div>
                            <h3 className=" text-[#FFFFFF] font-bold text-[16px] mb-4 ">General</h3>
                            <ul className="space-y-2 text-[14px] opacity-80 ">
                                <li className=" text-[#BDBDBD]  cursor-pointer">Home</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">About</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">Projects</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">Blog</li>
                            </ul>
                        </div>

                        {/* COLUMN 2 */}
                        <div>
                            <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4">Specifics</h3>
                            <ul className="space-y-2 text-[14px] opacity-80">
                                <li className=" text-[#BDBDBD]  cursor-pointer">Guest Book</li>
                                <li className=" text-[#BDBDBD]  cursor-pointer">Bucket List</li>
                                <li className=" text-[#BDBDBD]  cursor-pointer">Uses</li>
                                <li className=" text-[#BDBDBD]  cursor-pointer">Attribution</li>
                            </ul>
                        </div>

                        {/* COLUMN 3 */}
                        <div>
                            <h3 className="text-[#FFFFFF] font-bold text-[16px]">More</h3>
                            <ul className="space-y-2 text-[14px] opacity-80 md:pt-2">
                                <li className="text-[#BDBDBD]  cursor-pointer">Book a call</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">Links</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">RSS</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">Privacy</li>
                                <li className="text-[#BDBDBD]  cursor-pointer">Terms</li>
                            </ul>
                        </div>
                       </div>
                    </div>

                    {/* DIVIDER */}
              {/* <div className="flex justify-center"> */}
                      <div className="border-t-2   border-[#292929] my-5"></div>
              {/* </div> */}

                    {/* BOTTOM SECTION */}
                    <div className="flex flex-col md:flex-row justify-between  text-[#BDBDBD] items-center gap-4 text-[14px] ">

                        <div className="flex gap-15 opacity-80">
                            <p>© 2026 Aayush Bharti. All rights reserved</p>

                        <div className="flex gap-6">
                            <span className=" cursor-pointer">Privacy Policy</span>
                            <span className="cursor-pointer">Terms of Use</span>
                        </div>
                        </div>

                        <div className="flex gap-4 text-white">
                           <img src={Vector1} alt="icon" className="cursor-pointer" />
                           <img src={Vector2} alt="icon" className="cursor-pointer" />
                           <img src={Vector} alt="icon" className="cursor-pointer"   />
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer;