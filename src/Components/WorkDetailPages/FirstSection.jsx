
import React from 'react'

function FirstSection({ project }) {
  return (
    <div className='lg:pt-[40px]'>
      <div
        className={`lg:flex ${
          project.reverseFirstSection ? "lg:flex-row-reverse" : ""
        } lg:border-t lg:border-b border-[#FFFFFF]/10`}
      >
        {/* image section */}
        <div
          className={` lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px] ${
            project.reverseFirstSection ? "lg:pl-[40px]" : "lg:pr-[40px]"
          }`}
        >
          <img src={project.image} alt='image ' className='w-full' />
        </div>

        {/* content section */}
        <div
          className={`lg:w-[50%] lg:flex flex-col items-center justify-center border-t lg:border-t-0 border-[#FFFFFF]/10 ${
            project.reverseFirstSection ? "lg:border-r" : "lg:border-l"
          }`}
        >
          <div
            className={`pt-[20px] lg:pt-0 ${
              project.reverseFirstSection ? "lg:pr-[40px]" : "lg:pl-[40px]"
            }`}
          >
            <h2 className='text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'>
              {project.heading}
            </h2>
            <p className='text-[#BDBDBD] text-[14px] leading-[24px] lg:pt-[20px]'>
              {project.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection