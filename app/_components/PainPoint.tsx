"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import es1 from '@/public/es1.png'
import es2 from '@/public/es2.png'
import es3 from '@/public/es3.png'
import es4 from '@/public/es4.png'
import es5 from '@/public/es5.png'
import es6 from '@/public/es6.png'
import es7 from '@/public/es7.png'
import es8 from '@/public/es8.png'
import es9 from '@/public/es9.png'
import es10 from '@/public/es10.png'

const PainPoint = () => {

  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  const animate = () => {

    window.addEventListener('mousemove', (e) => {
      var x = e.clientX * 0.08
      var y = e.clientY * 0.08
      
      setPosX(x)
      setPosY(y)
    })

    requestAnimationFrame(animate)
  }
  useEffect(() => {
    animate()
  }, [])


  return (
    <div className='relative w-full max-w-[900px] h-[200px] lg:h-[500px] flex justify-center items-center gap-2 px-5'>
      
      <div className='w-full flex flex-col justify-center items-center gap-5'>
        <h1 className='w-full md:w-[60%] title text-center'>
          Still creating the Score Sheet with Excel on your own? 🤔
        </h1>
        <p className='w-full body text-center'>
          And force every judges to painfully insert<br />
          the score even on the small screen?
        </p>
      </div>

      <Image
        src={es1}
        alt="es1"
        className='w-[50px] h-[50px] object-contain absolute hidden lg:block top-36 left-16'
        style={{
          transform: `translate(${posX}%, ${posY}%)`
        }}
      />

      <Image
        src={es2}
        alt="es2"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block top-20 right-10'
        style={{
          transform: `translate(-${posX}%, ${posY}%)`
        }}
      />

      <Image
        src={es3}
        alt="es3"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block top-50 left-20'
        style={{
          transform: `translate(${posX}%, -${posY}%)`
        }}
      />

      <Image
        src={es4}
        alt="es4"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block top-70 right-20'
        style={{
          transform: `translate(-${posX}%, -${posY}%)`
        }}
      />

      <Image
        src={es5}
        alt="es5"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block bottom-20 left-30'
        style={{
          transform: `translate(${posX}%, ${posY}%)`
        }}
      />
      <Image
        src={es6}
        alt="es6"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block top-20 left-40'
        style={{
          transform: `translate(-${posX}%, ${posY}%)`
        }}
      />

      <Image
        src={es7}
        alt="es7"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block bottom-32 left-56'
        style={{
          transform: `translate(${posX}%, -${posY}%)`
        }}
      />

      <Image
        src={es8}
        alt="es8"
        className='w-[100px] h-[100px] object-contain absolute hidden lg:block top-24 right-56'
        style={{
          transform: `translate(-${posX}%, -${posY}%)`
        }}
      />

      <Image
        src={es9}
        alt="es9"
        className='w-[80px] h-[60px] object-contain absolute hidden lg:block bottom-32 right-64'
        style={{
          transform: `translate(${posX}%, ${posY}%)`
        }}
      />

      <Image
        src={es10}
        alt="es10"
        className='w-[60px] h-[40px] object-contain absolute hidden lg:block top-32 left-78'
        style={{
          transform: `translate(-${posX}%, ${posY}%)`
        }}
      />

    </div>
  )
}

export default PainPoint