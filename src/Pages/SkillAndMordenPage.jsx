import React from 'react'

import Skills from '../Components/Skills'
import Next_Project from '../Components/Next_Project'

function SkillAndMordenPage() {
  return (
    <>

      <section className='bg-[#000000]' >
        <div className='container'>
        
            <div className='  py-3 xl:mt-[-70px] flex flex-col px-5 sm:px-0  xl:flex-row sm:justify-center gap-[9px]'>
              <Skills />
              
              <Next_Project />
            </div>
  
        </div>
      </section>

    </>
  )
}

export default SkillAndMordenPage
