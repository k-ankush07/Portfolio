import React from 'react'
import Modern_Scalable from '../Components/Homepage/Modern_Scalable'
import Web_Project from '../Components/Homepage/Web_Project'
import Recent__Work from '../Components/Homepage/Recent__Work'
import ViewAll from '../Components/Homepage/ViewAll'
import Tool from '../Components/Homepage/Tool'
import FullStack from '../Components/Homepage/FullStack'
import Developers from '../Components/Homepage/Developers'
import Explore from '../Components/Homepage/Explore'
import ConceptToCreation from '../Components/Homepage/ConceptToCreation'
import SkillAndMordenPage from './SkillAndMordenPage'
import Journey from '../Components/AboutPage/Journey'
import Engineer from '../Components/AboutPage/Engineer'


function HomePage() {
  return (
   <>
   <div className='lato-regular'>
    
   <Modern_Scalable />  
    <SkillAndMordenPage />
<Web_Project />
<Recent__Work />
<ViewAll />
<Tool />
<FullStack /> 
<Developers   />
<Explore />
<ConceptToCreation /> 
</div>
   </>
  )
}

export default HomePage
