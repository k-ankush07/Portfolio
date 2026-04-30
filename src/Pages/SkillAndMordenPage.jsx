import React from 'react'

import Skills from "../Components/Homepage/Skills"
import Next_Project from "../Components/Homepage/Next_Project"
import Nextproject from '../Components/Homepage/Nextproject'

function SkillAndMordenPage() {
  return (
    <>

      <section className='' >
        <div className='container'>
        
            <div className='  py-3  xl:mt-[-30px] flex flex-col px-2 md:px-0 xl:px-0  xl:flex-row sm:justify-center gap-[9px]'>
              <Skills />
               
              {/* <Next_Project /> */}
              <Nextproject />
            </div>
  
        </div>
      </section>

    </>
  )
}

export default SkillAndMordenPage
