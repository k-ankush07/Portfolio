import React from "react";

export const Breadcrumb = ({ children }) => (
  <p className="text-[#BDBDBD] text-center text-[14.4px] leading-[21.6px]  ">
    {children}
  </p>
);

export const Title = ({ children }) => (
  <h1 className="text-[44px] leading-[76.8px] font-bold text-white">
    {children}
  </h1>
);

export const Subtitle = ({ children }) => (
  <p className="text-[18px] leading-[27px] text-[#BDBDBD] ">
    {children}
  </p>
);

export const Heading = ({ children }) => (
  <h2 className="text-[24px] leading-[33px] font-bold text-white">
    {children}
  </h2>
);

export const Paragraph = ({ children, className = "" }) => (
  <p className={`text-[16px]  leading-[24px] text-[#BDBDBD] w-[100%] lg:max-w-[1100px] ${className}`}>
    {children}
  </p>
);