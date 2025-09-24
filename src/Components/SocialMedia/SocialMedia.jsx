import React, { useRef } from 'react'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SocialMedia = () => {

  const sideSocialMenu = useRef();
  const view = useRef();

  const openRef = () => {
    sideSocialMenu.current.style.transform = 'translateX(-14rem)'
    view.current.style.transform = 'translateX(14rem)'
  }

  const closeRef = () => {
    sideSocialMenu.current.style.transform = 'translateX(14rem)'
    view.current.style.transform = 'translateX(0rem)'
  }

  return (
    <div>

      <button ref={view} className='sm:text-2xl text-lg bg-primaryDull fixed right-0 top-[31%] transition duration-700 p-1 sm:p-2 rounded-l-full animate-pulse' onClick={openRef}>
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>

      <div ref={sideSocialMenu} className='flex-col items-center justify-center gap-4 bg-primaryDull p-2 sm:p-4 sm:text-xl text-md flex transition duration-700 fixed -right-56 top-[30%] bg-opacity-80 rounded-l-lg'>
        <button onClick={closeRef}><MdOutlineKeyboardDoubleArrowRight /></button>
        <a href="https://www.linkedin.com/in/priyanshu-dhiman-62542622b" onClick={closeRef} target='-blank' className='cursor-pointer'><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/impriyanshhu" onClick={closeRef} target='-blank' className='cursor-pointer'><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/impriyanshhu/" onClick={closeRef} target='-blank' className='cursor-pointer'><i class="fa-brands fa-instagram"></i></a>
        <a href="https://facebook.com/" onClick={closeRef} target='-blank' className='cursor-pointer'><i class="fa-brands fa-facebook"></i></a>
      </div>

    </div>
  )
}

export default SocialMedia
