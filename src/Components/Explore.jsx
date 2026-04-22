import React from 'react'
import ToolWeTrust from './ToolWeTrust'
import CustomerReview from './CustomerReview'
import Blogs from './Blogs'

function Explore() {
  return (
   <>
   <section className='bg-[#000000] px-4 xl:px-0 pb-6 pt-5'>

    <div className='container'>
        <div className='text-center bg-[#000000] text-[#FFFFFF] py-8'>
        <div className='text-[44px] font-bold '>
            Explore, experiment <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">&& say hello</span>
        </div>
      <p className='text-[18px] mt-2 text-[#BDBDBD]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
      <div className='md:flex gap-2 justify-center '>
        <ToolWeTrust />
        <CustomerReview />
        <Blogs />

      </div>
      

    </div>
   </section>
   
   </>
  )
}

export default Explore
