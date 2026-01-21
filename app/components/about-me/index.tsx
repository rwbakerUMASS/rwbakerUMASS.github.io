'use client'

import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import Image from 'next/image';
import me_img from '../../../public/assets/img/Ryan2.jpg'

interface AboutPageProps {
  bodyText: string,
  bodyTextColor: string,
  imgPath: string
}

const About: React.FC<AboutPageProps> = ({ bodyText, bodyTextColor, imgPath}) => {
  const [show, setShow] = useState(0)
  const controlOpac = () => {
    setShow((window.scrollY/(0.75 * window.innerHeight)) + 0)
  }

  const [size, setSize] = useState({width: 0, height: 0})
  const handleResize = () => {
    setSize({width: window.innerWidth, height: window.innerHeight})
  }

  useEffect(() => {
      window.addEventListener('scroll', controlOpac)
      window.addEventListener('resize', handleResize)
      handleResize();
      return () => {
          window.removeEventListener('scroll', controlOpac)
          window.removeEventListener('resize', handleResize)
      }
  }, [])
  return (
    <>
      <section className="pt-10 text-lg scroll-mt-10" id="about">
        <div className="w-full flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            ABOUT ME
          </h2>
          <div className="mt-2 h-1 w-16 bg-neutral-900 dark:bg-white rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 gap-5">
          <div className="w-full flex justify-center">
            <Image
              src={me_img.src}
              width={300} // Set a fixed value for better mobile scaling
              height={300}
              alt="Me"
              className="rounded-xl border-2 border-black aspect-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
          <div
              className={`flex flex-col justify-center ${bodyTextColor} leading-relaxed text-base md:text-lg 
                bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm p-6 rounded-xl shadow-md`}
          >
            <p className="whitespace-pre-line text-neutral-800 dark:text-neutral-200">
              {bodyText}
            </p>
          </div>
        </div>
        </section>
    </>
  );
};

export default About;