// import React from 'react'
// import { MdStarRate } from "react-icons/md";

// function Cards({ desc, name, picture, bg }) {
//   return (
//     <div className='bg-[#181818] pt-[25px] pb-[25px] px-[21px] lg:pt-[30px] lg:pb-[30px] lg:px-[25px] md:mb-0 rounded-[16px] h-[290px] lg:h-[310px]  flex flex-col justify-between relative overflow-hidden'>
      
//       <img src={bg} alt='nfs' className='absolute left-0 w-full -bottom-[0px] -z-0 opacity-30' />

//       {/* Top Content */}
//       <div>
//         <div className='flex gap-1 text-yellow-400 '>
//           <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
//         </div>

//         <div className='border-b-[1px] border-[#FFFFFF]/10 pt-[15px] pb-[18px] lg:pt-[18px] lg:pb-[22px] '>
//           <p className=' text-[12px] leading-[20px] lg:text-[14px] lg:leading-[24px] text-[#BDBDBD]   '>
//             {desc}
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section (always aligned) */}
//       <div className='pt-[23px] lg:pt-[24px] flex gap-[12px]'>
//         <img src={picture} alt='user image' className='w-12 h-12 z-50' />
//         <div className=' space-y-[5px] lg:space-y-[7px]'>
//           <h1 className='text-[#FFFFFF] text-[12px] leading-[20px] lg:text-[14px] lg:leading-[24px]'>{name}</h1>
//           <p className='text-[#BDBDBD] text-[11px] leading-[20px] lg:text-[12px] lg:leading-[24px] '>Senior Frontend Developer</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Cards


import React from 'react'
import { MdStarRate } from "react-icons/md";

function Cards({ desc, name, picture, bg }) {
  return (
    <div className='bg-[#181818] 
      pt-[25px] pb-[25px] px-[21px] 
      lg:pt-[30px] lg:pb-[30px] lg:px-[25px] 
      rounded-[16px] 
      min-h-[250px] lg:min-h-[310px]
      flex flex-col justify-between 
      relative overflow-hidden'
    >

      <img
        src={bg}
        alt='bg'
        className='absolute left-0 w-full bottom-0 -z-0 opacity-30'
      />

      {/* Top Content */}
      <div className='flex flex-col flex-1'>
        
        <div className='flex gap-1 text-yellow-400'>
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
        </div>

        <div className='border-b border-[#FFFFFF]/10 pt-[15px] pb-[18px] lg:pt-[18px] lg:pb-[22px] flex-1'>
          
          <p className='text-[12px] leading-[20px] lg:text-[14px] lg:leading-[24px] text-[#BDBDBD] line-clamp-6'>
            {desc}
          </p>

        </div>
      </div>

      {/* Bottom Section */}
      <div className='pt-[23px] lg:pt-[24px] flex gap-[12px] items-center'>
        
        <img
          src={picture}
          alt='user'
          className='w-12 h-12 z-50 rounded-full object-cover'
        />

        <div className='space-y-[5px] lg:space-y-[7px]'>
          <h1 className='text-[#FFFFFF] text-[12px] leading-[20px] lg:text-[14px] lg:leading-[24px]'>
            {name}
          </h1>

          <p className='text-[#BDBDBD] text-[11px] leading-[20px] lg:text-[12px] lg:leading-[24px]'>
            Senior Frontend Developer
          </p>
        </div>
      </div>

    </div>
  );
}

export default Cards;