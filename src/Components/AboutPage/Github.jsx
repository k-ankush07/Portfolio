import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import gitprofile from "../../assets/Images/gitprofile.svg"
import gitblur from "../../assets/Images/gitblur.svg"
function Github() {

  
  return (
<section className="pb-4">
   <div className="container">
     <div className=" relative flex items-center justify-center ">
      
      {/* Card */}
      <div className="github-card w-full  lg:pl-[40px] lg:pt-[49px] lg:pb-[37px] lg:pr-[40px] rounded-[8px] border border-[#292929] relative">
        
        {/* Glow effect */}
        {/* <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"></div> */}
        <div className="absolute right-0 overflow-hidden top-0 -z-10">
          <img src={gitblur} alt="blur image" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px] ">
            <img src={gitprofile} alt="git logo" />
            </div>
            <div>
              <h2 className="text-[#FFFFFF] text-[24px] font-bold">@k-ankush07</h2>
              <p className="text-[#BDBDBD] text-[14px]">Collaboration Graph</p>
            </div>
          </div>

          {/* Right */}
          <div className="text-right">
            <h2 className="text-[#FFFFFF] text-[24px] font-bold">1547</h2>
            <p className="text-[#BDBDBD] text-[14px]">2025 Total</p>
          </div>
        </div>

        {/* Calendar */}
        <div className="github-calendar pt-[20px]">
         <GitHubCalendar username="k-ankush07"
         blockSize={14}      
        blockMargin={8} 
      theme={{
          light: [
            "#FFFFFF", // no commits (empty)
            "#c4b5fd",
            "#a78bfa",
            "#8b5cf6",
            "#6d28d9"  // most commits
          ],
          dark: [
            "#1a1a1a",
            "#c4b5fd",
            "#a78bfa",
            "#8b5cf6",
            "#6d28d9"
          ]
        }}
      />
        </div>

      </div>
    </div>

 </div>
</section>
  );
}

export default Github;