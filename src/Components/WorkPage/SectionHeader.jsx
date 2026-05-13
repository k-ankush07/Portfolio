const SectionHeader = ({ number, title, className = "" }) => {
  return (
    <div
      className={ `pt-[20px] pb-[10px] lg:pt-[42px] lg:pb-[37px] lg:w-[33%] border-t lg:border-b border-[#FFFFFF]/10 ${className}`}
    >
      <div className="flex">
        <p className="border border-[#8F74BF54] text-[#FFAF7B] bg-[#8F74BF1A] text-[12px] leading-[18px] rounded-[6px] px-[6px] py-[4px]">
          {number}
        </p>
      </div>

      <h2 className="text-[31px] lg:text-[40px] leading-[48px] font-bold text-[#FFFFFF] pt-[8px] lg:pt-[14px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;