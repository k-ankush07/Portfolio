import React from 'react'

function Process({project}) {
    if (!project?.impheadingprocess && !project?.impheadescprocess && !project?.implementimageprocess) {
    return null;
  }
  return (
    <>
      <div className="lg:pt-[40px] ">
        <div className="flex flex-col-reverse lg:flex-row  lg:border-t lg:border-b border-[#FFFFFF]/10">
          {/* content section  */}
          <div className="lg:w-[50%] lg:flex flex-col items-end justify-center">
            <div className="max-w-[364px] pt-[20px] lg:pt-0 lg:pr-[40px]">
              <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
                {project.impheadingprocess}
              </h2>
              <p
                className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
                dangerouslySetInnerHTML={{ __html: project.impheadescprocess }}
              />
            </div>
          </div>

          {/* image section  */}
          <div className=" lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px]  lg:pl-[40px]  border-b lg:border-b-0 lg:border-t-0 lg:border-l border-[#FFFFFF]/10 flex items-start">
            <img src={project.implementimageprocess} alt="iMAGE" className=" max-w-[323] max-h-[448px]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Process