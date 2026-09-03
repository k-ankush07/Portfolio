import React from 'react'
import videoImage from "../../assets/Images/VideoImage.svg"
function VideoSection() {
  return (
    <section className=' px-[20px] pt-[21px] lg:pt-0 md:px-0 w-full   lg:w-[60%] ' >
      <div className= 'h-[100%] z-1 cursor-pointer'>
       <img className=' h-[100%] w-[100%] object-cover rounded-[8px]' src={videoImage} alt='video_Image' />
    </div>
    </section>
  )
}

export default VideoSection