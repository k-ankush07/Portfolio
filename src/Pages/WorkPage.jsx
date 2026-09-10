import React, { useMemo, useState } from 'react'
import PrivacyText from '../Components/BlogPage/PrivacyText'
import WebApp from '../Components/WorkPage/WebApp'
import ViewDetail from '../Components/Homepage/ViewDetail'
import ServicesSection from '../Components/WorkPage/ServiesSection'

import first from "../assets/Images/new1.svg";
import second from "../assets/Images/new2.svg";
import third from "../assets/Images/new3.svg";
import restro1 from "../assets/Images/restro (2).svg"
import restro from "../assets/Images/restro.svg"
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

  const projects = [
  { id: 1, title: "TryFum", leftImg: first, centerImg: second, rightImg: third,
    tags: ["Shopify Store development ", "Conversion optimization","Custom store development", "Shopify theme Customization", "Subscription optimization"], niches: ["Health & Wellness"] },
  { id: 2, title: "RetroSpec",    leftImg: restro1, centerImg: restro,
    tags: ["Shopify Store Development", "Custom Shopify App", "Shopify Theme Customization"], niches: ["Sports"] },
  { id: 3, title: "WoahBros",     leftImg: woa1, centerImg: woa2, rightImg: woa3,
    tags: ["Shopify Store Optimization","Klaviyo Optimization"], niches: ["Apparel"] },
  { id: 4, title: "Doinkrollerz", leftImg: dan2, centerImg: dan1,
    tags: ["Shopify Store Optimization","Conversion Optimization","Speed Customization"], niches: ["Lifestyle"] },
  { id: 5, title: "Apmzee",       leftImg: apm1, centerImg: apm2, rightImg: apm3,
    tags: ["Shopify Store Development","Shopify Theme Customization","Conversion Optimization","Speed Optimization"], niches: ["Health & Wellness"] },
  { id: 6, title: "Lonepouches",  leftImg: lone2, centerImg: lone1,
    tags: ["Custom Shopify Development", "Subscription Optimization"], niches: ["Health & Wellness"] },
]

 const [selectedServices, setSelectedServices] = useState([])
  const [selectedNiches, setSelectedNiches] = useState([])

  const toggleService = (name) =>
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )

  const toggleNiche = (name) =>
    setSelectedNiches((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const serviceMatch =
        selectedServices.length === 0 ||
        p.tags.some((tag) => selectedServices.includes(tag))

      const nicheMatch =
        selectedNiches.length === 0 ||
        p.niches.some((n) => selectedNiches.includes(n))

      return serviceMatch && nicheMatch
    })
  }, [selectedServices, selectedNiches])

  // WebApp do-do project side-by-side leta hai, isliye pairs bana lo
  const pairs = []
  for (let i = 0; i < filteredProjects.length; i += 2) {
    pairs.push([filteredProjects[i], filteredProjects[i + 1]])
  }
  return (
    <>
    {/* <div className='   lg:pb-[15px]'>
        <PrivacyText  colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
    </div>
    <ServicesSection />
  <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
     <WebApp  leftImg={first} centerImg={second} rightImg={third}  leftImg2={restro1} centerImg2={restro}  title="TryFum"   title2="RetroSpec"   idA={1} idB={2} />
   <WebApp leftImg={woa1} centerImg={woa2} rightImg={woa3}  leftImg2={dan2} centerImg2={dan1}  title="WoahBros"   title2="Doinkrollerz"   idA={3} idB={4} />
   <WebApp  leftImg={apm1} centerImg={apm2} rightImg={apm3}  leftImg2={lone2} centerImg2={lone1}  title="Apmzee"   title2="Lonepouches"   idA={5} idB={6} />
  </div> */}
   
    <div className='lg:pb-[15px]'>
        <PrivacyText colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
      </div>

      <ServicesSection
        selectedServices={selectedServices}
        toggleService={toggleService}
        selectedNiches={selectedNiches}
        toggleNiche={toggleNiche}
      />

      <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
        {pairs.length === 0 && (
          <p className="text-white text-center py-10">No projects match selected filters.</p>
        )}

        {pairs.map(([p1, p2]) => (
          <WebApp
            key={p1.id}
            single={!p2}
            leftImg={p1.leftImg} centerImg={p1.centerImg} rightImg={p1.rightImg}
            title={p1.title} idA={p1.id} tags={[...p1.tags, ...p1.niches]}   
            leftImg2={p2?.leftImg} centerImg2={p2?.centerImg} rightImg2={p2?.rightImg}
            title2={p2?.title} idB={p2?.id} tags2={p2 ? [...p2.tags, ...p2.niches] : []}
          />
        ))}
      </div>

    </>
  )
}

export default WorkPage

