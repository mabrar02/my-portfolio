import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name = "home" className = ' w-full h-screen bg-[#DAB49D] dark:bg-[#243447] duration-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#5E3023] dark:text-[#fff] duration-300 text-2xl'>Hi! My name is,</p>
            <h1 className='text-[#012A4A]  dark:text-[#9199a3] duration-300 text-4xl sm:text-7xl font-bold'>Mahdeen Abrar</h1>
            <h2 className='text-[#578fba] text-4xl dark:text-[#c51f5d] duration-300 sm:text-7xl font-bold'>I'm a student developer.</h2>
            <p className='text-[#5E3023] dark:text-[#fff] duration-300 py-4 max-w-[700px]'>I'm a 20 year old computer science student with a passion for development! My primary interests are Software 
            Engineering, Game Development, and Web Dev. I love everything that has to do with technology and am constantly looking to expand my knowledge and skillset! </p>
            
            <div className='max-w-[180px]'>
                <Link className='
                dark:hover:border-[#c51f5d] dark:hover:bg-[#c51f5d]
                group text-[#5E3023] dark:text-[#fff] dark:border-[#fff] duration-300
                 border-[#5E3023] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#578fba] hover:cursor-pointer
                  hover:border-[#578fba] hover:text-[#012A4A]' to="projects" smooth={true} duration={500}>
                    My Projects
                    <span className="group-hover:rotate-90 group-hover:duration-300">
                        <HiArrowNarrowRight className = 'ml-3'/>
                    </span>
                </Link>

            </div>
        </div>





    </div>
  )
}

export default Home