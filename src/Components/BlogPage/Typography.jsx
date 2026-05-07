import React from "react";

export const Breadcrumb = ({ children }) => (
  <p className="text-[#BDBDBD] text-center text-[12px] lg:text-[14.4px] leading-[15px] lg:leading-[21.6px]  ">
    {children}
  </p>
);

export const Title = ({ children }) => (
  <h1 className="text-[15px] lg:text-[44px] leading-[15px] leading-[76.8px] font-bold text-white">
    {children}
  </h1>
);

export const Subtitle = ({ children }) => (
  <p className=" text-[12px] lg:text-[18px] leading-[15px] lgleading-[27px] text-[#FFFFFF] ">
    {children}
  </p>
);

export const Heading = ({ children }) => (
  <h2 className="text-[18px] lg:text-[24px] leading-[15px] lg:leading-[33px] font-bold text-white">
    {children}
  </h2>
);

export const Paragraph = ({ children, className = "" }) => (
  <p className={` text-[12px] lg:text-[16px] leading-[15px] lg:leading-[24px] text-[#BDBDBD]  ${className}`}>
    {children}
  </p>
);