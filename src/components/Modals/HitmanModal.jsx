import React from 'react'
import {FaTimes} from "react-icons/fa";
import HitmanSlider from '../Sliders/HitmanSlider';

const HitmanModal = ({visible, onClose}) => {
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
            <HitmanSlider />
            <div>
                <p className="flex text-center">A difficult rogue-like action platforming game where a hitman must defeat enemies and bosses whilst traversing through
                challenging terrain to reach the end! Features gadget selections, weapon selections, and movement mechanics such as dashing and walljumping.</p>
            </div>
        </div>

    </div>
  )
}

export default HitmanModal