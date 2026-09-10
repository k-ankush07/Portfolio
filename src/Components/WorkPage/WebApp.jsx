
import React from "react";
import shopify from "../../assets/Images/Vector (5).svg";
import smallicon from "../../assets/Images/smallicon.svg";
import ViewDetail from "../Homepage/ViewDetail";
import CardSection from "../Homepage/CardSection";
import new1 from "../../assets/Images/new1 (1).svg";
import new2 from "../../assets/Images/new1 (2).svg";
import new3 from "../../assets/Images/new1 (3).svg";
import new4 from "../../assets/Images/new1 (4).svg";
import new5 from "../../assets/Images/new1 (5).svg";
import new6 from "../../assets/Images/new1 (6).svg";
import ProjectTitle from "./ProjectTitle";
import { Link } from "react-router-dom";

const CARDSECTION_DOUBLE_IDS = [2, 4, 6];
const CARDSECTION_SINGLE_IDS = [];

function WebApp({
  single,
  leftImg,
  centerImg,
  rightImg,
  leftImg2,
  centerImg2,
  rightImg2,
  title,
  highlight,
  title2,
  idA,
  idB,
  tags,
  tags2,
  niche, niche2,
}) {
  const logos = [
    new2,
    new3,
    new1,
    new5,
    new4,
    new6,
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
  ];

  const renderPreview = (id, l, c, r,n) => {
    if (CARDSECTION_DOUBLE_IDS.includes(id)) {
      return (
        <CardSection frontimg={l} backimg={c} frontRotate={8} backRotate={-6} niche={n} />
      );
    }
    if (CARDSECTION_SINGLE_IDS.includes(id)) {
      return <CardSection frontimg={c} niche={n} />;
    }
    return <ViewDetail leftImg={l} centerImg={c} rightImg={r} niche={n} />;
  };

  return (
    <section className="lato-regular">
      <div className="container">
        <div className="lg:flex ">
          <div className=" relative  pt-[40px] lg:pt-0  lg:border-r-[1px]  lg:border-[#FFFFFF]/10 lg:w-[50%]">
            <div className="lg:pr-[57px] ">
              <div className="  flex justify-between"></div>
              <ProjectTitle
                logo={shopify}
                title={title}
                highlight={highlight}
              />
            </div>
            <div className=" h-0 lg:h-[28px] flex  items-center">
              <div className=" hidden lg:block h-[1px] w-full  bg-white/10"></div>
            </div>
            <div className="hidden lg:block absolute -right-4 top-19  ">
              <img src={smallicon} alt="icon" />
            </div>

            <div className=" pt-[16px] lg:pt-0 lg:pr-[57px]  ">
              <Link to={`/work/${title?.toLowerCase()}`}>
                {renderPreview(idA, leftImg, centerImg, rightImg,niche)}
              </Link>

              <div className="pt-[20px] lg:pt-[24px]">
                <div className="flex flex-wrap gap-[6px] sm:gap-[11px]  sm:max-w-[450px] xl:hidden">
                  {logos.slice(0, 8).map((img, i) => (
                    <img key={i} src={img} alt="logo" className="" />
                  ))}
                </div>
                <div className="hidden sm:max-w-[610px] xl:flex flex-wrap gap-[11px]">
                  {logos.slice(0, 13).map((img, i) => (
                    <img key={i} src={img} alt="logo" className="" />
                  ))}
                </div>
                {tags?.length > 0 && (
                  <div className="flex flex-wrap gap-[8px] pt-[12px]">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] lg:text-[12px] leading-[16px] text-[#9DB8FF] bg-[#1B2340] border border-[#3E4A7A]/50 px-[10px] py-[5px] rounded-[6px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {!single && (
            <div className=" relative  px-2 lg:px-0 pt-[40px] lg:pt-[211px]  lg:w-[50%]">
              <div className=" lg:pl-[58px]">
                <ProjectTitle logo={shopify} title={title2} />
              </div>

              <div className=" h-0 lg:h-[28px] flex  items-center">
                <div className="hidden lg:block h-[1px] w-full  bg-white/10"></div>
              </div>
              <div className="hidden lg:block absolute -left-3 top-[300px]  ">
                <img src={smallicon} alt="icon" />
              </div>
              <div className=" pt-[16px]  lg:pt-0 lg:pl-[57px]">
                <Link to={`/work/${title2?.toLowerCase()}`}>
                  {renderPreview(idB, leftImg2, centerImg2, rightImg2,niche2)}
                </Link>

                <div className="pt-[20px] lg:pt-[24px]">
                  <div className="flex flex-wrap gap-[6px] sm:gap-[11px]  sm:max-w-[450px] xl:hidden">
                    {logos.slice(0, 8).map((img, i) => (
                      <img key={i} src={img} alt="logo" className="" />
                    ))}
                  </div>
                  <div className="hidden sm:max-w-[610px] xl:flex flex-wrap gap-[11px]">
                    {logos.slice(0, 13).map((img, i) => (
                      <img key={i} src={img} alt="logo" className="" />
                    ))}
                  </div>
                  {tags2?.length > 0 && (
                    <div className="flex flex-wrap gap-[8px] pt-[12px]">
                      {tags2.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] lg:text-[12px] leading-[16px] text-[#9DB8FF] bg-[#1B2340] border border-[#3E4A7A]/50 px-[10px] py-[5px] rounded-[6px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default WebApp;
