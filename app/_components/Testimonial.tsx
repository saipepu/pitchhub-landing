import Image from 'next/image'
import React from 'react'
import DDI2023 from '@/public/2023DDI.png'
import DDI2024 from '@/public/2024DDI.png'

const Testimonial = () => {
  return (
    <div className='w-full max-w-[900px] flex flex-col justify-start items-start gap-5'>

      <div className='w-full flex flex-col justify-center items-center gap-2 px-8'>
        <h1 className='w-[80%] md:w-full title lg:headline text-center'>Pitchhub’s Remarkable Impact</h1>
        <p className="w-full md:w-[80%] lg:w-[60%] body text-center">Pitchhub is helping a couple of Events accomplishing Successful and Engaging Startup Pitching Competitions.</p>
      </div>

      <div className='w-full flex overflow-x-scroll gap-5 px-8'>
        <div className="relative min-w-[600px] h-[350px] rounded-3xl bg-blue-100 overflow-hidden">
          <Image
            src={DDI2023}
            alt="DDI2023"
            className='w-full h-full object-cover'
          />
          <h1 className='bottom-5 left-5 absolute text-[56px] font-bold text-left text-white'>2023<br />DDI CONNECT</h1>
        </div>
        <div className="relative min-w-[600px] h-[350px] rounded-3xl bg-blue-100 overflow-hidden">
          <Image
            src={DDI2024}
            alt="DDI2024"
            className='w-full h-full object-cover'
          />
          <h1 className='bottom-5 left-5 absolute text-[56px] font-bold text-left text-white'>2024<br />DDI CONNECT</h1>
        </div>
      </div>
    </div>
  )
}

export default Testimonial