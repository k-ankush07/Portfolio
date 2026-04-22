import React from 'react'
import Cards from './Cards'
import image from "../assets/Images/Image.png"
import image2 from "../assets/Images/Testimonial Image (1).png"
import image3 from "../assets/Images/Testimonial Image (2).png"
import image4 from "../assets/Images/Container.png"
import Background  from "../assets/Images/Background+Blur (2).png"
import Background2  from "../assets/Images/Background+Blur (3).png"
import Background3  from "../assets/Images/Background+Blur (4).png"
import Background4 from "../assets/Images/Background+Blur (5).png"
function Developers({ }) {
    return (
        <>
            <section className='bg-[#000000] px-3 pt-6'>
                <div className='container'>
                    <div className=''>

                        <h1 className=' text-[30px] xl:text-[40px] font-bold text-[#FFFFFF] xl:text-center'>
                            Loved by 10,000+
                            <span className="bg-gradient-to-r from-[#D76D77] via-[#D76D77] to-[#FFAF7B] bg-clip-text text-transparent">
                                Developers
                            </span>
                        </h1>
                        <div className='flex justify-center'>
                            <p className='text-[#BDBDBD] text-[18px]  xl:w-[41%] text-center '>Join thousands of developers who have transformed their coding
                                workflow with AI-powered assistance.</p>
                        </div>

                    </div>
                    <div className='sm:flex gap-10 mt-9'>
                        <Cards desc="I used to spend too much time debugging React components — CodeGent made that a thing of the past. The AI suggestions from CodeGent are a game-changer. I get instant feedback that improves both speed and code quality."
                            name="Jaydon Gouse" picture={image}   bg={Background} />
                        <Cards desc="CodeGent is like a senior developer
reviewing my work in real time with highly accurate, time-saving suggestions. CodeGent took my React workflow to
another level. Clean, efficient code, and a
lot less time wasted on repetitive fixes." name="Esther Howard" picture={image2} bg={Background2} />
                        <Cards desc="Since using CodeGent, my code is more
consistent and efficient. It’s a must-have
tool daily. CodeGent transformed my React component writing. The suggestions save hours daily and  improve code quality." name="Robert Fox" picture={image3} bg={Background3} />
                        <Cards desc="CodeGent enables me to write improved,
more reusable, and structured code more
quickly. CodeGent has transformed how I build UI components, with smart hints saving hours and making my code cleaner." name="Albert Flores" picture={image4} bg={Background4} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Developers
