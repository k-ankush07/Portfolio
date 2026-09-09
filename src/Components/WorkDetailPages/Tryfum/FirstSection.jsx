
import React from "react";

function FirstSection({ project }) {
    if (!project?.heading && !project?.desc && !project?.image) {
    return null;
  }
  return (
    <div className="lg:pt-[40px]">
      <div
        className={`flex flex-col lg:flex-row  lg:border-t lg:border-b border-white/10`}
      >
        {/* Image section */}
        <div
          style={{
            "--image-width": `${project.imagewidth ?? 50}%`,
          }}
          className={`w-full lg:w-[var(--image-width)] pt-[30px] pb-[20px] lg:pt-[40px] lg:pb-[40px] ${
            project.reverseFirstSection ? "lg:pl-[40px]" : "lg:pr-[40px]"
          }`}
        >
          <img src={project.image} alt="image" className="w-full h-auto" />
        </div>

        {/* Content section */}
        <div
          style={{
            "--content-width": `${project.contentwidth ?? 50}%`,
            "--content-pr": `${project.contentpr ?? 0}px`,
          }}
          className={`w-full lg:w-[var(--content-width)] flex flex-col justify-center pr-0 lg:pr-[var(--content-pr)] border-t lg:border-t-0 border-white/10 ${
            project.reverseFirstSection ? "lg:border-r" : "lg:border-l"
          }`}
        >
          <div
            className={`w-full pt-[20px] lg:pt-0 ${
              project.reverseFirstSection ? "lg:pr-[40px]" : "lg:pl-[40px]"
            }`}
          >
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.heading}
            </h2>

            <p className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]">
              {project.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;