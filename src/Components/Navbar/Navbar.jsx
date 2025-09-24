import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import menu_white from '../../assets/menu_white.png'
import close_white from '../../assets/close_white.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-14rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(14rem)'
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <motion.div>
            <div className='navbar w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 py-2 backdrop-blur-sm'>

                <div className='h-auto'>
                    <Link to={'/'} className='flex items-center justify-center'>
                        <img src={logo} alt="" className='w-8 sm:w-10 cursor-pointer' />
                        <span className='font-Cursive text-xl sm:text-2xl p-0'>myPortfolio</span>
                    </Link>
                </div>
                <div className='hidden md:flex items-center gap-6 lg:gap-8 px-12  shadow-sm  py-2 bg-primaryDull bg-opacity-90 rounded-full'>
                    <Link to={'/'}  onClick={goToTop}>Home</Link>
                    <Link to={'/about'} onClick={goToTop}>About</Link>
                    <Link to={'/projects'} onClick={goToTop}>Projects</Link>
                    <Link to={'/contact'} onClick={goToTop}>Contact</Link>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <img src={menu_white} alt="" className='w-6' />
                    </button>
                </div>

            </div>

            <div ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-56 top-0 bottom-0 w-56 z-50 h-screen bg-primaryDull transition duration-1000'>

                <div className='absolute top-6 right-6' onClick={closeMenu}>
                    <img src={close_white} alt="" className='cursor-pointer w-5' />
                </div>

                <Link to={'/'} onClick={()=> {closeMenu(); goToTop();}}>Home</Link>
                <Link to={'/about'} onClick={()=> {closeMenu(); goToTop();}}>About</Link>
                <Link to={'/projects'} onClick={()=> {closeMenu(); goToTop();}}>Projects</Link>
                <Link to={'/contact'} onClick={()=> {closeMenu(); goToTop();}}>Contact</Link>

            </div>
        </motion.div>
    )
}

export default Navbar
