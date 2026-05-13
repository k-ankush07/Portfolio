import React from 'react'
import image from "../../assets/Images/image 82.svg"
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
function WorksFull() {
    return (
        <section className='pt-[40px]'>
           
                <div className=' flex'>


                    <SectionHeader number="02" title="How It Works" />

                    <div className=' pt-[38px] pb-[34px] w-[67%] border-t border-b border-l border-[#FFFFFF]/10  pl-[51px]'>
                        <Paragraph>Two audiences, two very different workflows. Students browse a course catalog, pay via Razorpay, stream video content, track progress per-subsection, and leave ratings. Instructors build courses through a structured editor — sections contain  subsections, each with a video URL — upload media through Cloudinary,  and monitor enrollments and revenue from a dedicated dashboard.
                            The architecture is a Turborepo monorepo with three workspaces:</Paragraph>
                        <img src={image} alt='image' className='pt-[20px] pb-[30px]' />
                        <Paragraph className='text-[#BDBDBD] text-[14px] leading-[24px] '>That shared-types package is the load-bearing wall. A field rename breaks both codebases at compile time, not in production at 2 AM.</Paragraph>
                        <Paragraph className='text-[#BDBDBD] text-[14px] leading-[24px] pt-[5px] '>State ownership is explicit. React Query handles everything from the server — courses, profiles, payment history. Zustand handles everything client-only — auth tokens in memory, cart persisted  across reloads. No overlap. An Axios interceptor bridges them: on a 401, it queues pending requests, refreshes via httpOnly cookie, replays the  queue. The user never sees the handshake.</Paragraph>
                        </div>
                    </div>

           
        </section>
    )
}

export default WorksFull
