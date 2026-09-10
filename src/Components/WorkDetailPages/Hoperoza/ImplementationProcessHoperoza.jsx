import React from 'react'

function ImplementationProcessHoperoza({project}) {
     if (!project?.impheadingHoperoza && !project?.impheadescHoperoza && !project?.implementimageHoperoza) {
    return null;
  }
  return (
     <div className="pb-[30px] lg:pb-[40px] lg:pt-[41px] ">
      <div className="flex flex-col-reverse lg:flex-row-reverse  lg:border-t lg:border-b border-[#FFFFFF]/10">
        {/* content section  */}
        <div className="lg:w-[50%] lg:flex flex-col items-center justify-center">
          <div className=" pt-[20px] lg:pt-0 lg:pl-[40px]">
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
              {project.impheadingHoperoza}
            </h2>
            <p
              className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
              dangerouslySetInnerHTML={{ __html: project.impheadescHoperoza }}
            />
          </div>
        </div>

        {/* image section  */}
        <div className=" lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px]  lg:pr-[40px]  border-b lg:border-b-0 lg:border-t-0 lg:border-r border-[#FFFFFF]/10">
          <img src={project.implementimageHoperoza} alt="iMAGE" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default ImplementationProcessHoperoza