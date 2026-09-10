import React, { useRef, useState, useEffect } from "react";
import circleImage from "../../assets/Images/circlesvg.svg";

function CardSection({
  frontimg,
  backimg,
  frontRotate = 8,
  backRotate = -6,
  frontHoverRotate,
  backHoverRotate,
  niche,
}) {
  const containerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [circleSize, setCircleSize] = useState(110);

  const [style, setStyle] = useState({
    left: 0,
    top: 0,
    scale: 0,
    opacity: 0,
  });

  // agar backimg nahi diya to single-image mode
  const isSingle = !backimg;

  const resolvedFrontHover = frontHoverRotate ?? frontRotate + 2;
  const resolvedBackHover = backHoverRotate ?? backRotate - 2;

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

    handleResize();
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
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="w-full relative inline-block rounded-[18px] lg:rounded-[28px] p-[1px] lg:p-[1.1px] bg-gradient-to-r from-[#3A1C71] via-[#DF7A78] to-[#DF7A78] transition-all duration-300 ease-out group cursor-pointer"
        style={{
          transform: hovered ? "scale(1.01)" : "scale(1)",
        }}
      >
        <div className="rounded-[17px] lg:rounded-[26px] bg-[#181818] px-[2px] py-[2px] lg:px-1 lg:py-1">
          <div className="relative overflow-visible bg-gradient-to-b from-[#5F219E] to-[#C6A3EA] rounded-[17px] lg:rounded-[26px]">
            {/* text */}
            <div className="inner_work  pl-[20px] xl:pl-[36px] xl:pt-[25px]">
              {/* <p ... /> */}
              {niche?.length > 0 && (
                <div className="flex flex-wrap gap-[6px]">
                  {niche.map((n, i) => (
                    <span
                      key={i}
                      className="bg-white text-black text-[11px] sm:text-[12px] lg:text-[13px] font-semibold px-[12px] py-[5px] rounded-full"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* main div for overlapping images */}
            <div className="inner_main relative overflow-hidden  h-[170px] sm:h-[380px] lg:px-[70px]">
              {isSingle ? (
                // Single image mode
                <img
                  src={frontimg}
                  alt="preview"
                  className="absolute left-1/2 top-10 sm:top-16 lg:top-15 h-[200px] sm:h-auto lg:w-[467px] left-[50%] right-[50%] rounded-xl shadow-2xl transition-transform duration-500 ease-in-out"
                  style={{
                    transformOrigin: "bottom center",
                    transform: hovered
                      ? "translateX(-50%) rotate(3deg) scale(1.09)"
                      : "translateX(-50%) rotate(0deg) scale(1)",
                  }}
                />
              ) : (
                <>
                  {/* back image */}
                  <img
                    src={backimg}
                    alt="dashboard preview"
                    className="absolute left-1/2 top-7 sm:top-14 lg:top-10 h-[200px] sm:h-auto lg:w-[85%] lg:w-[467px] left-[50%] right-[50%] transition-transform duration-300 ease-out"
                    style={{
                      transform: hovered
                        ? `translateX(-50%) rotate(${resolvedBackHover}deg) scale(1.02)`
                        : `translateX(-50%) rotate(${backRotate}deg)`,
                    }}
                  />
                  {/* front image */}
                  <img
                    src={frontimg}
                    alt="merchant page preview"
                    className="absolute left-1/2 top-10 sm:top-34 lg:top-15 h-[200px] sm:h-auto  lg:w-[467px] left-[47%] right-[53%] transition-transform duration-300 ease-out"
                    style={{
                      transform: hovered
                        ? `translateX(-50%) rotate(${resolvedFrontHover}deg) scale(1.02)`
                        : `translateX(-50%) rotate(${frontRotate}deg)`,
                    }}
                  />
                </>
              )}
            </div>

            {/* cursor circle */}
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
    </section>
  );
}

export default CardSection;
