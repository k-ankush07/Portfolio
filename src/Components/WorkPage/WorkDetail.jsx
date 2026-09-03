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
import image99 from "../../assets/Images/image 99.svg";
import image2 from "../../assets/Images/secondSectionImage.svg";
import image3 from "../../assets/Images/thirdSection.svg";
import imagefull from "../../assets/Images/image1full.svg";
import imagefull2 from "../../assets/Images/fullImage2.svg";
import newImage from "../../assets/Images/newImage.svg";
import secondLastSection from "../../assets/Images/secondLastSection.svg";
import Built from "./Built";
import ImageSection from "./ImageSection";
import KeyInfoSection from "./KeyInfoSection";
// import WorksFull from './WorksFull';
// import Backend_Architecture from './Backend_Architecture';
// import Backend_ArchitectureSecond from './Backend_ArchitectureSecond';
// import Challenges from './Challenges';
// import Learned from './Learned';

function WorkDetail() {
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

  return (
    <section className="pt-[35px] lg:pt-[100px] lato-regular overflow-hidden px-[20px] md:px-0">
      <div className="container">
        <div>
          {/* top heading */}
          <motion.div
            className="px-2 md:px-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap justify-between items-end pb-[15px] lg:pb-[30px] border-b border-[#FFFFFF]/10">
              <div>
                <ProjectTitle
                  logo={shopify}
                  title="Recruiter"
                  highlight=" One"
                />

                <motion.p
                  className="text-[14px] leading-[24px] text-[#BDBDBD] max-w-[684px] pt-[5px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Developed a recruitment platform to connect job seekers and
                  recruiters. Implemented job posting, candidate profiles, and
                  application tracking. Built secure user authentication and
                  role-based dashboards
                </motion.p>
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
            className="lg:flex px-2 md:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-[#FFFFFF]/10 lg:w-[60%] pt-[20px] pb-[20px] lg:pr-[80px] lg:pt-[32px] lg:pb-[47px]">
              <div className="flex justify-between">
                <motion.div
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
                      Web App
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      UPDATED
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      Q4 2024
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-[15px] lg:gap-[24px]"
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
                      Full-stack Developer
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      VISIT
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      academy.aayushbharti.in
                    </p>
                  </div>
                </motion.div>

                <motion.div
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
                      Q4 2024
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] leading-[24px] text-[#BDBDBD]">
                      SOURCE
                    </p>

                    <p className="text-[14px] leading-[24px] text-[#FFFFFF] font-semibold">
                      GitHub
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* right section */}
            <motion.div
              className="lg:w-[40%]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="border-b lg:border-l border-[#FFFFFF]/10 h-full px-2 sm:px-0 pt-[20px] pb-[20px] lg:pt-[32px] lg:pl-[40px] lg:pb-[40px]">
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

          <Built
            websitePt="pt-[20px]"
            websitebp="pb-[20px]"
            leftwidth="lg:w-[53%]"
            rightwidth="lg:w-[47%]"
            image={image99}
            fum="FÜM — The Good Habit"
            websiteRedesign="Website Redesign · Brand Experience · eCommerce"
            fumpara="FÜM is a habit-replacement brand on a mission to help people break destructive habits and build better ones. The project focused on translating this powerful mission into a distinctive digital experience that could communicate the brand's story, growing impact, products, and community in one cohesive journey."
          />

          <Built
            borderTop="lg:border-t"
            borderColor="lg:border-[#FFFFFF]/10"
            ptsection="lg:pt-[40px]"
            leftwidth="lg:w-[47%]"
            rightwidth="lg:w-[53%]"
            reverse
            websiteRedesign=""
            image={image2}
            fum="Our Contribution"
            pointes={[
              "UX Strategy & Information Architecture",
              "Website UX/UI Design",
              "Visual Direction",
              "Brand Storytelling",
              "Responsive Design System",
              "eCommerce Experience Design",
              "Content & Conversion Structure",
            ]}
            buttonText="View the final experience"
            buttonLink="#"
          />

          <Built
            websitePt="pt-[20px]"
            borderTop="lg:border-t"
            borderColor="lg:border-[#FFFFFF]/10"
            ptsection="lg:pt-[40px]"
            leftwidth="lg:w-[53%]"
            rightwidth="lg:w-[47%]"
            websiteRedesign=""
            image={image3}
            fum="The Challenge"
            fumpara="FÜM is much more than a product—it represents a larger mission around replacing destructive habits with healthier alternatives. The existing digital experience needed to communicate that mission clearly while supporting multiple user needs. <br/>  <br/> 
Visitors needed to understand the story behind FÜM, explore the brand's journey, discover products, learn about the science, and engage with the community. <br/> <br/> 

The challenge was to bring all of these elements together without creating a typical, overly commercial eCommerce experience. The website needed to feel human, bold, unconventional, and purpose-driven while remaining easy to navigate and explore"
          />
          <ImageSection />

          <KeyInfoSection
            title="Key Areas of Improvement"
            items={[
              {
                number: 1,
                heading: "Stronger Brand Storytelling",
                description:
                  "The website was structured around FÜM's mission and journey rather than presenting the brand as just another product store.",
                bullets: [
                  "Created a stronger narrative from the first screen.",
                  "Introduced the brand mission with clear, impactful messaging.",
                  "Turned the company's history into an engaging visual journey.",
                  "Used real moments, team imagery, and milestones to create authenticity.",
                  "Made long-form content easier to scan and explore.",
                ],
              },
              {
                number: 2,
                heading: "Clearer Information Architecture",
                description:
                  "With products, educational content, company history, and support all living within the same ecosystem, clarity was essential.",
                bullets: [
                  "Simplified the primary navigation.",
                  "Created clear paths between Shop, Journey, Science & Safety, and support.",
                  "Improved content grouping and hierarchy.",
                  "Made important information easier to discover.",
                  "Reduced unnecessary friction between brand discovery and product exploration.",
                ],
              },
              {
                number: 3,
                heading: "A More Distinctive Visual Experience",
                description:
                  "The design needed to reflect FÜM's unique personality and avoid the polished-but-generic look often seen in wellness brands.",
                bullets: [
                  "Developed a bold editorial layout system.",
                  "Used expressive typography to create stronger hierarchy.",
                  "Introduced signature accent colors and moments throughout the experience.",
                  "Combined clean structure with unexpected visual compositions.",
                  "Used generous whitespace to give storytelling content room to breathe.",
                ],
              },
              {
                number: 4,
                heading: "Humanizing the Brand",
                description:
                  "The mission becomes more meaningful when visitors can see the people behind it.",
                bullets: [
                  "Featured authentic team photography.",
                  "Added founder-led storytelling.",
                  "Created space for the company's beliefs and purpose.",
                  "Used community-focused imagery throughout the experience.",
                  "Shifted the focus from simply selling a product to building a connection.",
                ],
              },
              {
                number: 5,
                heading: "Making Impact Visible",
                description:
                  "FÜM's growing community and mission needed to feel tangible rather than hidden inside paragraphs.",
                bullets: [
                  "Created a dedicated impact section.",
                  "Used large-scale statistics for immediate visual impact.",
                  "Organized supporting metrics into a clear, digestible format.",
                  "Connected business growth with the broader mission.",
                  "Made the scale of the FÜM movement easier to understand.",
                ],
              },
              {
                number: 6,
                heading: "Better Conversion Opportunities",
                description:
                  "The experience needed to support business goals without interrupting the brand story.",
                bullets: [
                  "Kept product discovery accessible throughout the journey.",
                  "Used campaign messaging in the announcement bar.",
                  "Created natural transitions from story content to shopping.",
                  "Added newsletter engagement opportunities.",
                  "Structured calls to action around moments of genuine interest.",
                ],
              },

              { sectionHeading: "Process" },

              {
                headinginner: "Discovery & Brand Understanding",
                descriptioninner:
                  "We explored the FÜM brand, its mission, audience, product ecosystem, and the role the website needed to play beyond eCommerce.",
              },
              {
                headinginner: "Content Strategy",
                descriptioninner:
                  "The content was reorganized around a clearer journey: <br/><strong>Discover the mission → Understand the story → See the impact → Connect with the people → Explore the brand</strong>",
              },
              {
                headinginner: "Information Architecture",
                descriptioninner:
                  "A more intuitive structure was developed to connect the major areas of the website while making navigation simple and predictable.",
              },
              {
                headinginner: "UX & Wireframing",
                descriptioninner:
                  "Layouts were planned around content hierarchy, storytelling rhythm, and the way users move through long-form brand content.",
              },
              {
                headinginner: "Visual Design",
                descriptioninner:
                  "A distinctive visual language was created through bold typography, structured grids, editorial imagery, signature accent colors, and purposeful whitespace.",
              },
              {
                headinginner: "Responsive Experience",
                descriptioninner:
                  "The design system was developed to maintain the same clarity, personality, and storytelling impact across different screen sizes.",
              },

              { sectionHeading: "Key Features" },

              {
                headinginner: "Immersive Brand Story",
                descriptioninner:
                  "A dedicated storytelling experience that introduces the mission and history behind FÜM.",
              },
              {
                headinginner: "Visual Timeline",
                descriptioninner:
                  "Key milestones are transformed into an easy-to-follow chronological journey.",
              },
              {
                headinginner: "Impact at a Glance",
                descriptioninner:
                  "Large statistics and supporting metrics communicate the scale of the brand and its community.",
              },
              {
                headinginner: "Founder Perspective",
                descriptioninner:
                  "A personal section adds authenticity and gives the mission a more human voice.",
              },
              {
                headinginner: "Community-Led Experience",
                descriptioninner:
                  "Real people and team imagery reinforce the sense that FÜM is building a movement, not simply selling a product.",
              },
              {
                headinginner: "Integrated Product Discovery",
                descriptioninner:
                  "Users can move naturally from learning about the brand to exploring products without breaking the experience.",
              },
              {
                headinginner: "Educational Navigation",
                descriptioninner:
                  "Important areas such as Science & Safety and other educational resources are given a clear place within the ecosystem.",
              },
              {
                headinginner: "Responsive Design System",
                descriptioninner:
                  "A consistent visual and functional experience across desktop and mobile.",
              },
            ]}
            cards={[
              { label: "Before", image: imagefull },
              { label: "After", image: imagefull2 },
            ]}
          />
          <Built
            ptsection="lg:pt-[40px]"
            borderTop="lg:border-t"
            borderColor="lg:border-[#FFFFFF]/10"
            leftwidth="lg:w-[53%]"
            rightwidth="lg:w-[47%]"
            image={secondLastSection}
            fum="Key Outcomes"
            funparapt="pt-[20px]"
            fumpara=" <b>A clearer brand narrative </b> <br/>The website now communicates what FÜM stands for, why it exists, and how its journey connects to its mission. <br/> <br/>

<b>A stronger digital identity </b> <br/>The experience feels more distinctive, expressive, and aligned with FÜM's unconventional personality. <br/> <br/>

<b>Improved content discoverability</b> <br/>Products, brand stories, educational resources, and support are organized into clearer user journeys. <br/> <br/>

<b>More engaging long-form storytelling </b> <br/>Visual timelines, imagery, statistics, and modular layouts make extensive content easier to explore. <br/> <br/>

<b>Stronger emotional connection</b> <br/>Real people, founder messaging, and community moments make the brand feel more authentic and approachable. <br/> <br/>

<b>Better balance between brand and commerce</b> <br/>The website supports product discovery and conversion without sacrificing the story-first experience."
          />

          <Built
            reverse
            paddinBottom="pb-[10px] lg:pb-[52px]"
            ptsection="lg:pt-[40px]"
            borderTop="lg:border-t"
            borderColor="lg:border-[#FFFFFF]/10"
            leftwidth="lg:w-[47%]"
            rightwidth="lg:w-[53%]"
            image={newImage}
            fum="Result"
            funparapt="pt-[20px]"
            fumpara="The final experience transforms the FÜM website into a story-driven digital platform built around <b>purpose, people, and progress.</b> <br/> <br/>

Rather than simply explaining what FÜM sells, the redesign helps visitors understand the bigger idea behind the brand—its journey, its growing impact, and its mission to help people move away from destructive habits and toward better ones. <br/> <br/>

 <b>A bold digital experience designed to turn a brand story into a journey people want to be part of. </b>"
          />

          {/* <WorksFull /> */}
          {/* <Backend_Architecture />
                    <Backend_ArchitectureSecond />
                    <Challenges />
                    <Learned /> */}
        </div>
      </div>
    </section>
  );
}

export default WorkDetail;
