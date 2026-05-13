import React from 'react'
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image85 from "../../assets/Images/image 85.svg"
function Challenges() {
  return (
     <section className='pt-[40px]'>
            
                <div className=' flex'>


                    <SectionHeader number="05" title="Challenges" />

                    <div className=' pt-[40px] pb-[40px] w-[67%] border-t border-b border-l border-[#FFFFFF]/10  pl-[51px]'>
                       
                       <img src={image85} alt="image" className='' />
                       
                        </div>
                    </div>

          
        </section>
  )
}

export default Challenges
