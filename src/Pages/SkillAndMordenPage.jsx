import React from 'react'

import Skills from "../Components/Homepage/Skills"
import Next_Project from "../Components/Homepage/Next_Project"
import Nextproject from '../Components/Homepage/Nextproject'
import SkillsSlick from '../Components/Homepage/SkillsSlick'

function SkillAndMordenPage() {
  return (
    <>

      <section className='' >
        <div className='container'>
        
            <div className='  pb-3 mt-[20px]  xl:mt-[-15px] flex flex-col px-2 md:px-0 xl:px-0  xl:flex-row sm:justify-center gap-[10px]'>
              <Skills />
              {/* <SkillsSlick /> */}
               
              {/* <Next_Project /> */}
              <Nextproject />
            </div>
  
        </div>
      </section>

    </>
  )
}

export default SkillAndMordenPage
