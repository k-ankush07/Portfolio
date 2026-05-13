import React from "react";





export const Heading = ({ children ,className = "" }) => (
  <h2
  
    className={`text-[14px] leading-[24px] font-bold text-[#FFFFFF] ${className}`}
  >
    {children}
  </h2>
);

export const Paragraph = ({ children, className = "" }) => (
  <p
  
    className={`text-[14px] leading-[24px] text-[#BDBDBD] ${className}`}
  >
    {children}
  </p>
);