import React from 'react'
import arrow from "../../assets/Images/arrow.svg"
import RecruiterOne from "./RecruiterOne"
import {motion} from "framer-motion"
function ViewAll() {
  
  return (
   <>
   
   <div>
    <div className="flex flex-col">
        <RecruiterOne index={0}  desc=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." />
        <RecruiterOne index={0} desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." />
        <RecruiterOne index={0} desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. " />
      </div>

     <div className=' text-[#FFFFFF] text-[14px] md:text-[16px] py-2 lg:py-[22px]  '>
          <div className='flex gap-3 justify-center items-center'>
                        <h1>
                            View all Projects
                           
                        </h1>
                         <motion.img
              src={arrow}
              alt="arrow" 
              className='lg:h-10 lg:w-10 cursor-pointer'
               initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.8 }}
              />
                    </div>
      
    </div>
   </div>
   </>
  )
}

export default ViewAll
