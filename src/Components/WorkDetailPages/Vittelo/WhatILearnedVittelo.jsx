import React from 'react'

function WhatILearnedVittelo({project}) {
    
     if (!project?.learnheadingVittelo && !project?.learndescVittelo) {
    return null;
  }
  return (
    <div className=' pt-[20px] lg:pt-[40px] pb-[46px] lg:pb-[10px] lg:text-center'>
      <div className=' lg:pb-0'>
        <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'> {project.learnheadingVittelo}</h2>
        <p className=' pt-[20px] lg:pt-[10px] text-[14px] leading-[24px] font-bold text-[#BDBDBD]'> {project.learndescVittelo}</p>
      </div>
    </div>
  )
}

export default WhatILearnedVittelo