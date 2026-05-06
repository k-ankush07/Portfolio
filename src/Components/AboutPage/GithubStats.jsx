

import React from "react";
import gitbottomblur from "../../assets/Images/gitbottomblur.svg";

function GithubStats({ githubData = {} }) {
  console.log(githubData,"jksdcb");
  
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
    <div className="mt-[10px] ">
      <div className="grid grid-cols-3 gap-[10px] lg:pb-[40px] relative">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative border  border-[#292929] rounded-[8px]  lg:px-[39px] lg:py-[44px]  overflow-hidden"
          >
            <div className="absolute right-0 top-0 overflow-hidden rounded-[8px]">
              <img src={gitbottomblur} alt="blur image" />
            </div>

            <div className="pt-[15px] pl-[10px] pb-[20px] sm:pl-[20px] lg:pt-[0px] lg:pr-[0px] lg:pb-[0px] flex flex-col lg:flex-row lg:justify-between lg:items-center z-10">
              <p className="text-[#BDBDBD] text-[12px] lg:text-[14px]">
                {item.label}
              </p>

              <h2 className={` text-[30px] lg:text-[32px] font-bold ${item.color}`}>
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