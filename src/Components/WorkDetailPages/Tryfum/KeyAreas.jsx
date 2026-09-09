

import React from "react";

function KeyAreas({ project }) {
  if (
    !project?.keyheading &&
    (!project?.keyPoints || project.keyPoints.length === 0) &&
    !project?.firstdbl &&
    !project?.secondsngl
  ) {
    return null;
  }

  const isReversed = project.reverseKeyAreas;

  return (
    <div className="lg:border-t lg:border-b border-[#FFFFFF]/10 pt-[52px] lg:pt-0">
      <div
        style={{
          "--keyareas-px": `${project.keyareaspx ?? 0}px`,
        }}
        className={`flex flex-col-reverse px-0 lg:px-[var(--keyareas-px)] ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* content section */}
        <div
          className={`lg:w-[40%] flex flex-col justify-center ${
            isReversed
              ? "lg:pl-[40px] lg:border-l border-[#FFFFFF]/10"
              : "lg:pr-[40px]"
          }`}
        >
          <h2 className="max-w-[464px] text-[#FFFFFF] pt-[20px] lg:pt-0 text-[24px] lg:text-[40px] leading-[48px] font-bold">
            {project.keyheading}
          </h2>

          {project.keyPoints?.length > 0 && (
            <div className="flex flex-col gap-[22px] pt-[20px]">
              {project.keyPoints.map((item, i) => (
                <div key={i}>
                  <h4 className="text-[24px] leading-[24px] font-bold text-[#BDBDBD]">
                    {item.heading}
                  </h4>
                  <p className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[4px]">
                    {item.desc}
                  </p>
                  {item.bullets?.length > 0 && (
                    <ul className="flex flex-col gap-[8px] pt-[10px] pl-[8px]">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-[8px] text-[14px] leading-[24px] text-[#BDBDBD]"
                        >
                          <span className="text-white">•</span>
                          <span>
                            <span className="font-semibold text-white">
                              {bullet.label}
                            </span>{" "}
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* image section */}
        <div
          className={`lg:w-[60%] flex flex-col justify-center items-center border-b lg:border-b-0 pb-[42px] lg:pb-0 border-[#FFFFFF]/10 lg:pt-[40px] lg:pb-[40px] ${
            isReversed
              ? "lg:pr-[40px]"
              : "lg:pl-[40px] lg:border-l lg:pr-[40px]"
          }`}
        >
          <div className="w-full lg:px-[89px]">
            {project.firstdbl && (
              <img src={project.firstdbl} alt="first image" className="w-full" />
            )}
            {project.secondsngl &&
              (project.secondsngl.endsWith?.(".mp4") ||
              project.secondsngl.endsWith?.(".webm") ? (
                <video
                  src={project.secondsngl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=" pt-[var(--pt-mobile)] lg:pt-[var(--pt-desktop)] rounded-[16px]"
                  style={{
                    "--pt-mobile": project.paddingtopsecondimagemobile
                      ? `${project.paddingtopsecondimagemobile}px`
                      : "0px",
                    "--pt-desktop": project.paddingtopsecondimage
                      ? `${project.paddingtopsecondimage}px`
                      : "0px",
                  }}
                />
              ) : (
                <img
                  src={project.secondsngl}
                  alt="second image"
                  className=" pt-[var(--pt-mobile)] lg:pt-[var(--pt-desktop)]"
                  style={{
                    "--pt-mobile": project.paddingtopsecondimagemobile
                      ? `${project.paddingtopsecondimagemobile}px`
                      : "0px",
                    "--pt-desktop": project.paddingtopsecondimage
                      ? `${project.paddingtopsecondimage}px`
                      : "0px",
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyAreas;