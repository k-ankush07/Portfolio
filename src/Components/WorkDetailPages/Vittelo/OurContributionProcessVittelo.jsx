import React from 'react'

function OurContributionProcessVittelo({project}) {

    if (
    !project?.ourVittelo &&
    (!project?.pointsVittelo || project.pointsVittelo.length === 0) &&
    !project?.contrubutionimageVittelo
  ) {
    return null;
  }

  return (
      <div className=" pt-[30px] lg:pt-[40px] ">
      <div className="flex flex-col-reverse lg:flex-row-reverse ">
        {/* contribution section */}
        <div
          className={`w-full lg:w-[34%] xl:w-[25%] flex flex-col lg:pl-[40px] lg:justify-center  lg:items-end lg:border-b-0 lg:border-l border-[#FFFFFF]/10  pt-[20px] lg:pt-0 `}
        >
          <div>
            <h2 className=" text-[24px]  lg:text-[40px] lg:leading-[48px] font-bold text-[#FFFFFF]">
              {project.ourVittelo}
            </h2>
            {project.pointsVittelo?.length > 0 && (
              <ul className=" pt-[20px]  flex flex-col gap-[5px] lg:gap-[10px]">
                {project.pointsVittelo.map((point, i) => (
                  <li key={i} className="text-[14px] leading-[24px]  text-[#BDBDBD]">
                    <span className="text-[#BDBDBD]">•</span> {point}
                  </li>
                ))}
              </ul>
            )}

            {project.btnnameVittelo && (
              
               <a href={project.btnLinkVittelo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-[20px] pt-[12px] pb-[14px]  pr-[25px] pl-[24px] lg:pt-[12px] lg:pb-[12px] pl-[24px] lg:pr-[25px]   bg-[#FCFCFC] border border-[#FCFCFC] rounded-[500px] text-[16px] leading-[24px] text-[#000000]  cursor-pointer"
              >
                {project.btnnameVittelo}
              </a>
            )}
          </div>
        </div>

        {/* image section */}
        <div className="w-full lg:w-[66%]  xl:w-[75%] ">
          <div className=" border-b border-[#FFFF]/10 lg:border-b-0 pb-[20px] lg:pb-0 lg:pr-[40px]  lg:pt-[40px] lg:pb-[40px] ">
            <img src={project.contrubutionimageVittelo} alt="contribution image " className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurContributionProcessVittelo