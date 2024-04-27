import { Calendar, Check, LineChart, MessageCircleQuestion, Sheet, ShieldQuestion, SquareKanban, Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import blob1 from '@/public/blob1.png'
import char1 from '@/public/char1.png'
import feature1_1 from '@/public/feature1-1.png'
import feature2 from '@/public/feature-2.png'
import feature3 from '@/public/feature-3.png'
import rocket from '@/public/Rocket.svg'
import rank from '@/public/Rank.svg'
import projector from '@/public/projector.svg'

const Feature = () => {

  const features = [
    {
      image: feature1_1,
      title: "Effortless<br /> Competition Setup",
      list: [
        "Set up competition in seconds",
        "Customize score criteria",
        "Add judges for scroing the pitching",
        "Let team leader to set up their team"
      ]
    },
    {
      image: feature2,
      title: "Real-Time<br />Leaderboard",
      list: [
        "Live update leaderboard",
        "Watch teams rank competing each other while the judges are giving score in real time"
      ]
    },
    {
      image: feature3,
      title: "Transparent Judging<br />Process",
      list: [
        "Track scoring history logs of each judges",
        "Ensuring transparency, integrity and accuracy of teams' score"
      ]
    },
  ]

  const useCases = [
    {
      icon: rocket,
      title: "Tranform Startup Pitching Comepitions",
      description: "Elevate startup pitches with Pitchhub. Streamline scoring and impress the audience."
    },
    {
      icon: rank,
      title: "Level Up Hackathon Competitions",
      description: "Gear up for hackathons with Pitchhub. Streamline presentation and empowers teams to shine.",
    },
    {
      icon: projector,
      title: "Enhance Classroom Presentations",
      description: "Enhance classroom presentations with Pitchhub. Engage students and track progress easily.",
    },
  ]

  return (
    <div className='relative w-full max-w-[900px] flex flex-col justify-center items-center gap-[56px] px-5'>

{/* background color */}
      <div className='z-0 min-w-[100vw] h-full absolute bg-[#F9F9F9]'></div>

      <div className='z-10 w-full rounded-3xl flex justify-center items-center gap-2 px-3 py-5 md:p-[32px]'>
        
        <div className='w-full flex flex-col justify-start items-start gap-5 md:gap-[56px]'>
          <div className='w-full flex flex-col justify-center items-center gap-2'>
            <h1 className='w-full text-center title md:title lg:headline'>Say Goodbye to Manual Score Sheets</h1>
            <p className='w-full text-center body'>Automated Solutions for Seamless Efficiency and Accuracy!</p>
          </div>
          <div className='w-full flex flex-col justify-between items-start gap-5'>
            {features?.map((item, index) => {
              return (
                <div key={index} className={`w-full flex md:flex-row ${index%2 == 1 && 'md:flex-row-reverse'} flex-col justify-center items-center gap-5`}>
                  <div className='w-full max-h-[250px] rounded-2xl flex justify-start items-start overflow-hidden '>
                    <Image
                      src={item.image}
                      alt="feature photo"
                      className='w-full object-cover'
                    />
                  </div>
                  <div className='w-full flex flex-col justify-center items-start gap-2'>
                    <h1 className='w-full body-bold md:title hidden md:block' dangerouslySetInnerHTML={{ __html: item.title }} />
                    <h1 className='w-full body-bold md:title block md:hidden' dangerouslySetInnerHTML={{ __html: item.title.replace('<br />', ' ') }} />
                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                        {item.list?.map((item, index) => {
                          
                          return (
                            <div key={index} className='w-full flex justify-start items-start gap-1'>
                              <div className='w-[20px] h-[20px] flex justify-center items-center'>
                                <Check width={20} height={20} stroke={"#2495FB"} />
                              </div>
                              <p className='text-[#000] body'>{item}</p>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <div className='z-10 w-full flex flex-col justify-center items-center px-3 gap-5 py-[56px]'>

        <div className='w-full flex flex-col justify-center items-center gap-2'>
          <h1 className='w-full text-center title lg:headline'>Enjoy a hassle-free Experience</h1>
          <p className='w-full md:w-[70%] text-center body'>Elevate Every Event, From Startup Pitches to Hackathons and Classroom Presentations!</p>
        </div>

        <div className='relative w-full flex flex-col md:flex-row justify-start items-start gap-2 md:gap-5'>
          {useCases.map((item, index) => {
            
            return (
              <div key={index} className='w-full min-h-[200px] md:min-h-[310px] rounded-2xl flex flex-col justify-start items-start gap-8 p-5 bg-white'>
                <div className='w-[60px] h-[60px] rounded-xl shadow-lg flex justify-center items-center'>
                  <Image
                    src={item.icon}
                    alt="svg"
                    width={40}
                    height={40}
                    objectFit='contain'
                  />
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-2'>
                  <h2 className='body-bold lg:title'>{item.title}</h2>
                  <p className='body'>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}

export default Feature