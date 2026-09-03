// import React from 'react'
// import WhatYouGetImage from "../../assets/Images/whatyouget.svg"
// import boximage from "../../assets/Images/boximage.svg"
// function WhatYouGet() {
//   return (
//     <section className='container '>
//         <div className=' px-2 md:px-0lg:w-[35%] border-[1px] border-[#292929]  rounded-[8px]  relative mb-10 overflow-hidden'>
//             <img src={WhatYouGetImage} alt="leftBlur image" className='absolute right-0 '/>
//             <div className='p-10 pt-[45px] pl-[50px] pr-[50px] '>
//                 <h2 className='text-[#BDBDBD] font-bold text-[16px] leading-[16px] '>WHAT YOU GET</h2>
//                 <p className='text-[#FCFCFC] text-[20px] leading-[26px] font-light pt-[6px]'>Pixel-perfect websites, clean UI & reliable development</p>
//             </div>
//             <div>

//                 <div className='rounded-[1070px]'>
//                     <div>

//                     </div>
//                 </div>

//                 <img src={boximage} alt="box image" />
//             </div>
//         </div>

//     </section>
//   )
// }

// export default WhatYouGet

import React, { useState, useEffect } from "react";
import WhatYouGetImage from "../../assets/Images/whatyouget.svg";
import boximage from "../../assets/Images/boximage.svg";
import icon from "../../assets/Images/icon.svg";

const badges = [
  {
    icon: "⚡",
    title: "Loads Instantly",
    desc: "Fast loads, happy users, better...",
  },
  { icon: "🎯", title: "Pixel Perfect", desc: "Every pixel placed with care" },
  {
    icon: "🛡️",
    title: "Reliable Code",
    desc: "Tested, stable, production ready",
  },
];

function WhatYouGet() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % badges.length);
    }, 2200);
    return () => clearTimeout(timer);
  }, [index]);

  const current = badges[index];

  return (
    <section className="container">
      <div className="lg:w-[35%] border-[1px] border-[#292929] rounded-[8px] relative mb-10 overflow-hidden h-[389px]">
        <img
          src={WhatYouGetImage}
          alt="leftBlur image"
          className="absolute right-0"
        />

        <div className=" pt-[45px] px-[50px] ">
          <h2 className="text-[#BDBDBD] font-bold text-[16px] leading-[16px]">
            WHAT YOU GET
          </h2>
          <p className="text-[#FCFCFC] text-[20px] leading-[26px] font-light pt-[6px]">
            Pixel-perfect websites, clean UI & reliable development
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[70px]">
          <div
            key={index}
            className="badge-slide flex items-center gap-[10.7px] bg-[#000000] rounded-[1070px] py-[10.7px] px-[16.05px] shadow-[inset_-1.07px_1.07px_0px_0px_#FFFFFF80] z-20"
          >
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white">
              {current.icon}
            </span>
            <div>
              <p className="text-[#FFFFFF] text-[14px] font-semibold leading-[15px]">
                {current.title}
              </p>
              <p className="text-[#C0C0C0] text-[10px] leading-[10px]">
                {current.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={boximage}
            alt="box image"
            className="relative z-10  pl-[26px] pr-[26px] "
          />
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
