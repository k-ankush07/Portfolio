import React from 'react'
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image85 from "../../assets/Images/image 85.svg"
function Challenges() {
  return (
     <section className='pt-[20px] px-2 sm:px-0 lg:pt-[40px]'>
            
                <div className=' lg:flex'>


                    <SectionHeader number="05" title="Challenges" />

                    <div className=' pb-[20px] lg:pt-[40px] lg:pb-[40px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10  '>
                       
                       <img src={image85} alt="image" className='' />
                       
                        </div>
                    </div>  

          
        </section>
  )
}

export default Challenges
