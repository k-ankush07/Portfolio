import React from 'react'

function ImageSectionApmzee({ project }) {
  const [mobileImg, desktopImg] = project?.imgsectionApmzee || [];

  if (!mobileImg && !desktopImg) {
    return null;
  }

  return (
    <section>
      <div className="">
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
  )
}

export default ImageSectionApmzee