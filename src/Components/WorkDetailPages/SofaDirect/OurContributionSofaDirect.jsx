import React from 'react'

function OurContributionSofaDirect({project}) {
    
    if (
    !project?.ourSofaDirect &&
    (!project?.pointsSofaDirect || project.pointsSofaDirect.length === 0) &&
    !project?.contrubutionimageSofaDirect
  ) {
    return null;
  }
  return (
      <div className=" pt-[30px] lg:pt-[40px] ">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* contribution section */}
        <div
          className={`w-full  lg:w-[25%] flex flex-col lg:justify-center lg:items-start pt-[20px] lg:pt-0 lg:pr-[40px]`}
        >
          <div className=''>
            <h2 className=" text-[24px]  lg:text-[40px] lg:leading-[48px] font-bold text-[#FFFFFF]">
              {project.ourSofaDirect}
            </h2>
            {project.pointsSofaDirect?.length > 0 && (
              <ul className=" pt-[20px]  flex flex-col gap-[5px] lg:gap-[10px]">
                {project.pointsSofaDirect.map((point, i) => (
                  <li key={i} className="text-[14px] leading-[24px]  text-[#BDBDBD]">
                    <span className="text-[#BDBDBD]">•</span> {point}
                  </li>
                ))}
              </ul>
            )}

            {project.btnnameSofaDirect && (
              
               <a href={project.btnLinkSofaDirect || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-[20px] pt-[12px] pb-[14px] pr-[25px] pl-[24px] lg:pt-[12px] lg:pb-[12px] pl-[24px] lg:pr-[25px]   bg-[#FCFCFC] border border-[#FCFCFC] rounded-[500px] text-[16px] leading-[24px] text-[#000000]  cursor-pointer"
              >
                {project.btnnameSofaDirect}
              </a>
            )}
          </div>
        </div>

        {/* image section */}
        <div className="w-full lg:w-[75%] ">
          <div className="border-b pb-[20px] lg:pb-0 lg:border-b-0 lg:border-l  border-[#FFFFFF]/10 lg:pl-[40px]  lg:pt-[40px] lg:pb-[40px] ">
            <img src={project.contrubutionimageSofaDirect} alt="contribution image " className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurContributionSofaDirect