import React from 'react'
import videoImage from "../../assets/Images/VideoImage.svg"
function VideoSection() {
  return (
    <div className='text-white h-full w-full z-1 cursor-pointer'>
       <img className='h-[100%] w-[100%]' src={videoImage} alt='video_Image' />
    </div>
  )
}

export default VideoSection