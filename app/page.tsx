"use client"

import Navbar from './components/navigation/navbar'
import WelcomePage from './components/welcome-page'
import About from './components/about-me'
import Education from './components/education'
import Project from './components/projects'
import bg_img from '../public/assets/img/CS-Building2.jpg'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { welcomePage, aboutMe, education, projects } from '../public/config'

export default function Home() {
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
        <WelcomePage
          topTextColor={welcomePage.topText.color}
          topMessage={welcomePage.topText.message}
          typewriterColor={welcomePage.typeWriterText.color}
          typewriterMessages={welcomePage.typeWriterText.messages}
        />
        
        <div className='bg-gradient-to-b from-neutral-300 via-orange-300 to-orange-500' style={{opacity : show}}>
          <About
            bodyText={aboutMe.bodyText.text}
            bodyTextColor={aboutMe.bodyText.color}
            imgPath={aboutMe.imagePath}
          />
          <Education
            entries={education.entries}
            style={education.colors }
          />
          <Project 
            entries={projects.entries}
          />
        </div>
      </div>
    </main>
  )
}
