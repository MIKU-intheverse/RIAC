import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useStae(false);

    // const toggleMenu = ()=> {
    //     setIsMenuOpen(!isMenuOpen);
    // }


    const navItems = [
        {link: "Home", path: "Home"},
        {link: "StartupExpo", path: "StartupExpo"},
        {link: "Workshops", path: "Workshops"},
        {link: "Join Us", path: "Join Us"},
        {link: "About Us", path: "About Us"},
    ]
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx auto text-slate-900'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex justify-between  items-center'>
                <a href ="/" className='text-2xl font-semibold flex items-center sapce-x-3 text-slate-900'>
                <img src={logo} alt="" className=' w-10 inline-block items-center' /> <span>RIAC</span>
                </a>

                <ul className='md:flex hidden space-x-12 pl-20'>
                    {
                        navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-gray-500'>{link}</a>)
                    }
                </ul>
            </div>

            {/* <div className='md:hidden'>
                <button onClick={toggleMenu} className = 'text-white focus:outline-none focus:text-gray-300'>
                </button>
            </div> */}

        </div>
    </nav>
  )
}

export default Navbar

