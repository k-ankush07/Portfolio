import React from "react";
import { motion } from "framer-motion";

function KeyInfoSection({
  reverse = false,
  title,
  items = [],
  cards = [],
  ptsection,
  borderTop,
  borderColor,
}) {
  let contentIndex = 0;

  return (
    <section className={`${ptsection}`}>
      <motion.div
        className={`flex flex-col-reverse lg:flex-row px-2 md:px-0 ${reverse ? "lg:flex-row-reverse" : ""} ${borderTop} ${borderColor}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* text / list side */}
        <motion.div
          className={`pt-[20px]  lg:pt-[40px] lg:pb-[40px] lg:w-[53%] lg:border-b border-t border-[#FFFFFF]/10 ${
            reverse ? "lg:pl-[40px]" : "lg:pr-[40px]"
          }`}
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {title && (
            <h2 className="text-white text-[24px] lg:text-[40px] lg:leading-[48px] font-bold pb-[20px]">
              {title}
            </h2>
          )}

          <div className="flex flex-col">
            {items.map((item, index) => {
              if (item.sectionHeading) {
                const headingDelay = 0.15 + Math.min(contentIndex, 8) * 0.08;
                return (
                  <motion.h2
                    key={index}
                    className={`text-[#BDBDBD] text-[22px] lg:text-[28px] font-bold pt-[10px] ${
                      index === 0 ? "" : "mt-[24px]"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: headingDelay, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {item.sectionHeading}
                  </motion.h2>
                );
              }


              const delay = 0.15 + Math.min(contentIndex, 8) * 0.08;
              const prevIsHeading =
                index > 0 && items[index - 1]?.sectionHeading;
              contentIndex += 1;

              return (
                <motion.div
                  key={index}
                  className={
                    index === 0 ? "" : prevIsHeading ? "mt-[8px]" : "mt-[24px]"
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.heading && (
                    <h3 className="text-[#BDBDBD] text-[16px] lg:text-[24px]  leading-[24px] font-semibold LG:pb-[8px]">
                      {item.number && (
                        <span className="text-[#BDBDBD] pr-[6px]">
                          {item.number}.
                        </span>
                      )}
                      {item.heading}
                    </h3>
                  )}

                  <div>
                    {item.headinginner && (
                    <h4 className="text-[#BDBDBD] text-[14px] leading-[24px] font-semibold ">
                      {item.headinginner}
                    </h4>
                  )}
                  {item.descriptioninner && (
                    <p
                      className="text-[13px] lg:text-[14px] text-[#BDBDBD] leading-[24px] "
                      dangerouslySetInnerHTML={{
                        __html: item.descriptioninner,
                      }}
                    />
                  )}
                  </div>

                  {item.description && (
                    <p
                      className="text-[13px] lg:text-[14px] text-[#BDBDBD] leading-[24px] pb-[30px]"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}

                  {item.bullets?.length > 0 && (
                    <ul className="flex flex-col gap-[8px]">
                      {item.bullets.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-[8px] text-[13px] lg:text-[14px] text-[#BDBDBD] pl-[10px] "
                        >
                          <span className="flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#BDBDBD]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* cards / media side */}
        <motion.div
          className={`flex flex-col  pb-[20px] lg:pt-[40px] lg:pb-[40px] lg:w-[47%] lg:border-b lg:border-t ${
            reverse ? "lg:border-r lg:pr-[51px]" : "lg:border-l lg:pl-[40px]"
          } border-[#FFFFFF]/10`}
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-[20px] lg:gap-[67px]">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {card.label && (
                  <p className="text-center text-[#FFFFFF] text-[18px] lg:text-[40.45px] lg:leading-[80.9px] font-bold pb-[10px] lg:pb-[33px]">
                    {card.label}
                  </p>
                )}

                {card.image && (
                  <div className="rounded-[16px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.label || ""}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {card.value && (
                  <div className="bg-white rounded-[16px] p-[20px]">
                    <h3 className="text-black text-[36px] lg:text-[44px] font-bold">
                      {card.value}
                    </h3>
                    {card.title && (
                      <p className="text-black text-[14px] font-semibold pt-[6px]">
                        {card.title}
                      </p>
                    )}
                    {card.description && (
                      <p className="text-[#666] text-[12px] pt-[4px]">
                        {card.description}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default KeyInfoSection;
