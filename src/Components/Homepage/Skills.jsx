import Blur from "../../assets/Images/Gradient+Blur.svg"
import Border4 from "../../assets/Images/linesbg.svg"

// html row images
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

// angular row images (center row - reverse)
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

// figma row images
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

const row1 = [html1, html2, html3, html4, html5, html6, html7, html8, html9, html10, html11, html12]
const row2 = [angular1, angular2, angular3, angular4, angular5, angular6, angular7, angular8, angular9, angular10]
const row3 = [figma1, figma2, figma3, figma4, figma5, figma6, figma7, figma8, figma9, figma10]

function InfiniteRow({ images, reverse = false, speed = "30s" }) {
  // images ko repeat karo taaki loop smooth dikhe (seam na dikhe)
  const repeated = [...images, ...images, ...images]

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-[8px] lg:gap-[9px]"
        style={{
          width: "max-content",
          animation: `${reverse ? "scrollRTL" : "scrollLTR"} ${speed} linear infinite`,
        }}
      >
        {repeated.map((img, i) => (
          <div key={i} className="flex-shrink-0">
            <img src={img} alt="skill" className="h-[20.895435333251953px] sm:h-[23.979999542236328px] w-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <>
      {/* Global CSS for the sliding animation */}
      <style>{`
        @keyframes scrollLTR {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRTL {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className='relative bg-[#000000] rounded-[8px] inline-block xl:w-[40%] firsts_slider group'>
        <img
          src={Blur}
          alt='blur effect'
          className='absolute right-0 -z-0 opacity-85 transition-all duration-400 group-hover:opacity-100 pointer-events-non'
        />
        <div className='border border-[#292929] bg-[#000000] rounded-[8px] pt-[24px] h-[100%] lg:pt-[53px] pb-[33px] lg:pb-[73px]'>
          <div className='text-center'>
            <h1 className='text-[#FFFFFF] text-[18px] sm:text-[24px] leading-[29px] sm:leading-[36px] font-bold'>Skills / Tech Stack</h1>
            <p className='text-[#BDBDBD] text-[12px] sm:text-[16px] pt-[4px] leading-[20px] sm:leading-[24px]'>Tools and Technologies I Work With</p>
          </div>

          <div className="relative">
            <div className="space-y-[24px] lg:space-y-[45px] pt-[14px] lg:pt-[33px]">
              {/* Row 1 - left to right */}
              <InfiniteRow images={row1} reverse={false} speed="30s" />

              {/* Row 2 (center) - reverse direction */}
              <InfiniteRow images={row2} reverse={true} speed="30s" />

              {/* Row 3 - left to right */}
              <InfiniteRow images={row3} reverse={false} speed="30s" />
            </div>
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