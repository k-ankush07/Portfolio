import React from 'react'

function OutcomesLonepouches({project}) {
    if (
    !project?.outcomeheadingLonepouches &&
    (!project?.outcomepointsLonepouches || project.outcomepointsLonepouches.length === 0)
  ) {
    return null;
  }

  const isVideo = project?.outcomeimageLonepouches?.toLowerCase().endsWith(".mp4");

  return (
    <div className=" pt-[18px]  pb-[20px] lg:pb-0 lg:pt-[40px]">
      <div
        className={` flex flex-col-reverse lg:flex-row-reverse   lg:border-t lg:border-b border-white/10 lg:px-[152px] `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[67%] lg:pl-[40px] lg:border-l border-[#FFFF]/10  flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] border-white/10  `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageLonepouches}
              className="w-full rounded-[10px] lg:rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageLonepouches}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[33%]  lg:pr-[40px]  flex flex-col justify-center  border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0 `}
        >
          <div className={`w-full `}>
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheadingLonepouches}
            </h2>

            {project.outcomepointsLonepouches?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepointsLonepouches.map((point, i) => (
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

export default OutcomesLonepouches