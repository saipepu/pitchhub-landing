import { Calendar, LineChart, MessageCircleQuestion, Sheet, ShieldQuestion, SquareKanban, Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import blob1 from '@/public/blob1.png'
import char1 from '@/public/char1.png'

const Feature = () => {
  return (
    <div className='w-full max-w-[900px] flex flex-col justify-center items-center gap-[56px] px-5'>

      <div className='w-full bg-neutral rounded-3xl flex justify-center items-center gap-2 p-[32px]'>
        
        <div className='w-full flex flex-col justify-start items-start gap-[56px]'>
          <h1 className='w-full title md:title lg:headline'>
            Say Goodbye to Manual Score Sheets.<br />
            We will do it for you!
          </h1>
          <div className='w-full flex flex-col md:flex-row justify-between items-start gap-5'>
            <div className='w-full md:w-[250px] flex flex-col justify-start items-start gap-2'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <Calendar width={40} height={40} />
              </div>
              <h1 className='md:min-h-[40px] body-bold lg:title'>Effortless Competition Setup</h1>
              <p className='body'>Swiftly create competition events, defining score categories with customizable minimum, maximum, and weight parameters.</p>
            </div>
            <div className='w-full md:w-[250px] flex flex-col justify-start items-start gap-2'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <SquareKanban width={40} height={40} />
              </div>
              <h1 className='md:min-h-[40px] body-bold lg:title'>Real-Time Leaderboard</h1>
              <p className='body'>Watch teams rank sky rockets 🚀 while judges are scoring their pitching in real-time on stage.</p>
            </div>
            <div className='w-full md:w-[250px] flex flex-col justify-start items-start gap-2'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <LineChart width={40} height={40} />
              </div>
              <h1 className='md:min-h-[40px] body-bold lg:title'>Transparent Judging Process</h1>
              <p className='body'>Track each judge's actions during or after the event, ensuring transparency and accountability throughout the judging process.</p>
            </div>
          </div>
        </div>

      </div>

      <div className='w-full flex flex-col md:flex-row justify-center items-center px-3 gap-5 md:gap-0'>

        <div className='w-full flex flex-col justify-start items-start gap-2'>
          <h1 className='title lg:headline'>Enjoy a<br />hassle-free<br />Experience</h1>
          <p className='body'>Empower innovation by effortlessly<br />managing event setup and scoring<br />criteria in our platform.</p>
        </div>

        <div className='relative w-full flex flex-col justify-start items-start gap-2 md:gap-5'>

          <div className='z-10 w-full flex justify-center items-center gap-2 md:gap-5'>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <MessageCircleQuestion width={40} height={40} />
              </div>
              <p className='body-bold'>No more<br />score system confusion</p>
            </div>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <Sheet width={40} height={40} />
              </div>
              <p className='body-bold'>No more<br />score sheet setup</p>
            </div>
          </div>

          <div className='z-10 w-full flex justify-center items-center gap-2 md:gap-5'>
          <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <Timer width={40} height={40} />
              </div>
              <p className='body-bold'>No more<br />time wasting paper work</p>
            </div>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-slate-300/50'>
                <ShieldQuestion width={40} height={40} />
              </div>
              <p className='body-bold'>No more<br />human error in scoring</p>
            </div>
          </div>

          <div className='absolute -z-0 w-full h-full top-0'>
            <Image
              src={blob1}
              alt="blob1"
              className='w-full h-full object-contain'
            />
          </div>
          <div className='absolute z-20 w-full bottom-0 -right-[55%] md:-right-[48%]'>
            <Image
              src={char1}
              alt="char1"
              className='w-full h-full object-contain'
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Feature