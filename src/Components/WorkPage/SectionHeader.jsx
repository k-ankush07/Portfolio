const SectionHeader = ({ number, title, className = "" }) => {
  return (
    <div
      className={`pt-[42px] pb-[37px] lg:w-[33%] border-t border-b border-[#FFFFFF]/10 ${className}`}
    >
      <div className="flex">
        <p className="border border-[#8F74BF54] text-[#FFAF7B] bg-[#8F74BF1A] text-[12px] leading-[18px] rounded-[6px] px-[6px] py-[4px]">
          {number}
        </p>
      </div>

      <h2 className="text-[40px] leading-[48px] font-bold text-[#FFFFFF] pt-[14px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;