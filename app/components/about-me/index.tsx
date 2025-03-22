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

  useEffect(() => {
      window.addEventListener('scroll', controlOpac)
      return () => {
          window.removeEventListener('scroll', controlOpac)
      }
  }, [])
  return (
    <>
      <section className='pt-10 text-lg' id='about'>
          <div className='p-20 text-4xl flex justify-center w-full font-bold'>
            ABOUT ME
          </div>
          <div className='grid grid-cols-2 px-20'>
            <div className='w-full flex justify-center'>
              <Image
                src={me_img.src}
                width={350}
                height={250}
                alt="Me"
                className='rounded-xl border-2 border-black'
              />
            </div>
            <div className={`content-center ${bodyTextColor}`}>{bodyText}</div>
          </div>
        </section>
    </>
  );
};

export default About;