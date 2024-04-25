"use client";

import { Minus, Plus } from 'lucide-react'
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
    // {
    //   question: "How secure is my data on Pitchhub?",
    //   answer: "Security is our top priority. Pitchhub employs robust security measures to protect your data, including encryption, access controls, and regular security audits. Your data is safe and secure with us."
    // },
  ]

  return (
    <div className='w-full max-w-[900px] flex flex-col md:flex-row justify-between items-start px-8 gap-3 md:gap-0'>

      <div className="flex justify-start items-start">
        <h1 className='title lg:headline'>FAQs</h1>
      </div>

      <div className="w-full max-w-[600px] min-h-[550px] lg:min-h-[400px] flex flex-col justify-start items-start gap-2">
        {faqs.map((item, index) => {
          return (
            <div
              key={index}
              className='w-full flex flex-col justify-start items-start gap-2'
              onClick={() => {
                if(selectedQ != index) {
                  setSelectedQ(index)
                }
              }}
            >
              <div className='w-full p-3 rounded-lg flex justify-between items-start bg-neutral gap-1'>
                <div className='w-full flex justify-start items-start gap-2'>
                  <p className='body-bold'>
                    {index+1}.
                  </p>
                  <p className='body-bold'>
                    {item.question}
                  </p>
                </div>
                <div className='cursor-pointer flex justify-center items-start'>
                  {index == selectedQ ? 
                    <Minus width={20} height={20} />
                  :
                    <Plus width={20} height={20} />
                  }
                </div>
              </div>
              {index == selectedQ &&
                <div className='w-full flex pl-7 pb-3'>
                  <p className='body font-light tracking-wide'>{item.answer}</p>
                </div>
              }
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default FAQs