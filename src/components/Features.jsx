import React, { useState, useEffect } from 'react';
import professional_networks from '../assets/professional_networks.jpg';
import opportunities from '../assets/opportunities.jpg';
import Research from '../assets/Research.jpg';


const Features = () => {
  return (
    <div className='my-2 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div >
        {/* <div className='lg:w-1/4'>
            <h3 className='text-3xl text-slate-900 font-bold lg-w-1/2 mb-3'>What is our goal!</h3>
            <p className='text-base text-slate-600'>We focus on increasing research and startup culture in svnit and ensure that no one missses any opportunity.</p>
        </div> */}
            <div className='w-full'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap=8'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl flex flex-col justify-center items-center hover:translate-y-4 transition-all duration-300'>
                        <img className='h-36' src={professional_networks} alt ="" />
                    <h3 className='text-2xl text-slate-900 font-bold lg-w-1/2 mb-3 ml-6'>Professional Networks</h3>
                    <p className=' text-slate-600 text-center'>Increasing Networking and connecting to professional world. </p>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl flex flex-col justify-center items-center hover:translate-y-4 transition-all duration-300 md:mt-16'>
                        <img className='h-36' src={Research} alt ="" />
                    <h3 className='text-2xl text-slate-900 font-bold lg-w-1/2 mb-3 ml-6'>Research and Innovation Culture</h3>
                    <p className=' text-slate-600 text-center'>Focus on increasing research and startup culture among students.</p>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl flex flex-col justify-center items-center hover:translate-y-4 transition-all duration-300'>
                        <img className='h-36' src={opportunities} alt ="" />
                    <h3 className='text-2xl text-slate-900 font-bold lg-w-1/2 mb-3 ml-6'>Opportunities</h3>
                    <p className=' text-slate-600 text-center'>Making sure that no one misses opportunity in gaining real life experience through internships.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Features