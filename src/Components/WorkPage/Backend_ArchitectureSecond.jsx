import React from 'react'
import SectionHeader from './SectionHeader'
import { Paragraph, Heading } from "./WorkTypo";
import image86 from "../../assets/Images/image 86.svg"
function Backend_ArchitectureSecond() {
    
  return (
    <section className='pt-[40px]'>
            
                <div className=' flex'>


                    <SectionHeader number="04" title="Backend Architecture" />

                    <div className=' pt-[38px] pb-[40px] w-[67%] border-t border-b border-l border-[#FFFFFF]/10  pl-[51px]'>
                       <Paragraph>
                        The Express API is organized by domain, not technical layer. Each module — auth, course, payment, profile, upload — co-locates its routes,  controllers, services, and Mongoose models. Controllers validate input  against shared Zod schemas, delegate to services, return through a  standardized ApiResponse utility. No controller touches res.status().json() directly — that inconsistency bit me in a previous project. Once two  controllers format errors differently, every frontend dev writes  defensive parsing forever.
                       </Paragraph>
                         <Paragraph className='pt-[22px]'>
                     Middleware runs in a deliberate order: rate limiting → body parsing → CORS → Helmet → cookies → Morgan → mongo-sanitize → routes → global  error handler. Auth middleware lives at the route level, not globally.  (I learned why after accidentally gating my health check and watching  the load balancer panic.)
Error handling is discriminated:
                       </Paragraph>
                       <img src={image86} alt="image" className='pt-[20px] pb-[30px]' />
                       <Paragraph>
                        I added that "never leak" rule after a Mongoose validation error exposed the entire document schema to a user.
                       </Paragraph>
                        </div>
                    </div>

              
        </section>
  )
}

export default Backend_ArchitectureSecond
