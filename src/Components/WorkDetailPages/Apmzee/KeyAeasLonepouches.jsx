import React from 'react'

function KeyAeasLonepouches({project}) {
      if (
    !project?.keyheadingLonepouches &&
    (!project?.keyPointsLonepouches || project.keyPointsLonepouches.length === 0) &&
    !project?.firstdblLonepouches &&
    !project?.secondsnglLonepouches
  ) {
    return null;
  }

  return (
     <div className=" pt-[30px]   lg:pb-0 lg:pt-[41px] ">
      <div

        className={`flex flex-col-reverse lg:flex-row-reverse p lg:border-t lg:border-b border-[#FFFFFF]/10 lg:px-[117px] `}
      >
        {/* content section */}
        <div
          className={`lg:w-[40%] flex flex-col justify-center lg:pl-[40px] `}
        >
          <h2 className="max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingLonepouches}
          </h2>

          {project.keyPointsLonepouches?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsLonepouches.map((item, i) => (
                <div key={i}>
                  <h4 className="text-[24px] leading-[24px] font-bold text-[#BDBDBD]">
                    {item.heading}
                  </h4>
                  <p className="text-[#BDBDBD] text-[14px] leading-[24px] ">
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
          className={`lg:w-[60%] flex flex-col justify-center border-r  border-[#FFFF]/10 items-center border-b lg:border-b-0 pb-[20px] lg:pb-0 border-[#FFFFFF]/10  lg:pt-[40px] lg:pb-[40px]`}
        >
          <div className="w-full  lg:pr-[40px] ">
            {project.firstdblLonepouches && (
              <img src={project.firstdblLonepouches} alt="first image" className="w-full" />
            )}
            {project.secondsnglLonepouches &&
              (project.secondsnglLonepouches.endsWith?.(".mp4") ||
              project.secondsnglLonepouches.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglLonepouches}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-[16px] w-full pt-[9px] lg:pt-[10px] "

                />
              ) : (
                <img
                  src={project.secondsnglLonepouches}
                  alt="second image"
                  className=" "

                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyAeasLonepouches