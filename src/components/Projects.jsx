import React, {useState} from 'react'
import ProjectImg1 from '../assets/RobloxGame/1.png';
import ProjectImg2 from '../assets/UnityGame/1.png';
import ProjectImg3 from "../assets/ToDo/4.png"
import ProjectImg4 from "../assets/HitmanGame/6.PNG"
import MyModal from "./Modals/MyModal";
import UnityModal from "./Modals/UnityModal";
import TodoModal from "./Modals/TodoModal";
import HitmanModal from './Modals/HitmanModal';


const Projects = () => {

    
    const[showMyModal, setShowMyModal] = useState(false);
    const handleMoreClick = () => setShowMyModal(true);
    const handleOnClose = () => setShowMyModal(false);

    const[showHitmanModal, setShowHitmanModal] = useState(false);
    const handleHitmanMoreClick = () => setShowHitmanModal(true);
    const handleHitmanOnClose = () => setShowHitmanModal(false);

    const[showUnityModal, setShowMyUnityModal] = useState(false);
    const handleUnityMoreClick = () => setShowMyUnityModal(true);
    const handleUnityOnClose = () => setShowMyUnityModal(false);

    const[showTodoModal, setShowTodoModal] = useState(false);
    const handleTodoMoreClick = () => setShowTodoModal(true);
    const handleTodoOnClose = () => setShowTodoModal(false);

  return (
    <div name="projects" className='w-full md:h-screen sm:h-full text-[#5E3023] bg-[#DAB49D] dark:bg-[#243447] dark:text-[#fff] duration-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#5E3023] border-[#578fba] dark:border-[#c51f5d] dark:text-[#fff] duration-300'>Projects</p>
                <p className='py-6'>These are some of the projects I've worked on or am currently working on!</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* grid item */}
                <div style={{backgroundImage: `url(${ProjectImg4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='invisible group-hover:visible'>
                        <p className='text-2xl font-bold text-[#012A4A] tracking-wider text-center'>
                            Hitman Platformer Game
                        </p>
                        <div className='pt-8 text-center'>
                            <button onClick ={handleHitmanMoreClick} className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>More</button>

                            <a href="https://gego144.itch.io/a-hitmans-mission-to-avenge-his-cat" target="_blank" rel="noreferrer">
                                <button className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>Try Game</button>
                            </a>
                        </div>
                    </div>
                </div>                



                {/* grid item */}
                <div style={{backgroundImage: `url(${ProjectImg2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='invisible group-hover:visible'>
                        <p className='text-center text-2xl font-bold text-[#012A4A] tracking-wider'>
                            Unity Game (WIP)
                        </p>
                        <div className='pt-8 text-center'>
                            <button onClick={handleUnityMoreClick} className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>More</button>

                            <a href="https://github.com/mabrar02/aaron-addit-game" target="_blank" rel="noreferrer">
                                <button className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>See Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${ProjectImg1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='invisible group-hover:visible'>
                        <p className='text-2xl font-bold text-[#012A4A] tracking-wider text-center'>
                            Roblox Minigame Arena Game
                        </p>
                        <div className='pt-8 text-center'>
                            <button onClick ={handleMoreClick} className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>More</button>

                            <a href="https://www.roblox.com/games/11451849707/Minigame-Arena" target="_blank" rel="noreferrer">
                                <button className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>Try Game</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div style={{backgroundImage: `url(${ProjectImg3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
                items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='invisible group-hover:visible'>
                        <p className='text-center text-2xl font-bold text-[#012A4A] tracking-wider'>
                            ToDo List ReactNative App
                        </p>
                        <div className='pt-8 text-center'>
                            <button onClick={handleTodoMoreClick} className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>More</button>
                            <a href="https://github.com/mabrar02/ToDo-List" target="_blank" rel="noreferrer">
                                <button className='hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-white text-[#012A4A] font-bold text-lg'>See Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                

            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal}/>
            <UnityModal onClose={handleUnityOnClose} visible={showUnityModal}/>
            <TodoModal onClose={handleTodoOnClose} visible={showTodoModal}/>
            <HitmanModal onClose={handleHitmanOnClose} visible={showHitmanModal}/>

        </div>
    </div>
  )
}

export default Projects