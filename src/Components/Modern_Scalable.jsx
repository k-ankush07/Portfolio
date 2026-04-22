import React from "react"
import earth from "../assets/Images/earth.png"
import messageIcon from "../assets/Images/messageIcon.png"
import location from "../assets/Images/location.png"
import emoji from "../assets/Images/emoji.png"
import emoji1 from "../assets/Images/emoji1.png"
function Modern_Scalable() {
  return (
    <>
    <section  className="bg-[#000000] md:pt-10 ">
      <div className="container">
<section className="relative h-[30%]  flex   justify-center text-center text-white overflow-hidden">

     <div className="py-10 sm:py-20">
         {/* Background Image */}
    
    <div className="relative flex justify-center items-center">
  <div className=" w-[100%] absolute xl:left-1/2 xl:top-1/6    xl:-translate-x-1/3 xl:-translate-y-1/10  2xl:left-1/2 2xl:top-1/6    2xl:-translate-x-1/3 2xl:-translate-y-1/9">
    <img
      src={earth}
      alt="earth"
      className=""
    />
  </div>
</div>

      {/* Content */}
      <div className="relative z-10  px-4">

        {/* Badge */}
       
        <div className="inline-block rounded-[8px] p-[1.5px] bg-gradient-to-r from-[#DF7A78] via-[#DF7A78] to-purple-500">
  <div className="flex items-center gap-2 rounded-[8px] bg-[#0b0f19] px-2 py-1.5 text-[10.59px] sm:text-[12px] text-white">
   <div className="bg-[#df7a78] rounded-md text-[#ffffff] px-1 py-1 flex items-center gap-1">  
    <img src={emoji} alt="emoji" />
    <span > Upcoming</span></div>
    <span className="text-[#c58962]">Nextnode is launching soon!</span>
  </div>
</div>

        {/* Heading */}
        <h1 className="text-[34px] md:text-[64px] font-bold mt-4 leading-tight">
          Full Stack Developer Building <br />
          <span className="bg-gradient-to-r from-[#8F74BF] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
            Modern & Scalable
          </span>{" "}
          Web Applications
        </h1>

        {/* Subtext */}
        <div >
          
          <p className="mt-4 text-gray-300 text-[16px]  sm:text-[18px]  font-normal flex gap-2 justify-center items-center">
            <img src={emoji1} alt="emoji" /> 
           Hello, I'm Aayush Bharti — I build modern and scalable web applications.
        </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center items-center ">
  
  {/* Main Button */}
  <button className="px-8 py-4 rounded-full bg-[#e5e5e5] text-black text-[16px] font-medium">
    Let’s Connect
  </button>

  {/* Icon Button */}
  <button className=" mt-3 ">
    <img src={messageIcon} alt="message" className=" w-22" />
  </button>

</div>

<div className="relative  -top-4 sm:-top-9 sm:left-10 lg:left-55">
  <img src={location} alt="location icon" />
</div>

      </div>
     </div>
    </section>
      </div>
    </section>
    </>
  )
}

export default Modern_Scalable