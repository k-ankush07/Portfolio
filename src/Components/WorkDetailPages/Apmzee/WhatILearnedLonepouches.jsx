import React from 'react'

function WhatILearnedLonepouches({project}) {

     if (!project?.learnheadingLonepouches && !project?.learndescLonepouches) {
    return null;
  }
  return (
    <div className='lg:pt-[40px] pb-[43px] lg:pb-[10px] lg:text-center'>
      <div className='pb-[30px] lg:pb-0'>
        <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'> {project.learnheadingLonepouches}</h2>
        <p className=' pt-[20px] lg:pt-[10px] text-[14px] leading-[24px] font-bold text-[#BDBDBD]'> {project.learndescLonepouches}</p>
      </div>
    </div>
  )
}

export default WhatILearnedLonepouches