import React from "react";
import Line24 from "../assets/Images/Line 24.png"
import Line25 from "../assets/Images/Line 25.png"
import Line26 from "../assets/Images/Line 26.png"
import arrow from "../assets/Images/arrow.png"
import DownArrow from "../assets/Images/Vector.png"
import vector13 from "../assets/Images/Vector13.png"
import vector16 from "../assets/Images/Vector16.png"
import linepurple from "../assets/Images/linepurple.png"
function Web_Project() {
  return (
    <section className="bg-[#000000]">
      <div className="container">
        <div className=" flex justify-center pb-3 relative rounded-xl border border-white/10">

          <div className="w-full  relative  pb-10   overflow-hidden ">
            <img src={linepurple} alt="line" className="absolute right-0" />
            {/* Glow top-right */}
            <div className="absolute "></div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-[60px] pb-[50px] pl-[75px] pr-[76px]">

              {/* Card 1 */}
              <div className="relative rounded-xl p-[1px] w-[220px] ml-[120px]">
                <div className="bg-[#0e0c13] rounded-xl p-5 border border-white/10 ">
                  <div className=""> <img src={Line24} alt="lines" className="mb-3 w-[100%]" /></div>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Clean & Modern Code</li>
                    <li>• Full Stack Expertise</li>
                    <li>• Responsive Websites</li>
                    <li>• Reliable Support</li>
                  </ul>
                </div>

                <span className="absolute -bottom-4 left-1/30 -translate-x-1/2 bg-[#8f74bf] text-white text-[16px] px-3 py-1 rounded-md flex items-center gap-1">
                  <span className="text-[#4e0fbf] text-[14px]">●</span>
                  Why Choose Me
                </span>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-xl p-[1px] w-[250px] ">
                <div className="bg-[#1d0f10] rounded-xl p-5 border border-white/10">
                  <div className=""><img src={Line25} alt="lines" className="mb-3 w-[100%]" /></div>

                  <ul className="text-sm text-gray-300 space-y-3">
                    <li className="">
                      <div className="flex items-center">
                        <div className="w-[60px]">3L</div>
                        <div className="flex  gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>25%</span>
                          <img src={vector13} alt="graph" />
                        </div>
                      </div>

                    </li>

                    <li>
                      <div className="flex  items-center ">
                        <div className="w-[60px]">$11.B3</div>
                        <div className="flex  gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>15%</span>
                          <img src={vector13} alt="graph" />
                        </div>
                      </div>

                    </li>

                    <li>
                      <div className="flex items-center ">
                        <div className="w-[60px]">15.Bk</div>
                        <div className="flex  gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>9%</span>
                          <img src={vector13} alt="graph" />
                        </div>
                      </div>

                    </li>

                    <li>
                      <div className="flex items-center ">
                        <div className="w-[60px]">2.19%</div>
                        <div className="flex  gap-2 items-center">
                          <img src={DownArrow} alt="arrow" />
                          <span>2.19%</span>
                          <img src={vector16} alt="graph" />
                        </div>
                      </div>

                    </li>
                  </ul>
                </div>

                <span className="absolute -bottom-4 left-1/30 -translate-x-1/2 bg-[#d76d77] text-white text-[14px] px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="text-[14px] text-[#d70216]">●</span>
                  Business Analytics
                </span>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-xl p-[1px] w-[220px] ">
                <div className="bg-[#021007] rounded-xl p-5 border border-white/10 ">
                  <div className=""><img src={Line26} alt="lines" className="mb-3 w-[100%]" /></div>

                  <ul className="text-sm text-gray-300 space-y-3">
                    <li className="flex justify-between">
                      <span>Projects Completed</span>
                      <span className="text-green-400">50+</span>
                    </li>

                    <li className="flex justify-between">
                      <span>Years Experience</span>
                      <span className="text-green-400">3+</span>
                    </li>

                    <li className="flex justify-between">
                      <span>Happy Clients</span>
                      <span className="text-green-400">20+</span>
                    </li>

                    <li className="flex justify-between">
                      <span>Technologies</span>
                      <span className="text-green-400">10+</span>
                    </li>
                  </ul>
                </div>

                <span className="absolute -bottom-4 left-1/10 -translate-x-1/2 bg-[#14aa4b] text-white text-[14px] px-2 py-1 rounded-md flex items-center gap-1">
                  <span className="text-[14px] text-[#00dd51]">●</span>
                  Full Stack Developer
                </span>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <h2 className="text-white text-[20px] font-bold">
                Let’s Build Your Next Web Project
              </h2>
              <p className="text-[#BDBDBD] mt-2 text-[16px]">
                Need a fast, scalable, and modern web application? I can help turn your idea into a fully functional product.
              </p>

            </div>
            <div className="relative ">
              <img src={arrow} alt="arrow " className="absolute right-4" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Web_Project;