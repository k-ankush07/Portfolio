import React from 'react'

function KeyAeasSofaDirect({project}) {
       if (
    !project?.keyheadingSofaDirect &&
    (!project?.keyPointsSofaDirect || project.keyPointsSofaDirect.length === 0) &&
    !project?.firstdblSofaDirect &&
    !project?.secondsnglSofaDirect
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
          className={` w-full lg:w-[50%] lg:py-[59px] xl:py-0 xl:w-[35%] flex flex-col justify-center lg:pl-[40px] `}
        >
          <h2 className="max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingSofaDirect}
          </h2>

          {project.keyPointsSofaDirect?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsSofaDirect.map((item, i) => (
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
          className={`w-full  lg:w-[50%] xl:w-[65%] flex flex-col justify-center border-r  border-[#FFFF]/10 items-center border-b lg:border-b-0 pb-[20px] lg:pb-0 border-[#FFFFFF]/10  lg:pt-[40px] lg:pb-[40px]`}
        >
          <div className="w-full  lg:pr-[40px] ">
            {project.firstdblSofaDirect && (
              <img src={project.firstdblSofaDirect} alt="first image" className="w-full " />
            )}
            {project.secondsnglSofaDirect &&
              (project.secondsnglSofaDirect.endsWith?.(".mp4") ||
              project.secondsnglSofaDirect.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglSofaDirect}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-[16px] w-full pt-[9px] lg:pt-[10px] "

                />
              ) : (
                <img
                  src={project.secondsnglSofaDirect}
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

export default KeyAeasSofaDirect