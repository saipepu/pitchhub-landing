"use client"
import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  return (
    <div className='w-full max-w-[900px] flex justify-between items-center py-5 px-5 md:px-10'>
      
      <h1 className='font-bold text-2xl'>Pitchhub</h1>

      <div className='flex justify-end items-center gap-5'>
        <div  className='hidden md:flex justify-end items-center gap-5'>
          <a className=''>Pricing</a>
          <a className=''>About</a>
          <a className=''>Contact</a>
        </div>
        <div
          className='rounded-md p-2 bg-black cursor-pointer active:bg-slate-700'
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
            })
          }
        >
          <p className='font-semibold text-white'>Demo</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar