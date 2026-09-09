import React from 'react'

function OutcomesWoahBros({ project }) {
  if (
    !project?.outcomeheadingWoahBros &&
    (!project?.outcomepointsWoahBros || project.outcomepointsWoahBros.length === 0)
  ) {
    return null;
  }

  const isVideo = project?.outcomeimageWoahBros?.toLowerCase().endsWith(".mp4");

  return (
    <div className=" pt-[30px]  lg:pt-[40px]">
      <div
        className={`flex flex-col-reverse lg:flex-row px-0  lg:border-t lg:border-b border-white/10 `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[60%]  pb-[36px] flex justify-center items-center  pt-[20px] lg:pr-[40px] lg:pl-[178px]  lg:border-r border-[#FFFF]/10 lg:pt-[41px] lg:pb-[41px] lg:border-b-0 border-white/10 border-b  `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageWoahBros}
              className="w-full rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageWoahBros}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[40%]  flex flex-col justify-center  border-b lg:pl-[40px] lg:border-b-0 border-white/10 pb-[20px] lg:pb-0 `}
        >
          <div className={`w-full  `}>
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheadingWoahBros}
            </h2>

            {project.outcomepointsWoahBros?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepointsWoahBros.map((point, i) => (
                  <li
                    key={i}
                    className="w-full flex items-start gap-[4px] text-[14px] leading-[24px] text-[#BDBDBD] font-bold"
                  >
                    <span className="shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutcomesWoahBros