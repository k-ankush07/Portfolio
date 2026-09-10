import React from 'react'

function ImplementationProcessLonepouches({project}) {

    if (!project?.impheadingprocessLonepouches && !project?.impheadescprocessLonepouches && !project?.implementimageprocessLonepouches) {
    return null;
  }
  return (
    <div className="pb-[30px] lg:pb-[40px] lg:pt-[41px] ">
      <div className="flex flex-col-reverse lg:flex-row   lg:border-t lg:border-b border-[#FFFFFF]/10">
        {/* content section  */}
        <div className="lg:w-[50%] lg:flex flex-col items-center justify-center">
          <div className=" pt-[20px] lg:pt-0 lg:pr-[39px]">
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
              {project.impheadingprocessLonepouches}
            </h2>
            <p
              className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
              dangerouslySetInnerHTML={{ __html: project.impheadescprocessLonepouches }}
            />
          </div>
        </div>

        {/* image section  */}
        <div className=" lg:w-[50%] px-[39px] lg:px-0 pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px]  lg:pl-[40px]  border-b lg:border-b-0 lg:border-t-0 lg:border-l border-[#FFFFFF]/10">
          <img src={project.implementimageprocessLonepouches} alt="iMAGE" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default ImplementationProcessLonepouches