import React from 'react'
import {FaTimes} from "react-icons/fa";
import Slider from '../Sliders/Slider';

const MyModal = ({visible, onClose}) => {
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
            <Slider />
            <div>
                <p className="flex text-center">A multiplayer game where players face off against one another in minigames. This project
                was made in Roblox Studio and was coded in the Lua language.</p>
            </div>
        </div>

    </div>
  )
}

export default MyModal