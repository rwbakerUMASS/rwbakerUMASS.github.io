"use client"

import Navbar from './components/navigation/navbar'
import bg_img from '../public/img/CS-Building2.jpg'
import me_img from '../public/img/Ryan2.jpg'
import Typewriter from 'typewriter-effect'
import React, { useEffect, useState } from "react";
import Image from 'next/image';

export default function Home() {
  console.log(`url(${me_img.src})`)
  const [show, setShow] = useState(0)
  const controlOpac = () => {
    setShow((window.scrollY/window.innerHeight) + 0.2)
  }

  useEffect(() => {
      window.addEventListener('scroll', controlOpac)
      return () => {
          window.removeEventListener('scroll', controlOpac)
      }
  }, [])
  return (
    <main className='h-full'>
      <div style={{
          backgroundImage: `url(${bg_img.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          overflowX: "hidden",
          overflowY: "hidden",
          zIndex:"0"
      }}>
        <Navbar />
        <div style={{backgroundColor: `rgba(200, 200, 200, ${show})`}}>
          <div className='h-screen w-screen flex items-center'>
            <div className='block px-10'>
              <p className='inline-block text-6xl sticky font-bold text-center bg-white bg-opacity-25'>Hi, I&apos;m Ryan</p>
              <div className='w-screen'/>
              <Typewriter
              options={{
                autoStart: true,
                loop: true,
                wrapperClassName: 'inline-block text-5xl bg-white bg-opacity-25',
                cursorClassName: 'text-5xl'
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Software Engineer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('ML Enthusiast')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Sylvan Enthusiast')
                .deleteAll().start()
              }}/>
            </div>
          </div>
        </div>
        <div style={{opacity : show, backgroundColor: 'rgb(200,200,200)'}}>
          <section className='pt-10 text-lg h-lvh' id='about'>
            <div className='p-20 text-4xl flex justify-center w-full font-bold'>
              ABOUT ME
            </div>
            <div className='grid grid-cols-2 px-20'>
              <div className='content-center'>
                I am a recent Master&apos;s graduate from the UMass Amherst College of Information and Computer Sciences.
                Throughout my education, I have gained exposure to a large variety of fields of computer science, but I am mainly interested in the fields of machine/reinforcement learning, data science, and robotics
                I have 4 years of intern experience in systems engineering and software engineering, as well as being the software lead of my high school robotics team.
              </div>
              <div className='w-full flex justify-center'>
                <Image
                  src={me_img.src}
                  width={250}
                  height={250}
                  alt="Me"
                  className='rounded-xl border-2 border-black'
                />
              </div>
            </div>
          </section>
          <section className='pt-10 text-4xl' id='education'>
            EDUCATION
          </section>
          <section className='pt-10 text-4xl' id='experience'>
            EXPERIENCE
          </section>
          <section className='pt-10 text-4xl' id='projects'>
            PROJECTS
          </section>
        </div>
      </div>
    </main>
  )
}
