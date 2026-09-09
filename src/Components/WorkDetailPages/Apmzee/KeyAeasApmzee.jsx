import React from 'react'

function KeyAeasApmzee({ project }) {
  if (
    !project?.keyheadingApmzee &&
    (!project?.keyPointsApmzee || project.keyPointsApmzee.length === 0) &&
    !project?.firstdblApmzee &&
    !project?.secondsnglApmzee
  ) {
    return null;
  }

  return (
    <div className=" pt-[48px]  lg:pt-[40px]">
      <div className={` lg:border-t lg:border-b border-[#FFFFFF]/10 flex flex-col-reverse lg:flex-row `}>
        {/* content section */}
        <div className={`lg:w-[40%] flex flex-col lg:pt-[40px] lg:pr-[40px] lg:border-r border-[#FFFF]/10 `}>
          <h2 className="max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingApmzee}
          </h2>

          {project.keyPointsApmzee?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsApmzee.map((item, i) => (
                <div key={i}>
                  <h4 className="text-[24px] leading-[24px] font-bold text-[#BDBDBD]">
                    {item.heading}
                  </h4>
                  <p className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[4px]">
                    {item.desc}
                  </p>
                  {item.bullets?.length > 0 && (
                    <ul className="flex flex-col gap-[8px] pt-[10px] pl-[8px]">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-[8px] text-[14px] leading-[24px] text-[#BDBDBD]"
                        >
                          <span className="text-white">•</span>
                          <span>
                            <span className="font-semibold text-white">
                              {bullet.label}
                            </span>{" "}
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* image section */}
        <div
          className={`lg:w-[60%] flex flex-col justify-center  items-center border-b lg:border-b-0 pb-[20px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] lg:pb-[40px] `}
        >
          <div className="w-full lg:px-[40px]">
            {project.firstdblApmzee && (
              <img src={project.firstdblApmzee} alt="first image" className="w-full" />
            )}
            {project.secondsnglApmzee &&
              (project.secondsnglApmzee.endsWith?.(".mp4") ||
              project.secondsnglApmzee.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglApmzee}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-[16px]"
                />
              ) : (
                <img
                  src={project.secondsnglApmzee}
                  alt="second image"
                  className="w-full pt-[25px] lg:pt-[40px]"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyAeasApmzee