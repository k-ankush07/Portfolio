import React from 'react'

function OutcomesApmzee({ project }) {
  if (
    !project?.outcomeheadingApmzee &&
    (!project?.outcomepointsApmzee || project.outcomepointsApmzee.length === 0)
  ) {
    return null;
  }

  const isVideo = project?.outcomeimageApmzee?.toLowerCase().endsWith(".mp4");

  return (
    <div className=" pt-[30px]  pb-[20px] lg:pb-0 lg:pt-[80px]">
      <div
        className={` flex flex-col-reverse lg:flex-row   lg:border-t lg:border-b border-white/10 `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[70%] pb-[24px]  lg:pr-[40px] lg:border-r border-white/10   flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] lg:border-b-0 border-white/10 border-b `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageApmzee}
              className="w-full rounded-[10px] lg:rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageApmzee}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[30%]  lg:pl-[40px] flex flex-col justify-center  border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0 `}
        >
          <div className={`w-full `}>
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheadingApmzee}
            </h2>

            {project.outcomepointsApmzee?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepointsApmzee.map((point, i) => (
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

export default OutcomesApmzee