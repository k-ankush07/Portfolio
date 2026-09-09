
import React from "react";

function Outcomes({ project }) {
  if (
    !project?.outcomeheading &&
    (!project?.outcomepoints || project.outcomepoints.length === 0)
  ) {
    return null;
  }

  const isVideo = project?.outcomeimage?.toLowerCase().endsWith(".mp4");
  const isReversed = project.reverseOutcome;
  const contentAlignClass = project.outcomeContentEnd
    ? "lg:items-end"
    : "lg:items-center";
  const showMobileImageBorder = project.outcomeImageBorderMobile;

  return (
    <div className=" pt-[30px] pb-[10px] lg:pb-0 lg:pt-[40px]">
      <div
        style={{
          "--outcome-px": `${project.outcomepx ?? 0}px`,
        }}
        className={`flex flex-col-reverse px-0 lg:px-[var(--outcome-px)] lg:border-t lg:border-b border-white/10 ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Image/Video section */}
        <div
          style={{
            "--image-width": `${project.imgwidth ?? 50}%`,
            "--image-pb-mobile": `${project.outcomeimagepbmobile ?? 0}px`,
          }}
          className={`w-full pb-[30px] lg:w-[var(--image-width)] flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] lg:border-b-0 border-white/10 border-b   ${isReversed ? "lg:pl-[40px]" : "lg:pr-[40px]"}`}
        >
          {isVideo ? (
            <video
              src={project.outcomeimage}
              className="w-full rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimage}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          style={{
            "--content-width": `${project.contentwidth ?? 50}%`,
          }}
          className={`w-full lg:w-[var(--content-width)] flex flex-col justify-center ${contentAlignClass} border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0 ${
            isReversed ? "lg:border-r" : "lg:border-l"
          }`}
        >
          <div
            style={{
              "--content-maxw": project.outcomecontentmaxw
                ? `${project.outcomecontentmaxw}px`
                : "none",
            }}
            className={`w-full max-w-[var(--content-maxw)] ${
              isReversed ? "lg:pr-[40px]" : "lg:pl-[40px]"
            }`}
          >
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheading}
            </h2>

            {project.outcomepoints?.length > 0 && (
              <ul className="w-full pt-[20px] flex flex-col">
                {project.outcomepoints.map((point, i) => (
                  <li
                    key={i}
                    className="w-full flex items-start gap-[4px] text-[14px] leading-[24px] text-[#BDBDBD] font-bold"
                  >
                    <span className="shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outcomes;