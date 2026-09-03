// // import React from 'react'
// // import WhatYouGetImage from "../../assets/Images/whatyouget.svg"
// // import boximage from "../../assets/Images/boximage.svg"
// // function WhatYouGet() {
// //   return (
// //     <section className='container '>
// //         <div className=' px-2 md:px-0lg:w-[35%] border-[1px] border-[#292929]  rounded-[8px]  relative mb-10 overflow-hidden'>
// //             <img src={WhatYouGetImage} alt="leftBlur image" className='absolute right-0 '/>
// //             <div className='p-10 pt-[45px] pl-[50px] pr-[50px] '>
// //                 <h2 className='text-[#BDBDBD] font-bold text-[16px] leading-[16px] '>WHAT YOU GET</h2>
// //                 <p className='text-[#FCFCFC] text-[20px] leading-[26px] font-light pt-[6px]'>Pixel-perfect websites, clean UI & reliable development</p>
// //             </div>
// //             <div>

// //                 <div className='rounded-[1070px]'>
// //                     <div>

// //                     </div>
// //                 </div>

// //                 <img src={boximage} alt="box image" />
// //             </div>
// //         </div>

// //     </section>
// //   )
// // }

// // export default WhatYouGet

// import React, { useState, useEffect } from "react";
// import WhatYouGetImage from "../../assets/Images/whatyouget.svg";
// import boximage from "../../assets/Images/boximage.svg";
// import icons from "../../assets/Images/icon.svg";

// const badges = [
//   {
//     icon: icons,
//     title: "Loads Instantly",
//     desc: "Fast loads, happy users, better...",
//   },
//   {
//     icon: icons,
//     title: "Pixel Perfect",
//     desc: "Fast loads, happy users, better...",
//   },
//   {
//     icon: icons,
//     title: "Reliable Code",
//     desc: "Fast loads, happy users, better...",
//   },
// ];

// function WhatYouGet() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((prev) => (prev + 1) % badges.length);
//     }, 2200);
//     return () => clearTimeout(timer);
//   }, [index]);

//   const current = badges[index];

//   return (

//      <section className=" w-full lg:w-[40%] h-[100%]">
//       <div className=" border-[1px] border-[#292929] rounded-[8px] relative mb-10 lg:mb-0 overflow-hidden  ">
//         <img
//           src={WhatYouGetImage}
//           alt="leftBlur image"
//           className="absolute right-0"
//         />

//         <div className=" pt-[30px] pl-[30px] lg:pt-[45px] lg:px-[50px] ">
//           <h2 className="text-[#BDBDBD] font-bold text-[10px] leading-[10px] lg:text-[16px] lg:leading-[16px]">
//             WHAT YOU GET
//           </h2>
//           <p className="bg-gradient-to-r from-[#FFFFFF] to-[#FCFCFC] bg-clip-text text-transparent text-[14px] leading-[14px] lg:text-[20px] lg:leading-[26px] font-light pt-[5px]  lg:pt-[6px]">
//             Pixel-perfect websites, clean UI & reliable development
//           </p>
//         </div>

//         <div className="relative flex justify-center items-center h-[33px] lg:h-[63px] pt-[20px]">
//           <div
//             key={index}
//             className="badge-slide flex items-center gap-[10.7px] bg-[#000000] rounded-[1070px] px-[11px] py-[7px] lg:py-[10.7px] lg:px-[16.05px] shadow-[inset_-1.07px_1.07px_0px_0px_#FFFFFF80] z-20 "
//           >
//             <span className="  flex items-center justify-center rounded-full bg-[#1c1c1c] text-white">
//               <img
//                 src={current.icon}
//                 alt={current.title}
//                 className="w-[21px] h-[21px] lg:w-[28px] lg:h-[28px]"
//               />
//             </span>
//             {/* <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1c1c1c] text-white">
//               {current.icon}
//             </span> */}
//             <div>
//               <p className="text-[#FFFFFF] text-[10px] leading-[10px] lg:text-[14px] font-bold lg:leading-[15px]">
//                 {current.title}
//               </p>
//               <p className="text-[#C0C0C0] text-[7px] leading-[7px]  lg:text-[10px] lg:leading-[10px] pt-[3px]">
//                 {current.desc}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <img
//             src={boximage}
//             alt="box image"
//             className="relative z-10 px-[51px]  lg:px-[26px] "
//           />
//         </div>
//       </div>
//     </section>

//   );
// }

// export default WhatYouGet;


import React, { useState, useEffect } from "react";
import WhatYouGetImage from "../../assets/Images/whatyouget.svg";
import boximage from "../../assets/Images/boximage.svg";
import icons from "../../assets/Images/icon.svg";

const badges = [
  { icon: icons, title: "Loads Instantly", desc: "Fast loads, happy users, better..." },
  { icon: icons, title: "Pixel Perfect", desc: "Fast loads, happy users, better..." },
  { icon: icons, title: "Reliable Code", desc: "Fast loads, happy users, better..." },
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
    <section className=" px-[20px]  md:px-0 w-full lg:w-[40%] ">
     
      <div className=" flex flex-col border-[1px] border-[#292929] rounded-[8px] relative  overflow-hidden">
        <img
          src={WhatYouGetImage}
          alt="leftBlur image"
          className="absolute right-0"
        />

        <div className="pt-[30px] pl-[30px] lg:pt-[45px] lg:px-[50px]">
          <h2 className="text-[#BDBDBD] font-bold text-[10px] leading-[10px] lg:text-[16px] lg:leading-[16px]">
            WHAT YOU GET
          </h2>
          <p className="bg-gradient-to-r from-[#FFFFFF] to-[#FCFCFC] bg-clip-text text-transparent text-[14px] leading-[14px] lg:text-[20px] lg:leading-[26px] font-light pt-[5px] lg:pt-[6px]">
            Pixel-perfect websites, clean UI & reliable development
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[33px] lg:h-[63px] pt-[20px]">
          <div
            key={index}
            className="badge-slide flex items-center gap-[10.7px] bg-[#000000] rounded-[1070px] px-[11px] py-[7px]  md:py-[10.7px] md:px-[16.05px] shadow-[inset_-1.07px_1.07px_0px_0px_#FFFFFF80] z-20"
          >
            <span className="flex items-center justify-center rounded-full bg-[#1c1c1c] text-white">
              <img
                src={current.icon}
                alt={current.title}
                className="w-[21px] h-[21px] lg:w-[28px] lg:h-[28px]"
              />
            </span>
            <div>
              <p className="text-[#FFFFFF] text-[10px] leading-[10px] md:text-[12px] md:leading-[12px] lg:text-[14px] font-bold lg:leading-[15px]">
                {current.title}
              </p>
              <p className="text-[#C0C0C0] text-[7px] leading-[7px] md:text-[9px] md:leading-[9px]  lg:text-[10px] lg:leading-[10px] pt-[3px]">
                {current.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-center">
          <img
            src={boximage}
            alt="box image"
            className="relative z-10 w-full px-[51px] lg:px-[26px] "
          />
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;