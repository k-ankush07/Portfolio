import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import skills1 from "../assets/Images/skill1.png"
import skills2 from "../assets/Images/skill2.png"
import skills3 from "../assets/Images/skill3.png"
import Blur from "../assets/Images/Gradient+Blur.svg"
import Border from "../assets/Images/Border.png"
import Border1 from "../assets/Images/Border1.png"
import Bun from "../assets/Images/Bun.png"
import Docker from "../assets/Images/Docker.png"
import Next from "../assets/Images/Next.js.png"
import pnpm from "../assets/Images/pnpm.png"
import PostgreSQL from "../assets/Images/PostgreSQL.png"
import Redis from "../assets/Images/Redis.png"
import Vercel from "../assets/Images/Vercel.png"
// import Border4 from "../assets/Images/skills4.png"
import Border4 from "../assets/Images/gp.png"

import image1 from "../assets/Images/TypeScript.svg"
import image2 from "../assets/Images/skillsimage (1).svg"
import image3 from "../assets/Images/skillsimage (2).svg"
import image4 from "../assets/Images/skillsimage (3).svg"
import image5 from "../assets/Images/skillsimage (4).svg"
import image6 from "../assets/Images/skillsimage (5).svg"
import image7 from "../assets/Images/skillsimage (6).svg"
import image8 from "../assets/Images/skillsimage (7).svg"
import image9 from "../assets/Images/skillsimage (8).svg"
import image10 from "../assets/Images/skillsimage (9).svg"
import image11 from "../assets/Images/skillsimage (10).svg"
import image12 from "../assets/Images/skillsimage (11).svg"
import image13 from "../assets/Images/skillsimage (12).svg"
import image14 from "../assets/Images/skillsimage (13).svg"
import image15 from "../assets/Images/skillsimage (14).svg"

function Skills() {

  return (
    <>


      <div className=' relative bg-[#000000] inline-block xl:w-[40%] firsts_slider'>
        <img src={Blur} alt='blur effect' className='  absolute right-0 -z-0 ' />
        <div className='border border-[#292929] bg-[#000000] rounded-[8px] pt-[15px] lg:pt-[53px] pb-[37px] lg:pb-[85px]'>
          <div className='text-center py-4'>
            <h1 className='text-[#FFFFFF] text-[24px] font-bold'>Skills / Tech Stack</h1>
            <p className='text-[#BDBDBD]   text-[12px] xl:text-[16px] '>Tools and Technologies I Work With</p>
          </div>
          <div className='flex flex-col  space-y-[27px] lg:space-y-[45px] mt-6'>
            <div className='slider'>
              <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={5}
                slidesPerView="auto"
                loop={true}
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
                  setTimeout(() => {
                    swiper.autoplay.start();
                  }, 100);
                }}
              >
                <SwiperSlide>
                  <img src={image1} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image2} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image3} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image4} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image5} alt="Next.js" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image1} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image2} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image3} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image4} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image5} alt="Next.js" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image1} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image2} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image3} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image4} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image5} alt="Next.js" />
                </SwiperSlide>


              </Swiper>
            </div>
            <div className='slider'>
              <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={5}
                slidesPerView="auto"
                loop={true}
                freeMode={{
                  enabled: true,
                  momentum: false,
                }}
                loopAdditionalSlides={10}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                dir="rtl"
                speed={5000}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.autoplay.start();
                  }, 100);
                }}
              >
                <SwiperSlide>
                  <img src={image6} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image7} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image8} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image9} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image10} alt="Next.js" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image6} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image7} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image8} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image9} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image10} alt="Next.js" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image6} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image7} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image8} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image9} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image10} alt="Next.js" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='slider'>
              <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={5}
                slidesPerView="auto"
                loop={true}
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
                  setTimeout(() => {
                    swiper.autoplay.start();
                  }, 100);
                }}
              >
                <SwiperSlide>
                  <img src={image11} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image12} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image13} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image14} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image15} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image11} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image12} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image13} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image14} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image15} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image11} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image12} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image13} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image14} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image15} alt="Next.js" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image11} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image12} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image13} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image14} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={image15} alt="Next.js" />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <img src={skills1} alt='skills logo' />
          <img src={skills2} alt='skills logo' />
          <img src={skills3} alt='skills logo' /> */}

          </div>
          <div className='absolute bottom-0 left-0 w-[100%] -z-0'>
            <img src={Border4} alt='border line' className="w-full" />

          </div>
        </div>

      </div>

    </>
  )
}

export default Skills
