import React, { useRef, useState, useEffect } from "react";
import mobile from "../../assets/Images/image 67.svg";
import circleImage from "../../assets/Images/circlesvg.svg";
import centerimage from "../../assets/Images/newimages (1).svg";
import leftimage from "../../assets/Images/newimages (3).svg";
import rightimage from "../../assets/Images/newimages (4).svg";

function ViewDetail() {
  const containerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false); // text zoom
  const [circleSize, setCircleSize] = useState(110);

  const [style, setStyle] = useState({
    left: 0,
    top: 0,
    scale: 0,
    opacity: 0,
  });

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setCircleSize(60); // mobile
    } else if (window.innerWidth < 1024) {
      setCircleSize(80); // tablet
    } else {
      setCircleSize(110); // desktop
    }
  };

  handleResize(); // run once
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  const BUFFER = circleSize / 2;

  useEffect(() => {
    let animation;

    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.12;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.12;

      setStyle((prev) => ({
        ...prev,
        left: circle.current.x,
        top: circle.current.y,
      }));

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animation);
  }, []);

  const handleMouseMove = (e) => {
  const rect = containerRef.current.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;


  // outside check yahi andar hona chahiye
  const isOutside =
    x < -BUFFER ||
    x > rect.width + BUFFER ||
    y < -BUFFER ||
    y > rect.height + BUFFER;

  if (isOutside) {
    setStyle((prev) => ({
      ...prev,
      opacity: 0,
      scale: 0.8,
    }));
    return;
  }

  mouse.current = { x, y };

  if (!visible) {
    circle.current = { x, y };
  }

  setVisible(true);
  setHovered(true);

  setStyle((prev) => ({
    ...prev,
    scale: 1,
    opacity: 1,
  }));
};
  
 

  const handleLeave = () => {
    setHovered(false);

    setStyle((prev) => ({
      ...prev,
      scale: 0.9,
      opacity: 0,
    }));

    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="w-full relative  inline-block sm:mt-3 rounded-[18px] lg:rounded-[28px] p-[1px] lg:p-[1.1px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78] transition-all duration-300 ease-out group "
         style={{
                  transform: hovered ? "scale(1.01)" : "scale(1)",
                }}  
      >
        <div className="  rounded-[17px] lg:rounded-[26px] bg-[#181818] px-[2px] py-[2px] lg:px-1 lg:py-1">
          <div className="relative overflow-visible  bg-gradient-to-b from-[#5F219E] to-[#C6A3EA] rounded-[17px] lg:rounded-[26px]"
           
          >

            {/* text */}
            <div className="pt-2 pl-2 pr-5 lg:pl-[29px] sm:pt-5 sm:px-5 flex justify-between">
              <p
                className="max-w-[400px] text-[14px] md:text-[20px] text-white origin-left transition-all duration-300 ease-out"
                style={{
                  transform: hovered ? "scale(1.03)" : "scale(1)",
                }}
              >
                Developed a recruitment platform to connect job seekers and
                recruiters
              </p>
            </div>


           {/* main div for images */}
<div className="relative flex justify-center  overflow-hidden items-end px-6">
  
  {/* Left Image */}
  <div className="w-[33%]">
    <img
      src={leftimage}
      alt="left Image"
      className="
        left-image h-full w-full absolute
        

      "
    />
  </div>

  {/* Center Image */}
  <div className="w-[34%] z-[99] overflow-hidden">
    <img
      src={centerimage}
      alt="center Image"
      className="
      center-image  
      "
    />
  </div>

  {/* Right Image */}
  <div className="w-[33%]">
    <img
      src={rightimage}
      alt="right Image"
      className="
        right-image  h-full w-full absolute -z-0 
      "
    />
  </div>

</div>
            {/* cursor */}
            {visible && (
              <img
  src={circleImage}
  alt="circle"
  className="absolute pointer-events-none z-[999999]"
  style={{
    left: style.left,
    top: style.top,
    width: circleSize,
    height: circleSize,
    opacity: style.opacity,
    transform: `translate(-50%, -50%) scale(${style.scale})`,
    transition: "transform 0.35s ease, opacity 0.35s ease",
  }}
/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;