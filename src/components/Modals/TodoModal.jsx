import React from 'react'
import {FaTimes} from "react-icons/fa";
import TodoSlider from '../Sliders/TodoSlider';

const TodoModal = ({visible, onClose}) => {
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
            <TodoSlider />
            <div>
                <p className="flex text-center">
                    A simple Todo list application that served as my introduction into ReactNative. This app was intended for IOS viewing but works fine on android as well.
                </p>
            </div>
        </div>

    </div>
  )
}

export default TodoModal


