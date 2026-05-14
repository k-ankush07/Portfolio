import React, { useEffect, useState } from "react"
import earth from "../../assets/Images/earth.png"
import messageIcon from "../../assets/Images/messageIcon.svg"
import location from "../../assets/Images/location.svg"
import emoji from "../../assets/Images/emoji.png"
import emoji1 from "../../assets/Images/emoji1.png"
import WorldGlobe from "./WorldGlobe"
import { FaArrowRightLong } from "react-icons/fa6";
import WorldGlobenew from "./WorldGlobenew"


function Modern_Scalable() {

  const [show, setShow] = useState(false);



  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
   
      <section className="pt-[60px] lg:pt-[100px]  ">
        <div className="container">
          {/* <div className="  "> */}

            <div className="  pt-[60px] lg:pt-[0px]  xl:pb-[182px] relative   flex   justify-center text-center text-white overflow-hidden  ">
           

              <div className="absolute inset-0   top-[250px] md:top-[370px] lg:top-[270px] flex justify-center items-center opacity-80"
               style={{ pointerEvents: "none" }}
              >
                   <WorldGlobenew /> 
              </div>

              {/* Content */}
              <div className="relative z-10  ">

                {/* Badge */}

                <div className="inline-block group relative  rounded-[8px] cursor-pointer z-50">

                  {/* Gradient border (hidden by default) */}
                  <div className="absolute inset-0  rounded-[8px] h-[100%] p-[1.5px] bg-gradient-to-r from-[#DF7A78] via-[#DF7A78] to-purple-500 opacity-0 group-hover:opacity-100 transition duration-600 ">
                    <div className="w-full h-full rounded-[8px] bg-[#0b0f19]" />
                  </div>

                  {/* Content (always visible) */}
                  {/* <div className="relative flex items-center gap-2 px-2 py-1.5 text-[10.59px] sm:text-[12px] text-white"> */}
                  <div className={`relative flex items-center gap-2 px-2 py-1.5 text-[10.59px] sm:text-[12px] text-white transition-all duration-700 ease-out
          ${show ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-10"}`}>

                    <div className="bg-[#df7a78] rounded-md px-1 py-1 flex items-center gap-1 text-[12px]">
                      <img src={emoji} alt="emoji" />
                      <span>Upcoming</span>
                    </div>

                    <span className="text-[#c58962] font-bold text-sweep">
                      Nextnode is launching soon!
                    </span>

                  </div>

                </div>

                {/* Heading */}
                <div className="flex flex-col justify-center  mt-[11px]">
                  <h1 className={`font_section text-[34px] sm:text-[38px] px] lg:text-[60px] xl:text-[64px] font-bold leading-[42px] lg:leading-[76px] transition-all duration-700 ease-out
                    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    Full Stack Developer Building{" "}
                    <span className="bg-[linear-gradient(to_right,#8F74BF_0%,#B57FA5_40%,#D76D77_99%,#FFAF7B_100%)] bg-clip-text text-transparent">
                      Modern & Scalable
                    </span>{" "}
                    Web Applications
                  </h1>
                </div>

                {/* Subtext */}
                <div className="px-5" >

                  <div className="flex justify-center items-center pt-[15px] md:pt-[21px] ">
                    <p className={`name-text  text-gray-300 text-[16px] max-w-[800px] sm:text-[18px] font-normal transition-all duration-700 ease-out
  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      <span className="font-normal text-white">👋 Hello,</span>{" "}
                      I'm Ankush Kumar a Full Stack Developer Building Modern & Scalable Web Applications
                    </p>
                  </div>
                </div>
               

                {/* Buttons */}
                <div className={` pt-[25px]  pb-[88px] xl:pb-0   lg:pt-[43px] flex justify-center  gap-[10px]  items-center transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                  {/* Main Button */}
                  <button className=" btn-slide group  flex justify-center items-center gap-4 lg:gap-6  cursor-pointer py-2   pl-3 pr-2  sm:pl-5 sm:py-3 xl:px-3 leading-[24px] rounded-full bg-[#e5e5e5] text-black text-[14.06px] md:text-[16px] font-medium">
                    Let’s Connect

                    <FaArrowRightLong className="text-[14.6px] md:text-[16px] mt-[1px] opacity-0 translate-x-[-8px] transition-all opacity-100 duration-800 group-hover:opacity-100 group-hover:-translate-x-5" />
                  </button>

                  {/* Icon Button */}
                  <div className="flex justify-center items-center group ">
                    <div className=" btn-slide  border border-white px-2 group-hover:border-transparent cursor-pointer py-2 sm:py-3 sm:px-3 bg-white/20 rounded-full">
                      <img src={messageIcon} alt="message" className=" " />
                    </div>
                  </div>


                </div>



              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  )
}

export default Modern_Scalable


















