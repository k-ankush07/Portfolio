import React from "react";

function OurContribution({ project = { project } }) {
  const alignClass =
    project.constributionitemcenter === "item-center" ? "lg:items-center" : "";

  return (
    <>
      <div className=" pt-[30px] lg:pt-[40px] ">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* contribution section */}
          <div
            style={{
              "--contribution-width": `${project.contributionwidth ?? 50}%`,
            }}
            className={`w-full lg:w-[var(--contribution-width)] flex flex-col lg:justify-center ${alignClass} pt-[20px] lg:pt-0 lg:pr-[40px]`}
          >
            <div>
              <h2 className=" text-[24px]  lg:text-[40px] lg:leading-[48px] font-bold text-[#FFFFFF]">
                {project.our}
              </h2>
              {project.points?.length > 0 && (
                <ul className=" pt-[20px] lg:pt-[16px] flex flex-col gap-[5px] lg:gap-[10px]">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-[14px] leading-[24px]  text-[#BDBDBD]">
                      <span className="text-[#BDBDBD]">•</span> {point}
                    </li>
                  ))}
                </ul>
              )}

              {project.btnname && (
                
                 <a href={project.btnLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-[20px] pt-[12px] pb-[14px] pr-[25px] pl-[24px] lg:pt-[12px] lg:pb-[12px] pl-[24px] lg:pr-[25px]   bg-[#FCFCFC] border border-[#FCFCFC] rounded-[500px] text-[16px] leading-[24px] text-[#000000]  cursor-pointer"
                >
                  {project.btnname}
                </a>
              )}
            </div>
          </div>

          {/* image section */}
          <div
            style={{
              "--image-width": `${project.contributionimagewidth ?? 55}%`,
              "--image-pr": `${project.contributionimagepr ?? 0}px`,
            }}
            className="w-full lg:w-[var(--image-width)] pr-0 lg:pr-[var(--image-pr)]"
          >
            <div className="border-b pb-[20px] lg:pb-0 lg:border-b-0 lg:border-l border-[#FFFFFF]/10 lg:pl-[40px]  lg:pt-[40px] lg:pb-[40px] ">
              <img src={project.contrubutionimage} alt="contribution image " className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurContribution;