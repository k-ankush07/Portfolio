import React from 'react'
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image86 from "../../assets/Images/image 86.svg"
function Learned() {
  return (
     <section className='pt-[40px]'>
            
                <div className=' flex'>


                    <SectionHeader number="06" title="What I Learned" />

                    <div className=' pt-[38px] pb-[40px] w-[67%] border-t border-b border-l border-[#FFFFFF]/10  pl-[51px]'>
                    <Heading>Shared types are the highest-leverage thing you can add to a full-stack repo.</Heading>
                    <Paragraph>The Turborepo setup took an afternoon. It's caught type drift every  week since. Every full-stack project I build from now on starts with a  shared schema package.</Paragraph>
                     <Heading className='pt-[17px]'>Shared types are the highest-leverage thing you can add to a full-stack repo.</Heading>
                    <Paragraph>The Turborepo setup took an afternoon. It's caught type drift every  week since. Every full-stack project I build from now on starts with a  shared schema package.</Paragraph>
                     <Heading className='pt-[14px]'>Shared types are the highest-leverage thing you can add to a full-stack repo.</Heading>
                    <Paragraph>The Turborepo setup took an afternoon. It's caught type drift every  week since. Every full-stack project I build from now on starts with a  shared schema package.</Paragraph>
                     
                        </div>
                    </div>

        </section>
  )
}

export default Learned
