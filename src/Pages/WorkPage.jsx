import React from 'react'
import PrivacyText from '../Components/BlogPage/PrivacyText'
import WebApp from '../Components/WorkPage/WebApp'
import ViewDetail from '../Components/Homepage/ViewDetail'

function WorkPage() {
  return (
    <>
    <div className='   lg:pb-[15px]'>
        <PrivacyText  colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
    </div>
  <div className='lg:pb-[20px] work_class'>
     <WebApp />
   <WebApp />
   <WebApp single  />
  </div>
   

    </>
  )
}

export default WorkPage
