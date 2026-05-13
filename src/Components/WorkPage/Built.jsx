import React from 'react'

function Built() {
  return (
    <section>
        <div className='conatiner'>
            <div className=' flex'>

                <div className=' pt-[42px] pb-[37px] lg:w-[33%]  border-b border-[#FFFFFF]/10'>
                    <div className='flex '>
                        <p className='border-[1px] border-[#8F74BF54] text-[#FFAF7B] bg-[#8F74BF1A] text-[12px] leading-[18px] rounded-[6px] px-[6px] py-[4px]'>01</p>
                    </div>
                    <h2 className='text-[40px] leading-[48px] font-bold  text-[#FFFFFF] pt-[14px]'>Why I Built This</h2>
                </div>


                <div className=' pt-[38px] pb-[33px] w-[67%] border-b border-l border-[#FFFFFF]/10  pl-[51px]'>
                <p className='text-[#BDBDBD] text-[14px] leading-[24px] '>Most EdTech codebases I'd seen were monoliths held together by duct tape — tangled auth, payment flows with no observability, and  frontend/backend types that drifted silently until something broke in  production. I wanted to build one properly. Not to prove I could use the tech, but to prove I could make the hard calls: where to draw module  boundaries, how to handle a payment webhook that fires twice, what  breaks when your server cold-starts mid-token-refresh.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Built
