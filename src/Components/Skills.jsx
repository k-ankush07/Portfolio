import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import skills1 from "../assets/Images/skill1.png"
import skills2 from "../assets/Images/skill2.png"
import skills3 from "../assets/Images/skill3.png"
import Blur from "../assets/Images/Gradient+Blur.png"
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
function Skills() {
  return (
    <>
    
      
 <div className=' relative bg-[#000000] inline-block xl:w-[40%] '>
        <img src={Blur} alt='blur effect' className='  absolute right-0 -z-0 ' />
        <div className='border border-[#292929] bg-[#000000] rounded-[8px] pt-[53px]  pb-[85px]'>
          <div className='text-center py-4'>
            <h1 className='text-[#FFFFFF] text-[24px] font-bold'>Skills / Tech Stack</h1>
            <p className='text-[#BDBDBD]   text-[12px] xl:text-[16px] '>Tools and Technologies I Work With</p>
          </div>
          <div className='flex flex-col space-y-[45px] mt-6'>
            <div className='slider'>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView="auto"
                loop={true}
                freeMode={true}
                loopAdditionalSlides={10}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={5000}
              >
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='slider'>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView="auto"
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                dir="rtl"
                speed={5000}
              >
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='slider'>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView="auto"
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={5000}
              >
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Docker} alt="Docker" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Next} alt="Next.js" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pnpm} alt="pnpm" />
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
