import React from 'react'

function OurContributionWoahBros({ project }) {
  if (
    !project?.ourWoahBros &&
    (!project?.pointsWoahBros || project.pointsWoahBros.length === 0) &&
    !project?.contrubutionimageWoahBros
  ) {
    return null;
  }

  return (
    <div className=" pt-[30px] lg:pt-[40px] ">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* contribution section */}
        <div
          className={`w-full  lg:w-[35%] flex flex-col lg:justify-center lg:items-end pt-[20px] lg:pt-0 lg:pr-[40px]`}
        >
          <div className='max-w-[341px]'>
            <h2 className=" text-[24px]  lg:text-[40px] lg:leading-[48px] font-bold text-[#FFFFFF]">
              {project.ourWoahBros}
            </h2>
            {project.pointsWoahBros?.length > 0 && (
              <ul className=" pt-[20px] lg:pt-[16px] flex flex-col gap-[5px] lg:gap-[10px]">
                {project.pointsWoahBros.map((point, i) => (
                  <li key={i} className="text-[14px] leading-[24px]  text-[#BDBDBD]">
                    <span className="text-[#BDBDBD]">•</span> {point}
                  </li>
                ))}
              </ul>
            )}

            {project.btnnameWoahBros && (
              
               <a href={project.btnLinkWoahBros || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-[20px] pt-[12px] pb-[14px] pr-[25px] pl-[24px] lg:pt-[12px] lg:pb-[12px] pl-[24px] lg:pr-[25px]   bg-[#FCFCFC] border border-[#FCFCFC] rounded-[500px] text-[16px] leading-[24px] text-[#000000]  cursor-pointer"
              >
                {project.btnnameWoahBros}
              </a>
            )}
          </div>
        </div>

        {/* image section */}
        <div className="w-full lg:w-[65%] ">
          <div className="border-b pb-[20px] lg:pb-0 lg:border-b-0 lg:border-l lg:pr-[95px] border-[#FFFFFF]/10 lg:pl-[40px]  lg:pt-[40px] lg:pb-[40px] ">
            <img src={project.contrubutionimageWoahBros} alt="contribution image " className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurContributionWoahBros