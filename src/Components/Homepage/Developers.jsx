import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Cards from "./Cards";
// import image from "../../assets/Images/Container.svg"
// import image2 from "../../assets/Images/Testimonial Image.svg"
// import image3 from "../../assets/Images/Testimonial Image (1).svg"
// import image4 from "../../assets/Images/Container.svg"
import image from "../../assets/Images/feedback (1).svg";
import image2 from "../../assets/Images/feedback (2).svg";
import image3 from "../../assets/Images/feedback (3).svg";
import image4 from "../../assets/Images/feedback (4).svg";
import Background from "../../assets/Images/Background+Blur (2).png";
import Background2 from "../../assets/Images/Background+Blur (3).png";
import Background3 from "../../assets/Images/Background+Blur (4).png";
import Background4 from "../../assets/Images/Background+Blur (5).png";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

function Developers({}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const AUTOPLAY_DELAY = 2500;

  const togglePlay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying((prev) => !prev);
  };

  const developersData = [
    {
      desc: "Ankush was very knowledgeable and helpful he did a really great job. We would like to work with him in the near future. ",
      name: " Nathan Maxwell",
      ownertext: "Startup Founder",
      picture: image,
      bg: Background,
    },
    {
      desc: "CodeGent is like a senior developer reviewing my work in real time with highly accurate, time-saving suggestions. CodeGent took my React workflow to another level. Clean, efficient code and a lot less time wasted on repetitive fixes. .",
      name: "Jonathan Clare",
      ownertext: "Store Owner",
      picture: image2,
      bg: Background2,
    },
    {
      desc: "Excellent result, fast and very solution oriented. I can highly recommend to work with Ankush! ",
      name: "Christian Kaufeld",
      ownertext: "Store Owner",
      picture: image3,
      bg: Background3,
    },
    {
      desc: "Ankush was reliable, skilled, and easy to work with. He handled Shopify and Klaviyo tasks efficiently, communicated well, and supported us whenever needed. I’d be happy to work with him again.",
      name: "Iram Mahmood",
      ownertext: "Manager",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "He delivered efficient work and communicated well. However, some tasks were completed without prior approval despite reminders, so I cannot give a full 10 star. Would hire again. ",
      name: "Faven Assefa",
      //  ownertext: "Store Owner",
      picture: image,
      bg: Background,
    },
    {
      desc: "Highly recommend Ankush - he's professional, works fast and accurate, and anytime there is feedback he's quick to action. Keep up the good work!",
      name: "Kate Lawrence",
      ownertext: "Store Owner",
      picture: image2,
      bg: Background2,
    },
    {
      desc: "Ankush was fantastic to work with. He was quick in taking action and easy to communicate with. I will use him in the future.",
      name: "Josh Dylan",
      ownertext: "Store Owner",
      picture: image3,
      bg: Background3,
    },
    {
      desc: "Ankush did an excellent job. He was professional, responsive, and delivered quality work on time. Communication was smooth, and everything met our expectations. Highly recommended and would gladly work together again.",
      name: "Ethan Michael Harris",
      ownertext: "Store Owner",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Freelancer Ankush was extremely helpful. We highly recommend him. His response time was exceptionally quick, and the work was done brilliantly. We will definitely hire him for our future projects. ",
      name: "Justin Pollington-Woods",
      ownertext: "Business Owner",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Ankush was very knowledgeable and helpful he did a really great job. We would like to work with him in the near future. ",
      name: "Nathan Maxwell",
      ownertext: "Startup Founder",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Ankush did a great job with this build. We had a ton of scope creep with this customer, and Ankush handled it like a pro",
      name: " Will Carter ",
      ownertext: "Store Owner",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Great experience working with Ankush, fast turnaround, and smooth communication. He showed solid expertise in Shopify A/B testing tools. ",
      name: "Abdelkhalek Kouch",
      ownertext: "Store Owner",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Ankush delivered strong work, followed the brief closely, and communicated clearly throughout the process. The implementation was clean, well-structured, and delivered on time.",
      name: "Jerry Guillen",
      ownertext: "Startup Founder",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Amazing job! It was a pleasure working with Ankush! He completed the task quickly and perfectly. Would recommend anyone to work with him.",
      name: "Michael Albert",
      ownertext: "Manager",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Great work! He made an excellent site that works well and looks exactly like our design. I highly recommend it.",
      name: "Zakary Logie",
      ownertext: "Manager",
      picture: image4,
      bg: Background4,
    },
    {
      desc: "Ankush is excellent to work with. He's my go to guy for all the dev needs at my agency and will continue working with him.",
      name: " Ethan Parker",
      ownertext: "Store Owner",
      picture: image4,
      bg: Background4,
    },
  ];

  const trustText = "Developers";

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
  return (
    <>
      <section className=" px-[20px] md:px-0 pt-[24px]  lg:pt-[49px] lg:py-0">
        <div className="container">
          <div className="">
            <h1 className=" developer_text text-[30px] sm:text-[35px] lg:text-[44px] leading-[35px] sm:leading-[57px] font-bold text-[#FFFFFF] text-center">
              Loved by 10,000+{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {trustText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            <div className="flex justify-center">
              <p className="text-[#BDBDBD] text-[14px] sm:text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px]   sm:max-w-[500px]  max-w-[550px]  xl:w-[41%] text-center ">
                Join thousands of developers who have transformed their coding
                workflow with AI-powered assistance.
              </p>
            </div>
          </div>
          <div className="sm:flex gap-10 pt-[23px] lg:pt-[33px] ">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1}
              loop={true}
              autoplay={{
                delay: AUTOPLAY_DELAY,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {developersData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Cards {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center justify-center gap-3 pt-[10px]">
            <div className="flex items-center gap-2">
              {developersData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideToLoop(i)}
                  className={`h-[8px] rounded-full transition-all cursor-pointer duration-300 relative overflow-hidden bg-[#3a3a3a] ${
                    i === activeIndex ? "w-[32px]" : "w-[8px]"
                  }`}
                >
                  {i === activeIndex && (
                    <span
                      key={activeIndex + "-" + isPlaying}
                      className="absolute top-0 left-0 h-full bg-white  rounded-full"
                      style={{
                        animation: isPlaying
                          ? `fillBar ${AUTOPLAY_DELAY}ms linear forwards`
                          : "none",
                        width: isPlaying ? undefined : "40%",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={togglePlay}
              className="w-[36px] h-[36px] rounded-full  cursor-pointer bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-[#3a3a3a] transition-colors"
            >
              {isPlaying ? (
                <Pause size={16} fill="white" />
              ) : (
                <Play size={16} fill="white" />
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Developers;
