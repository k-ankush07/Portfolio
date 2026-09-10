import React from 'react'

function OutcomesSofaDirect({project}) {
      if (
    !project?.outcomeheadingSofaDirect &&
    (!project?.outcomepointsSofaDirect || project.outcomepointsSofaDirect.length === 0)
  ) {
    return null;
  }
   const isVideo =
    typeof project?.outcomeimageSofaDirect === "string" &&
    /\.(mp4|webm|mov)$/i.test(project.outcomeimageSofaDirect);

  return (
      <div className=" pt-[30px]  lg:pt-[40px]">
      <div
        className={` flex flex-col-reverse lg:flex-row-reverse   lg:border-t lg:border-b border-white/10  `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[60%] xl:w-[70%] lg:pl-[40px] border-b pb-[30px] lg:pb-0 lg:border-b-0 lg:border-l border-[#FFFF]/10  flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] border-white/10  `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageSofaDirect}
              className="w-full rounded-[10px] lg:rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageSofaDirect}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[40%] xl:w-[30%]  lg:pr-[40px]  flex flex-col justify-center  border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0 `}
        >
          <div className={`w-full `}>
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheadingSofaDirect}
            </h2>

            {project.outcomepointsSofaDirect?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepointsSofaDirect.map((point, i) => (
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

export default OutcomesSofaDirect