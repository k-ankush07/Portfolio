import React from 'react'
import Privacy from '../Components/AboutPage/Privacy'
import Policy from '../Components/AboutPage/Policy'
import Roboto from "../assets/Images/roboto-logo 1.svg";
import newgithub from "../assets/Images/abc.svg";
function PrivacyPage() {
  return (
    <div className='lato-regular'>
        <Privacy />
      <Policy   date="01"  heading="Collect." subheading="Only What's Needed" heading1="Open Source" heading2="Developer"
           span1="Develop and maintain open-source repositories focused on modern web  infrastructure and developer productivity, achieving significant  community adoption (70+ stars on flagship projects)."
         span2="Engineered UI components and technical documentation for a leading React ecosystem (20K+ GitHub stars), expanding the library's collection of  high-performance, accessible components."
          span3="Refined component logic and TypeScript definitions, ensuring seamless  integration, type-safety, and a superior developer experience (DX) for  thousands of downstream users."
         span4="Collaborated with global maintainers to uphold rigorous engineering  standards, focusing on modern web aesthetics, optimized rendering  patterns, and performance-first architecture" />
    </div>
  )
}

export default PrivacyPage
