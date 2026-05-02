import React from "react";
import gitbottomblur from "../../assets/Images/gitbottomblur.svg"
function GithubStats() {
  const stats = [
    {
      label: "Followers",
      value: 333,
      color: "text-[#8F74BF]",
    },
    {
      label: "Forks",
      value: 333,
      color: "text-[#D76D77]",
    },
    {
      label: "GitHub Stars",
      value: 333,
      color: "text-[#FFAF7B]",
    },
  ];

  return (
  <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] lg:pb-[40px] relative">
       
      
      {stats.map((item, index) => (
        <div
          key={index}
          className="relative border border-[#292929] rounded-[8px] lg:px-[39px] lg:py-[44px]  overflow-hidden"
        >
        <div className="absolute right-0 top-0 overflow-hidden rounded-[8px]">
            <img src={gitbottomblur} alt=" blur image" />
        </div>

          {/* Content */}
          <div className="flex justify-between items-center">
            <p className="text-[#BDBDBD] text-[14px] ">
              {item.label}
            </p>

            <h2 className={`text-[32px] font-bold ${item.color}`}>
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