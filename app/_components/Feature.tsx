import { Calendar, LineChart, MessageCircleQuestion, Sheet, ShieldQuestion, SquareKanban, Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import blob1 from '@/public/blob1.png'
import char1 from '@/public/char1.png'
import feature1_1 from '@/public/feature1-1.png'
import feature2 from '@/public/feature-2.png'
import feature3 from '@/public/feature-3.png'

const Feature = () => {
  return (
    <div className='w-full max-w-[900px] flex flex-col justify-center items-center gap-[56px] px-5'>

      <div className='w-full bg-neutral rounded-3xl flex justify-center items-center gap-2 px-3 py-5 md:p-[32px]'>
        
        <div className='w-full flex flex-col justify-start items-start md:gap-[56px]'>
          <h1 className='w-full title md:title lg:headline'>
            Say Goodbye to Manual Score Sheets.<br />
            We will do it for you!
          </h1>
          <div className='w-full flex flex-col md:flex-row justify-between items-start gap-5'>
            <div className='w-full md:w-[250px] flex flex-col justify-start items-start gap-2'>
              <div className='w-full rounded-2xl flex justify-center items-center overflow-hidden border-[6px] border-slate-200/50'>
                <Image
                  src={feature1_1}
                  alt="feature1-1"
                  className='w-full h-full object-cover'
                />
              </div>
              <h1 className='md:min-h-[40px] body-bold lg:title'>Effortless Competition Setup</h1>
              <p className='body'>Easily set up competitions with judges, teams and customizable score categories.</p>
            </div>
            <div className='w-full md:w-[250px] flex flex-col justify-start items-start gap-2'>
              <div className='w-full rounded-2xl flex justify-center items-center overflow-hidden border-[6px] border-slate-200/50'>
                <Image
                  src={feature2}
                  alt="feature2"
                  className='w-full h-full object-cover'
                />
              </div>
              <h1 className='md:min-h-[40px] body-bold lg:title'>Real-Time Leaderboard</h1>
              <p className='body'>Watch teams rank sky rockets 🚀 while judges are scoring their pitching in real-time on stage.</p>
            </div>
            <div className='w-full md:w-[250px] flex flex-col justify-start items-start gap-2'>
              <div className='w-full rounded-2xl flex justify-center items-center overflow-hidden border-[6px] border-slate-200/50'>
                <Image
                  src={feature3}
                  alt="feature3"
                  className='w-full h-full object-cover'
                />
              </div>
              <h1 className='md:min-h-[40px] body-bold lg:title'>Transparent Judging Process</h1>
              <p className='body'>Transperantly track each judge's actions during or after the event.</p>
            </div>
          </div>
        </div>

      </div>

      <div className='w-full flex flex-col md:flex-row justify-center items-center px-3 gap-5 md:gap-0'>

        <div className='w-full flex flex-col justify-start items-start gap-2'>
          <h1 className='title lg:headline'>Enjoy a hassle-free<br />Experience</h1>
          <p className='body'>Empower innovation by effortlessly<br />managing event setup and scoring<br />criteria in our platform.</p>
        </div>

        <div className='relative w-full flex flex-col justify-start items-start gap-2 md:gap-5'>

          <div className='z-10 w-full flex justify-center items-center gap-2 md:gap-5'>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-white'>
                <MessageCircleQuestion width={40} height={40} stroke={"#EFF260"} strokeWidth={1} />
              </div>
              <p className='body-bold'>No more<br />score system confusion</p>
            </div>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-white'>
                <Sheet width={40} height={40} stroke={"#8ADC8E"} strokeWidth={1} />
              </div>
              <p className='body-bold'>No more<br />score sheet setup</p>
            </div>
          </div>

          <div className='z-10 w-full flex justify-center items-center gap-2 md:gap-5'>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-white'>
                <Timer width={40} height={40} stroke={"#FFB0B0"} strokeWidth={1} />
              </div>
              <p className='body-bold'>No more<br />time wasting paper work</p>
            </div>
            <div className='w-full md:w-[140px] h-[175px] md:h-fit flex flex-col justify-start items-start gap-5 rounded-3xl bg-neutral p-3 md:p-4'>
              <div className='w-[65px] h-[65px] rounded-2xl flex justify-center items-center bg-white'>
                <ShieldQuestion width={40} height={40} stroke={"#95ABF9"} strokeWidth={1} />
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
          {/* <div className='absolute z-20 w-full bottom-0 -right-[55%] md:-right-[48%]'>
            <Image
              src={char1}
              alt="char1"
              className='w-full h-full object-contain'
            />
          </div> */}

        </div>

      </div>

    </div>
  )
}

export default Feature