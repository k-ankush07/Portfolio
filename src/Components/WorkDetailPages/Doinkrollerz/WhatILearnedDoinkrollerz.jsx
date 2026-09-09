import React from 'react'

function WhatILearnedDoinkrollerz({ project }) {
  if (!project?.learnheadingDoinkrollerz && !project?.learndescDoinkrollerz) {
    return null;
  }

  return (
    <div className=' pt-[20px]  lg:pt-[40px] lg:text-center border-b border-[#FFFFFF]/10 lg:border-b-0'>
      <div className='pb-[30px] lg:pb-0'>
        <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'> {project.learnheadingDoinkrollerz}</h2>
        <p className=' pt-[20px] lg:pt-[10px] text-[14px] leading-[24px] font-bold text-[#BDBDBD]'> {project.learndescDoinkrollerz}</p>
      </div>
    </div>
  )
}

export default WhatILearnedDoinkrollerz