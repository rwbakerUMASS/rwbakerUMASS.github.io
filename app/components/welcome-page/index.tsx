'use client'

import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import Link from "next/link";

interface WelcomePageProps {
  topTextColor: string,
  topMessage: string,
  typewriterColor: string,
  typewriterMessages: string[]
}

const WelcomePage: React.FC<WelcomePageProps> = ({ topTextColor, topMessage, typewriterColor, typewriterMessages}) => {
  const [show, setShow] = useState(0)
  const controlOpac = () => {
    setShow((window.scrollY/(0.75 * window.innerHeight)) + 0)
  }

  useEffect(() => {
      window.addEventListener('scroll', controlOpac)
      return () => {
          window.removeEventListener('scroll', controlOpac)
      }
  }, [])
  return (
    <>
    <div style={{backgroundColor: `rgba(212, 212, 212, ${show})`}} id='home'>
      <div className='h-screen w-screen flex items-center'>
        <div className='block px-10'>
          <p className={`inline-block text-6xl sticky font-bold ${topTextColor} text-center bg-white bg-opacity-25`}>{topMessage}</p>
          <div className='w-screen'/>
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
            strings: typewriterMessages,
            wrapperClassName: `inline-block text-5xl ${typewriterColor} bg-white bg-opacity-25`,
            cursorClassName: 'text-5xl'
          }}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default WelcomePage;