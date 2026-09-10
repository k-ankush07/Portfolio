import React from 'react'

function ImplementationProcessSofaDirect({project}) {
       if (!project?.impheadingSofaDirect && !project?.impheadescSofaDirect && !project?.implementimageSofaDirect) {
    return null;
  }
  return (
    <div className="pb-[30px] lg:pb-[40px] lg:pt-[41px] ">
      <div className="flex flex-col-reverse lg:flex-row  lg:border-t lg:border-b border-[#FFFFFF]/10">
        {/* content section  */}
        <div className="lg:w-[50%] lg:flex flex-col items-center justify-center">
          <div className=" pt-[20px] lg:pt-0 lg:pr-[39px]">
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
              {project.impheadingSofaDirect}
            </h2>
            <p
              className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
              dangerouslySetInnerHTML={{ __html: project.impheadescSofaDirect }}
            />
          </div>
        </div>

        {/* image section  */}
        <div className=" lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px]  lg:pl-[40px]  border-b lg:border-b-0 lg:border-t-0 lg:border-l border-[#FFFFFF]/10">
          <img src={project.implementimageSofaDirect} alt="iMAGE" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default ImplementationProcessSofaDirect