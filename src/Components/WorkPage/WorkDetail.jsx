import React from "react";
import { motion } from "framer-motion";

import shopify from "../../assets/Images/Vector (5).svg";
import ProjectTitle from "./ProjectTitle";
import new1 from "../../assets/Images/new1 (1).svg";
import new2 from "../../assets/Images/new1 (2).svg";
import new3 from "../../assets/Images/new1 (3).svg";
import new4 from "../../assets/Images/new1 (4).svg";
import new5 from "../../assets/Images/new1 (5).svg";
import new6 from "../../assets/Images/new1 (6).svg";
import Built from "./Built";
import ImageSection from "./ImageSection";
import KeyInfoSection from "./KeyInfoSection";
import FirstSection from "../WorkDetailPages/Tryfum/FirstSection";
import OurContribution from "../WorkDetailPages/Tryfum/OurContribution";
import Challenge from "../WorkDetailPages/Tryfum/Challenge";
import ImplementationProcess from "../WorkDetailPages/Tryfum/ImplementationProcess";
import KeyAreas from "../WorkDetailPages/Tryfum/KeyAreas";
import Outcomes from "../WorkDetailPages/Tryfum/Outcomes";
import WhatILearned from "../WorkDetailPages/Tryfum/WhatILearned";
import ChallengesNew from "../WorkDetailPages/ChallengesNew";
import KeyAreasNew from "../WorkDetailPages/KeyAreasNew";
import Process from "../WorkDetailPages/Process";
import FirstSectionRetroSpec from "../WorkDetailPages/RetroSpec/FirstSectionRetroSpec";
import OurContributionRetroSpec from "../WorkDetailPages/RetroSpec/OurContributionRetroSpec";
import ChallengeRetroSpec from "../WorkDetailPages/RetroSpec/ChallengeRetroSpec";
import ImplementationProcessRetroSpec from "../WorkDetailPages/RetroSpec/ImplementationProcessRetroSpec";
import KeyAeasRetroSpec from "../WorkDetailPages/RetroSpec/KeyAeasRetroSpec";
import WhatILearnedRetroSpec from "../WorkDetailPages/RetroSpec/WhatILearnedRetroSpec";
import FirstSectionWoahBros from "../WorkDetailPages/WoahBros/FirstSectionWoahBros";
import OurContributionWoahBros from "../WorkDetailPages/WoahBros/OurContributionWoahBros";
import ChallengeWoahBros from "../WorkDetailPages/WoahBros/ChallengeWoahBros";
import ImplementationProcessWoahBros from "../WorkDetailPages/WoahBros/ImplementationProcessWoahBros";
import KeyAreasWoahBros from "../WorkDetailPages/WoahBros/KeyAreasWoahBros";
import OutcomesWoahBros from "../WorkDetailPages/WoahBros/OutcomesWoahBros";

function WorkDetail({ project }) {
  const logos = [
    new2,
    new3,
    new1,
    new5,
    new4,
    new6,
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
  ];

  if (!project) {
    return null;
  }

  return (
    <section className="pt-[35px] lg:pt-[100px] lato-regular overflow-hidden px-[20px] md:px-0">
      <div className="container">
        <div>
          {/* top heading */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap justify-between items-end pb-[15px] lg:pb-[30px] border-b border-[#FFFFFF]/10">
              <div>
                <ProjectTitle
                  logo={shopify}
                  title={project.title}
                  highlight={project.highlight}
                />

                {/* <motion.p
                  className="text-[14px] leading-[24px] text-[#BDBDBD] max-w-[684px] pt-[5px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  {project.description}
                </motion.p> */}
              </div>

              <div className="pt-[10px]">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#8F74BF20",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="border-[1px] border-[#8F74BF54] rounded-[8px] text-[12px] leading-[24px] text-[#FFAF7B] pt-[3px] pb-[5px] pl-[11px] pr-[12px] cursor-pointer"
                >
                  Copy Page
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* details section */}
          <motion.div
            className="lg:flex "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-[#FFFFFF]/10 lg:w-[40%] pt-[20px] pb-[20px] lg:pr-[80px] lg:pt-[32px] lg:pb-[47px]">
              <div className="flex justify-between">
                {/* <motion.div
                  className="flex flex-col gap-[15px] lg:gap-[24px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      TECK STACK
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      {project.techStack}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      UPDATED
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      {project.updated}
                    </p>
                  </div>
                </motion.div> */}

                <motion.div
                  className="flex justify-between gap-[15px] w-full lg:gap-[24px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      ROLE
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      VISIT
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      {project.visit}
                    </p>
                  </div>
                </motion.div>

                {/* <motion.div
                  className="flex flex-col gap-[15px] lg:gap-[24px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      BUILT
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      {project.built}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      SOURCE
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      {project.source}
                    </p>
                  </div>
                </motion.div> */}
              </div>
            </div>

            {/* right section */}
            <motion.div
              className="lg:w-[60%]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="border-b lg:border-l border-[#FFFFFF]/10 h-full  pt-[20px] pb-[20px] lg:pt-[32px] lg:pl-[40px] lg:pb-[40px]">
                <div>
                  <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                    TECH STACK
                  </p>

                  <div className="pt-[6px]">
                    {/* mobile */}
                    <div className="flex flex-wrap gap-[6px] lg:gap-[11px] max-w-[400px] sm:hidden">
                      {logos.slice(0, 8).map((img, i) => (
                        <motion.img
                          key={i}
                          src={img}
                          alt="logo"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: i * 0.08,
                            duration: 0.3,
                          }}
                          whileHover={{
                            scale: 1.15,
                            rotate: 5,
                          }}
                          viewport={{ once: true }}
                          className="cursor-pointer"
                        />
                      ))}
                    </div>

                    {/* desktop */}
                    <div className="hidden sm:max-w-[610px] sm:flex flex-wrap gap-[9px]">
                      {logos.slice(0, 13).map((img, i) => (
                        <motion.img
                          key={i}
                          src={img}
                          alt="logo"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: i * 0.08,
                            duration: 0.3,
                          }}
                          whileHover={{
                            scale: 1.15,
                            y: -4,
                          }}
                          viewport={{ once: true }}
                          className="cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* tryfum components */}
        <FirstSection project={project} />
        <OurContribution project={project} />
        <ChallengesNew project={project} />
        <Challenge project={project} />
        <ImplementationProcess project={project} />
       <div
          className={`flex ${project.reverseMobile ? "flex-col-reverse" : "flex-col"} ${
            project.reverseDesktop ? "lg:flex-col-reverse" : "lg:flex-col"
          }`}
        >
          <ImageSection project={project} />
          {/* <KeyAreasNew project={project} /> */}
          <KeyAreas project={project} />
        </div>
        <Outcomes project={project} />
        <WhatILearned project={project} />


        {/* 2nd page FirstSection.jsx  */}
        <FirstSectionRetroSpec  project={project}/>
        <OurContributionRetroSpec project={project} />
        <ChallengeRetroSpec  project={project} />
        <ImplementationProcessRetroSpec project={project} />
        <ImageSection project={project} />
        <KeyAeasRetroSpec project={project} />
        <WhatILearnedRetroSpec project={project} />

        {/* 3rd WoahBros Page  */}
        <FirstSectionWoahBros  project={project} /> 
        <OurContributionWoahBros  project={project} />
        <ChallengeWoahBros project={project}  />
        <ImplementationProcessWoahBros project={project}  />
        <ImageSection project={project} />
        <KeyAreasWoahBros project={project} />
        <OutcomesWoahBros project={project} />
        
      </div>
    </section>
  );
}

export default WorkDetail;
