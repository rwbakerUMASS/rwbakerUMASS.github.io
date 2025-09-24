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
    <section className="pt-10 text-lg scroll-mt-10" id="about">
  <div className="mx-auto max-w-[90%] bg-white/90 rounded-2xl shadow-2xl p-10">
        <div className="text-3xl md:text-5xl flex justify-center w-full font-extrabold mb-10 tracking-tight text-orange-700">ABOUT ME</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="w-full flex justify-center">
            <Image
              src={me_img.src}
              width={320}
              height={320}
              alt="Me"
              className="rounded-xl border-2 border-black aspect-auto w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg"
            />
          </div>
          <div className={`content-center text-lg md:text-2xl font-medium leading-relaxed text-gray-900 bg-white/60 rounded-xl p-6 shadow-inner`} style={{wordBreak: 'break-word'}}>{bodyText}</div>
        </div>
      </div>
    </section>
  );
};

export default About;