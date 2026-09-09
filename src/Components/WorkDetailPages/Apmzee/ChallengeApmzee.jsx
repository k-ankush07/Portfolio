import React from 'react'

function ChallengeApmzee({ project }) {
  if (!project?.ChallheadingnewApmzee && !project?.ChalldescnewApmzee && !project?.challengenewApmzee) {
    return null;
  }

  return (
    <div className="lg:pt-[40px] ">
      <div className={`  `} >
        <div
          className={`w-full pt-[30px] pb-[20px] lg:pt-0 lg:pb-[40px] lg:pr-[40px] border-b lg:border-b-0 border-[#FFFF]/10 `}
        >
          {project.mobilechallenegImageApmzee ? (
            <>
              <img src={project.mobilechallenegImageApmzee} alt="iMAGE" className="w-full lg:hidden" />
              <img src={project.challengenewApmzee} alt="iMAGE" className="w-full hidden lg:block" />
            </>
          ) : (
            <img src={project.challengenewApmzee} alt="iMAGE" className="w-full" />
          )}
        </div>

        <div
          className={`w-full items-center justify-center`}
        >
          <div className="pt-[20px] lg:pt-0  ">
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
              {project.ChallheadingnewApmzee}
            </h2>
            <p
              className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
              dangerouslySetInnerHTML={{ __html: project.ChalldescnewApmzee }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeApmzee