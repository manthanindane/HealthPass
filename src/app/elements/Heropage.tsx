"use client"

import React from 'react';
import Spline from '@splinetool/react-spline';

function Heropage() {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full h-screen '>
        <div className='flex flex-col justify-center md:w-1/2 md:px-16'>
        <h1 className=' text-3xl md:text-7xl ml-5 font-sans font-bold mb-6'>A Platform for all your medical needs</h1>
        <p className='text-sm md:text-xl ml-5 mb-6'>Store and access your medical records securely in one place.</p>
      </div>

      {/* Right Section */}
      <div className='md:w-1/2 h-full flex flex-col items-center justify-center'>
      <Spline scene="https://prod.spline.design/c7YKCeW3ENx7SJVF/scene.splinecode" />

      </div>
    </div>
  );
}

export default Heropage;


