import React from 'react'
import {FaTimes} from "react-icons/fa";
import UnitySlider from '../Sliders/UnitySlider';

const UnityModal = ({visible, onClose}) => {
    const handleOnClose = (e) => {
        if(e.target.id === "container"){
            onClose();
        }
    }
    if(!visible) return null
  return (
    <div id="container" onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center'>
        <div className='bg-[#DAB49D] p-2 rounded-md max-w-[1000px] dark:bg-[#243447] dark:text-[#fff]'>
            <div onClick={onClose} className="flex justify-end pb-2"><FaTimes className="hover:cursor-pointer"/></div>
            <UnitySlider />
            <div>
                <p className="flex text-center">
                    I am currently working on a 2D co-op multiplayer platforming puzzle game where two lost spirits have to work together to make their way to 
                    the afterlife! This game is being made using Unity Engine and features a multitude of gameplay mechanics such as a dash. Coded completely in 
                    C#.
                </p>
            </div>
        </div>

    </div>
  )
}

export default UnityModal


