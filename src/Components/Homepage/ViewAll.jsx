import React from 'react'
import arrow from "../../assets/Images/arrow.svg"
import RecruiterOne from "./RecruiterOne"
import {motion} from "framer-motion"
import first from "../../assets/Images/1st.svg";
import second from "../../assets/Images/2nd.svg";
import third from "../../assets/Images/3rd.svg";
import fourth from "../../assets/Images/4th.svg";
import fifth from "../../assets/Images/5th.svg";
import sixth from "../../assets/Images/6th.svg";
import seventh from "../../assets/Images/7th.svg";
import eighth from "../../assets/Images/8th.svg";
import ninth from "../../assets/Images/9th.svg";
import ten from "../../assets/Images/10th.svg";
import eleven from "../../assets/Images/11th.svg";
import twelve from "../../assets/Images/12th.svg";
function ViewAll() {
  
  return (
   <>
   
   <div className='container'>
    <div className="flex flex-col px-[20px] md:px-0">
        <RecruiterOne index={0}  desc=" is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', "
        leftImg={third}
  centerImg={second}
  rightImg={first}
        />
        <RecruiterOne index={1} desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney  " 
        leftImg={sixth}
  centerImg={fifth}
  rightImg={fourth}
        />
        <RecruiterOne index={2} desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look  "
        leftImg={ninth}
  centerImg={eighth}
  rightImg={seventh}
        />
        <RecruiterOne index={3} desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look  "
        leftImg={ten}
  centerImg={eleven}
  rightImg={twelve}
        />
      </div>


    <div className="text-[#FFFFFF] text-[14px] md:text-[16px] flex justify-center pt-[17px] lg:pt-[12px]">
  
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
