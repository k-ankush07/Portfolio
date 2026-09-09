import React from 'react'

function FirstSectionApmzee({ project }) {
  if (!project?.headingApmzee && !project?.descApmzee && !project?.imageApmzee) {
    return null;
  }

  return (
    <div className="lg:pt-[40px]">
      <div
        className={`flex flex-col lg:flex-row-reverse lg:border-t lg:border-b border-white/10`}
      >
        {/* Image section */}
        <div
          className={`w-full lg:w-[70%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px] lg:pl-[40px] `}
        >
          <img src={project.imageApmzee} alt="image" className="w-full h-auto" />
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[30%]  flex flex-col justify-center  lg:border-r lg:pr-[40px] border-t lg:border-t-0 border-white/10 `}
        >
          <div
            className={`w-full pt-[20px] lg:pt-0`}
          >
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.headingApmzee}
            </h2>

            <p className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]">
              {project.descApmzee}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSectionApmzee