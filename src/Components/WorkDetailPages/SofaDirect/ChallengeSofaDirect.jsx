import React from 'react'

function ChallengeSofaDirect({project}) {

    
    if (!project?.ChallheadingSofaDirect && !project?.ChalldescSofaDirect && !project?.challengeSofaDirect) {
    return null;
  }
  return (
      <div className="lg:pt-[40px] ">
      <div className={`  `} >
        <div
          className={`w-full pt-[30px] pb-[20px] lg:pt-0 lg:pb-[20px]  border-b lg:border-b-0 border-[#FFFF]/10 `}
        >
          {project.mobilechallenegImageHoperoza ? (
            <>
              <img src={project.mobilechallenegImageHoperoza} alt="iMAGE" className="w-full lg:hidden" />
              <img src={project.challengeSofaDirect} alt="iMAGE" className="w-full hidden lg:block" />
            </>
          ) : (
            <img src={project.challengeSofaDirect} alt="iMAGE" className="w-full" />
          )}
        </div>

        <div
          className={`w-full lg:border-b border-[#FFFF]/10 `}
        >
          <div className="flex justify-center  lg:pb-[40px] lg:text-center ">
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
              {project.ChallheadingSofaDirect}
            </h2>
            <p
              className="text-[#BDBDBD] text-[14px]  leading-[24px] pt-[20px] lg:pt-0 "
              dangerouslySetInnerHTML={{ __html: project.ChalldescSofaDirect }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeSofaDirect