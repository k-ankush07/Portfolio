import React from 'react'

function ChallengeDoinkrollerz({ project }) {
  if (!project?.ChallheadingnewDoinkrollerz && !project?.ChalldescnewDoinkrollerz && !project?.challengenewDoinkrollerz) {
    return null;
  }

  return (
    <div className="lg:pt-[40px] ">
      <div className={` lg:flex  `} >
        <div
          className={`w-full pt-[30px] pb-[20px] lg:pt-[80px] lg:pb-[40px] lg:pr-[40px] `}
        >
          {project.mobilechallenegImageDoinkrollerz ? (
            <>
              <img src={project.mobilechallenegImageDoinkrollerz} alt="iMAGE" className="w-full lg:hidden" />
              <img src={project.challengenewDoinkrollerz} alt="iMAGE" className="w-full hidden lg:block" />
            </>
          ) : (
            <img src={project.challengenewDoinkrollerz} alt="iMAGE" className="w-full" />
          )}
        </div>

        <div
          className={`w-full items-center justify-center`}
        >
          <div className="pt-[20px] lg:pt-0 ">
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
              {project.ChallheadingnewDoinkrollerz}
            </h2>
            <p
              className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
              dangerouslySetInnerHTML={{ __html: project.ChalldescnewDoinkrollerz }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeDoinkrollerz