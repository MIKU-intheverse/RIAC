import React, { useState, useEffect } from 'react';
import '../App.css';
import startup from '../assets/startup.png';

const StartUpExpo = () => {
  return (
    <div className='md:px p-4 md:h-screen max-w-screen-2xl mx-auto '>
        <div className='lastbg h-5/6 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 md:flex gap-20'>
        <div className=' md:h-36 h-52 md:w-96  bg-stone-700 rounded-xl rounded-br-[80px] items-center '>
                <img className='md:pt-8 ' src={startup} />
            </div>
            <div class className='md:w--3/5 pt-20'>
                <h2 className='md:text-5xl md:pt-20 text-4xl font-bold text-slate-800 mb-6 leading-relaxed'>Presenting StartUpExpo!! </h2>
                <p className='text-1xl mb-8'>Inspiring Journey and Expert Advices on entrepreneurial skills, where you will learn a lot from their experience and provides to a platform where you can open up and share your ideas.</p>
                <button className='py-2 px-8 bg-stone-700 font-semibold text-white rounded hover:bg-stone-500 transition-all duration-300'>Know More</button>
            </div> 
        </div>
    </div>
  )
}

export default StartUpExpo