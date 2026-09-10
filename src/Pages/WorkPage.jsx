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
import hora1 from "../assets/Images/hora(1).svg"
import hora2 from "../assets/Images/hora (2).svg"
import hora3 from "../assets/Images/hora (3).svg"
import vitoole1 from "../assets/Images/vitoole (1).svg"
import vitoole2 from "../assets/Images/vitoole (2).svg"
import vitoole3 from "../assets/Images/vitoole (3).svg"
import happyouter from "../assets/Images/happyouter.svg"


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
  { id: 7, title: "Hoperoza",  leftImg: hora1, centerImg: hora2,rightImg: hora3,
    tags: ["Shopify Custom Development", "Custom Theme Development","Speed Optimization"], niches: ["Fashion"] },
  { id: 8, title: "Vittelo",  leftImg: vitoole1, centerImg: vitoole2,rightImg: vitoole3,
    tags: ["Custom Shopify Development", "Shopify Store Optimization","UI/UX Design","Ecommerce Development"], niches: ["Fashion & Accessories"] },
  { id: 9, title: "Happy Stuf",  leftImg: happyouter,
    tags: ["Shopify Store Optimization", "Conversion Rate Optimization","Speed Optimization"], niches: ["Health & Wellness"] },
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
            title={p1.title} idA={p1.id} tags={p1.tags}
   niche={p1.niches}
            leftImg2={p2?.leftImg} centerImg2={p2?.centerImg} rightImg2={p2?.rightImg}
            title2={p2?.title} idB={p2?.id} tags2={p2 ? p2.tags : []}
 niche2={p2?.niches}
          />
        ))}
      </div>

    </>
  )
}

export default WorkPage

