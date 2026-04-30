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
import { motion } from "framer-motion";
function Tool() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const animFrameRef = useRef(null);

  const [start, setStart] = useState(false);

  const images = [
    Overlay, Overlay1, Overlay2, Overlay3, Overlay4, Overlay5,
    Overlay6, Overlay7, Overlay8, Overlay9, Overlay10
  ];
  const trustText = "trust";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

  // Trigger when section enters viewport
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

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
    const container = sceneRef.current;
    const imgRefs = [];

    const createWorld = () => {
      // Cleanup previous world
      if (engineRef.current) {
        Runner.stop(runnerRef.current);
        cancelAnimationFrame(animFrameRef.current);
        Matter.World.clear(engineRef.current.world);
        Matter.Engine.clear(engineRef.current);
      }

      // Remove old injected imgs
      container.querySelectorAll(".physics-img").forEach((el) => el.remove());
      imgRefs.length = 0;

      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const SIZE = width > 1024 ? 70 : width > 768 ? 65 : 50;

      // Inject DOM <img> elements directly
      // Browser renders SVG natively = always sharp, zero blur
      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "physics-img";
        img.draggable = false;
        Object.assign(img.style, {
          position: "absolute",
          width: SIZE + "px",
          height: SIZE + "px",
          userSelect: "none",
          pointerEvents: "none",
          willChange: "transform",
        });
        container.appendChild(img);
        imgRefs.push(img);
      });

      // Physics engine
      const engine = Engine.create();
      engine.gravity.y = 0.8;
      engineRef.current = engine;

      const logos = images.map(() =>
        Bodies.rectangle(
          Math.random() * (width - 100) + 50,
          Math.random() * 150,
          SIZE,
          SIZE,
          {
            chamfer: { radius: 14 },
            restitution: 0.8,
            friction: 0.01,
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

      // Mouse drag attached to container div
      const mouse = Mouse.create(container);
      mouse.element.removeEventListener("wheel", mouse.mousewheel);
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      Composite.add(
        engine.world,
        MouseConstraint.create(engine, {
          mouse,
          constraint: { stiffness: 0.2, render: { visible: false } },
        })
      );

      const runner = Runner.create();
      Runner.run(runner, engine);
      runnerRef.current = runner;

      // RAF loop — direct DOM update, ZERO React re-renders
      const loop = () => {
        logos.forEach((body, i) => {
          const el = imgRefs[i];
          if (!el) return;
          el.style.left = body.position.x - SIZE / 2 + "px";
          el.style.top = body.position.y - SIZE / 2 + "px";
          el.style.transform = `rotate(${body.angle}rad)`;
        });
        animFrameRef.current = requestAnimationFrame(loop);
      };
      loop();
    };

    createWorld();

    const resizeObserver = new ResizeObserver(createWorld);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animFrameRef.current);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world);
        Matter.Engine.clear(engineRef.current);
      }
      if (container) {
        container.querySelectorAll(".physics-img").forEach((el) => el.remove());
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

  <motion.span
    className="inline-block bg-gradient-to-r from-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {trustText.split("").map((char, index) => (
      <motion.span key={index} variants={letter} className="inline-block">
        {char}
      </motion.span>
    ))}
  </motion.span>
</h1>
            <p className="text-[14px] lg:text-[18px] max-w-[550px] text-gray-300 max-w-[420px]">
              Powerful tools and technologies I use in modern web development.
            </p>
          </div>
           <motion.img
           src={arrow} alt="arrow"  src={arrow} alt="" className="w-10 h-10 cursor-pointer"
            initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.8 }}
           />
        </div>

        {/* No canvas. No React state updates. Pure DOM + Matter.js physics. */}
        <div
          ref={sceneRef}
          className="w-full h-[350px] sm:h-[500px] rounded-2xl border cursor-pointer border-gray-700 bg-[#181818] overflow-hidden relative"
          style={{ touchAction: "pan-y", cursor: "grab" }}
        />

      </div>
    </section>
  );
}

export default Tool;