"use client";

import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import hero_png from '@/public/hero.png'
import { Bounce, toast } from 'react-toastify'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className='w-full max-w-[900px] lg:h-[500px] flex flex-col lg:flex-row justify-center items-center gap-2 pb-0 px-5'>

{/* LEFT */}
      <div className='w-full flex justify-center items-center pt-[80px] lg:pt-0'>
        
        <div className='w-full h-full flex flex-col justify-center items-center lg:items-start gap-2'>
          <h1 className='title md:text-[32px] text-center lg:text-left'>Streamline Startup<br />Pitching Competitions</h1>
          <p className='body text-center lg:text-left'>Effortlessly Grade, Score, and Elevate Every Presentation</p>
          {/* <div
            className='rounded-md flex justify-center items-center p-2 gap-2 bg-black cursor-pointer active:bg-slate-700'
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
            <p className='body-bold text-white'>Get Pitchhub</p>
            <Send width={20} height={20} stroke='white' />
          </div> 
          <p className='text-[12px] text-slate-400 -my-2'>Coming soon</p> */}
        </div>

      </div>

{/* RIGHT */}
      <div className='w-full flex justify-center items-center'>
      
        <div className='w-full h-[300px] md:h-[500px] relative flex flex-col justify-center items-center'>

          {/* <div className="w-full lg:absolute bottom-0 lg:-left-[50%] lg:translate-x-[50%] flex justify-center items-center">
            <Image
              src={hero_png}
              alt="hero_png"
              className='w-[40%] lg:w-[80%] h-[80%] min-h-[300px] object-contain'
            />
          </div>
          <div className='hidden lg:block w-full bg-neutral h-[150px] rounded-tl-3xl rounded-bl-3xl'></div> */}

          <div
            className='z-10 flex justify-center items-center cursor-pointer'
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
            <Spline className='w-full h-full' scene="https://prod.spline.design/JDbMyx-gGZ13UlHQ/scene.splinecode" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero