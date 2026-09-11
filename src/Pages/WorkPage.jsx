import React, { useMemo, useState } from "react";
import PrivacyText from "../Components/BlogPage/PrivacyText";
import WebApp from "../Components/WorkPage/WebApp";
import ViewDetail from "../Components/Homepage/ViewDetail";
import ServicesSection from "../Components/WorkPage/ServiesSection";

import first from "../assets/Images/new1.svg";
import second from "../assets/Images/new2.svg";
import third from "../assets/Images/new3.svg";
import restro1 from "../assets/Images/restro (2).svg";
import restro from "../assets/Images/restro.svg";
import woa1 from "../assets/Images/newwoa (1).svg";
import woa2 from "../assets/Images/newwoa (2).svg";
import woa3 from "../assets/Images/newwoa (3).svg";
import dan1 from "../assets/Images/newdan (1).svg";
import dan2 from "../assets/Images/newdan (2).svg";
import apm1 from "../assets/Images/newapm (1).svg";
import apm2 from "../assets/Images/newapm (2).svg";
import apm3 from "../assets/Images/newapm (3).svg";
import lone1 from "../assets/Images/newlone (1).svg";
import lone2 from "../assets/Images/newlone (2).svg";
import hora1 from "../assets/Images/hora(1).svg";
import hora2 from "../assets/Images/hora (2).svg";
import hora3 from "../assets/Images/hora (3).svg";
import vitoole1 from "../assets/Images/vitoole (1).svg";
import vitoole2 from "../assets/Images/vitoole (2).svg";
import vitoole3 from "../assets/Images/vitoole (3).svg";
import happyouter from "../assets/Images/happyouter.svg";
import sofaouter from "../assets/Images/sofaouter.svg";
import ape1 from "../assets/Images/ape (1).svg";
import ape2 from "../assets/Images/ape (2).svg";
import ape3 from "../assets/Images/ape (3).svg";
//first 
import liquid from "../assets/Images/tryfumimages (1).svg"
import html from "../assets/Images/tryfumimages (2).svg"
import css from "../assets/Images/tryfumimages (3).svg"
import jquery from "../assets/Images/tryfumimages (4).svg"
import javascript from "../assets/Images/tryfumimages (5).svg"
// 2nd 

import restfull from "../assets/Images/syncform (10).svg"
import adminapi from "../assets/Images/syncform (7).svg"
import react from "../assets/Images/syncform (1).svg"
import typescript from "../assets/Images/syncform (2).svg"
import nodejs from "../assets/Images/syncform (3).svg"

// 3rd
import graphql from "../assets/Images/syncform (9).svg"
import scscss from "../assets/Images/syncform (6).svg"

//4th
import bootstrap from "../assets/Images/boot.svg"
//5th
import sass from "../assets/Images/sass.svg"
//6th
import webhook from "../assets/Images/syncform (11).svg"
//10th
import storeapi from "../assets/Images/syncform (8).svg"
function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "TryFum",
      slug: "tryfum",
      logo:[{liquid, html, css,javascript,jquery,}],
      leftImg: first,
      centerImg: second,
      rightImg: third,
      tags: [
        "Shopify Store development ",
        "Conversion optimization",
        "Custom store development",
        "Shopify theme Customization",
        "Subscription optimization",
      ],
      niches: ["Health & Wellness"],
    },
    {
      id: 2,
      logo:[{liquid,html,css,jquery,javascript,restfull,adminapi,react,typescript,nodejs}],
      title: "RetroSpec",
      slug: "retrospec",
      leftImg: restro1,
      centerImg: restro,
      tags: [
        "Shopify Store Development",
        "Custom Shopify App",
        "Shopify Theme Customization",
      ],
      niches: ["Sports"],
    },
    {
      id: 3,
      logo:[{html,scscss,liquid,jquery,javascript,graphql}],
      title: "WoahBros",
      slug: "woahbros",
      leftImg: woa1,
      centerImg: woa2,
      rightImg: woa3,
      tags: ["Shopify Store Optimization", "Klaviyo Optimization"],
      niches: ["Apparel"],
    },
    {
      id: 4,
      title: "Doinkrollerz",
      logo:[{html,css,jquery,liquid,scscss,javascript,bootstrap}],
      slug: "doinkrollerz",
      leftImg: dan2,
      centerImg: dan1,
      tags: [
        "Shopify Store Optimization",
        "Conversion Optimization",
        "Speed Customization",
      ],
      niches: ["Lifestyle"],
    },
    {
      id: 5,
      title: "Apmzee",
      logo:[{html,css,sass,scscss,jquery,javascript,graphql}],
      slug: "apmzee",
      leftImg: ape3,
      centerImg: ape1,
      rightImg: ape2,
      tags: [
        "Shopify Store Development",
        "Shopify Theme Customization",
        "Conversion Optimization",
        "Speed Optimization",
      ],
      niches: ["Health & Wellness"],
    },
    {
      id: 6,
      title: "Lonepouches",
      logo:[{html,css,scscss,jquery,javascript,webhook}],
      slug: "lonepouches",
      leftImg: lone2,
      centerImg: lone1,
      tags: ["Custom Shopify Development", "Subscription Optimization"],
      niches: ["Health & Wellness"],
    },
    {
      id: 7,
      title: "Hoperoza",
      logo:[{html,css,jquery,liquid,scscss,javascript}],
      slug: "hoperoza",
      leftImg: hora1,
      centerImg: hora2,
      rightImg: hora3,
      tags: [
        "Shopify Custom Development",
        "Custom Theme Development",
        "Speed Optimization",
      ],
      niches: ["Fashion"],
    },
    {
      id: 8,
      title: "Vittelo",
      logo:[{html,css,jquery,scscss,javascript}],
      slug: "vittelo",
      leftImg: vitoole1,
      centerImg: vitoole2,
      rightImg: vitoole3,
      tags: [
        "Custom Shopify Development",
        "Shopify Store Optimization",
        "UI/UX Design",
        "Ecommerce Development",
      ],
      niches: ["Fashion & Accessories"],
    },
    {
      id: 9,
      title: "Happy Stuf",
      logo:[{html,css,jquery,scscss,javascript,sass}],
      slug: "happystuf",
      leftImg: happyouter,
      rotate: 4,
      tags: [
        "Shopify Store Optimization",
        "Conversion Rate Optimization",
        "Speed Optimization",
      ],
      niches: ["Health & Wellness"],
    },
    {
      id: 10,
      title: "Sofa Direct",
      logo:[{html,css,jquery,scscss,javascript,sass,liquid,adminapi,storeapi}],
      slug: "sofadirect",
      leftImg: sofaouter,
      rotate: -4,
      tags: ["UI/UX Design", "Speed Optimization", "Custom Theme Development"],
      niches: ["Furniture & Home"],
    },
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedNiches, setSelectedNiches] = useState([]);

  const toggleService = (name) =>
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );

  const toggleNiche = (name) =>
    setSelectedNiches((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const serviceMatch =
        selectedServices.length === 0 ||
        p.tags.some((tag) => selectedServices.includes(tag));

      const nicheMatch =
        selectedNiches.length === 0 ||
        p.niches.some((n) => selectedNiches.includes(n));

      return serviceMatch && nicheMatch;
    });
  }, [selectedServices, selectedNiches]);

  // WebApp do-do project side-by-side leta hai, isliye pairs bana lo
  const pairs = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    pairs.push([filteredProjects[i], filteredProjects[i + 1]]);
  }
  return (
    <>
      <div className="lg:pb-[15px]">
        <PrivacyText
          colorText="Work"
          first_letter="Curated"
          para="A showcase of my best and most impactful projects."
        />
      </div>

      <ServicesSection
        selectedServices={selectedServices}
        toggleService={toggleService}
        selectedNiches={selectedNiches}
        toggleNiche={toggleNiche}
      />

      <div className="lg:pb-[20px] work_class px-[20px] md:px-0">
        {pairs.length === 0 && (
          <p className="text-white text-center py-10">
            No projects match selected filters.
          </p>
        )}

        {pairs.map(([p1, p2]) => (
          <WebApp
            key={p1.id}
            single={!p2}
            leftImg={p1.leftImg}
            centerImg={p1.centerImg}
            rightImg={p1.rightImg}
            title={p1.title}
            slug={p1.slug}
            idA={p1.id}
            tags={p1.tags}
            niche={p1.niches}
            leftImg2={p2?.leftImg}
            centerImg2={p2?.centerImg}
            rightImg2={p2?.rightImg}
            title2={p2?.title}
            slug2={p2?.slug}
            idB={p2?.id}
            tags2={p2 ? p2.tags : []}
            niche2={p2?.niches}
            rotate={p1.rotate}
            rotate2={p2?.rotate}
            logos={p1.logo ? Object.values(p1.logo[0]) : []}
            logos2={p2?.logo ? Object.values(p2.logo[0]) : []}
          />
        ))}
      </div>
    </>
  );
}

export default WorkPage;