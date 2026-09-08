import React from 'react'
import PrivacyText from '../Components/BlogPage/PrivacyText'
import WebApp from '../Components/WorkPage/WebApp'
import ViewDetail from '../Components/Homepage/ViewDetail'
import ServicesSection from '../Components/WorkPage/ServiesSection'

import first from "../assets/Images/new1.svg";
import second from "../assets/Images/new2.svg";
import third from "../assets/Images/new3.svg";
import restro from "../assets/Images/restro (1).svg"
import restro1 from "../assets/Images/restro (2).svg"
import woa1 from "../assets/Images/newwoa (1).svg"
import woa2 from "../assets/Images/newwoa (2).svg"
import woa3 from "../assets/Images/newwoa (3).svg"
import dan1 from "../assets/Images/newdan (1).svg"
import dan2 from "../assets/Images/newdan (2).svg"
import apm1 from "../assets/Images/newapm (1).svg"
import apm2 from "../assets/Images/newapm (2).svg"
import apm3 from "../assets/Images/newapm (3).svg"
import lone1 from "../assets/Images/newlone (1).svg"
import lone2 from "../assets/Images/newlone (2).svg"

function WorkPage() {
  return (
    <>
    <div className='   lg:pb-[15px]'>
        <PrivacyText  colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
    </div>
    <ServicesSection />
  <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
     <WebApp  leftImg={first} centerImg={second} rightImg={third}  leftImg2={restro1} centerImg2={restro}  title="TryFum"   title2="RetroSpec"   idA={1} idB={2} />
   <WebApp leftImg={woa1} centerImg={woa2} rightImg={woa3}  leftImg2={dan2} centerImg2={dan1}  title="WoahBros"   title2="Doinkrollerz"   idA={3} idB={4} />
   <WebApp  leftImg={apm1} centerImg={apm2} rightImg={apm3}  leftImg2={lone2} centerImg2={lone1}  title="Apmzee"   title2="Lonepouches"   idA={5} idB={6} />
  </div>
   

    </>
  )
}

export default WorkPage

