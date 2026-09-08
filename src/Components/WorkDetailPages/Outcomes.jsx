// import React from "react";

// function Outcomes({ project }) {
//   if (
//     !project?.outcomeheading &&
//     (!project?.outcomepoints || project.outcomepoints.length === 0)
//   ) {
//     return null;
//   }

//   return (
//     <>
//       <div className="lg:pt-[40px] ">
//         <div className="flex flex-col-reverse lg:flex-row  lg:border-t lg:border-b border-[#FFFFFF]/10">
//           {/* image section  */}
//           <div
//             style={{
//               width: project.imgwidth ? `${project.imgwidth}%` : undefined,
//             }}
//             className={`${project.imgwidth ? "" : "lg:w-[50%]"} flex justify-center items-center pt-[20px] pb-[30px] lg:pt-[40px] lg:pb-[40px]  lg:pr-[40px] border-b  lg:border-b-0 border-[#FFFFFF]/10`}
//           >
//             <img src={project.outcomeimage} alt="iMAGE" className="w-full" />
//           </div>

//           {/* content section 
//           <div className={` ${project.contentwidth ? ` lg:w-${project.contentwidth`} : 50%  } lg:flex flex-col  justify-center  lg:border-t lg:border-t-0 lg:border-l border-b pb-[20px] lg:pb-0 lg:border-b-0 border-[#FFFFFF]/10`}> */}
//           {/* content section */}
//           <div
//             style={{
//               width: project.contentwidth
//                 ? `${project.contentwidth}%`
//                 : undefined,
//             }}
//             className={`${project.contentwidth ? "" : "lg:w-[50%]"} lg:flex flex-col justify-center lg:border-t lg:border-t-0 lg:border-l border-b pb-[20px] lg:pb-0 lg:border-b-0 border-[#FFFFFF]/10`}
//           >
//             <div className=" w-full pt-[20px] lg:pt-0 lg:pl-[40px]">
//               <h2 className="text-[24px]  lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
//                 {project.outcomeheading}
//               </h2>
//               {project.outcomepoints?.length > 0 && (
//                 <ul className=" w-full pt-[20px] flex flex-col ">
//                   {project.outcomepoints.map((point, i) => (
//                     <li
//                       key={i}
//                       className=" w-full flex gap-[2px]  text-[14px] leading-[24px]  text-[#BDBDBD] font-bold"
//                     >
//                       <span className="">•</span> {point}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Outcomes;

import React from "react";

function Outcomes({ project }) {
  if (
    !project?.outcomeheading &&
    (!project?.outcomepoints || project.outcomepoints.length === 0)
  ) {
    return null;
  }

  return (
    <div className="lg:pt-[40px]">
      <div className="flex flex-col-reverse lg:flex-row lg:border-t lg:border-b border-white/10">

        {/* Image section */}
        <div
          style={{
            "--image-width": `${project.imgwidth || 50}%`,
          }}
          className="w-full lg:w-[var(--image-width)] flex justify-center items-center pt-[20px] pb-[30px] lg:pt-[40px] lg:pb-[40px] lg:pr-[40px] border-b lg:border-b-0 border-white/10"
        >
          <img
            src={project.outcomeimage}
            alt="Outcome"
            className="w-full"
          />
        </div>

        {/* Content section */}
        <div
          style={{
            "--content-width": `${project.contentwidth || 50}%`,
          }}
          className="w-full lg:w-[var(--content-width)] flex flex-col justify-center lg:border-l border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0"
        >
          <div className="w-full  lg:pl-[40px]">

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