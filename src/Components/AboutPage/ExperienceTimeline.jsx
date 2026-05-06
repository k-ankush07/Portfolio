import React from "react";
import work from "../../assets/Images/work.svg";
import newlocation from "../../assets/Images/newlocation.svg";
import smallicon from "../../assets/Images/smallicon.svg";
import { motion } from "framer-motion";
import Bun from "../../assets/Images/rsection (1).svg";
import Docker from "../../assets/Images/rsection (2).svg";
import Next from "../../assets/Images/rsection (3).svg";
import pnpm from "../../assets/Images/rsection (4).svg";
import PostgreSQL from "../../assets/Images/rsection (1).svg";
import Redis from "../../assets/Images/rsection (2).svg";
import Vercel from "../../assets/Images/rsection (3).svg";

// logos
import Roboto from "../../assets/Images/roboto-logo 1.svg";
import Github from "../../assets/Images/abc.svg";

function ExperienceTimeline() {
    const data = [
        {
            date: "Jan 2025 – Present",
            logo: Roboto,
            company: "Roboto Studio",
            role1: "Frontend",
            role2: "Engineer",
            points: [
                {
                    p: "Architected Headless Systems (Sanity/Contentful): ",
                    s: "Designed reusable page-builder blocks and Data Modeling structures.  Optimized GROQ queries, improving content delivery speed by 25% across  7+ production sites.",
                },
                {
                    p: "AI-Native Development & AEO:",
                    s: " : Accelerated  delivery using an agentic stack (Claude Code, MCP). Implemented Next.js  (SSG/ISR) with a focus on Answer Engine Optimization (AEO) and SEO,  boosting user engagement by 25%.",
                },
                {
                    p: "Scalable Infrastructure:",
                    s: " Managed multi-repo  environments using Turborepo and TypeScript. Established type-safe  standards and CLI-based automation to reduce production defects by 15%.",
                },
                {
                    p: "Accessibility & Engineering Standards:",
                    s: " Shipped  WCAG 2.1 AA compliant interfaces for UK/USA clients. Managed  high-velocity sprints in Linear/Agile, maintaining 99% compliance with  strict international accessibility regulations.",
                },
            ],
        },
        {
            date: "Nov 2024 – Present",
            logo: Github,
            company: "GitHub",
            role1: "Open Source",
            role2: "Developer",
            points: [
                {
                    s: "Develop and maintain open-source repositories focused on modern web  infrastructure and developer productivity, achieving significant  community adoption (70+ stars on flagship projects).",
                },
                {
                    s: "Engineered UI components and technical documentation for a leading React ecosystem (20K+ GitHub stars), expanding the library's collection of  high-performance, accessible components.",
                },
                {
                    s: "Refined component logic and TypeScript definitions, ensuring seamless  integration, type-safety, and a superior developer experience (DX) for  thousands of downstream users",
                },
                {
                    s: "Collaborated with global maintainers to uphold rigorous engineering  standards, focusing on modern web aesthetics, optimized rendering  patterns, and performance-first architecture.",
                },
            ],
        },
    ];
      //  container stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="relative  px-2 lg:px-0  ">
            <div className="container relative" >

               <div className=" border-t-1  border-white/10 pt-[60px]">
                 {/* DESKTOP CENTER LINE */}
                <div className="hidden lg:block absolute left-[30%] top-15 h-[88%] w-px bg-white/10"></div>
                <div className="hidden lg:block absolute left-[30%] top-15 h-[40px] w-px bg-white"></div>
                {/* DESKTOP ICON */}
                <div className="hidden lg:block absolute left-[30%] top-20 -translate-x-1/2 top-6">
                    <img src={smallicon} alt="icon" />
                </div>
                {/* MOBILE LINE */}
                        <div className="lg:hidden absolute left-3 top-10 h-[97.3%] w-px bg-white/10"></div>
                        <div className="lg:hidden lg:block absolute left-3 top-10 h-[40px] w-px bg-white"></div>

                        {/* MOBILE ICON */}
                        <div className="lg:hidden absolute left-0 top-15">
                            <img src={smallicon} alt="icon" />
                        </div>
                {data.map((exp, index) => (
                    <div key={index} className="relative ">
                        <div className="flex flex-col lg:flex-row pt-[20px] lg:pt-[0px]">

                            {/* LEFT SIDE */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:w-[30%] text-white pt-[10px]  pb-[10px] pr-6 pl-10 lg:pl-0 lg:pt-[0px]"
                            >
                                <span className="text-[12px] px-3 py-1 text-[#FFAF7B] rounded-[8px] bg-white/10 border border-white/10 inline-block">
                                    {exp.date}
                                </span>

                                <div className="flex items-center gap-3 mt-5">
                                    <img src={exp.logo} alt="logo" />
                                    <h2 className="text-[26px] lg:text-[40px] font-semibold">
                                        {exp.company}
                                    </h2>
                                </div>

                                <div className="text-[14px] mt-4 text-[#BDBDBD] space-y-2">
                                    <p className="flex gap-2 items-center">
                                        <img src={newlocation} alt="" />
                                        London Area, United Kingdom
                                    </p>
                                    <p className="flex gap-2 items-center">
                                        <img src={work} alt="" />
                                        Full-time · Remote
                                    </p>
                                </div>
                            </motion.div>

                            {/* RIGHT SIDE */}
                            <motion.div
                                variants={{
                                    hidden: {},
                                    show: { transition: { staggerChildren: 0.15 } },
                                }}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                        className="lg:w-[70%] text-white pt-[10px] pb-[10px] lg:pb-[60px] pl-10 lg:pb-[50px] lg:pl-[102px] lg:pt-[0px]"
                            >
                                <motion.h2
                                    variants={item}
                                    className="text-[24px] lg:text-[40px] font-bold"
                                >
                                    {exp.role1}{" "}
                                    <span className="bg-[linear-gradient(to_right,#FF9A8B,#FF6A88,#FFB199)] bg-clip-text text-transparent">
                                        {exp.role2}
                                    </span>
                                </motion.h2>

                                {exp.points.map((pt, i) => (
                                    <motion.p
                                        key={i}
                                        variants={item}
                                        className="text-[12px] lg:text-[14px] leading-[24px] mt-2 lg:mt-4 text-[#D0D0D0]"
                                    >
                                        {pt.p}
                                        <span className="text-[#A0A0A0]">{pt.s}</span>
                                    </motion.p>
                                ))}

                                  {/* Icons */}
                                          <motion.div
                                            className="flex flex-wrap gap-2  pt-[24px] lg:mt-[10px] sm:w-[320px] lg:w-[384px]"
                                            variants={container}
                                          >
                                            {[Docker, Bun, Next, pnpm, PostgreSQL, Redis, Vercel].map((img, i) => (
                                              <motion.img
                                                key={i}
                                                variants={item}
                                                whileHover={{ scale: 1.15 }}
                                                src={img}
                                                alt="logo"
                                              />
                                            ))}
                                          </motion.div>
                            </motion.div>
                          
                        </div>
                    </div>
                ))}
               </div>
            </div>
        </section>
    );
}

export default ExperienceTimeline;