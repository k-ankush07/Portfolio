import React from 'react'
import arrow from "../../assets/Images/arrow.svg"
import RecruiterOne from "./RecruiterOne"
import {motion} from "framer-motion"
function ViewAll() {
  
  return (
   <>
   
   <div className='container'>
    <div className="flex flex-col">
        <RecruiterOne index={0}  desc=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors " />
        <RecruiterOne index={0} desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, " />
        <RecruiterOne index={0} desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look  " />
      </div>


    <div className="text-[#FFFFFF] text-[14px] md:text-[16px] flex justify-center py-2 lg:pt-[12px]">
  
  <div className="flex gap-3 justify-center items-center group cursor-pointer">
    
    <h1 className="transition-all duration-300 group-hover:bg-[linear-gradient(to_right,#8F74BF_0%,#B57FA5_40%,#D76D77_99%,#FFAF7B_100%)] group-hover:bg-clip-text group-hover:text-transparent ">
      View all Projects
    </h1>

    <motion.img
      src={arrow}
      alt="arrow"
      className="lg:h-10 lg:w-10 group-hover:scale-110 transition-all duration-500"
      // whileHover={{ scale: 1.15 }}
      // transition={{ duration: 0.3 }}
    />

  </div>
</div>
   </div>
   </>
  )
}

export default ViewAll
