import React from "react";

function Outcomes({ project }) {
  if (!project?.outcomeheading && (!project?.outcomepoints || project.outcomepoints.length === 0)) {
    return null;
  }

  return (
    <>
      <div className="lg:pt-[40px] ">
        <div className="flex flex-col-reverse lg:flex-row  lg:border-t lg:border-b border-[#FFFFFF]/10">
          {/* image section  */}
          <div className=" lg:w-[50%] flex justify-center items-center pt-[20px] pb-[30px] lg:pt-[40px] lg:pb-[40px]  lg:pr-[40px] border-b  lg:border-b-0 border-[#FFFFFF]/10">
            <img src={project.outcomeimage} alt="iMAGE"  className="w-full"/>
          </div>

          {/* content section  */}
          <div className="lg:w-[50%] lg:flex flex-col  justify-center lg:border-t lg:border-t-0 lg:border-l border-b pb-[20px] lg:pb-0 lg:border-b-0 border-[#FFFFFF]/10">
            <div className="pt-[20px] lg:pt-0 lg:pl-[40px]">
              <h2 className="text-[24px]  lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
                {project.outcomeheading}
              </h2>
              {project.outcomepoints?.length > 0 && (
                <ul className="pt-[20px] flex flex-col ">
                  {project.outcomepoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-[2px]  text-[14px] leading-[24px]  text-[#BDBDBD] font-bold"
                    >
                      <span className="">•</span> {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Outcomes;
