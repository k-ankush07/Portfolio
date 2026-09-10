import React from 'react'

function KeyAeasVittelo({project}) {
     if (
    !project?.keyheadingVittelo &&
    (!project?.keyPointsVittelo || project.keyPointsVittelo.length === 0) &&
    !project?.firstdblVittelo &&
    !project?.secondsnglVittelo
  ) {
    return null;
  }
  return (
      <div className="pt-[30px] pb-[39px] lg:pb-0  lg:pt-[40px]">
      <div className={` border-t lg:border-b border-[#FFFFFF]/10 flex flex-col-reverse lg:flex-row  `}>
        {/* content section */}
        <div className={`lg:w-[50%]  lg:pt-[40px] lg:pb-[10px] lg:pr-[40px] lg:border-r border-[#FFFF]/10 `}>
          <h2 className="max-w-[525px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingVittelo}
          </h2>

          {project.keyPointsVittelo?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsVittelo.map((item, i) => (
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
          className={`lg:w-[50%] pt-[20px] lg:pt-0  border-b lg:border-b-0 pb-[42px] lg:pb-0 border-[#FFFFFF]/10 lg:pl-[40px] lg:pt-[40px] lg:pb-[40px] `}
        >
          <div className="w-full ">
            {project.firstdblVittelo && (
              <img src={project.firstdblVittelo} alt="first image" className="w-full" />
            )}
            {project.secondsnglVittelo &&
              (project.secondsnglVittelo.endsWith?.(".mp4") ||
              project.secondsnglVittelo.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglVittelo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full  lg:hidden pt-[22px] lg:pt-0 rounded-[16px]"
                />
              ) : (
                <img
                  src={project.secondsnglVittelo}
                  alt="second image"
                  className="w-full lg:hidden"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyAeasVittelo