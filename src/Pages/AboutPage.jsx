import React from 'react'
import FullStack from '../Components/Homepage/FullStack'
import Journey from '../Components/AboutPage/Journey'
import Engineer from '../Components/AboutPage/Engineer'
import Roboto from "../assets/Images/roboto-logo 1.svg";
import newgithub from "../assets/Images/abc.svg";
import Nextproject from '../Components/Homepage/Nextproject';
import ToolWeTrust from '../Components/Homepage/ToolWeTrust';
import CustomerReview from '../Components/Homepage/CustomerReview';
import Github from '../Components/AboutPage/Github';
import Collaboration from '../Components/AboutPage/Collaboration';
import GithubStats from '../Components/AboutPage/GithubStats';

function AboutPage() {
  return (
    <div className='lg:pt-[172px] lato-regular'>
      <FullStack />
    <Journey />
   <div>
     <Engineer index={0}  date="Jan 2025 – Present" logo={Roboto} heading="Roboto Studio" heading1="Frontend" heading2=" Engineer"
    para1="Architected Headless Systems (Sanity/Contentful):" span1="Designed reusable page-builder blocks and Data Modeling structures. Optimized GROQ queries, improving content delivery speed by 25% across 7+ production sites"
    para2="AI-Native Development & AEO:" span2="Accelerated delivery using an agentic stack (Claude Code, MCP). Implemented Next.js (SSG/ISR) with a focus on Answer Engine Optimization (AEO) and SEO, boosting user engagement by 25%."
    para3="Scalable Infrastructure: " span3="Managed multi-repo environments using Turborepo and TypeScript. Established type-safe standards and CLI-based automation to reduce production defects by 15%."
    para4="Accessibility & Engineering Standards: " span4="Shipped WCAG 2.1 AA compliant interfaces for UK/USA clients. Managed high-velocity sprints in Linear/Agile, maintaining 99% compliance with strict international accessibility regulations."
    />

      <Engineer index={0} date="Nov 2024 — Present" logo={newgithub} heading="GitHub" heading1="Open Source" heading2="Developer"
     span1="Develop and maintain open-source repositories focused on modern web  infrastructure and developer productivity, achieving significant  community adoption (70+ stars on flagship projects)."
   span2="Engineered UI components and technical documentation for a leading React ecosystem (20K+ GitHub stars), expanding the library's collection of  high-performance, accessible components."
    span3="Refined component logic and TypeScript definitions, ensuring seamless  integration, type-safety, and a superior developer experience (DX) for  thousands of downstream users."
   span4="Collaborated with global maintainers to uphold rigorous engineering  standards, focusing on modern web aesthetics, optimized rendering  patterns, and performance-first architecture"
    />
   </div>
    <Collaboration />
    <div className='github-calendar'>
      <Github  />
 
    </div>
    <div className='container z-50'>
     <div className='lg:flex gap-3 FR4F34F4ERF '>
       <Nextproject />
      <div className='lg:w-[35%] space-y-2'>
        <ToolWeTrust />
        <CustomerReview />
      </div>
     </div>
    </div>
    {/* <GithubCard /> */}

    
    </div>
  )
}

export default AboutPage