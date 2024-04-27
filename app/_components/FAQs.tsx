"use client";

import { ChevronDown, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const FAQs = () => {

  const [selectedQ, setSelectedQ] = useState(0)

  let faqs = [
    {
      question: "Can I customize scoring categories for my competition events?",
      answer: "Absolutely! Pitchhub allows you to define and customize scoring categories, including minimum and maximum scores, as well as their weights, ensuring tailored evaluations for each event."
    },
    {
      question: "How many judges and teams can I add to an event?",
      answer: "There's no limit! You can add multiple judges and teams to your competition events, accommodating large-scale events with ease."
    },
    {
      question: "Is Pitchhub suitable for both virtual and in-person events?",
      answer: "Yes, Pitchhub is designed to be versatile and accessible. Whether you're hosting a virtual event or an in-person competition, our platform provides the tools you need for seamless event management."
    },
    {
      question: "Can I track the actions of judges during the competition?",
      answer: "Absolutely! Pitchhub offers detailed transaction logs that allow you to track every action taken by judges during or after the event, ensuring transparency and accountability in the judging process."
    },
    {
      question: "How does the real-time leaderboard work?",
      answer: "The real-time leaderboard in Pitchhub updates dynamically as judges evaluate pitches live on stage. It showcases teams' scores in real-time, providing instant feedback and driving engagement among participants."
    },
    {
      question: "Is there a trial version or demo available before I commit?",
      answer: "Yes, we offer a trial version and demo of Pitchhub so you can experience our platform firsthand before making a commitment. Contact us to learn more and get started with your trial today!"
    },
    {
      question: "Ok! So what is the price?",
      answer: "Since the product is just almost ready to launch and our team is really working hard on it every hour. If you are interest in so, please do not hesitate to contact us.",
      button: "Join",
      href: "#contact",
      subtitle: "the world of innovations innovatively!"
    },
  ]

  return (
    <div className='w-full max-w-[900px] flex flex-col justify-start items-center px-8 gap-5'>

      <div className="flex flex-col justify-start items-start gap-2">
        <h1 className='w-full text-center title lg:headline'>Frequently Ask Questions</h1>
        <p className='w-full text-center body'>Explore the answers to our most frequently ask questions.</p>
      </div>

      <div className="w-full max-w-[600px] min-h-[550px] lg:min-h-[400px] flex flex-col justify-start items-start gap-2">
        {faqs.map((item, index) => {
          return (
            <div
              key={index}
              className='w-full flex flex-col justify-start items-start gap-2'
            >
              <div className='w-full p-3 rounded-lg flex justify-between items-start gap-1 border-2 border-[#F9F9F9]'>
                <div className='w-full flex justify-start items-start gap-2'>
                  <p className='body-bold'>
                    {index+1}.
                  </p>
                  <div className={`w-full transition-[height] duration-500 ${index == selectedQ ? item.button ? "h-[150px]" : "h-[120px]" : "h-[24px]"} overflow-hidden flex flex-col justify-start items-start gap-5`}>
                    <p
                      className='w-full body-bold cursor-pointer'
                      onClick={() => {
                        if(selectedQ != index) {
                          setSelectedQ(index)
                        } else {
                          setSelectedQ(99)
                        }
                      }}
                    >
                      {item.question}
                    </p>
                    {/* {index == selectedQ && */}
                      <div className={`w-full flex flex-col justify-start items-start ${item.button && "gap-3"}`}>
                        <p className='body font-light tracking-wide'>{item.answer}</p>
                        {item.button && 
                          <div className='w-full flex justify-start items-center gap-2'>
                            <a href={item.href} className='px-2 py-1 rounded-md bg-black text-white body-bold'>
                              {item.button}
                            </a>
                            <p className='body'>{item.subtitle}</p>
                          </div>
                        }
                      </div>
                  </div>
                </div>
                <div
                  className={`cursor-pointer flex justify-center items-start duration-500 rotate-0 ${index == selectedQ && 'rotate-180'}`}
                  onClick={() => {
                    if(selectedQ != index) {
                      setSelectedQ(index)
                    } else {
                      setSelectedQ(99)
                    }
                  }}
                >
                  <ChevronDown width={24} height={24} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default FAQs