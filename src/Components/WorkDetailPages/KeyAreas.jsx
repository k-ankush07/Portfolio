import React from 'react'

function KeyAreas({project}) {
  return (
    <>
    <div className='lg:border-t lg:border-b border-[#FFFFFF]/10 pt-[30px] lg:pt-0'>
       <div className='flex  flex-col-reverse lg:flex-row'>
         {/* content section  */}
        <div className=' lg:w-[40%] flex flex-col justify-center lg:pr-[40px]  ' >
            <h2 className='max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px]  lg:text-[40px] leading-[48px] font-bold'> {project.keyheading}</h2>

            {project.keyPoints?.length > 0 && (
            <div className='flex flex-col gap-[22px] pt-[20px]'>
              {project.keyPoints.map((item, i) => (
                <div key={i}>
                  <h4 className='text-[24px] leading-[24px]  font-bold text-[#BDBDBD]'>
                    {item.heading}
                  </h4>
                  <p className='text-[#BDBDBD] text-[14px] leading-[24px] pt-[4px]'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* image section  */}
        <div className='lg:w-[60%] flex flex-col lg:pl-[40px] justify-center items-center lg:border-l border-b lg:border-b-0 pb-[42px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] lg:pb-[40px]'>
          {project.firstdbl && <img src={project.firstdbl} alt='first image' />}
          {project.secondsngl && <img src={project.secondsngl} alt='second image' />}
        </div>
        {/* <div className='lg:w-[60%] flex flex-col lg:pl-[40px] justify-center  items-center lg:border-l border-b lg:border-b-0 pb-[42px] lg:pb-0  border-[#FFFFFF]/10 lg:pt-[40px]  lg:pb-[40px] '>
            <img src={project.firstdbl} alt='first Image ' />
            <img src={project.secondsngl} alt='second image ' />
        </div> */}

       </div>
    </div>
    
    </>
  )
}

export default KeyAreas