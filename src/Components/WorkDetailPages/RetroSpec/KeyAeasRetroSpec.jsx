import React from 'react'

function KeyAeasRetroSpec({ project }) {
  if (
    !project?.keyheadingRetroSpec &&
    (!project?.keyPointsRetroSpec || project.keyPointsRetroSpec.length === 0) &&
    !project?.firstdblRetroSpec &&
    !project?.secondsnglRetroSpec
  ) {
    return null;
  }


  return (
    <div className="lg:border-t border-b border-[#FFFFFF]/10 pt-[52px] pb-[30px] lg:pb-0 lg:pt-0">
      <div
       
        className={`flex flex-col-reverse lg:flex-row   `}
      >
        {/* content section */}
        <div
          className={`lg:w-[40%] lg:pr-[40px] flex flex-col justify-center lg:border-r border-[#FFFFFF]/10 `}
        >
          <h2 className="max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheadingRetroSpec}
          </h2>

          {project.keyPointsRetroSpec?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPointsRetroSpec.map((item, i) => (
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
          className={`lg:w-[60%] flex flex-col justify-center items-center border-b lg:border-b-0 pb-[20px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] lg:pb-[40px] `}
        >
          <div className="w-full lg:pl-[40px] ">
            {project.firstdblRetroSpec && (
              <img src={project.firstdblRetroSpec} alt="first image" className="w-full" />
            )}
            {project.secondsnglRetroSpec &&
              (project.secondsnglRetroSpec.endsWith?.(".mp4") ||
              project.secondsnglRetroSpec.endsWith?.(".webm") ? (
                <video
                  src={project.secondsnglRetroSpec}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full  rounded-[16px]"
                 
                />
              ) : (
                <img
                  src={project.secondsnglRetroSpec}
                  alt="second image"
                  className="w-full "
                  
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyAeasRetroSpec