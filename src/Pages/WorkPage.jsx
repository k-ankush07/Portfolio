import React from 'react'
import PrivacyText from '../Components/BlogPage/PrivacyText'
import WebApp from '../Components/WorkPage/WebApp'
import ViewDetail from '../Components/Homepage/ViewDetail'
import ServicesSection from '../Components/WorkPage/ServiesSection'

import first from "../assets/Images/new1.svg";
import second from "../assets/Images/new2.svg";
import third from "../assets/Images/new3.svg";
import fourth from "../assets/Images/new4 (1).svg";
import fifth from "../assets/Images/new4 (2).svg";
import sixth from "../assets/Images/new4 (3).svg";
function WorkPage() {
  return (
    <>
    <div className='   lg:pb-[15px]'>
        <PrivacyText  colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
    </div>
    <ServicesSection />
  <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
     <WebApp  leftImg={first} centerImg={second} rightImg={third}  leftImg2={fourth} centerImg2={fifth} rightImg2={sixth}  title="TryFum"   title2="Syncform"  />
   <WebApp />
   <WebApp single  />
  </div>
   

    </>
  )
}

export default WorkPage

