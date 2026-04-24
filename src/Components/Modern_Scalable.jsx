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
<div className="relative h-[30%]  flex   justify-center text-center text-white overflow-hidden">

     <div className="pt-10 xl:py-20">
         {/* Background Image */}
    
    <div className="relative flex justify-center items-center">
  <div className=" h-[100%] w-[100%]  absolute xl:left-1/2 xl:top-1/6  xl:-translate-x-1/3 xl:-translate-y-1/10  2xl:left-1/2 2xl:top-1/6    2xl:-translate-x-1/3 2xl:-translate-y-1/9">
    <img
      src={earth}
      alt="earth"
      className=" h-[30rem]  w-[100%] sm:h-auto sm:w-auto object-cover opacity-60 "
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
       <div className="flex flex-col justify-center">
           <h1 className="text-[34px] lg:text-[64px] font-bold mt-4 leading-tight">
          Full Stack Developer Building <br />
          <span className="bg-gradient-to-r from-[#8F74BF] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
            Modern & Scalable
          </span>{" "}
          Web Applications
        </h1>
       </div>

        {/* Subtext */}
        <div >
          
          <div className="flex justify-center items-center ">
            <p className="md:mt-4 text-gray-300 text-[16px]  max-w-[8000px] sm:text-[18px]  font-normal flex md:gap-2 justify-center items-center">
            {/* <img src={emoji1} alt="emoji" />  */}
        👋 Hello, I'm Aayush Bharti a Full Stack Developer Building Modern & Scalable Web Applications
        </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="md:mt-6 flex justify-center  items-center  ">
  
  {/* Main Button */}
  <button className="px-3 py-2 sm:px-8 sm:py-4 rounded-full bg-[#e5e5e5] text-black text-[14.06px] md:text-[16px] font-medium">
    Let’s Connect
  </button>

  {/* Icon Button */}
  <button className=" mt-3 ">
    <img src={messageIcon} alt="message" className=" h-[4.3rem] w-[4.3rem] sm:w-[7rem] sm:h-[6.5rem] " />
  </button>

</div>

<div className="relative -left-2  -top-5 sm:-bottom-10 sm:left-20 lg:left-95">
  <img src={location} alt="location icon" />
</div>

      </div>
     </div>
    </div>
      </div>
    </section>
    </>
  )
}

export default Modern_Scalable