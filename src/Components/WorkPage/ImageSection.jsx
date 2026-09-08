
function ImageSection({ project }) {
  const [mobileImg, desktopImg] = project.imgsection || [];

  return (
    <section>
      <div className="pt-[30px] pb-[30px] lg:pt-[40px] lg:pb-[40px]">
        {/* Mobile: bothimage */}
        <img
          className="w-full h-full shrink-0 block lg:hidden"
          src={mobileImg}
          alt="mobile view image"
        />

        {/* Desktop: fullImage */}
        <img
          className="w-full h-full shrink-0 hidden lg:block"
          src={desktopImg}
          alt="desktop view image"
        />
      </div>
    </section>
  );
}

export default ImageSection;