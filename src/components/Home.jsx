import React, { useState, useEffect } from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className='md:px p-4 h-screen max-w-screen-2xl mx-auto '>
        <div className='frontbg h-5/6 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div class className='md:w--3/5 pt-20'>
                <h2 className='md:text-5xl pt-20 text-4xl font-bold text-slate-800 mb-6 leading-relaxed'>No research without action, no action without research </h2>
                <p className='text-1xl mb-8'>Be a part odf counsil that bridges the gap between academia, industry and startups</p>
                <button className='py-2 px-8 bg-stone-700 font-semibold text-white rounded hover:bg-stone-500 transition-all duration-300'>Join Us</button>
            </div>
        </div>
    </div>
  )
}

export default Home