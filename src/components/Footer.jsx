import React, { useState, useEffect } from 'react';
import '../App.css';

const Footer = () => {
  return (
    <div className='h-20 max-w-screen-2xl mx-auto '>
        <div className='p-12 bg-stone-700 flex justify-between items-center items-start md:gap-16 gap=14'>
        <div className='lg:w-1/3'>
            <h3 className='text-3xl text-white font-bold lg-w-1/2 mb-3'>Pages</h3>
            <ul className='test-2xl text-white'>
                <li>Home</li>
                <li>StartUpExpo</li>
                <li>Workshops</li>
                <li>Join Us</li>
            </ul>
        </div>
        <div className='lg:w-1/3'>
            <h3 className='text-3xl text-white font-bold lg-w-1/2 mb-3'>About Us</h3>
            <h3 className='test-2xl text-white'>Creater: Mihika Chawda</h3>
            <h3 className='test-2xl text-white'>Department:Artificial Intelligence</h3>
            <h3 className='test-2xl text-white'>SVNIT</h3>
        </div>
       
        </div>
    </div>
  )
}

export default Footer