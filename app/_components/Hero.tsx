"use client";

import React from 'react'
import { Bounce, toast } from 'react-toastify'
import Spline from '@splinetool/react-spline';
import { Send } from 'lucide-react';

const Hero = () => {
  return (
    <div className='w-full  max-w-[900px] lg:h-[500px] flex flex-col lg:flex-row justify-center items-center gap-2 pb-0 px-5'>

      <div className='relative w-full flex justify-center items-center py-[100px] md:pt-[200px]'>
        
        <div className='z-10 w-full h-full flex flex-col justify-center items-center gap-2'>
          <h1 className='w-full title md:text-[64px] font-bold text-center'>Streamline Startup<br />Pitching Competitions</h1>
          <p className='w-full body text-center md:text-[24px]'>Effortlessly Grade, Score, and Elevate Every Presentation</p>
          <div
            className='flex justify-center items-center gap-2 p-3 rounded-full bg-gradient-to-r from-slate-300 via-slate-300 to-blue-400'
            onClick={() => toast("We are working hard on it.", {
              position: "bottom-right",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            })}
          >
            <p className='body-bold text-white md:text-[24px]'>Get Pitchhub</p>
            <Send width={20} height={20} stroke="white" />
          </div>
        </div>

        <div className='z-0 absolute -top-[100px] lg:-top-[120px] w-full h-[300px] md:h-[500px] flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center cursor-pointer scale-[0.65] md:scale-100 lg:scale-125'>
            <Spline scene="https://prod.spline.design/kTN3YL7IuMbVrsCy/scene.splinecode" />
            {/* <Spline scene="https://prod.spline.design/JDbMyx-gGZ13UlHQ/scene.splinecode" /> */}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero