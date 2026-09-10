import React from 'react'

function OutcomesHappyStuf({project}) {
      if (
    !project?.outcomeheadingHappyStuf &&
    (!project?.outcomepointsHappyStuf || project.outcomepointsHappyStuf.length === 0)
  ) {
    return null;
  }
   const isVideo =
    typeof project?.outcomeimageHappyStuf === "string" &&
    /\.(mp4|webm|mov)$/i.test(project.outcomeimageHappyStuf);

  return (
      <div className=" pt-[31px]  lg:pt-[40px]">
      <div
        className={` flex flex-col lg:flex-row-reverse   border-t lg:border-b border-white/10  `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[80%] lg:pl-[40px] lg:border-l border-[#FFFF]/10  flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] border-white/10  `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageHappyStuf}
              className="w-full rounded-[10px] lg:rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageHappyStuf}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[20%]  pt-[20px] lg:pt-0 lg:pr-[40px]  flex flex-col justify-center  border-b lg:border-b-0 border-white/10 pb-[30px] lg:pb-0 `}
        >
          <div className={`w-full `}>
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheadingHappyStuf}
            </h2>

            {project.outcomepointsHappyStuf?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepointsHappyStuf.map((point, i) => (
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

export default OutcomesHappyStuf