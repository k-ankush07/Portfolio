  import React, { useEffect, useRef, useState } from "react";
  import Line24 from "../../assets/Images/Line 24.png";
  import Line25 from "../../assets/Images/Line 25.png";
  import Line26 from "../../assets/Images/Line 26.png";
  import arrow from "../../assets/Images/arrow.svg";
  import DownArrow from "../../assets/Images/Vector.png";
  import vector13 from "../../assets/Images/Vector13.png";
  import vector16 from "../../assets/Images/Vector16.png";
  import linepurple from "../../assets/Images/linepurple.png";
import {motion} from "framer-motion"
   function Web_Project() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section className="px-2 md:px-0 xl:px-0 overflow-hidden" ref={sectionRef}>
        <div className="container">
          <div className="flex justify-center pb-[25px] lg:pb-0 relative rounded-xl border border-white/10">

            <div className="w-full relative   lg:pb-0 overflow-hidden">

              {/* Purple Line */}
              <img src={linepurple} alt="line" className="absolute right-0" />

              {/* Cards */}
              <div className="cards_section flex   gap-[6px] sm:gap-[40px] sm:flex-row items-center   pt-[24px] pb-[20px] pl-[18px] pr-[18px]  xl:gap-[143px] lg:pt-[60px]   lg:pb-[51px] lg:pl-[75px] lg:pr-[76px]">

                {/* Card 1 — starts center, spreads LEFT */}
                <div className={`relative rounded-xl cards-width w-[33.3%] p-[1px] flex justify-center xl:justify-end   ${visible ? 'animate-spread-left' : 'opacity-0'}`}>
                  <div className="bg-[#0e0c13] rounded-xl w-full sm:w-[200px] p-2 sm:p-5 border border-white/10">
                    {/* <img src={Line24} alt="lines" className="mb-3 w-full" /> */}
                    <div class="h-4 border-t border-dashed border-[#8F74BF] pb-[10px] w-full"></div>
                    <ul className="text-[8px] md:text-[12px] text-gray-300 font-bold space-y-3 sm:space-y-[10px]">
                      <li>• Clean & Modern Code</li>
                      <li>• Full Stack Expertise</li>
                      <li>• Responsive Websites</li>
                      <li>• Reliable Support</li>
                    </ul>
                  </div>
              <span className=" animate-spread-left-bottom absolute left-5 -bottom-4 sm:left-[-10px] xl:-bottom-6  xl:left-1/2 xl:-translate-x-1/2 bg-[#8f74bf] text-white text-[16px] px-1 md:px-2 md:py-1 rounded-md flex items-center gap-1">
                    <span className="text-[#4e0fbf]">●</span>
                    <h1 className="text-[8px] md:text-[14px] font-bold">
                      Why Choose Me
                    </h1>
                  </span>
                </div>

                {/* Card 2 — starts center, spreads UP */}
                <div className={`relative rounded-xl cards-width w-[33.3%] p-[1px] flex justify-center xl:justify-end  ${visible ? 'animate-spread-up' : 'opacity-0'}`}>
                  <div className="bg-[#1d0f10] w-full sm:w-[200px] rounded-xl p-2 sm:p-4 border border-white/10">
                    {/* <img src={Line25} alt="lines" className="mb-3 w-full" /> */}
                       <div class="h-4 border-t border-dashed border-[#D76D77] pb-[10px] w-full"></div>
                   <ul className="text-gray-300 space-y-3">

  <li>
    <div className="flex items-center justify-between w-full text-[8px] md:text-[12px] font-bold">
      <div className="min-w-[40px] md:min-w-[60px]">3L</div>

      <div className="flex items-center gap-1 md:gap-2">
        <img src={DownArrow} alt="arrow" />
        <span>25%</span>
        <img src={vector13} alt="graph" className="w-[30px]" />
      </div>
    </div>
  </li>

  <li>
    <div className="flex items-center justify-between w-full text-[8px] md:text-[12px] font-bold">
      <div className="min-w-[40px] md:min-w-[60px]">$11.B3</div>

      <div className="flex items-center gap-1 md:gap-2">
        <img src={DownArrow} alt="arrow" />
        <span>15%</span>
        <img src={vector13} alt="graph" className="w-[30px]" />
      </div>
    </div>
  </li>

  <li>
    <div className="flex items-center justify-between w-full text-[8px] md:text-[12px] font-bold">
      <div className="min-w-[40px] md:min-w-[60px]">15.Bk</div>

      <div className="flex items-center gap-1 md:gap-2">
        <img src={DownArrow} alt="arrow" />
        <span>9%</span>
        <img src={vector13} alt="graph" className="w-[30px]" />
      </div>
    </div>
  </li>

  <li>
    <div className="flex items-center justify-between w-full text-[8px] md:text-[12px] font-bold">
      <div className="min-w-[40px] md:min-w-[60px]">2.19%</div>

      <div className="flex items-center gap-1 md:gap-2">
        <img src={DownArrow} alt="arrow" />
        <span>2.19%</span>
        <img src={vector16} alt="graph" className="w-[25px]" />
      </div>
    </div>
  </li>

</ul>
                  </div>
                    <span className=" animate-spread-center-bottom bottom_text absolute left-4 -bottom-4 sm:left-[-22px]  xl:-bottom-5 xl:left-1/2 xl:-translate-x-1/2 bg-[#d76d77] text-white text-[14px] px-1 md:px-2 md:py-1 rounded-md flex items-center gap-1">
                    <span className="text-[#d70216]">●</span>
                    <p className="text-[8px] md:text-[14px] font-bold">
                      Business Analytics
                    </p>
                  </span>
                </div>

                {/* Card 3 — starts center, spreads RIGHT */}
                <div className={`relative rounded-xl cards-width w-[33.3%] flex justify-center xl:justify-end p-[1px] ${visible ? 'animate-spread-right' : 'opacity-0'}`}>
                  <div className="bg-[#021007] w-full sm:w-[200px] rounded-xl p-2 sm:p-4 border border-white/10">
                    {/* <img src={Line26} alt="lines" className="mb-3 w-full" /> */}
                     <div class="h-4 border-t border-dashed border-[#16A34A] pb-[10px] w-full"></div>
                    <ul className="text-[8px] md:text-[12px] text-gray-300 space-y-3">
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
                  <span className=" animate-spread-right-bottom absolute left-3 -bottom-4 sm:left-[-22px] xl:-bottom-5 xl:left-1/2 xl:-translate-x-1/2 bg-[#14aa4b] text-white text-[14px] px-1 md:px-2 md:py-1 rounded-md flex items-center gap-1">
                    <span className="text-[#00dd51]">●</span>
                    <p className="text-[8px] md:text-[14px] font-bold">Full Stack Developer</p>
                  </span>
                </div>

              </div>

              {/* Bottom CTA */}
              <div className=" pt-[9px] lg:pt-[0px] lg:pb-[40px] text-center flex flex-col items-center w-full">
                <h2 className="text-white text-[18px] xl:text-[20px] font-bold">
                  Let's Build Your Next Web Project
                </h2>
                <p className="text-[#BDBDBD] text-center pt-[4px] text-[12px] xl:text-[16px] w-[300px] lg:w-full">
                  Need a fast, scalable, and modern web application? I can help
                  turn your idea into a fully functional product.
                </p>
              </div>

                <motion.img
                   src={arrow}
                   alt="arrow"
                   className={`arrow_web absolute bottom-0 lg:bottom-[20px] right-[20px] lg:h-10 lg:w-10 cursor-pointer `}
                   initial={{ opacity: 0, }}
                   whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                   viewport={{ once: true, amount: 0.35 }}
                   whileHover={{ scale: 1.15}}
                   transition={{ duration: 0.8 }}
                 />

            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Web_Project;