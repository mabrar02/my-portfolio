import React from 'react'

import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Azure from "../assets/AzureLogo.png";
import Html from "../assets/html.png";
import ReactLogo from "../assets/react.png";
import CSharp from "../assets/Csharp_Logo.png";
import Java from "../assets/java.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name='skills' className='bg-[#DAB49D] dark:bg-[#243447] duration-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline  border-[#578fba] dark:border-[#c51f5d] dark:text-[#fff]  text-[#5E3023] duration-300'> Skills </p>
                <p className='py-4 text-[#5E3023] dark:text-[#fff] duration-300'>Some of the various languages/tools I have intermediate to advanced experience with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#012A4A]'>
                {/* Java */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={Java} alt="Java logo"/>
                    <p className='my-4'>Java</p>
                </div>

                {/* C# */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={CSharp} alt="C# logo"/>
                    <p className='my-4'>C#</p>
                </div>
                
                {/* GitHub */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={GitHub} alt="GitHub logo"/>
                    <p className='my-4'>GitHub</p>
                </div>

                {/* Azure */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={Azure} alt="Azure logo"/>
                    <p className='my-4'>Azure</p>
                </div>

                {/* HTML */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={Html} alt="HTML logo"/>
                    <p className='my-4'>HTML</p>
                </div>

                {/* Tailwind*/}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={Tailwind} alt="Tailwind Logo"/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>

                {/* JavaScript */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={JavaScript} alt="JavaScript logo"/>
                    <p className='my-4'>JavaScript</p>
                </div>

                {/* React */}
                <div className='shadow-md shadow-[#301c17] dark:shadow-[#040c16] dark:text-[#fff] hover:scale-110 duration-300 rounded-md'>
                    <img className ="w-20 mx-auto mt-5" src={ReactLogo} alt="React logo"/>
                    <p className='my-4'>React</p>
                </div>
                
            </div>
            


        </div>
    </div>
  )
}

export default Skills