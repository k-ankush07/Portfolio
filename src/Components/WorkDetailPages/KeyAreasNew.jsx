import React from 'react'

function KeyAreasNew({project}) {
    if (
    !project?.keyheadingnew &&
    (!project?.keyPointsnew || project.keyPointsnew.length === 0) &&
    !project?.firstdblnew &&
    !project?.secondsnglnew
  ) {
    return null;
  }
  return (
      <div className=' pt-[30px] lg:pt-0'>
      <div className=' flex flex-col-reverse lg:flex-col' >

        {/* content section */}
        <div className='flex flex-col justify-center lg:pr-[40px]'>
          <h2 className=' text-[#FFFFFF] pt-[20px] lg:pt-0 lg:pt-[40px] text-[24px] lg:text-[40px] leading-[48px] font-bold'>
            {project.keyheadingnew}
          </h2>

          {project.keyPointsnew?.length > 0 && (
            <div className='flex flex-col gap-[22px] pt-[20px]'>
              {project.keyPointsnew.map((item, i) => (
                <div key={i}>
                  <h4 className='text-[24px] leading-[24px] font-bold text-[#BDBDBD]'>
                    {item.heading}
                  </h4>
                  <p className='text-[#BDBDBD] text-[14px] leading-[24px] pt-[4px]'>
                    {item.desc}
                  </p>
                  {item.bulletsnew?.length > 0 && (
                    <ul className='flex flex-col gap-[8px] pt-[10px] pl-[8px]'>
                      {item.bulletsnew.map((bullet, j) => (
                        <li key={j} className='flex items-start gap-[8px] text-[14px] leading-[24px] text-[#BDBDBD]'>
                          <span className='text-white'>•</span>
                          <span>
                            <span className='font-semibold text-white'>{bullet.label}</span>{" "}
                            {bullet.textnew}
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
        <div className=' flex flex-col  justify-center  items-center  border-b lg:border-b-0 pb-[42px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] lg:pb-[40px]'>
          {project.firstdblnew && <img src={project.firstdblnew} alt='first image'  className='w-full' />}
          {project.secondsnglnew && (
            project.secondsnglnew.endsWith?.(".mp4") || project.secondsnglnew.endsWith?.(".webm") ? (
              <video
                src={project.secondsnglnew}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-[12.13px]"
              />
            ) : (
              <img src={project.secondsnglnew} alt="second image" className="w-full h-full" />
            )
          )}
        </div>

      </div>
    </div>
  )
}

export default KeyAreasNew