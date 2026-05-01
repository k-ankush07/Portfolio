import ReactSlick from "react-slick";
const Slider = ReactSlick.default ?? ReactSlick;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blur from "../../assets/Images/Gradient+Blur.svg";
import Border4 from "../../assets/Images/linesbg.svg";

import image1 from "../../assets/Images/TypeScript.svg";
import image2 from "../../assets/Images/skillsimage (1).svg";
import image3 from "../../assets/Images/skillsimage (2).svg";
import image4 from "../../assets/Images/skillsimage (3).svg";
import image5 from "../../assets/Images/skillsimage (4).svg";
import image6 from "../../assets/Images/skillsimage (5).svg";
import image7 from "../../assets/Images/skillsimage (6).svg";
import image8 from "../../assets/Images/skillsimage (7).svg";
import image9 from "../../assets/Images/skillsimage (8).svg";
import image10 from "../../assets/Images/skillsimage (9).svg";
import image11 from "../../assets/Images/skillsimage (10).svg";
import image12 from "../../assets/Images/skillsimage (11).svg";
import image13 from "../../assets/Images/skillsimage (12).svg";
import image14 from "../../assets/Images/skillsimage (13).svg";
import image15 from "../../assets/Images/skillsimage (14).svg";

const row1 = [image1, image2, image3, image4, image5];
const row2 = [image6, image7, image8, image9, image10];
const row3 = [image11, image12, image13, image14, image15];

const settingsLTR = {
  infinite: true,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  swipe: false,
  draggable: false,
  variableWidth: true,
};

const settingsRTL = {
  ...settingsLTR,
  rtl: true,
};

const renderSlides = (images) =>
  [...images, ...images, ...images].map((img, i) => (
    <div key={i} style={{ width: "auto" }}>
      <div className="skill-pill">
        <img src={img} alt="skill" className="skill_slider" />
      </div>
    </div>
  ));

function SkillsSlick() {
  return (
    <div className="relative bg-black xl:w-[40%] firsts_slider group">
      <img
        src={Blur}
        alt="blur"
        className="absolute right-0 opacity-80 transition-all duration-400 group-hover:opacity-100"
      />

      <div className="border border-[#292929] rounded-[8px] pt-[15px] lg:pt-[55px] pb-[37px] lg:pb-[85px] h-[100%]">
        <div className="text-center mb-6">
          <h1 className="text-white text-[24px] font-bold">Skills / Tech Stack</h1>
          <p className="text-[#BDBDBD]  text-[12px] lg:text-[16px]">Tools and Technologies I Work With</p>
        </div>

        <div className="space-y-4 mt-8">

          <div className="slider">
            <Slider {...settingsLTR}>{renderSlides(row1)}</Slider>
          </div>

          <div className="slider">
            <Slider {...settingsRTL}>{renderSlides(row2)}</Slider>
          </div>

          <div className="slider">
            <Slider {...settingsLTR}>{renderSlides(row3)}</Slider>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img src={Border4} alt="border" className="w-full" />
      </div>
    </div>
  );
}

export default SkillsSlick;