"use client"

import Image from 'next/image'
import next_img from 'public/next.svg'
import vercel_logo from 'public/vercel.svg'
import Navbar from './components/navigation/navbar'
import bg_img from '../public/img/CS-Building2.jpg'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <main>
      <div style={{
          backgroundImage: `url(${bg_img.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          overflowX: "hidden",
          height: "100vh",
          zIndex:"0"
        }}>
          <Navbar />
          <div className='h-screen w-screen flex items-center'>
            <div className='block px-10'>
              <p className='inline-block text-6xl font-bold text-center bg-white bg-opacity-25'>Hi, I'm Ryan</p>
              <div className='w-screen'/>
              <Typewriter
              options={{
                autoStart: true,
                loop: true,
                wrapperClassName: 'inline-block text-5xl bg-white bg-opacity-25',
                cursorClassName: 'text-5xl'
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Master\'s Student @ UMass')
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
      <section className='pt-32' id='education'>
        EDUCATION
      </section>
      <section className='pt-32' id='experience'>
        EXPERIENCE
      </section>
      <section className='pt-32' id='projects'>
        PROJECTS
      </section>
    </main>
  )
}
