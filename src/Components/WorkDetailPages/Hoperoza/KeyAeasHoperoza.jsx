import React from 'react'

function KeyAeasHoperoza({project}) {
    if (
    !project?.keyheadingHoperoza &&
    (!project?.keyPointsHoperoza || project.keyPointsHoperoza.length === 0) &&
    !project?.firstdblHoperoza &&
    !project?.secondsnglHoperoza
  ) {
    return null;
  }
  return (
   <div className=" pt-[52px] pb-[39px] lg:pb-0  lg:pt-[40px]">
      <div className={` lg:border-t lg:border-b border-[#FFFFFF]/10 flex flex-col-reverse lg:flex-row  xl:px-[87px]`}>
        {/* content section */}
        <div className={`lg:w-[50%]  lg:py-[40px] lg:pr-[40px] lg:border-r border-[#FFFF]/10 `}>
          <h2 className="max-w-[525px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingHoperoza}
          </h2>

          {project.keyPointsHoperoza?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsHoperoza.map((item, i) => (
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
          className={`lg:w-[50%]  border-b lg:border-b-0 pb-[42px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] lg:pb-[40px] `}
        >
          <div className="w-full lg:px-[40px]">
            {project.firstdblHoperoza && (
              <img src={project.firstdblHoperoza} alt="first image" className="w-full" />
            )}
            {project.secondsnglHoperoza &&
              (project.secondsnglHoperoza.endsWith?.(".mp4") ||
              project.secondsnglHoperoza.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglHoperoza}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full  lg:hidden pt-[22px] lg:pt-0 rounded-[16px]"
                />
              ) : (
                <img
                  src={project.secondsnglHoperoza}
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

export default KeyAeasHoperoza