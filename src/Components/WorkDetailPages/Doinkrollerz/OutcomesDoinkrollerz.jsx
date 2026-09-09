import React from 'react'

function OutcomesDoinkrollerz({ project }) {
  if (
    !project?.outcomeheadingDoinkrollerz &&
    (!project?.outcomepointsDoinkrollerz || project.outcomepointsDoinkrollerz.length === 0)
  ) {
    return null;
  }

  const isVideo = project?.outcomeimageDoinkrollerz?.toLowerCase().endsWith(".mp4");

  return (
    <div className=" pt-[17px]   lg:pt-[80px]">
      <div
        className={` flex flex-col-reverse lg:flex-row   lg:border-t lg:border-b border-white/10 `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[70%] pb-[17px] lg:pl-[95px] lg:pr-[40px] border-r border-white/10   flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] lg:border-b-0 border-white/10 border-b `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageDoinkrollerz}
              className="w-full rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageDoinkrollerz}
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
              {project.outcomeheadingDoinkrollerz}
            </h2>

            {project.outcomepointsDoinkrollerz?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepointsDoinkrollerz.map((point, i) => (
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

export default OutcomesDoinkrollerz