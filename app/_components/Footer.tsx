import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center bg-slate-100 px-8'>
      
      <div className="w-full max-w-[900px] min-h-[220px] flex flex-col justify-between items-start py-10 gap-5">

        <div className='w-full flex-col md:flex-row flex justify-between items-start gap-5 md:gap-0'>

          <div className="w-full h-full flex flex-col justify-start items-start gap-3">
              <h1 className='title lg:headline'>Pitchhub</h1>
              <p className='body'>Be the leader innovator for<br />all the great innovations.</p>
          </div>

          <div className="h-full flex flex-col md:flex-row justify-between items-start gap-3 md:gap-[50px]">
            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-8">
              <h4 className='body-bold'>Legal</h4>
              <div className='w-full flex flex-col justify-start items-start gap-1 text-nowrap'>
                <a href="#" className='body'>Terms of Service</a>
                <a href="#" className='body'>Privacy Policy</a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-8">
              <h4 className='body-bold'>More</h4>
              <div className='w-full flex flex-col justify-start items-start gap-1 text-nowrap'>
                <a href="#" className='body'>Pricing</a>
                <a href="#" className='body'>FAQs</a>
                <a href="#" className='body'>About us</a>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-8">
              <h4 className='body-bold'>Contact</h4>
              <div className='w-full flex flex-col justify-start items-start gap-1 text-nowrap'>
                <a href="#" className='body'>saipepu.mdy257@gmail.com</a>
                <a href="#" className='body'>0660297968</a>
              </div>

            </div>
          </div>

        </div>

        <div className=''>
          <p className='body'>Built by PePu & Felix</p>
          <p className='body'>Copyright © 2024 - All rights reserved</p>
        </div>

      </div>
      
    </div>
  )
}

export default Footer