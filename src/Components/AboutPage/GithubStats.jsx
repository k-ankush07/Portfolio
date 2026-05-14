import React from "react";
import gitbottomblur from "../../assets/Images/gitbottomblur.svg";

function GithubStats({ githubData = {} }) {
 
  
  const stats = [
    {
      label: "Followers",
      value: githubData?.followers || 0,
      color: "text-[#8F74BF]",
    },
    {
      label: "Following",
      value: githubData?.following || 0,
      color: "text-[#D76D77]",
    },
    {
      label: "GitHub Stars",
      value: githubData?.totalStars || 0,
      color: "text-[#FFAF7B]",
    },
  ];

    

  return (
    <div className="pt-[6px] lg:pt-[12px] ">
      <div className="grid grid-cols-3 gap-[7px] lg:gap-[10px] lg:pb-[40px] relative">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative border  border-[#292929] rounded-[8px] pt-[15px] pb-[20px] pl-[20px] pr-[20px] lg:pt-[44px] lg:pb-[44px] lg:pr-[39px] lg:pl-[41px]  overflow-hidden"
          > 
            <div className="absolute right-0 top-0 rounded-[8px]">
              <img src={gitbottomblur} alt="blur image" />
            </div>

            <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center z-10">
              <p className="text-[#BDBDBD] text-[12px] lg:text-[14px] leading-[24px]">
                {item.label}
              </p>

              <h2 className={` text-[30px] lg:text-[44px]  font-bold leading-[48px] ${item.color}`}>
                {item.value}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubStats;