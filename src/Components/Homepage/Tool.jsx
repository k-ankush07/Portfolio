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
  const sceneRef    = useRef(null);
  const engineRef   = useRef(null);
  const runnerRef   = useRef(null);
  const animFrameRef = useRef(null);
  // Keep a ref to the current logos array so touch handlers can query them
  const logosRef    = useRef([]);

  const [start, setStart] = useState(false);

  const images = [
    Overlay, Overlay1, Overlay2, Overlay3, Overlay4, Overlay5,
    Overlay6, Overlay7, Overlay8, Overlay9, Overlay10,Overlay11, Overlay12 ,Overlay13 , Overlay14, Overlay15, Overlay16, Overlay17, Overlay18, Overlay19, Overlay20
  ];

  const trustText = "trust";

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

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

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Query } = Matter;
    const containerEl = sceneRef.current;
    const imgRefs = [];

    //  Desktop drag state 
    let isMouseDown = false;
    let onDocMouseMove    = null;
    let onDocMouseUp      = null;
    let onContainerMouseDown  = null;
    let onContainerMouseLeave = null;

    // Touch drag state 
    let isTouchDragging   = false; // true only when finger is ON a body
    let onTouchStart      = null;
    let onTouchMove       = null;
    let onTouchEnd        = null;

    const createWorld = () => {
      // Cleanup
      if (engineRef.current) {
        Runner.stop(runnerRef.current);
        cancelAnimationFrame(animFrameRef.current);
        Matter.World.clear(engineRef.current.world);
        Matter.Engine.clear(engineRef.current);
      }
      if (onDocMouseMove)        document.removeEventListener("mousemove",  onDocMouseMove);
      if (onDocMouseUp)          document.removeEventListener("mouseup",    onDocMouseUp);
      if (onContainerMouseDown)  containerEl.removeEventListener("mousedown",  onContainerMouseDown);
      if (onContainerMouseLeave) containerEl.removeEventListener("mouseleave", onContainerMouseLeave);
      if (onTouchStart)          containerEl.removeEventListener("touchstart",  onTouchStart);
      if (onTouchMove)           containerEl.removeEventListener("touchmove",   onTouchMove);
      if (onTouchEnd)            containerEl.removeEventListener("touchend",    onTouchEnd);

      containerEl.querySelectorAll(".physics-img").forEach((el) => el.remove());
      imgRefs.length = 0;

      const width  = containerEl.offsetWidth;
      const height = containerEl.offsetHeight;
      const SIZE   = width > 1024 ? 70 : width > 768 ? 65 : 50;

      images.forEach((src) => {
        const img = document.createElement("img");
        img.src       = src;
        img.className = "physics-img";
        img.draggable = false;
        Object.assign(img.style, {
          position:      "absolute",
          width:         SIZE + "px",
          height:        SIZE + "px",
          userSelect:    "none",
          pointerEvents: "none",
          willChange:    "transform",
        });
        containerEl.appendChild(img);
        imgRefs.push(img);
      });

      // Physics
      const engine     = Engine.create();
      engine.gravity.y = 0.8;
      engineRef.current = engine;

      const logos = images.map(() =>
        Bodies.rectangle(
          Math.random() * (width - 100) + 50,
          Math.random() * 150,
          SIZE, SIZE,
          { chamfer: { radius: 14 }, restitution: 0.8, friction: 0.01 }
        )
      );
      logosRef.current = logos;

      const t = 100;
      const walls = [
        Bodies.rectangle(width / 2,     height + t / 2, width  + t * 2, t,             { isStatic: true }),
        Bodies.rectangle(width / 2,     -t / 2,         width  + t * 2, t,             { isStatic: true }),
        Bodies.rectangle(-t / 2,        height / 2,     t,              height + t * 2, { isStatic: true }),
        Bodies.rectangle(width + t / 2, height / 2,     t,              height + t * 2, { isStatic: true }),
      ];
      Composite.add(engine.world, [...logos, ...walls]);

      // Mouse (desktop)
      const mouse = Mouse.create(containerEl);

      // Remove Matter's built-in touch listeners — we handle touch manually below
      mouse.element.removeEventListener("touchstart",      mouse.mousedown);
      mouse.element.removeEventListener("touchmove",       mouse.mousemove);
      mouse.element.removeEventListener("touchend",        mouse.mouseup);
      mouse.element.removeEventListener("wheel",           mouse.mousewheel);
      mouse.element.removeEventListener("mousewheel",      mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll",  mouse.mousewheel);

      onContainerMouseDown = () => { isMouseDown = true; };

      onDocMouseMove = (e) => {
        if (!isMouseDown) return;
        const rect       = containerEl.getBoundingClientRect();
        mouse.position.x = e.clientX - rect.left;
        mouse.position.y = e.clientY - rect.top;
        mouse.absolute.x = mouse.position.x;
        mouse.absolute.y = mouse.position.y;
      };

      onDocMouseUp = () => { isMouseDown = false; mouse.button = -1; };
      onContainerMouseLeave = () => { isMouseDown = false; mouse.button = -1; };

      containerEl.addEventListener("mousedown",  onContainerMouseDown);
      document.addEventListener("mousemove",     onDocMouseMove);
      document.addEventListener("mouseup",       onDocMouseUp);
      containerEl.addEventListener("mouseleave", onContainerMouseLeave);

      //  Touch (mobile) 
      // Helper: get touch coords relative to container
      const getTouchPos = (touch) => {
        const rect = containerEl.getBoundingClientRect();
        return {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
      };

      // Helper: check if a point hits any physics body
      const bodyAtPoint = (x, y) =>
        Query.point(logosRef.current, { x, y }).length > 0;

      onTouchStart = (e) => {
        const touch = e.touches[0];
        const pos   = getTouchPos(touch);

        if (bodyAtPoint(pos.x, pos.y)) {
          // Finger is ON a body → start drag, block scroll
          isTouchDragging  = true;
          mouse.position.x = pos.x;
          mouse.position.y = pos.y;
          mouse.absolute.x = pos.x;
          mouse.absolute.y = pos.y;
          mouse.button     = 0; // simulate mousedown for Matter
          e.preventDefault();   // prevent scroll only when dragging
        } else {
          // Finger on empty space → let browser scroll naturally
          isTouchDragging = false;
        }
      };

      onTouchMove = (e) => {
        if (!isTouchDragging) return; // not dragging a body → don't interfere
        const touch = e.touches[0];
        const pos   = getTouchPos(touch);
        mouse.position.x = pos.x;
        mouse.position.y = pos.y;
        mouse.absolute.x = pos.x;
        mouse.absolute.y = pos.y;
        e.preventDefault(); // block scroll only while dragging a body
      };

      onTouchEnd = () => {
        if (!isTouchDragging) return;
        isTouchDragging  = false;
        mouse.button     = -1; // release body
      };

      // { passive: false } required so we can call preventDefault() inside
      containerEl.addEventListener("touchstart", onTouchStart, { passive: false });
      containerEl.addEventListener("touchmove",  onTouchMove,  { passive: false });
      containerEl.addEventListener("touchend",   onTouchEnd,   { passive: true  });

      // Mouse constraint
      const mConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      // Remove Matter's own touch listeners from the constraint too
      mConstraint.mouse.element.removeEventListener("touchstart", mConstraint.mouse.mousedown);
      mConstraint.mouse.element.removeEventListener("touchmove",  mConstraint.mouse.mousemove);
      mConstraint.mouse.element.removeEventListener("touchend",   mConstraint.mouse.mouseup);

      Composite.add(engine.world, mConstraint);

      const runner = Runner.create();
      Runner.run(runner, engine);
      runnerRef.current = runner;

      const loop = () => {
        logos.forEach((body, i) => {
          const el = imgRefs[i];
          if (!el) return;
          el.style.left      = body.position.x - SIZE / 2 + "px";
          el.style.top       = body.position.y - SIZE / 2 + "px";
          el.style.transform = `rotate(${body.angle}rad)`;
        });
        animFrameRef.current = requestAnimationFrame(loop);
      };
      loop();
    };

    createWorld();

    const resizeObserver = new ResizeObserver(createWorld);
    resizeObserver.observe(containerEl);

    return () => {
      resizeObserver.disconnect();
      if (onDocMouseMove)        document.removeEventListener("mousemove",  onDocMouseMove);
      if (onDocMouseUp)          document.removeEventListener("mouseup",    onDocMouseUp);
      if (onContainerMouseDown)  containerEl.removeEventListener("mousedown",  onContainerMouseDown);
      if (onContainerMouseLeave) containerEl.removeEventListener("mouseleave", onContainerMouseLeave);
      if (onTouchStart)          containerEl.removeEventListener("touchstart",  onTouchStart);
      if (onTouchMove)           containerEl.removeEventListener("touchmove",   onTouchMove);
      if (onTouchEnd)            containerEl.removeEventListener("touchend",    onTouchEnd);
      cancelAnimationFrame(animFrameRef.current);
      if (runnerRef.current)  Matter.Runner.stop(runnerRef.current);
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world);
        Matter.Engine.clear(engineRef.current);
      }
      if (containerEl) {
        containerEl.querySelectorAll(".physics-img").forEach((el) => el.remove());
      }
    };
  }, [start]);

  return (
    <section className="pb-[15px] pt-[20px] lg:pt-15  px-2 sm:px-0">
      <div className="container">

        <div className="flex justify-between items-end mb-4 lg:mb-8">
          <div>
            <h1 className="text-white text-[30px] lg:text-[44px]">
              Tools we{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
                variants={containerVariants}
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
            <p className="text-[14px] lg:text-[18px] text-gray-300 ">
              Powerful tools and technologies I use in modern web development.
            </p>
          </div>

          <motion.img
            src={arrow}
            alt=""
            className="lg:w-10 lg:h-10 cursor-pointer"
            initial={{ opacity: 0,  }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div
          ref={sceneRef}
          className="w-full h-[350px] sm:h-[500px] rounded-[10px] border border-gray-700 bg-[#181818] overflow-hidden relative"
          style={{ cursor: "grab" }}
        />

      </div>
    </section>
  );
}

export default Tool;