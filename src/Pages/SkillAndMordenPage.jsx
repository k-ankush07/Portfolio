import React from 'react'

import Skills from "../Components/Homepage/Skills"
import Next_Project from "../Components/Homepage/Next_Project"
import Nextproject from '../Components/Homepage/Nextproject'
import SkillsSlick from '../Components/Homepage/SkillsSlick'
import VideoSection from '../Components/Homepage/VideoSection'

function SkillAndMordenPage() {
  return (
    <>

      <section className='' >
        <div className='container'>
        
            <div className='select-none px-[20px] md:px-0 mt-[40px]   lg:-mt-[40px]   lg:pt-[0px]  lg:pb-[9px]  flex flex-col  xl:px-0  xl:flex-row sm:justify-center gap-[7px]'>
              <Skills />



               {/* <VideoSection /> */}
              <Nextproject />
            </div>
  
        </div>
      </section>

    </>
  )
}

export default SkillAndMordenPage
