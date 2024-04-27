import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import char2 from '@/public/char2.png'

const Contact = () => {
  return (
    <div id="contact" className='relative w-full max-w-[900px] flex flex-col md:flex-row justify-center items-center gap-2 px-8'>

      {/* background color */}
      {/* <div className='z-0 min-w-[100vw] h-full absolute bg-[#F9F9F9]'></div> */}
      
      <div className='z-10 w-full flex flex-col justify-start items-start gap-8'>
        <div className='w-full h-full flex flex-col justify-center items-start gap-2'>
          <h1 className='title lg:headline'>Be the Pioneer in Startup Pitching Competitions</h1>
          <p className='body'>Join our exclusive community and be the first to revolutionize your competitions with Pitchhub.</p>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-start gap-2'>
          <div className='w-full flex justify-start items-center gap-2'>
            <input className='w-[300px] rounded-md p-2 bg-neutral focus:outline-slate-400' placeholder='Email'/>
            <div className='rounded-md flex justify-center items-center p-2 gap-2 bg-black cursor-pointer active:bg-slate-700'>
              <p className='body-bold text-white'>Send</p>
              <Send width={20} height={20} stroke='white' />
            </div>
          </div>
          <p className='body'>Register your email to join the first 15 organizations to test the Demo before we launch🚀 !</p>
        </div>
      </div>

      <div className='hidden relative w-full md:flex justify-center items-center'>

          <div className='w-full h-[400px] relative flex flex-col justify-center items-end'>

            <div className="w-full absolute -bottom-0 -left-[50%] translate-x-[50%] flex justify-center items-center">
              <Image
                src={char2}
                alt="char2"
                className='w-[90%] h-[90%] object-contain'
              />
            </div>

          </div>
      </div>

    </div>
  )
}

export default Contact