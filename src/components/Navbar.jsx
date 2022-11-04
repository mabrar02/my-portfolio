import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {Link} from 'react-scroll';
import ReactSwitch from "react-switch";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState("light");
    const handleClick = () => setNav(!nav);

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#DAB49D] text-[#5E3023]
    dark:bg-[#243447] dark:text-[#fff] duration-300'>

        <div className='flex items-center space-x-3 px-4'>
            <ReactSwitch onChange={handleThemeSwitch} checked={theme==="dark"} checkedIcon={false} uncheckedIcon={false} onColor={"#578fba"} offColor={"#807669"}/>
            <p className='text-[#5E3023] dark:text-[#fff] duration-300'>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
        </div>
        {/* menu */}
        <ul className="hidden md:flex">
            <li className='hover:scale-110'>
                <Link  to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='hover:scale-110'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='hover:scale-110'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='hover:scale-110'>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='hover:scale-110'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        
        {/* hamburger icon */}
        <div onClick={handleClick} className = "md:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* mobile */}
        <ul className ={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#DAB49D] dark:bg-[#243447] flex flex-col justify-center items-center"}>
            <li className='hover:scale-125 duration-300 py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='hover:scale-125 duration-300 py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='hover:scale-125 duration-300 py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='hover:scale-125 duration-300 py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='hover:scale-125 duration-300 py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a target = "_blank" className="flex justify-between items-center w-full text-[#FEFAE0] "href="https://www.linkedin.com/in/mahdeen-abrar-982ab2231/" rel = "noreferrer">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a target = "_blank" rel = "noreferrer" className="flex justify-between items-center w-full text-[#FEFAE0] "href="https://github.com/mabrar02">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#73C4D4]">
                    <a className="flex justify-between items-center w-full text-[#FEFAE0] "href="mailto:mh217006@dal.ca" rel = "noreferrer">
                        Contact <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
                    <a target="_blank" rel ="noreferrer" className="flex justify-between items-center w-full text-[#FEFAE0]" href={Resume}>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar