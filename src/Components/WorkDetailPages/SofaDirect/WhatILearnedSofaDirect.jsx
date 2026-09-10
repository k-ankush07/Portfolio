import React from 'react'

function WhatILearnedSofaDirect({project}) {
     if (!project?.learnheadingSofaDirect && !project?.learndescSofaDirect) {
    return null;
  }
  return (
    <div className=' pt-[20px] lg:pt-[40px]  pb-[10px] lg:pb-0 lg:text-center'>
      <div className=' lg:pb-0'>
        <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'> {project.learnheadingSofaDirect}</h2>
        <p className=' pt-[20px] lg:pt-[10px] text-[14px] leading-[24px] font-bold text-[#BDBDBD]'> {project.learndescSofaDirect}</p>
      </div>
    </div>
  )
}

export default WhatILearnedSofaDirect