import React from 'react'

function Challenge({ project }) {
  if (!project?.Challheading && !project?.Challdesc && !project.challenge) {
    return null;
  }
  return (
    <>
      <div className='lg:pt-[40px] '>
        <div className='lg:flex  lg:border-t lg:border-b border-[#FFFFFF]/10'>
          {/* image section  */}
          <div
            style={{
              "--challenge-image-pl": `${project.challengeimagepl ?? 0}px`,
            }}
            className='lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px] lg:pl-[var(--challenge-image-pl)]  lg:pr-[40px]'
          >
            <img src={project.challenge} alt='iMAGE' className='w-full' />
          </div>

          {/* content section  */}
          <div className='lg:w-[50%] lg:flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#FFFFFF]/10'>
            <div className='pt-[20px] lg:pt-0 lg:pl-[40px]'>
              <h2 className='text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'>
                {project.Challheading}
              </h2>
              <p
                className='text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]'
                dangerouslySetInnerHTML={{ __html: project.Challdesc }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Challenge;