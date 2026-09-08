import React from 'react'

function Challenge({project}) {
  return (
    <>
     <div className='lg:pt-[40px] '>
        <div className='lg:flex  lg:border-t lg:border-b border-[#FFFFFF]/10'>
        {/* image section  */}
        <div className=' lg:w-[50%] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px]  lg:pr-[40px]'>
            <img src={project.challenge} alt='iMAGE' />
        </div>

        {/* content section  */}
        <div className='lg:w-[50%] lg:flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#FFFFFF]/10'>
       {/* <div className=' pt-[20px] lg:pt-0 lg:pl-[40px] '>
         <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'>{project.Challheading}</h2>
         <p className='text-[#BDBDBD] text-[14px] leading-[24px] lg:pt-[20px]'>{project.Challdesc}</p>
       </div> */}
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
  )
}

export default Challenge