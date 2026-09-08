import React from 'react'

function KeyAreas({project}) {
  return (
    <>
    <div className='border-t border-b border-[#FFFFFF]/10'>
       <div className='flex  flex-col-reverse lg:flex-row'>
         {/* content section  */}
        <div className=' flex flex-col justify-center lg:pr-[40px] ' >
            <h2 className='max-w-[464px] text-[24px]  lg:text-[40px] leading-[48px]'> {project.keyheading}</h2>

            <h4></h4>
            <p></p>
        </div>

        {/* image section  */}
        <div className='lg:pl-[89px] border-l  border-[#FFFFFF]/10 lg:pt-[40px]  lg:pb-[40px] '>
            <img src={project.firstdbl} alt='first Image ' />
            <img src={project.secondsngl} alt='second image ' />
        </div>

       </div>
    </div>
    
    </>
  )
}

export default KeyAreas