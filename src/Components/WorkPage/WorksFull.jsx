import React from 'react'
import image from "../../assets/Images/image 82.svg"
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
function WorksFull() {
    return (
        <section className= ' px-2 sm:px-0 pt-[10px] lg:pt-[40px]'>
           
                <div className=' lg:flex'>


                    <SectionHeader number="02" title="How It Works" />

                    <div className=' pb-[20px] lg:pt-[38px] lg:pb-[34px] lg:pl-[51px] lg:w-[67%] lg:border-t border-b lg:border-l border-[#FFFFFF]/10  '>
                        <Paragraph>Two audiences, two very different workflows. Students browse a course catalog, pay via Razorpay, stream video content, track progress per-subsection, and leave ratings. Instructors build courses through a structured editor — sections contain  subsections, each with a video URL — upload media through Cloudinary,  and monitor enrollments and revenue from a dedicated dashboard.<br/>
                        <span className='text-[14px]  lg:leading-[30px] text-[#BDBDBD]'> The architecture is a Turborepo monorepo with three workspaces:</span>
                        </Paragraph>
                        <img src={image} alt='image' className=' pt-[10px] pb-[10px] lg:pt-[20px] lg:pb-[30px]' />
                        <Paragraph className=' '>That shared-types package is the load-bearing wall. A field rename breaks both codebases at compile time, not in production at 2 AM.</Paragraph>
                        <Paragraph className='  pt-[5px] '>State ownership is explicit. React Query handles everything from the server — courses, profiles, payment history. Zustand handles everything client-only — auth tokens in memory, cart persisted  across reloads. No overlap. An Axios interceptor bridges them: on a 401, it queues pending requests, refreshes via httpOnly cookie, replays the  queue. The user never sees the handshake.</Paragraph>
                        </div>
                    </div>

           
        </section>
    )
}

export default WorksFull
