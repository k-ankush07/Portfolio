import React from 'react'
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image83 from "../../assets/Images/image 83.svg"
function Backend_Architecture() {
  return (
    <section className='pt-[40px]'>
          
                <div className=' flex'>


                    <SectionHeader number="03" title="Backend Architecture" />

                    <div className=' pt-[36px] pb-[33px] w-[67%] border-t border-b border-l border-[#FFFFFF]/10  pl-[51px]'>
                       <Heading>
                        Rolling my own auth
                       </Heading>
                       <Paragraph>
                        Bcrypt for hashing. Short-lived JWTs in memory. Refresh tokens in  httpOnly cookies. OTP email verification. Role-based middleware —  Student, Instructor, Admin. I wrote every layer instead of reaching for a library, and it paid off the first time something broke. (Cold starts  on Render made the refresh endpoint take 3 seconds to wake. The Axios  interceptor now retries with backoff and queues concurrent requests.  That fix took an hour because I understood the full chain.)
                       </Paragraph>
                        <Heading className="pt-[17px]">
                        Razorpay payments
                       </Heading>
                       <Paragraph>
                       HMAC signature verification, idempotent enrollment keyed on razorpay_order_id, CourseProgress creation, and confirmation emails via Resend. The Payment model tracks  explicit status transitions — pending, success, failed — with the full  Razorpay reference chain. I didn't build that tracing for fun. I built  it after v1 had zero observability and debugging "where did my money go" was guesswork.
                       </Paragraph>

                       <Heading className='pt-[20px]'>Shared Zod schemas</Heading>
                       <img src={image83} alt='compiler' className='pb-[20px]' />
                       <Paragraph >Both apps import CreateCourseInput directly. Before this, I maintained parallel interfaces that drifted.  I'd find out from a 500 in production. Now a breaking change is a  compile error. Simplest decision, highest return.</Paragraph>

                       <Heading className='pt-[30px]'>Bun everywhere</Heading>
                       <Paragraph>
                        Both apps run on Bun — fast cold starts, native TypeScript, no dev build step. bun install at the root, Turbo orchestrates parallel builds, each app Dockerized  with multi-stage builds (~30 lines per Dockerfile). One runtime, one  package manager. The less context switching between tools, the faster I  ship.
                       </Paragraph>


                        </div>
                    </div>

         
        </section>
  )
}

export default Backend_Architecture
