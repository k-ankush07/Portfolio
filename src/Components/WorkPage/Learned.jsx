import React from 'react'
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image86 from "../../assets/Images/image 86.svg"
function Learned() {
  return (
     <section className=' pt-[20px] px-2 sm:px-0 lg:pt-[40px]'>
            
                <div className=' lg:flex'>


                    <SectionHeader number="06" title="What I Learned" />

                    <div className='pb-[20px] lg:pt-[38px] lg:pb-[40px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10  '>
                    <Heading>Shared types are the highest-leverage thing you can add to a full-stack repo.</Heading>
                    <Paragraph>The Turborepo setup took an afternoon. It's caught type drift every  week since. Every full-stack project I build from now on starts with a  shared schema package.</Paragraph>
                     <Heading className='pt-[15px] lg:pt-[17px]'>Shared types are the highest-leverage thing you can add to a full-stack repo.</Heading>
                    <Paragraph>The Turborepo setup took an afternoon. It's caught type drift every  week since. Every full-stack project I build from now on starts with a  shared schema package.</Paragraph>
                     <Heading className='pt-[10px] lg:pt-[14px]'>Shared types are the highest-leverage thing you can add to a full-stack repo.</Heading>
                    <Paragraph>The Turborepo setup took an afternoon. It's caught type drift every  week since. Every full-stack project I build from now on starts with a  shared schema package.</Paragraph>
                     
                        </div>
                    </div>

        </section>
  )
}

export default Learned
