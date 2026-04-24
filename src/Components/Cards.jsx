import React from 'react'
import { MdStarRate } from "react-icons/md";

function Cards({desc,name , picture,bg }) {
    return (
     
            <div className='bg-[#181818] p-6 mb-6 md:mb-0  rounded-[16px]  relative overflow-hidden '>
                <img src={bg } alt='nfs' className='absolute left-0 w-full  -bottom-[0px] opacity-30' />
                {/* <img src={Background2} alt='nfs' className='absolute' />
                <img src={Background3} alt='nfs' className='absolute' />
                <img src={Background4} alt='nfs' className='absolute' /> */}

                <div className='flex gap-1 text-yellow-400'>
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                </div>

                <div className='border-b-[1px] border-gray-600 pb-6'>
                    <p className='text-[14px] text-[#BDBDBD] mt-3'>
                       {desc}
                    </p>
                </div>

                <div className='mt-5 flex gap-5'>
                    <img src={picture} alt='user image' className='w-12 h-12 z-50' />
                    <div className='space-y-2'>
                        <h1 className='text-[#FFFFFF] text-[14px]'>{name}</h1>
                        <p className='text-[#BDBDBD] text-[12px] '>Senior Frontend Developer</p>
                    </div>
                </div>

            </div>
       
    )
}

export default Cards