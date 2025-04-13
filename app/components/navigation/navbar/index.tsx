'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import './navbar.css'
import { navBar } from "@/public/config";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 30 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  const handleClick = (button: {internal: boolean, path: string, page: string | null}) => {
    if (button.internal) {
      const element = document.getElementById(button.path)
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
      } else {
        window.location.href = button.page +'#' + button.path;
      }
    } else {
     window.location.href = button.path;

    }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
    <>
      <div className={'z-50 w-full h-20 fixed top-0 transition duration-500 ease-in-out'} style={{background: show ? 'rgba(244, 98, 58, 0.9)' : 'rgba(244, 98, 58, 0)'}}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="text-white text-3xl font-extrabold px-8" ><button onClick={() => handleClick({internal: true, path:'home', page: '/'})}>Ryan Baker</button></div>
            <ul className="hidden md:flex space-x-6 text-white">
              {navBar.menuItems.map((x) => {return <li key={x.name}><button onClick={() => handleClick(x.button)}>{x.name}</button></li>})}
            </ul>
            <div className="md:hidden">
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen ? 
          <div className="md:hidden w-full pb-4 transition duration-500 ease-in-out" style={{background: show ? 'rgba(244, 98, 58, 0.9)' : 'rgba(244, 98, 58, 0)'}}>
            <div className="flex flex-col px-4 space-y-4 text-white">
              {navBar.menuItems.map((x) => {
                return <button 
                  key={x.name}
                  onClick={() => {
                    setMenuOpen(false);
                    handleClick(x.button)
                    }}>
                    {x.name}
                  </button>
                })}
            </div>
          </div>:null}
      </div>
    </>
  );
};

export default Navbar;