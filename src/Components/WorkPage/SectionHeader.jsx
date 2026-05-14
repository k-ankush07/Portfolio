import { motion } from "framer-motion";

const SectionHeader = ({ number, title, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`pt-[20px] pb-[10px] lg:pt-[42px] lg:pb-[37px] lg:w-[57%] xl:[33%] border-t lg:border-b border-[#FFFFFF]/10 ${className}`}
    >

      <div className="flex">

        <motion.p
          whileHover={{
            scale: 1.08,
            rotate: 2
          }}
          transition={{ duration: 0.3 }}
          className="border border-[#8F74BF54] text-[#FFAF7B] bg-[#8F74BF1A] text-[12px] leading-[18px] rounded-[6px] px-[6px] py-[4px]"
        >
          {number}
        </motion.p>

      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-[31px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF] pt-[8px] lg:pt-[14px]"
      >
        {title}
      </motion.h2>

    </motion.div>
  );
};

export default SectionHeader;