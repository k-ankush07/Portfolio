import React from "react";

function ProjectTitle({ logo, title, highlight }) {
  return (
    <div className="flex items-center pt-[9px] gap-2 sm:gap-3 text-white flex-wrap">
      <img
        src={logo}
        alt="project logo"
        className="h-[32px] w-[28px] sm:h-[42px] sm:w-[37px] flex-shrink-0"
      />

      <h1 className="text-[26px] sm:text-[35px] lg:text-[40px] font-bold leading-[48px] text-left lg:text-left">
        {title}

        <span className="bg-gradient-to-r from-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent inline-block">
          {" "}
          {highlight}
        </span>
      </h1>
    </div>
  );
}

export default ProjectTitle;