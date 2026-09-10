import React from 'react'

function KeyAeaslionHappyStuf({project}) {

     if (
    !project?.keyheadingHappyStuf &&
    (!project?.keyPointsHappyStuf || project.keyPointsHappyStuf.length === 0) &&
    !project?.firstdblHappyStuf &&
    !project?.secondsnglHappyStuf
  ) {
    return null;
  }

  return (
     <div className=" pt-[30px]   lg:pb-0 lg:pt-[41px] ">
      <div

        className={`flex flex-col-reverse lg:flex-row-reverse p lg:border-t lg:border-b border-[#FFFFFF]/10  `}
      >
        {/* content section */}
        <div
          className={`lg:w-[35%] flex flex-col justify-center lg:pl-[40px] `}
        >
          <h2 className="max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingHappyStuf}
          </h2>

          {project.keyPointsHappyStuf?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsHappyStuf.map((item, i) => (
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
          className={`lg:w-[65%] flex flex-col justify-center border-r  border-[#FFFF]/10 items-center border-b lg:border-b-0 pb-[20px] lg:pb-0 border-[#FFFFFF]/10  lg:pt-[40px] lg:pb-[40px]`}
        >
          <div className="w-full  lg:pr-[40px] ">
            {project.firstdblHappyStuf && (
              <img src={project.firstdblHappyStuf} alt="first image" className="w-full " />
            )}
            {project.secondsnglHappyStuf &&
              (project.secondsnglHappyStuf.endsWith?.(".mp4") ||
              project.secondsnglHappyStuf.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglHappyStuf}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-[16px] w-full pt-[9px] lg:pt-[10px] "

                />
              ) : (
                <img
                  src={project.secondsnglHappyStuf}
                  alt="second image"
                  className=" w-full "

                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyAeaslionHappyStuf