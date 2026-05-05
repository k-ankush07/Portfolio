import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import Blur from "../../assets/Images/Gradient+Blur.svg"
import Border4 from "../../assets/Images/linesbg.svg"
import image1 from "../../assets/Images/TypeScript.svg"
import image2 from "../../assets/Images/skillsimage (1).svg"
import image3 from "../../assets/Images/skillsimage (2).svg"
import image4 from "../../assets/Images/skillsimage (3).svg"
import image5 from "../../assets/Images/skillsimage (4).svg"
import image6 from "../../assets/Images/skillsimage (5).svg"
import image7 from "../../assets/Images/skillsimage (6).svg"
import image8 from "../../assets/Images/skillsimage (7).svg"
import image9 from "../../assets/Images/skillsimage (8).svg"
import image10 from "../../assets/Images/skillsimage (9).svg"
import image11 from "../../assets/Images/skillsimage (10).svg"
import image12 from "../../assets/Images/skillsimage (11).svg"
import image13 from "../../assets/Images/skillsimage (12).svg"
import image14 from "../../assets/Images/skillsimage (13).svg"
import image15 from "../../assets/Images/skillsimage (14).svg"
import magnifying from "../../assets/Images/magnifying.svg"

function Skills() {

  return (
    <>


      <div className=' relative bg-[#000000] rounded-[8px] inline-block xl:w-[40%] firsts_slider group '>
        <img src={Blur} alt='blur effect' className='  absolute right-0 -z-0 opacity-85 transition-all duration-400 group-hover:opacity-100 ' />
        <div className='border border-[#292929] bg-[#000000] rounded-[8px] pt-[15px] lg:pt-[45px] pb-[37px] lg:pb-[85px]'>
          <div className='text-center py-4'>
            <h1 className='text-[#FFFFFF] text-[18px] lg:text-[24px] font-bold'>Skills / Tech Stack</h1>
            <p className='text-[#BDBDBD]   text-[12px] xl:text-[16px] '>Tools and Technologies I Work With</p>
          </div>
          <div className="relative">
            {/* <div className="  absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 sm:mt-[18px]">
              <img src={magnifying} alt="magnifying image" className="h-12  sm:h-[75px]" />
            </div> */}

            {/* <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img src={magnifying} className="h-[75px]" />
            </div> */}

            <div className="space-y-[27px] lg:space-y-[40px] pt-[20px]">


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
                      <img src={image1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image2} alt="Next.js" className=" skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image3} alt="pnpm" className=" skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image4} alt="Docker" className=" skill_slider" />
                    </div>


                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image5} alt="Next.js" className=" skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image1} alt="Docker" className=" skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image2} alt="Next.js" className=" skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image3} alt="pnpm" className=" skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image1} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image2} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image3} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image4} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image5} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>


                </Swiper>
              </div>
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
                      <img src={image6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image6} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image7} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image8} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image9} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image10} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
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
                      <img src={image11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image12} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image13} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image14} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image15} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image12} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image13} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image14} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image15} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image12} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image13} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image14} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image15} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image11} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image12} alt="Next.js" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image13} alt="pnpm" className="skill_slider" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image14} alt="Docker" className="skill_slider" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="main-class">
                      <img src={image15} alt="Next.js" className="skill_slider" />
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






// import { useRef, useCallback, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, FreeMode } from "swiper/modules";

// // Images
// import Blur from "../../assets/Images/Gradient+Blur.svg";
// import Border4 from "../../assets/Images/linesbg.svg";

// import image1 from "../../assets/Images/TypeScript.svg";
// import image2 from "../../assets/Images/skillsimage (1).svg";
// import image3 from "../../assets/Images/skillsimage (2).svg";
// import image4 from "../../assets/Images/skillsimage (3).svg";
// import image5 from "../../assets/Images/skillsimage (4).svg";

// import image6 from "../../assets/Images/skillsimage (5).svg";
// import image7 from "../../assets/Images/skillsimage (6).svg";
// import image8 from "../../assets/Images/skillsimage (7).svg";
// import image9 from "../../assets/Images/skillsimage (8).svg";
// import image10 from "../../assets/Images/skillsimage (9).svg";

// import image11 from "../../assets/Images/skillsimage (10).svg";
// import image12 from "../../assets/Images/skillsimage (11).svg";
// import image13 from "../../assets/Images/skillsimage (12).svg";
// import image14 from "../../assets/Images/skillsimage (13).svg";
// import image15 from "../../assets/Images/skillsimage (14).svg";

// const LENS_D = 100;
// const LENS_R = LENS_D / 2;
// const ZOOM = 2.2;

// function Skills() {
//   const slidersAreaRef = useRef(null);
//   const lensRef = useRef(null);
//   const canvasRef = useRef(null);
//   const rafRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });

//   // 🔍 Draw Lens
//   const drawLens = useCallback(() => {
//     rafRef.current = null;

//     const area = slidersAreaRef.current;
//     const lens = lensRef.current;
//     const canvas = canvasRef.current;
//     if (!area || !lens || !canvas) return;

//     const { x: mx, y: my } = mouseRef.current;

//     lens.style.left = `${mx - LENS_R}px`;
//     lens.style.top = `${my - LENS_R}px`;

//     const ctx = canvas.getContext("2d");

//     const srcX = mx - LENS_R / ZOOM;
//     const srcY = my - LENS_R / ZOOM;
//     const srcW = LENS_D / ZOOM;
//     const srcH = LENS_D / ZOOM;

//     ctx.clearRect(0, 0, LENS_D, LENS_D);

//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(LENS_R, LENS_R, LENS_R, 0, Math.PI * 2);
//     ctx.clip();

//     ctx.fillStyle = "#111";
//     ctx.fillRect(0, 0, LENS_D, LENS_D);

//     const areaRect = area.getBoundingClientRect();

//     area.querySelectorAll("img.skill_slider").forEach((img) => {
//       const br = img.getBoundingClientRect();

//       const bx = br.left - areaRect.left;
//       const by = br.top - areaRect.top;

//       // Skip if not inside lens
//       if (bx + br.width < srcX || bx > srcX + srcW) return;
//       if (by + br.height < srcY || by > srcY + srcH) return;

//       try {
//         ctx.drawImage(
//           img,
//           (bx - srcX) * ZOOM,
//           (by - srcY) * ZOOM,
//           br.width * ZOOM,
//           br.height * ZOOM
//         );
//       } catch {}
//     });

//     ctx.restore();

//     rafRef.current = requestAnimationFrame(drawLens);
//   }, []);

//   // 🎯 Initialize
//   useEffect(() => {
//     const area = slidersAreaRef.current;
//     if (!area) return;

//     const t = setTimeout(() => {
//       mouseRef.current = {
//         x: area.offsetWidth / 2,
//         y: area.offsetHeight / 2,
//       };

//       if (lensRef.current) lensRef.current.style.display = "block";

//       rafRef.current = requestAnimationFrame(drawLens);
//     }, 150);

//     return () => {
//       clearTimeout(t);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [drawLens]);

//   // 🖱 Mouse Move
//   const handleMouseMove = (e) => {
//     const rect = slidersAreaRef.current.getBoundingClientRect();

//     mouseRef.current = {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     };
//   };

//   // 🎯 Smooth return to center
//   const handleMouseLeave = () => {
//     const area = slidersAreaRef.current;

//     const tx = area.offsetWidth / 2;
//     const ty = area.offsetHeight / 2;

//     const sx = mouseRef.current.x;
//     const sy = mouseRef.current.y;

//     const t0 = performance.now();

//     const step = (now) => {
//       const p = Math.min((now - t0) / 450, 1);
//       const e = 1 - Math.pow(1 - p, 3);

//       mouseRef.current = {
//         x: sx + (tx - sx) * e,
//         y: sy + (ty - sy) * e,
//       };

//       if (p < 1) requestAnimationFrame(step);
//     };

//     requestAnimationFrame(step);
//   };

//   // 🔄 Swiper Config
//   const swiperCfg = (dir = "ltr") => ({
//     modules: [Autoplay, FreeMode],
//     spaceBetween: 5,
//     slidesPerView: "auto",
//     loop: true,
//     allowTouchMove: false,
//     freeMode: { enabled: true, momentum: false },
//     loopAdditionalSlides: 10,
//     autoplay: { delay: 1, disableOnInteraction: false },
//     speed: 5000,
//     dir,
//   });

//   // 🧩 Slides Generator
//   const slides = (imgs) =>
//     [...imgs, ...imgs, ...imgs].map((src, i) => (
//       <SwiperSlide key={i}>
//         <div className="main-class">
//           <img src={src} className="skill_slider" alt="skill" />
//         </div>
//       </SwiperSlide>
//     ));

//   return (
//     <div className="relative bg-black xl:w-[40%] group">
      
//       {/* Blur */}
//       <img src={Blur} className="absolute right-0 opacity-80" />

//       <div className="border border-[#292929] rounded-[8px] pt-[40px] pb-[80px]">

//         {/* Title */}
//         <div className="text-center">
//           <h1 className="text-white text-[24px] font-bold">
//             Skills / Tech Stack
//           </h1>
//           <p className="text-[#BDBDBD] text-[14px]">
//             Tools and Technologies I Work With
//           </p>
//         </div>

//         {/* Slider Area */}
//         <div
//           ref={slidersAreaRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="relative mt-6"
//         >
          
//           <div
//             ref={lensRef}
//             style={{
//               position: "absolute",
//               display: "none",
//               pointerEvents: "none",
//               zIndex: 50,
//               width: LENS_D,
//               height: LENS_D,
//             }}
//           >
//             <div
//               style={{
//                 width: LENS_D,
//                 height: LENS_D,
//                 borderRadius: "50%",
//                 overflow: "hidden",
//                 border: "3px solid #aaa",
//               }}
//             >
//               <canvas
//                 ref={canvasRef}
//                 width={LENS_D}
//                 height={LENS_D}
//               />
//             </div>
//           </div>

//           {/* Sliders */}
//           <div className="space-y-8 mt-6">
//             <Swiper {...swiperCfg("ltr")}>
//               {slides([image1, image2, image3, image4, image5,image1, image2, image3, image4, image5,image1, image2, image3, image4, image5,image1, image2, image3, image4, image5,image1, image2, image3, image4, image5])}
//             </Swiper>

//             <Swiper {...swiperCfg("rtl")}>
//               {slides([image6, image7, image8, image9, image10,image6, image7, image8, image9, image10,image6, image7, image8, image9, image10,image6, image7, image8, image9, image10,image6, image7, image8, image9, image10])}
//             </Swiper>

//             <Swiper {...swiperCfg("ltr")}>
//               {slides([image11, image12, image13, image14, image15,image11, image12, image13, image14, image15,image11, image12, image13, image14, image15,image11, image12, image13, image14, image15,image11, image12, image13, image14, image15])}
//             </Swiper>
//           </div>
//         </div>

//         {/* Bottom Border */}
//         <img src={Border4} className="absolute bottom-0 w-full" />
//       </div>
//     </div>
//   );
// }

// export default Skills;







































// import { useRef, useEffect, useCallback } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, FreeMode } from "swiper/modules";

// // Images
// import Blur from "../../assets/Images/Gradient+Blur.svg";
// import Border4 from "../../assets/Images/linesbg.svg";
// import magnifying from "../../assets/Images/magnifying.svg";

// import image1 from "../../assets/Images/TypeScript.svg";
// import image2 from "../../assets/Images/skillsimage (1).svg";
// import image3 from "../../assets/Images/skillsimage (2).svg";
// import image4 from "../../assets/Images/skillsimage (3).svg";
// import image5 from "../../assets/Images/skillsimage (4).svg";

// import image6 from "../../assets/Images/skillsimage (5).svg";
// import image7 from "../../assets/Images/skillsimage (6).svg";
// import image8 from "../../assets/Images/skillsimage (7).svg";
// import image9 from "../../assets/Images/skillsimage (8).svg";
// import image10 from "../../assets/Images/skillsimage (9).svg";

// import image11 from "../../assets/Images/skillsimage (10).svg";
// import image12 from "../../assets/Images/skillsimage (11).svg";
// import image13 from "../../assets/Images/skillsimage (12).svg";
// import image14 from "../../assets/Images/skillsimage (13).svg";
// import image15 from "../../assets/Images/skillsimage (14).svg";

// //  Lens config
// const LENS_SIZE = 50;
// const ZOOM = 1.5;

// function Skills() {
//   const areaRef = useRef(null);
//   const lensRef = useRef(null);
//   const canvasRef = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const raf = useRef(null);

//   //  DRAW ZOOM
//   const draw = useCallback(() => {
//     const area = areaRef.current;
//     const lens = lensRef.current;
//     const canvas = canvasRef.current;
//     if (!area || !lens || !canvas) return;
//     const ctx = canvas.getContext("2d");
//     const { x, y } = mouse.current; 
//     // Move lens
//     lens.style.transform = `translate(${x - LENS_SIZE / 2}px, ${
//       y - LENS_SIZE / 2
//     }px)`;

//     const srcW = LENS_SIZE / ZOOM;
//     const srcH = LENS_SIZE / ZOOM;

//     const srcX = x - srcW / 2;
//     const srcY = y - srcH / 2;

//     ctx.clearRect(0, 0, LENS_SIZE, LENS_SIZE);

//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(LENS_SIZE / 2, LENS_SIZE / 2, LENS_SIZE / 2, 0, Math.PI * 2);
//     ctx.clip();

//     const areaRect = area.getBoundingClientRect();

//     area.querySelectorAll("img.skill_slider").forEach((img) => {
//       const rect = img.getBoundingClientRect();

//       const bx = rect.left - areaRect.left;
//       const by = rect.top - areaRect.top;

//       // skip non-visible
//       if (bx + rect.width < srcX || bx > srcX + srcW) return;
//       if (by + rect.height < srcY || by > srcY + srcH) return;

//       try {
//         ctx.drawImage(
//           img,
//           (bx - srcX) * ZOOM,
//           (by - srcY) * ZOOM,
//           rect.width * ZOOM,
//           rect.height * ZOOM
//         );
//       } catch {}
//     });

//     ctx.restore();

//     raf.current = requestAnimationFrame(draw);
//   }, []);

//   //  INIT
//   useEffect(() => {
//     const area = areaRef.current;
//     if (!area) return;

//     mouse.current = {
//       x: area.offsetWidth / 2,
//       y: area.offsetHeight / 2,
//     };

//     lensRef.current.style.display = "block";

//     raf.current = requestAnimationFrame(draw);

//     return () => cancelAnimationFrame(raf.current);
//   }, [draw]);

//   //  MOUSE MOVE
//   const handleMove = (e) => {
//     const rect = areaRef.current.getBoundingClientRect();

//     mouse.current = {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     };
//   };

//   //  SWIPER CONFIG
//   const swiperConfig = (dir = "ltr") => ({
//     modules: [Autoplay, FreeMode],
//     slidesPerView: "auto",
//     // spaceBetween: 10,
//     spaceBetween:5,
//     loop: true,
//     allowTouchMove: false,
//     freeMode: true,
//        loopAdditionalSlide:10,
//     speed: 5000,
//     dir,
//     autoplay: {
//       delay: 1,
//       disableOnInteraction: false,
//     },
//   });

//   //  SLIDES
//   const createSlides = (imgs) =>
//     [...imgs, ...imgs, ...imgs].map((img, i) => (
//       <SwiperSlide key={i}>
//         <div className="px-2 py-1   ">
//           <img src={img} className="skill_slider h-10" />
//         </div>
//       </SwiperSlide>
//     ));

//   return (
//     <div className="relative bg-black xl:w-[40%]">

//       {/* Blur */}
//       <img src={Blur} className="absolute right-0 opacity-80" />

//       <div className="border border-[#292929] rounded-lg pt-10 pb-16 h-[100%]">

//         {/* Title */}
//         <div className="text-center">
//           <h1 className="text-white text-xl font-bold">
//             Skills / Tech Stack
//           </h1>
//           <p className="text-gray-400 text-sm">
//             Tools and Technologies I Work With
//           </p>
//         </div>

//         {/* SLIDER AREA */}
//         <div
//           ref={areaRef}      
//           onMouseMove={handleMove}
//           className="relative mt-6"
//         >
//           {/*  MAGNIFIER */}
//           <div
//             ref={lensRef}
//             className="absolute bg-white rounded-full  pointer-events-none z-50"
//             style={{ width: LENS_SIZE, height: LENS_SIZE, display: "none" }}
//           >
//             {/* zoom content */}
//             <div className="absolute w-full h-full rounded-full overflow-hidden">
//               <canvas
//                 ref={canvasRef}
//                 width={LENS_SIZE}
//                 height={LENS_SIZE}
//               />
//             </div>

            
//           </div>

//           {/* Sliders */}
//           <div className="space-y-6 mt-6">
//             <Swiper {...swiperConfig("ltr")}>
//               {createSlides([image1, image2, image3, image4, image5,image1, image2, image3, image4, image5,image1, image2, image3, image4, image5])}
//             </Swiper>

//             <Swiper {...swiperConfig("rtl")}>
//               {createSlides([image6, image7, image8, image9, image10])}
//             </Swiper>

//             <Swiper {...swiperConfig("ltr")}>
//               {createSlides([image11, image12, image13, image14, image15])}
//             </Swiper>
//           </div>
//         </div>

//         {/* Bottom border */}
//         <img src={Border4} className="absolute bottom-0 w-full" />
//       </div>
//     </div>
//   );
// }

// export default Skills;