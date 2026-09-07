import image99 from "../assets/Images/image 99.svg";
import image2 from "../assets/Images/secondSectionImage.svg";
import image3 from "../assets/Images/thirdSection.svg";
import imagefull from "../assets/Images/image1full.svg";
import imagefull2 from "../assets/Images/fullImage2.svg";
import newImage from "../assets/Images/newImage.svg";
import secondLastSection from "../assets/Images/secondLastSection.svg";


const commonKeyInfoItems = [
  {
    number: 1,
    heading: "Stronger Brand Storytelling",
    description:
      "The website was structured around the brand's mission and journey rather than presenting the brand as just another product store.",
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
      "The design needed to reflect the brand's unique personality and avoid the polished-but-generic look often seen in wellness brands.",
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
      "The brand's growing community and mission needed to feel tangible rather than hidden inside paragraphs.",
    bullets: [
      "Created a dedicated impact section.",
      "Used large-scale statistics for immediate visual impact.",
      "Organized supporting metrics into a clear, digestible format.",
      "Connected business growth with the broader mission.",
      "Made the scale of the movement easier to understand.",
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
      "We explored the brand, its mission, audience, product ecosystem, and the role the website needed to play beyond eCommerce.",
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
      "A dedicated storytelling experience that introduces the mission and history behind the brand.",
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
      "Real people and team imagery reinforce the sense that the brand is building a movement, not simply selling a product.",
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
];

const commonSections = (brandName) => [
  {
    websitePt: "pt-[20px]",
    websitebp: "pb-[20px]",
    leftwidth: "lg:w-[53%]",
    rightwidth: "lg:w-[47%]",
    image: image99,
    fum: `${brandName} — The Good Habit`,
    websiteRedesign: "Website Redesign · Brand Experience · eCommerce",
    fumpara: `${brandName} is a habit-replacement brand on a mission to help people break destructive habits and build better ones. The project focused on translating this powerful mission into a distinctive digital experience that could communicate the brand's story, growing impact, products, and community in one cohesive journey.`,
  },
  {
    borderTop: "lg:border-t",
    borderColor: "lg:border-[#FFFFFF]/10",
    ptsection: "lg:pt-[40px]",
    leftwidth: "lg:w-[47%]",
    rightwidth: "lg:w-[53%]",
    reverse: true,
    websiteRedesign: "",
    image: image2,
    fum: "Our Contribution",
    pointes: [
      "UX Strategy & Information Architecture",
      "Website UX/UI Design",
      "Visual Direction",
      "Brand Storytelling",
      "Responsive Design System",
      "eCommerce Experience Design",
      "Content & Conversion Structure",
    ],
    buttonText: "View the final experience",
    buttonLink: "#",
  },
  {
    websitePt: "pt-[20px]",
    borderTop: "lg:border-t",
    borderColor: "lg:border-[#FFFFFF]/10",
    ptsection: "lg:pt-[40px]",
    leftwidth: "lg:w-[53%]",
    rightwidth: "lg:w-[47%]",
    websiteRedesign: "",
    image: image3,
    fum: "The Challenge",
    fumpara: `${brandName} is much more than a product—it represents a larger mission around replacing destructive habits with healthier alternatives. The existing digital experience needed to communicate that mission clearly while supporting multiple user needs. <br/>  <br/> 
Visitors needed to understand the story behind ${brandName}, explore the brand's journey, discover products, learn about the science, and engage with the community. <br/> <br/> 

The challenge was to bring all of these elements together without creating a typical, overly commercial eCommerce experience. The website needed to feel human, bold, unconventional, and purpose-driven while remaining easy to navigate and explore`,
  },
];

const afterKeyInfoSections = (brandName) => [
  {
    ptsection: "lg:pt-[40px]",
    borderTop: "lg:border-t",
    borderColor: "lg:border-[#FFFFFF]/10",
    leftwidth: "lg:w-[53%]",
    rightwidth: "lg:w-[47%]",
    image: secondLastSection,
    fum: "Key Outcomes",
    funparapt: "pt-[20px]",
    fumpara: ` <b>A clearer brand narrative </b> <br/>The website now communicates what ${brandName} stands for, why it exists, and how its journey connects to its mission. <br/> <br/>

<b>A stronger digital identity </b> <br/>The experience feels more distinctive, expressive, and aligned with ${brandName}'s unconventional personality. <br/> <br/>

<b>Improved content discoverability</b> <br/>Products, brand stories, educational resources, and support are organized into clearer user journeys. <br/> <br/>

<b>More engaging long-form storytelling </b> <br/>Visual timelines, imagery, statistics, and modular layouts make extensive content easier to explore. <br/> <br/>

<b>Stronger emotional connection</b> <br/>Real people, founder messaging, and community moments make the brand feel more authentic and approachable. <br/> <br/>

<b>Better balance between brand and commerce</b> <br/>The website supports product discovery and conversion without sacrificing the story-first experience.`,
  },
  {
    reverse: true,
    paddinBottom: "pb-[10px] lg:pb-[52px]",
    ptsection: "lg:pt-[40px]",
    borderTop: "lg:border-t",
    borderColor: "lg:border-[#FFFFFF]/10",
    leftwidth: "lg:w-[47%]",
    rightwidth: "lg:w-[53%]",
    image: newImage,
    fum: "Result",
    funparapt: "pt-[20px]",
    fumpara: `The final experience transforms the ${brandName} website into a story-driven digital platform built around <b>purpose, people, and progress.</b> <br/> <br/>

Rather than simply explaining what ${brandName} sells, the redesign helps visitors understand the bigger idea behind the brand—its journey, its growing impact, and its mission to help people move away from destructive habits and toward better ones. <br/> <br/>

 <b>A bold digital experience designed to turn a brand story into a journey people want to be part of. </b>`,
  },
];

const buildProject = ({ title, highlight = "", description, visit }) => ({
  title,
  highlight,
  description,
  techStack: "Web App",
  updated: "Q4 2024",
  role: "Full-stack Developer",
  visit,
  built: "Q4 2024",
  source: "GitHub",
  sections: commonSections(title),
  keyInfo: {
    title: "Key Areas of Improvement",
    items: commonKeyInfoItems,
    cards: [
      { label: "Before", image: imagefull },
      { label: "After", image: imagefull2 },
    ],
  },
  afterSections: afterKeyInfoSections(title),
});

const projectsData = {
  tryfum: buildProject({
    title: "TryFum",
    highlight: "",
    description:
      "Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards",
    visit: "academy.aayushbharti.in",
  }),

  syncform: buildProject({
    title: "Syncform",
    highlight: "",
    description:
      "Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards",
    visit: "academy.aayushbharti.in",
  }),

  cartplus: buildProject({
    title: "Cart Plus",
    highlight: "",
    description:
      "Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards",
    visit: "academy.aayushbharti.in",
  }),

  woahbros: buildProject({
    title: "Woahbros",
    highlight: "",
    description:
      "Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards",
    visit: "academy.aayushbharti.in",
  }),

  smash: buildProject({
    title: "Smash",
    highlight: "",
    description:
      "Developed a recruitment platform to connect job seekers and recruiters. Implemented job posting, candidate profiles, and application tracking. Built secure user authentication and role-based dashboards",
    visit: "academy.aayushbharti.in",
  }),
};

export default projectsData;