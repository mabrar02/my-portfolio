import React, {useState} from 'react'
import ProjectImg1 from '../../assets/ToDo/1.png';
import ProjectImg2 from '../../assets/ToDo/2.png';
import ProjectImg3 from '../../assets/ToDo/3.png';
import ProjectImg4 from '../../assets/ToDo/4.png';

import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from "react-icons/ai";

const projectImages = [
    ProjectImg1,
    ProjectImg2,
    ProjectImg3,
    ProjectImg4,
]

const TodoSlider = () => {

    const[currentIndex, setCurrentIndex] = useState(0);
    

    const handleOnNextClick = () =>{
        if(currentIndex+1 >= projectImages.length){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex(currentIndex+1);
        }


    }
    const handleOnPrevClick =() =>{
        if(currentIndex-1 < 0){
            setCurrentIndex(projectImages.length-1);
        }
        else{
            setCurrentIndex(currentIndex-1);
        }

    }

  return (
    <div className=' select-none relative'>
        <div className="flex justify-center">
            <img className="border-black border-2 max-h-[600px] mb-4" src={projectImages[currentIndex]} alt=""/>
        </div>

        <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
            <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-80' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}/></button>
            <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-80' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}/></button>
        </div>

    </div>
  )
}
export default TodoSlider