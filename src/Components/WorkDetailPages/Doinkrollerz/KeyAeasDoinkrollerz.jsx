import React from 'react'

function KeyAeasDoinkrollerz({ project }) {
  if (
    !project?.keyheadingnewDoinkrollerz &&
    (!project?.keyPointsnewDoinkrollerz || project.keyPointsnewDoinkrollerz.length === 0) &&
    !project?.firstdblnewDoinkrollerz &&
    !project?.secondsnglnewDoinkrollerz
  ) {
    return null;
  }

  return (
    <div className='pt-[30px]  lg:pt-[40px]'>
      <div className=' flex flex-col-reverse lg:flex-col' >

        {/* content section */}
        <div className='flex flex-col justify-center pt-[20px] lg:pt-[40px] lg:pr-[40px]'>
          <h2 className=' text-[#FFFFFF]  text-[24px] lg:text-[40px] leading-[48px] font-bold'>
            {project.keyheadingnewDoinkrollerz}
          </h2>

          {project.keyPointsnewDoinkrollerz?.length > 0 && (
            <div className='flex flex-col gap-[22px] pt-[20px]'>
              {project.keyPointsnewDoinkrollerz.map((item, i) => (
                <div key={i}>
                  <h4 className='text-[24px] leading-[24px] font-bold text-[#BDBDBD]'>
                    {item.heading}
                  </h4>
                  <p className='text-[#BDBDBD] text-[14px] leading-[24px] '>
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
        <div className=' flex flex-col  justify-center  items-center  border-b lg:border-b-0 pb-[34px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] '>
          <div>
            {project.firstdblnewDoinkrollerz && <img src={project.firstdblnewDoinkrollerz} alt='first image'  className='w-full' />}
          </div>
          {project.secondsnglnewDoinkrollerz && (
            project.secondsnglnewDoinkrollerz.endsWith?.(".mp4") || project.secondsnglnewDoinkrollerz.endsWith?.(".webm") ? (
              <video
                src={project.secondsnglnewDoinkrollerz}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-[12.13px]"
              />
            ) : (
              <img src={project.secondsnglnewDoinkrollerz} alt="second image" className="w-full h-full" />
            )
          )}
        </div>

      </div>
    </div>
  )
}

export default KeyAeasDoinkrollerz