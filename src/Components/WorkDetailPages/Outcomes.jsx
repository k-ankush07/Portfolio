
// import React from "react";

// function Outcomes({ project }) {
//   if (
//     !project?.outcomeheading &&
//     (!project?.outcomepoints || project.outcomepoints.length === 0)
//   ) {
//     return null;
//   }

//   return (
//     <div className="lg:pt-[40px]">
//       <div className="flex flex-col-reverse lg:flex-row lg:border-t lg:border-b border-white/10">

//         {/* Image section */}
//         <div
//           style={{
//             "--image-width": `${project.imgwidth || 50}%`,
//           }}
//           className="w-full lg:w-[var(--image-width)] flex justify-center items-center pt-[20px] pb-[30px] lg:pt-[40px] lg:pb-[40px] lg:pr-[40px] border-b lg:border-b-0 border-white/10"
//         >
//           <img
//             src={project.outcomeimage}
//             alt="Outcome"
//             className="w-full"
//           />
//         </div>

//         {/* Content section */}
//         <div
//           style={{
//             "--content-width": `${project.contentwidth || 50}%`,
//           }}
//           className="w-full lg:w-[var(--content-width)] flex flex-col justify-center lg:border-l border-b lg:border-b-0 border-white/10 pb-[20px] lg:pb-0"
//         >
//           <div className="w-full  lg:pl-[40px]">

//             <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-white">
//               {project.outcomeheading}
//             </h2>

//             {project.outcomepoints?.length > 0 && (
//               <ul className="w-full pt-[20px] flex flex-col">
//                 {project.outcomepoints.map((point, i) => (
//                   <li
//                     key={i}
//                     className="w-full flex items-start gap-[4px] text-[14px] leading-[24px] text-[#BDBDBD] font-bold"
//                   >
//                     <span className="shrink-0">•</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//           </div>
//         </div>

//       </div>
//     </div>
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

  const isVideo = project?.outcomeimage?.toLowerCase().endsWith(".mp4");

  return (
    <div className="lg:pt-[40px]">
      <div className="flex flex-col-reverse lg:flex-row lg:border-t lg:border-b border-white/10">

        {/* Image/Video section */}
        <div
          style={{
            "--image-width": `${project.imgwidth || 50}%`,
          }}
          className="w-full lg:w-[var(--image-width)] flex justify-center items-center pt-[20px] pb-[30px] lg:pt-[40px] lg:pb-[40px] lg:pr-[40px] border-b lg:border-b-0 border-white/10"
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