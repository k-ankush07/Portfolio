import React from 'react'

function ChallengeRetroSpec({ project }) {
  if (!project?.ChallheadingRetroSpec && !project?.ChalldescRetroSpec && !project?.challengeRetroSpec) {
    return null;
  }

  return (
    <div className='lg:pt-[40px] '>
      <div className='lg:flex  lg:border-t lg:border-b border-[#FFFFFF]/10'>
        {/* image section  */}
        <div
          className='lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px] lg:pl-[var(--challenge-image-pl)]  lg:pr-[40px]'
        >
          <img src={project.challengeRetroSpec} alt='iMAGE' className='w-full' />
        </div>

        {/* content section  */}
        <div className='lg:w-[50%] lg:flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#FFFFFF]/10'>
          <div className='pt-[40px] lg:pt-0 lg:pl-[40px]'>
            <h2 className='text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'>
              {project.ChallheadingRetroSpec}
            </h2>
            <p
              className='text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]'
              dangerouslySetInnerHTML={{ __html: project.ChalldescRetroSpec }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeRetroSpec