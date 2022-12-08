import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full sm:h-screen bg-[#DAB49D] dark:bg-[#243447] duration-300 text-[#5E3023]'>
        <div className = "flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#578fba] dark:border-[#c51f5d] dark:text-[#fff] duration-300'>About</p>
                </div>
            </div>
            <div></div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className="sm:text-right text-4xl font-bold">
                    <p className='text-[#012A4A] dark:text-[#9199a3] duration-300'>My backstory and who I am. Why do I code?</p>
                </div>
                <div>
                    <p className='dark:text-[#fff] duration-300'>My name is Mahdeen Abrar and I'm currently a 3rd year Computer Science major. Both of my parents were born in Bangladesh but they had me in Canada and I was lucky enough to experience modern technology from
                        a young age. I grew up playing games all my life and I've always had a knack for math, so naturally Computer Science was the only 
                        right option for me. Innovation, effeciency, and optimization excites me and I'm always working hard to become someone who can make an 
                        impact on the world of technology!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About