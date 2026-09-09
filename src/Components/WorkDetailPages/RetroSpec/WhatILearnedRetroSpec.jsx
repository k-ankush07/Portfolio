import React from 'react'

function WhatILearnedRetroSpec({project}) {
    if (!project?.learnheadingRetroSpec && !project?.learndescRetroSpec) {
    return null;
  }
  return (
    <div className=' pt-[20px]  lg:pt-[40px] lg:text-center border-b border-[#FFFFFF]/10 lg:border-b-0'>
        <div className='pb-[30px] lg:pb-0'>
            <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'> {project.learnheadingRetroSpec}</h2>
            <p className=' pt-[20px] lg:pt-[10px] text-[14px] leading-[24px] font-bold text-[#BDBDBD]'> {project.learndescRetroSpec}</p>
        </div>

    </div>
  )
}

export default WhatILearnedRetroSpec