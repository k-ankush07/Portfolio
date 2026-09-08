import React from "react";

function ChallengesNew({ project }) {
    if (!project?.Challheadingnew && !project?.Challdescnew && !project.challengenew) {
    return null;
  }
  return (
    <>
      <div className="lg:pt-[40px] ">
        <div className={` lg:flex  ${
          project.reversechallengeSection ? "lg:flex-col-reverse" : "lg:flex-col"
        }`} >
          {/* image section  */}
          <div className=" w-full pt-[30px] pb-[20px] lg:pt-[80px] lg:pb-[40px] lg:pr-[40px] border-b  border-[#FFFFFF]/10">
            <img src={project.challengenew} alt="iMAGE" className="w-full" />
          </div>

          {/* content section  */}
          <div className=" w-full items-center justify-center lg:border-t  border-[#FFFFFF]/10">
            {/* <div className=' pt-[20px] lg:pt-0 lg:pl-[40px] '>
         <h2 className=' text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]'>{project.Challheading}</h2>
         <p className='text-[#BDBDBD] text-[14px] leading-[24px] lg:pt-[20px]'>{project.Challdesc}</p>
       </div> */}
            <div className="pt-[20px] lg:pt-0 ">
              <h2 className="text-[24px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF]">
                {project.Challheadingnew}
              </h2>
              <p
                className="text-[#BDBDBD] text-[14px] leading-[24px] pt-[20px]"
                dangerouslySetInnerHTML={{ __html: project.Challdescnew }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengesNew;
