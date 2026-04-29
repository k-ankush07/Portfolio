import React, { useRef } from "react";
import shopify from "../../assets/Images/Vector (5).svg";
import circleImage from "../../assets/Images/circlesvg.svg";
import Background from "../../assets/Images/Background.svg";
import star from "../../assets/Images/star.svg";
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
import Next from "../../assets/Images/rsection (3).svg";
import pnpm from "../../assets/Images/rsection (4).svg";
import PostgreSQL from "../../assets/Images/rsection (1).svg";
import Redis from "../../assets/Images/rsection (2).svg";
import Vercel from "../../assets/Images/rsection (3).svg";
import ViewDetail from "./ViewDetail";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

function RecruiterOne({ index,desc }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // 🔥 Smooth inertia feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 1,
  });

  const scale = useTransform(smoothProgress, [0, 0.8], [1, 0.97]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [0.85, 1]);
  const yRaw = useTransform(smoothProgress, [0, 0.8], [60, 0]);

  // extra smoothing (glide after scroll stop)
  const y = useSpring(yRaw, {
    stiffness: 50,
    damping: 20,
  });

  const isMobile = window.innerWidth < 1024;

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="sticky py-3 sm:py-0"
      style={{
        top: isMobile
          ? `${40 + index * 30}px`
          : `${100 + index * 80}px`,
        zIndex: 10 + index,
      }}
    >
      <div className="container">
        <motion.div
          style={{ scale, opacity, y }}
          className="lg:px-0"
        >
          <div className="px-2 lg:px-0 py-[6px]">
            <div className="image_background lg:flex gap-5 lg:gap-[75px] lg:pl-[40px] md:pb-[40px] lg:pt-[30px] lg:pr-[53px]">

              {/* Left */}
              <div className="rounded-xl flex relative w-[100%] lg:w-[60%]">
                <ViewDetail />
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center mt-4 lg:mt-0">
                <div className="flex items-center gap-1 sm:gap-3 text-white">
                  <img src={shopify} alt="shopify logo" className="h-[32px] w-[28px]  sm:h-[42px] sm:w-[37px] " />
                  <h1 className="text-[20px] sm:text-[26px] lg:text-[40px] font-bold">
                    Recruiter
                    <span className="bg-gradient-to-r from-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                      One
                    </span>
                  </h1>
                </div>

                <div className="md:max-w-[430px] hidden lg:block text-[#BDBDBD]">
                  <p>
                   {desc}
                  </p>
                </div>

                <div className="hidden lg:block">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex gap-2 pt-[11px] text-[#BDBDBD] text-[14px]">
                      <img src={star} alt="star"  />
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <motion.div
                  className="flex flex-wrap gap-2 sm:w-[400px] lg:w-[384px] mt-3"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[Bun, Docker, Next, pnpm, PostgreSQL, Redis, Vercel].map((img, i) => (
                    <motion.img key={i} variants={item} src={img} alt="logo" />
                  ))}
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RecruiterOne;