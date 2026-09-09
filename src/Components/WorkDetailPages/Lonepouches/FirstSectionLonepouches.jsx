import React from 'react'

function FirstSectionLonepouches({ project }) {
  if (!project?.headingLonepouches && !project?.descLonepouches && !project?.imageLonepouches) {
    return null;
  }

  return (
    <div className="lg:pt-[40px]">
      <div

        className={`flex flex-col lg:flex-row lg:border-t lg:border-b border-white/10`}
      >
        {/* Image section */}
        <div
          className={` w-full lg:w-[50%] lg:pr-[40px] lg:pl-[87px] lg:border-r  border-[#FFFF]/10 pt-[30px] pb-[20px] lg:pt-[40px]  lg:pb-[40px] `}
        >
          <img
            src={project.imageLonepouches}
            alt="image"
            className="w-full h-auto"
          />
        </div>

        {/* Content section */}
        <div
          className={`w-full pt-[20px] lg:w-[50%] flex flex-col justify-center pr-0  border-t lg:border-t-0 border-white/10 `}
        >
          <div className=' max-w-[413px] lg:pl-[40px] l'
          >
            <h2 className="text-[24px] lg:text-[40px]  leading-[48px] font-bold text-white">
              {project.headingLonepouches}
            </h2>

            <p className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]">
              {project.descLonepouches}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSectionLonepouches