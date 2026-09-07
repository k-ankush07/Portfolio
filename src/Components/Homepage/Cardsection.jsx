import React, { useRef, useState, useEffect } from "react";
import mobile from "../../assets/Images/image 67.svg";
import circleImage from "../../assets/Images/circlesvg.svg";
import ten from "../../assets/Images/new6 (1).svg";
import eleven from "../../assets/Images/new6 (2).svg";
function Cardsection({ leftImg, rightImg }) {
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
        setCircleSize(90); // desktop
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
    <section className="container">
      <div className="w-full ">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          className="w-full relative  inline-block  rounded-[18px] lg:rounded-[28px] p-[1px] lg:p-[1.1px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78] transition-all duration-300 ease-out group cursor-pointer "
          style={{
            transform: hovered ? "scale(1.01)" : "scale(1)",
          }}
        >
          <div className="  rounded-[17px] lg:rounded-[26px] bg-[#181818] px-[2px] py-[2px] lg:px-1 lg:py-1">
            <div className="relative overflow-visible  bg-gradient-to-b from-[#5F219E] to-[#C6A3EA] rounded-[17px] lg:rounded-[26px]">
              {/* text */}
              <div className="inner_work pt-[17px] pl-[20px]  xl:pl-[36px] xl:pt-[25px]  flex justify-between"></div>

              <div className="relative flex justify-center items-center mt-[20px] lg:mt-[40px] h-[220px] sm:h-[280px] lg:h-[360px] overflow-hidden">
                {/* Back Image (left/behind) */}
                <div className="absolute  z-10 -rotate-2">
                  <img
                    src={ten}
                    alt="left Image"
                    className="w-[300px] h-[300px] object-contain "
                  />
                </div>

                {/* Front Image (right/front) */}
                <div className="absolute z-20 rotate-1">
                  <img
                    src={eleven}
                    alt="right Image"
                    className="w-[300px] h-[300px] object-contain "
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
    </section>
  );
}

export default Cardsection;
