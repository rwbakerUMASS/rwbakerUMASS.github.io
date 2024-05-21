"use client"

import Navbar from './components/navigation/navbar'
import bg_img from '../public/img/CS-Building2.jpg'
import Typewriter from 'typewriter-effect'
import React, { useEffect, useState } from "react";

export default function Home() {
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
          <section className='pt-10 text-4xl h-lvh' id='about'>
            ABOUT ME
            {/* <div className='grid grid-cols-1'>
                  <div className='place-self-start rounded-2xl w-3/5 min-h-96 bg-black bg-opacity-25'></div>
                  <div className='place-self-end w-3/5 h-96 bg-black'></div>
                  <div className='place-self-start w-3/5 h-96 bg-black'></div>
                  <div className='place-self-end w-3/5 h-96 bg-black'></div>
                  <div className='place-self-start w-3/5 h-96 bg-black'></div>
                  <div className='place-self-end w-3/5 h-96 bg-black'></div>
            </div> */}
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
