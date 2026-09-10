import React from 'react'

function OutcomesVittelo({ project }) {
  if (
    !project?.outcomeheadingVittelo &&
    (!project?.outcomepointsVittelo || project.outcomepointsVittelo.length === 0)
  ) {
    return null;
  }

  // video hai ya image, extension check kar ke decide karo
  const isVideo =
    typeof project?.outcomeimageVittelo === "string" &&
    /\.(mp4|webm|mov)$/i.test(project.outcomeimageVittelo);

  return (
    <div className=" pt-[15px]   lg:pt-[80px]">
      <div
        className={` flex flex-col-reverse lg:flex-row   lg:border-t lg:border-b border-white/10 `}
      >
        {/* Image/Video section */}
        <div
          className={`w-full lg:w-[50%] pb-[17px]  lg:pr-[40px] border-r border-white/10   flex justify-center items-center pt-[20px] lg:pt-[41px] lg:pb-[41px] lg:border-b-0 border-white/10 border-b `}
        >
          {isVideo ? (
            <video
              src={project.outcomeimageVittelo}
              className="w-full rounded-[15px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.outcomeimageVittelo}
              alt="Outcome"
              className="w-full"
            />
          )}
        </div>

        {/* Content section */}
        <div
          className={`w-full lg:w-[50%]  lg:px-[40px] flex flex-col justify-center  border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0 `}
        >
          <div className={`w-full `}>
            <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
              {project.outcomeheadingVittelo}
            </h2>

            {/* string paragraph ho to seedha render, array ho to bullet list */}
            {typeof project.outcomepointsVittelo === "string" ? (
              project.outcomepointsVittelo && (
                <p className="pt-[20px] text-[14px] leading-[24px] text-[#BDBDBD]">
                  {project.outcomepointsVittelo}
                </p>
              )
            ) : (
              project.outcomepointsVittelo?.length > 0 && (
                <ul className="w-full pt-[20px] flex flex-col">
                  {project.outcomepointsVittelo.map((point, i) => (
                    <li
                      key={i}
                      className="w-full flex items-start gap-[4px] text-[14px] leading-[24px] text-[#BDBDBD] font-bold"
                    >
                      <span className="shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutcomesVittelo