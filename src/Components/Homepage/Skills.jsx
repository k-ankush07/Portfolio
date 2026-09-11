import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
// import Blur from "../../assets/Images/Gradient+Blur.svg"
// import Border4 from "../../assets/Images/linesbg.svg"
// import image1 from "../../assets/Images/TypeScript.svg"
// import image2 from "../../assets/Images/skillsimage (1).svg"
// import image3 from "../../assets/Images/skillsimage (2).svg"
// import image4 from "../../assets/Images/skillsimage (3).svg"
// import image5 from "../../assets/Images/skillsimage (4).svg"
// import image6 from "../../assets/Images/skillsimage (5).svg"
// import image7 from "../../assets/Images/skillsimage (6).svg"
// import image8 from "../../assets/Images/skillsimage (7).svg"
// import image9 from "../../assets/Images/skillsimage (8).svg"
// import image10 from "../../assets/Images/skillsimage (9).svg"
// import image11 from "../../assets/Images/skillsimage (10).svg"
// import image12 from "../../assets/Images/skillsimage (11).svg"
// import image13 from "../../assets/Images/skillsimage (12).svg"
// import image14 from "../../assets/Images/skillsimage (13).svg"
// import image15 from "../../assets/Images/skillsimage (14).svg"

import Blur from "../../assets/Images/Gradient+Blur.svg"
import Border4 from "../../assets/Images/linesbg.svg"
import image1 from "../../assets/Images/Group 1707480026.png"
import image2 from "../../assets/Images/Group 1707480027.png"
import image3 from "../../assets/Images/Group 1707480028.png"
import image4 from "../../assets/Images/Group 1707480029.png"
import image5 from "../../assets/Images/Group 1707480030.png"
import image6 from "../../assets/Images/Group 1707480031.png"
import image7 from "../../assets/Images/Group 1707480032.png"
import image8 from "../../assets/Images/Group 1707480033.png"
import image9 from "../../assets/Images/Group 1707480034.png"
import image10 from "../../assets/Images/Group 1707480035.png"
import image11 from "../../assets/Images/Group 1707480036.png"
import image12 from "../../assets/Images/Group 1707480037.png"
import image13 from "../../assets/Images/Group 1707480038.png"
import image14 from "../../assets/Images/Group 1707480039.png"
import image15 from "../../assets/Images/Group 1707480040.png"

// new images
import html1 from "../../assets/Images/html (1).svg"
import html2 from "../../assets/Images/html (2).svg"
import html3 from "../../assets/Images/html (3).svg"
import html4 from "../../assets/Images/html (4).svg"
import html5 from "../../assets/Images/html (5).svg"
import html6 from "../../assets/Images/html (6).svg"
import html7 from "../../assets/Images/html (7).svg"
import html8 from "../../assets/Images/html (8).svg"
import html9 from "../../assets/Images/html (9).svg"
import html10 from "../../assets/Images/html (10).svg"
import html11 from "../../assets/Images/html (11).svg"
import html12 from "../../assets/Images/html (12).svg"
//  2nd slider images
import angular1 from "../../assets/Images/angular (1).svg"
import angular2 from "../../assets/Images/angular (2).svg"
import angular3 from "../../assets/Images/angular (3).svg"
import angular4 from "../../assets/Images/angular (4).svg"
import angular5 from "../../assets/Images/angular (5).svg"
import angular6 from "../../assets/Images/angular (6).svg"
import angular7 from "../../assets/Images/angular (7).svg"
import angular8 from "../../assets/Images/angular (8).svg"
import angular9 from "../../assets/Images/angular (9).svg"
import angular10 from "../../assets/Images/angular (10).svg"

// 3rd slider images
import figma1 from "../../assets/Images/figma (1).svg"
import figma2 from "../../assets/Images/figma (2).svg"
import figma3 from "../../assets/Images/figma (3).svg"
import figma4 from "../../assets/Images/figma (4).svg"
import figma5 from "../../assets/Images/figma (5).svg"
import figma6 from "../../assets/Images/figma (6).svg"
import figma7 from "../../assets/Images/figma (7).svg"
import figma8 from "../../assets/Images/figma (8).svg"
import figma9 from "../../assets/Images/figma (9).svg"
import figma10 from "../../assets/Images/figma (10).svg"
function Skills() {

  return (
    <>


      <div className=' relative bg-[#000000] rounded-[8px] inline-block xl:w-[40%] firsts_slider group '>
        <img src={Blur} alt='blur effect' className='  absolute right-0 -z-0 opacity-85 transition-all duration-400 group-hover:opacity-100  pointer-events-non' />
        <div className='border border-[#292929] bg-[#000000] rounded-[8px] pt-[24px] h-[100%] lg:pt-[53px] pb-[33px] lg:pb-[73px]'>
          <div className='text-center '>
            <h1 className='text-[#FFFFFF] text-[18px] sm:text-[24px] leading-[29px] sm:leading-[36px] font-bold'>Skills / Tech Stack</h1>
            <p className='text-[#BDBDBD]   text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px] '>Tools and Technologies I Work With</p>
          </div>
          <div className="relative">
         

            <div className="space-y-[24px] lg:space-y-[45px] pt-[12px] lg:pt-[33px]">

               {/* 1st slider */}
              <div className='slider '>
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  spaceBetween={5}
                  slidesPerView="auto"
                  loop={true}
                  allowTouchMove={false}
                  
                  freeMode={{
                    enabled: true,
                    momentum: false,
                  }}
                  loopAdditionalSlides={10}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  speed={5000}
                  onSwiper={(swiper) => {
                    setTimeout(() => swiper.autoplay.start(), 500);

                    // Touch completely disable karo
                    swiper.el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });
                    swiper.el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
                  }}
                >
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html1} alt="Docker" className="skill_slider h-full w-full" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html2} alt="Next.js" className="skill_slider h-full h-full w-full" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html3} alt="pnpm" className="skill_slider h-full w-full" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html4} alt="Docker" className="skill_slider h-full w-full" />
                    </div>


                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html12} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html1} alt="Docker" className="skill_slider h-full w-full" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html2} alt="Next.js" className="skill_slider h-full h-full w-full" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html3} alt="pnpm" className="skill_slider h-full w-full" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html4} alt="Docker" className="skill_slider h-full w-full" />
                    </div>


                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html12} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                    <SwiperSlide>
                    <div className="main-class">
                      <img src={html1} alt="Docker" className="skill_slider h-full w-full" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html2} alt="Next.js" className="skill_slider h-full h-full w-full" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html3} alt="pnpm" className="skill_slider h-full w-full" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html4} alt="Docker" className="skill_slider h-full w-full" />
                    </div>


                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={html12} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
              {/*  2nd slider */}
              <div className='slider '>
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  spaceBetween={5}
                  slidesPerView="auto"
                  loop={true}
                  freeMode={{
                    enabled: true,
                    momentum: false,
                  }}
                  allowTouchMove={false}
                  loopAdditionalSlides={10}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  dir="rtl"
                  speed={5000}
                  onSwiper={(swiper) => {
                    setTimeout(() => swiper.autoplay.start(), 500);

                    // Touch completely disable karo
                    swiper.el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });
                    swiper.el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
                  }}

                >

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
               <SwiperSlide>
                    <div className="main-class">
                      <img src={angular1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={angular10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* 3rd slider */}
              <div className='slider '>
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  spaceBetween={5}
                  slidesPerView="auto"
                  loop={true}
                  allowTouchMove={false}
                  freeMode={{
                    enabled: true,
                    momentum: false,
                  }}
                  loopAdditionalSlides={10}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  speed={5000}
                  onSwiper={(swiper) => {
                    setTimeout(() => swiper.autoplay.start(), 500);

                    // Touch completely disable karo
                    swiper.el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });
                    swiper.el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
                  }}
                >
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={figma10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

 
                </Swiper>
              </div>


            </div>
          </div>
          <div className='absolute bottom-0 left-0 w-[100%] -z-0 '>
            <img src={Border4} alt='border line' className="w-full" />

          </div>
        </div>

      </div >

    </>
  )
}

export default Skills


// import Blur from "../../assets/Images/Gradient+Blur.svg"
// import Border4 from "../../assets/Images/linesbg.svg"
// import image1 from "../../assets/Images/TypeScript.svg"
// import image2 from "../../assets/Images/skillsimage (1).svg"
// import image3 from "../../assets/Images/skillsimage (2).svg"
// import image4 from "../../assets/Images/skillsimage (3).svg"
// import image5 from "../../assets/Images/skillsimage (4).svg"
// import image6 from "../../assets/Images/skillsimage (5).svg"
// import image7 from "../../assets/Images/skillsimage (6).svg"
// import image8 from "../../assets/Images/skillsimage (7).svg"
// import image9 from "../../assets/Images/skillsimage (8).svg"
// import image10 from "../../assets/Images/skillsimage (9).svg"
// import image11 from "../../assets/Images/skillsimage (10).svg"
// import image12 from "../../assets/Images/skillsimage (11).svg"
// import image13 from "../../assets/Images/skillsimage (12).svg"
// import image14 from "../../assets/Images/skillsimage (13).svg"
// import image15 from "../../assets/Images/skillsimage (14).svg"

// const row1 = [image1, image2, image3, image4, image5]
// const row2 = [image6, image7, image8, image9, image10]
// const row3 = [image11, image12, image13, image14, image15]

// function InfiniteRow({ images, reverse = false, speed = "30s" }) {
//   // Images ko 4 baar repeat karo smooth loop ke liye
//   const repeated = [...images, ...images, ...images, ...images]

//   return (
//     <div className="overflow-hidden w-full">
//       <div
//         className="flex gap-[5px]"
//         style={{
//           width: "max-content",
//           animation: `${reverse ? "scrollRTL" : "scrollLTR"} ${speed} linear infinite`,
//         }}
//       >
//         {repeated.map((img, i) => (
//           <div key={i} className="main-class flex-shrink-0">
//             <img src={img} alt="skill" className="skill_slider" />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function Skills() {
//   return (
//     <>
//       {/* Global CSS */}
//       <style>{`
//         @keyframes scrollLTR {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scrollRTL {
//           0%   { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//       `}</style>

//       <div className='relative bg-[#000000] rounded-[8px] inline-block xl:w-[40%] firsts_slider group'>
//         <img src={Blur} alt='blur effect' className='absolute right-0 -z-0 opacity-85 transition-all duration-400 group-hover:opacity-100' />
//         <div className='border border-[#292929] bg-[#000000] rounded-[8px] pt-[24px] h-[100%] lg:pt-[53px] pb-[33px] lg:pb-[73px]'>
//           <div className='text-center'>
//             <h1 className='text-[#FFFFFF] text-[18px] sm:text-[24px] leading-[29px] sm:leading-[36px] font-bold'>Skills / Tech Stack</h1>
//             <p className='text-[#BDBDBD] text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px]'>Tools and Technologies I Work With</p>
//           </div>

//           <div className="space-y-[24px] lg:space-y-[45px] pt-[12px] lg:pt-[33px]">
//             <InfiniteRow images={row1} reverse={false} speed="30s" />
//             <InfiniteRow images={row2} reverse={true}  speed="35s" />
//             <InfiniteRow images={row3} reverse={false} speed="28s" />
//           </div>

//           <div className='absolute bottom-0 left-0 w-[100%] -z-0'>
//             <img src={Border4} alt='border line' className="w-full" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Skills
