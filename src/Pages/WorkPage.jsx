// // import React from 'react'
// // import PrivacyText from '../Components/BlogPage/PrivacyText'
// // import WebApp from '../Components/WorkPage/WebApp'
// // import ViewDetail from '../Components/Homepage/ViewDetail'
// // import ServicesSection from '../Components/WorkPage/ServiesSection'

// // import first from "../assets/Images/new1.svg";
// // import second from "../assets/Images/new2.svg";
// // import third from "../assets/Images/new3.svg";
// // import fourth from "../assets/Images/new4 (1).svg";
// // import fifth from "../assets/Images/new4 (2).svg";
// // import sixth from "../assets/Images/new4 (3).svg";
// // function WorkPage() {
// //   return (
// //     <>
// //     <div className='   lg:pb-[15px]'>
// //         <PrivacyText  colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
// //     </div>
// //     <ServicesSection />
// //   <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
// //      <WebApp  leftImg={first} centerImg={second} rightImg={third}  leftImg2={fourth} centerImg2={fifth} rightImg2={sixth}  title="TryFum"   title2="Syncform"  />
// //    <WebApp />
// //    <WebApp single  />
// //   </div>
   

// //     </>
// //   )
// // }

// // export default WorkPage


// import React, { useState, useMemo } from 'react'
// import PrivacyText from '../Components/BlogPage/PrivacyText'
// import WebApp from '../Components/WorkPage/WebApp'
// import ServicesSection from '../Components/WorkPage/ServiesSection'

// import first from "../assets/Images/new1.svg";
// import second from "../assets/Images/new2.svg";
// import third from "../assets/Images/new3.svg";
// import fourth from "../assets/Images/new4 (1).svg";
// import fifth from "../assets/Images/new4 (2).svg";
// import sixth from "../assets/Images/new4 (3).svg";


// const projects = [
//   {
//     id: 1,
//     title: "TryFum",
//     tags: [
//       "Conversion optimization",
//       "Custom Shopify development",
//       "Health",
//     ],
//     leftImg: first,
//     centerImg: second,
//     rightImg: third,
//   },
//   {
//     id: 2,
//     title: "Syncform",
//     tags: [
//       "UI/UX design",
//       "Shopify store development",
//       "Fashion",
//     ],
//     leftImg: fourth,
//     centerImg: fifth,
//     rightImg: sixth,
//   },
//   {
//     id: 3,
//     title: "Cart Plus",
//     tags: [
//       "Speed optimization",
//       "Subscription optimization",
//       "Supplements",
//     ],
//     leftImg: first,
//     centerImg: second,
//     rightImg: third,
//   },
//   {
//     id: 4,
//     title: "Woahbros",
//     tags: [
//       "Landing page",
//       "Shopify Theme Customization",
//       "Auto & Moto",
//       "Cosmetics",
//     ],
//     leftImg: first,
//     centerImg: second,
//     rightImg: third,
//   },
//   {
//     id: 5,
//     title: "Smash",
//     tags: [
//       "Shopify App",
//       "Art Gallery",
//       "Food & Beverages",
//       "Home & Furniture",
//       "Jewelry",
//     ],
//     leftImg: first,
//     centerImg: second,
//     rightImg: third,
//   },
// ]
// function WorkPage() {
//   const [selectedServices, setSelectedServices] = useState([])
//   const [selectedNiches, setSelectedNiches] = useState([])

//   const toggleService = (name) => {
//     setSelectedServices((prev) =>
//       prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
//     )
//   }

//   const toggleNiche = (name) => {
//     setSelectedNiches((prev) =>
//       prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
//     )
//   }

//   const filteredProjects = useMemo(() => {
//     if (selectedServices.length === 0 && selectedNiches.length === 0) {
//       return projects
//     }
//     return projects.filter((p) => {
//       const matchesService =
//         selectedServices.length === 0 ||
//         selectedServices.some((s) => p.tags.includes(s))
//       const matchesNiche =
//         selectedNiches.length === 0 ||
//         selectedNiches.some((n) => p.tags.includes(n))
//       return matchesService && matchesNiche
//     })
//   }, [selectedServices, selectedNiches])

//   // WebApp ek call me 2 projects dikhata hai, isliye pair bana rahe hain
//   const pairs = []
//   for (let i = 0; i < filteredProjects.length; i += 2) {
//     pairs.push(filteredProjects.slice(i, i + 2))
//   }

//   return (
//     <>
//       <div className='lg:pb-[15px]'>
//         <PrivacyText
//           colorText='Work'
//           first_letter="Curated"
//           para="A showcase of my best and most impactful projects."
//         />
//       </div>

//       <ServicesSection
//         selectedServices={selectedServices}
//         selectedNiches={selectedNiches}
//         onToggleService={toggleService}
//         onToggleNiche={toggleNiche}
//       />

//       <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
//         {pairs.map((pair, idx) => {
//           const [projA, projB] = pair
//           return (
//             <WebApp
//               key={idx}
//               single={!projB}
//               title={projA.title}
//               leftImg={projA.leftImg}
//               centerImg={projA.centerImg}
//               rightImg={projA.rightImg}
//               title2={projB?.title}
//               leftImg2={projB?.leftImg}
//               centerImg2={projB?.centerImg}
//               rightImg2={projB?.rightImg}
//             />
//           )
//         })}

//         {filteredProjects.length === 0 && (
//           <p className="text-white text-center py-10">
//             No projects found for selected filters.
//           </p>
//         )}
//       </div>
//     </>
//   )
// }

// export default WorkPage

// import React from 'react'
// import PrivacyText from '../Components/BlogPage/PrivacyText'
// import WebApp from '../Components/WorkPage/WebApp'
// import ViewDetail from '../Components/Homepage/ViewDetail'
// import ServicesSection from '../Components/WorkPage/ServiesSection'

// import first from "../assets/Images/new1.svg";
// import second from "../assets/Images/new2.svg";
// import third from "../assets/Images/new3.svg";
// import fourth from "../assets/Images/new4 (1).svg";
// import fifth from "../assets/Images/new4 (2).svg";
// import sixth from "../assets/Images/new4 (3).svg";
// function WorkPage() {
//   return (
//     <>
//     <div className='   lg:pb-[15px]'>
//         <PrivacyText  colorText='Work' first_letter="Curated" para="A showcase of my best and most impactful projects." />
//     </div>
//     <ServicesSection />
//   <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
//      <WebApp  leftImg={first} centerImg={second} rightImg={third}  leftImg2={fourth} centerImg2={fifth} rightImg2={sixth}  title="TryFum"   title2="Syncform"  />
//    <WebApp />
//    <WebApp single  />
//   </div>
   

//     </>
//   )
// }

// export default WorkPage


import React, { useState, useMemo } from 'react'
import PrivacyText from '../Components/BlogPage/PrivacyText'
import WebApp from '../Components/WorkPage/WebApp'
import ServicesSection from '../Components/WorkPage/ServiesSection'

import first from "../assets/Images/new1.svg";
import second from "../assets/Images/new2.svg";
import third from "../assets/Images/new3.svg";
import fourth from "../assets/Images/new4 (1).svg";
import fifth from "../assets/Images/new4 (2).svg";
import sixth from "../assets/Images/new4 (3).svg";
import seventh from "../assets/Images/new5 (1).svg";
import eighth from "../assets/Images/new5 (2).svg";
import ninth from "../assets/Images/new5 (3).svg";

const projects = [
  {
    id: 1,
    title: "TryFum",
    tags: [
      "Conversion optimization",
      "Custom Shopify development",
      "Health",
    ],
    leftImg: first,
    centerImg: second,
    rightImg: third,
  },
  {
    id: 2,
    title: "Syncform",
    tags: [
      "Shopify App Development",
      "Custom Shopify Development",
    ],
    leftImg: fourth,
    centerImg: fifth,
    rightImg: sixth,
  },
  {
    id: 3,
    title: "Cart Plus",
    tags: [
      "Shopify App Development",
      "Custom Shopify Development",
    ],
    leftImg: first,
    centerImg: second,
    rightImg: third,
  },
  {
    id: 4,
    title: "Woahbros",
    tags: [
      "Landing page",
      "Shopify Theme Customization",
      "Auto & Moto",
      "Cosmetics",
    ],
    leftImg: first,
    centerImg: second,
    rightImg: third,
  },
  {
    id: 5,
    title: "Smash",
    tags: [
      "Custom Shopify Development",
      "Shopify Store Optimization",
      "UI/UX Design",
    ],
    leftImg: seventh,
    centerImg: eighth,
    rightImg: ninth,
  },
   {
    id: 6,
    title: "Vittelo",
    tags: [
      "Custom Shopify Development",
      "Shopify Store Optimization",
      "UI/UX Design",
      "Ecommerce Development"
    ],
    leftImg: seventh,
    centerImg: eighth,
    rightImg: ninth,
  },
   {
    id: 7,
    title: "Smash",
    tags: [
      "Custom Shopify Development",
      "Shopify Store Optimization",
      "UI/UX Design",
    ],
    leftImg: seventh,
    centerImg: eighth,
    rightImg: ninth,
  },
]

// title ko URL-friendly slug me convert karta hai, jaise "Cart Plus" -> "cartplus"
const toSlug = (title) => title.toLowerCase().replace(/\s+/g, "")

function WorkPage() {
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedNiches, setSelectedNiches] = useState([])

  const toggleService = (name) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  const toggleNiche = (name) => {
    setSelectedNiches((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  const filteredProjects = useMemo(() => {
    if (selectedServices.length === 0 && selectedNiches.length === 0) {
      return projects
    }
    return projects.filter((p) => {
      const matchesService =
        selectedServices.length === 0 ||
        selectedServices.some((s) => p.tags.includes(s))
      const matchesNiche =
        selectedNiches.length === 0 ||
        selectedNiches.some((n) => p.tags.includes(n))
      return matchesService && matchesNiche
    })
  }, [selectedServices, selectedNiches])

  // WebApp ek call me 2 projects dikhata hai, isliye pair bana rahe hain
  const pairs = []
  for (let i = 0; i < filteredProjects.length; i += 2) {
    pairs.push(filteredProjects.slice(i, i + 2))
  }

  return (
    <>
      <div className='lg:pb-[15px]'>
        <PrivacyText
          colorText='Work'
          first_letter="Curated"
          para="A showcase of my best and most impactful projects."
        />
      </div>

      <ServicesSection
        selectedServices={selectedServices}
        selectedNiches={selectedNiches}
        onToggleService={toggleService}
        onToggleNiche={toggleNiche}
      />

      <div className='lg:pb-[20px] work_class px-[20px] md:px-0'>
        {pairs.map((pair, idx) => {
          const [projA, projB] = pair
          return (
            <WebApp
              key={idx}
              single={!projB}
              title={projA.title}
              slug={toSlug(projA.title)}
              leftImg={projA.leftImg}
              centerImg={projA.centerImg}
              rightImg={projA.rightImg}
              title2={projB?.title}
              slug2={projB ? toSlug(projB.title) : undefined}
              leftImg2={projB?.leftImg}
              centerImg2={projB?.centerImg}
              rightImg2={projB?.rightImg}
            />
          )
        })}

        {filteredProjects.length === 0 && (
          <p className="text-white text-center py-10">
            No projects found for selected filters.
          </p>
        )}
      </div>
    </>
  )
}

export default WorkPage