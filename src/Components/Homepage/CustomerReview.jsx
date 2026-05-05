import React, { useState } from 'react'
import arrow from "../../assets/Images/arrow.svg"
import customercard from "../../assets/Images/customercard.svg"
import arrow2 from "../../assets/Images/SVG.svg"
import {motion} from "framer-motion"
function CustomerReview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" customer_class flex relative w-full sm:w-[49%] md:w-[33.3%] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" main_customerClass border-[2px] border-[#292929] rounded-[8px] py-30 sm:pt-15 w-full overflow-hidden relative">

        {/* LEFT CARD */}
        <img
          src={customercard}
          alt=""
          className={` card1-about cardsimp  absolute left-4  -top-14 xl:-top-16 w-[40%] transition-all duration-500 ease-out
            ${isHovered ? " translate-y-4 rotate-8 " : "translate-x-0 scale-100 translate-y-0 rotate-0"}
          `}
        />

        {/* RIGHT CARD */}
        <img
          src={arrow2}
          alt=""
          className={` card2-about cardsimp1 absolute right-10  top-10 sm:top-12 xl:top-7 w-[55%] transition-all duration-500 ease-out
            ${isHovered ? " translate-y-2 -rotate-5 " : "translate-x-0 translate-y-0 rotate-0"}
          `}
        />

        {/* BOTTOM TEXT */}
        <div className="absolute bottom-0 w-full">
          <div
            className={` arrow_class_main  flex items-center justify-between py-5 px-4 lg:px-6 transition-all duration-500 ease-out
             
            `}
          >
            <h1 className=" customer-text text-white text-[10px] lg:text-[20px] font-bold">
              Customer reviews/Feedback
            </h1>

            <motion.img
              src={arrow}
              alt="arrow"
              className={` arrow_class lg:h-10 lg:w-10 transition-all duration-200 ease-out
    ${isHovered
                  ? "translate-y-0 opacity-100"   
                  : "translate-y-6 opacity-0"  
                }`}
                                // Arrow hover animation (only when visible)
                                whileHover={{ scale: 1.15}}

                                transition={{ duration: 0.4 }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CustomerReview