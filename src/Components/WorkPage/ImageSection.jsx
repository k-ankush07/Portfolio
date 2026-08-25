import React from "react";
import fullImage from "../../assets/Images/fullImage.svg";
function ImageSection() {
  return (
    <section className="container ">
      <div className=" px-2 md:px-0 pt-[30px] pb-[30px]  lg:pt-[40px] lg:pb-[40px]">
        <img className="w-full h-full" src={fullImage} alt="full iamge" />
      </div>
    </section>
  );
}

export default ImageSection;
