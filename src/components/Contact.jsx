import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen sm:h-full bg-[#DAB49D] dark:bg-[#243447] duration-300 flex justify-center items-center p-4'>

        <form method="POST" action="https://getform.io/f/92067f34-a6bb-4343-9362-1f08599c5a85" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-[#578fba] text-[#5E3023] dark:border-[#c51f5d] dark:text-[#fff] duration-300">Contact</p>
                <p className='text-[#5E3023] dark:text-[#fff] duration-300 py-4'>I'd love to work with you! You can fill out the form or you can reach me via email, mh217006@dal.ca </p>
            </div>
            <input className="bg-[#CCD6F6] p-2" type = "text" placeholder='John Smith' name='name' required/>
            <input className="my-4 p-2 bg-[#CCD6F6]" type = "email" placeholder='JSmith@gmail.com' name='email' required/>
            <textarea className="bg-[#CCD6F6] p-2" name="message" rows="10" placeholder="Your message here!" required></textarea>
            <button className='
            dark:hover:border-[#c51f5d] dark:hover:bg-[#c51f5d] dark:text-[#fff] dark:border-[#fff] duration-300
            text-[#5E3023] border-[#5E3023] border-2 hover:bg-[#578fba] 
            hover:border-[#578fba] hover:text-[#012A4A] px-4 py-3 my-8 
            mx-auto flex items-center'>Submit Form</button>
        </form>



    </div>
  )
}

export default Contact