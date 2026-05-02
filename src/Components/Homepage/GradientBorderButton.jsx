import React from "react";

export default function GradientBorderButton() {
  return (
    <div className="flex items-center sm:mt-5 ">
      <button className="relative rounded-md p-[1.5px] overflow-hidden">
        
        {/* Bigger Gradient Layer */}
        <span className="absolute -inset-[250%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(#3A1C71,#DF7A78,#DF7A78,#3A1C71)]"></span>

        {/* Inner Button */}
        <span className="relative z-10 flex items-center justify-center px-2 py-2 rounded-md bg-[#05070d] text-[10.59px] sm:text-[12px]  text-[12px] text-[#c58962]">
          Available for work
        </span>

      </button>
    </div>
  );
}