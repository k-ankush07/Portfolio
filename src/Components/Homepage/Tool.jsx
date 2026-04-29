import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import arrow from "../../assets/Images/arrow.svg";
import Overlay from "../../assets/Images/Overlay.svg";
import Overlay1 from "../../assets/Images/Overlay (1).svg";
import Overlay2 from "../../assets/Images/Overlay (2).svg";
import Overlay3 from "../../assets/Images/Overlay (3).svg";
import Overlay4 from "../../assets/Images/Overlay (4).svg";
import Overlay5 from "../../assets/Images/Overlay (5).svg";
import Overlay6 from "../../assets/Images/Overlay (6).svg";
import Overlay7 from "../../assets/Images/Overlay (7).svg";
import Overlay8 from "../../assets/Images/Overlay (8).svg";
import Overlay9 from "../../assets/Images/Overlay (9).svg";
import Overlay10 from "../../assets/Images/Overlay (10).svg";
import Overlay11 from "../../assets/Images/Overlay (11).svg";
import Overlay12 from "../../assets/Images/Overlay (12).svg";
import Overlay13 from "../../assets/Images/Overlay (13).svg";
import Overlay14 from "../../assets/Images/Overlay (14).svg";
import Overlay15 from "../../assets/Images/Overlay (15).svg";
import Overlay16 from "../../assets/Images/Overlay (16).svg";
import Overlay17 from "../../assets/Images/Overlay (17).svg";
import Overlay18 from "../../assets/Images/Overlay (18).svg";
import Overlay19 from "../../assets/Images/Overlay (19).svg";
import Overlay20 from "../../assets/Images/Overlay (20).svg";
import Overlay21 from "../../assets/Images/Overlay (21).svg";
import Overlay22 from "../../assets/Images/Overlay (22).svg";
import Overlay23 from "../../assets/Images/Overlay (23).svg";
import Overlay24 from "../../assets/Images/Overlay (24).svg";
import Overlay25 from "../../assets/Images/Overlay (25).svg";
import Overlay26 from "../../assets/Images/Overlay (26).svg";
import Overlay27 from "../../assets/Images/Overlay (27).svg";
import Overlay28 from "../../assets/Images/Overlay (28).svg";
import Overlay29 from "../../assets/Images/Overlay (29).svg";
import Overlay30 from "../../assets/Images/Overlay (30).svg";
import Overlay31 from "../../assets/Images/Overlay (31).svg";
import Overlay32 from "../../assets/Images/Overlay (32).svg";
import Overlay33 from "../../assets/Images/Overlay (33).svg";
import Overlay34 from "../../assets/Images/Overlay (34).svg";
import Overlay35 from "../../assets/Images/Overlay (35).svg";
import Overlay36 from "../../assets/Images/Overlay (36).svg";
import Overlay37 from "../../assets/Images/Overlay (37).svg";
// import Overlay38 from "../../assets/Images/Overlay (29).svg"
// import Overlay39 from "../../assets/Images/Overlay (30).svg"
// import Overlay40 from "../../assets/Images/Overlay (31).svg"
// import Overlay41 from "../../assets/Images/Overlay (32).svg"
// import Overlay42 from "../../assets/Images/Overlay (33).svg"
// import Overlay43 from "../../assets/Images/Overlay (34).svg"
// import Overlay44 from "../../assets/Images/Overlay (35).svg"
// import Overlay45 from "../../assets/Images/Overlay (36).svg"
// import Overlay46 from "../assets/Images/Overlay (46).svg"

function Tool() {
  const sceneRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  const [start, setStart] = useState(false);

  const images = [
    Overlay, Overlay1, Overlay2, Overlay3, Overlay4, Overlay5,
    Overlay6, Overlay7, Overlay8, Overlay9, Overlay10, Overlay11,
    Overlay12, Overlay13,Overlay14, Overlay15, Overlay16
  ];
  //  const images = [
  //   Overlay, Overlay1, Overlay2, Overlay3, Overlay4, Overlay5,
  //   Overlay6, Overlay7, Overlay8, Overlay9, Overlay10, Overlay11,
  //   Overlay12, Overlay13, Overlay14, Overlay15, Overlay16, Overlay17,
  //   Overlay18, Overlay19, Overlay20, Overlay21, Overlay22, Overlay23,
  //   Overlay24, Overlay25, Overlay26, Overlay27, Overlay28, Overlay29,
  //   Overlay30, Overlay31, Overlay32, Overlay33, Overlay34, Overlay35,
  //   Overlay36, Overlay37
  // ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      { threshold: 0.2 }
    );

    if (sceneRef.current) observer.observe(sceneRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const container = sceneRef.current;

    const createWorld = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      if (renderRef.current) {
        Render.stop(renderRef.current);
        Runner.stop(runnerRef.current);
        renderRef.current.canvas.remove();
      }

      const engine = Engine.create();
      engine.gravity.y = 0.8;

      const render = Render.create({
        element: container,
        engine,
        options: {
          width,
          height,
          wireframes: false,
          background: "#181818",
        },
      });

      const logos = images.map((img) =>
        Bodies.rectangle(
          Math.random() * (width - 100) + 50,
          Math.random() * 150,
          width > 1024 ? 70 : width > 768 ? 65 : 50,
          width > 1024 ? 70 : width > 768 ? 65 : 50,
          {
            chamfer: { radius: 14 },
            restitution: 0.8,
            friction: 0.01,
            render: {
              sprite: {
                texture: img,
                xScale: width > 1024 ? 0.9 : width > 768 ? 0.72 : 0.55,
                yScale: width > 1024 ? 0.9 : width > 768 ? 0.72 : 0.55,
              },
            },
          }
        )
      );

      const t = 100;

      const walls = [
        Bodies.rectangle(width / 2, height + t / 2, width + t * 2, t, { isStatic: true }),
        Bodies.rectangle(width / 2, -t / 2, width + t * 2, t, { isStatic: true }),
        Bodies.rectangle(-t / 2, height / 2, t, height + t * 2, { isStatic: true }),
        Bodies.rectangle(width + t / 2, height / 2, t, height + t * 2, { isStatic: true }),
      ];

      Composite.add(engine.world, [...logos, ...walls]);

      // scroll + drag fix
      const mouse = Mouse.create(render.canvas);

      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
      mouse.element.removeEventListener("wheel", mouse.mousewheel);

      render.canvas.style.pointerEvents = "auto";
      render.canvas.style.touchAction = "pan-y";

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });

      Composite.add(engine.world, mouseConstraint);

      Render.run(render);

      const runner = Runner.create();
      Runner.run(runner, engine);

      renderRef.current = render;
      runnerRef.current = runner;
    };

    createWorld();

    const resizeObserver = new ResizeObserver(() => {
      createWorld();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();

      if (renderRef.current) {
        Render.stop(renderRef.current);
        Runner.stop(runnerRef.current);
        renderRef.current.canvas.remove();
      }
    };
  }, [start]);

  return (
    <section className="py-10 bg-black px-3 sm:px-0">
      <div className="container">

        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-white text-[30px] lg:text-[44px]">
              Tools we{" "}
              <span className="bg-gradient-to-r from-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                trust
              </span>
            </h1>

            <p className="text-[14px] lg:text-[18px] text-gray-300 max-w-[420px]">
              Powerful tools and technologies I use in modern web development.
            </p>
          </div>

          <img src={arrow} alt="" className="w-10 h-10 cursor-pointer" />
        </div>

        <div
          ref={sceneRef}
          className="w-full h-[350px] sm:h-[500px] rounded-2xl border border-gray-700 bg-[#111] overflow-hidden"
        />
      </div>
    </section>
  );
}

export default Tool;