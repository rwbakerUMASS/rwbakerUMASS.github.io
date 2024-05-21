'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import './navbar.css'
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 30 ) {
          setShow(true)
      }else{
        setShow(false)
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
            <div className="text-white text-3xl font-extrabold px-8">Ryan Baker</div>
            <ul className="hidden md:flex gap-x-6 text-white pr-8">
              <li>
                <Link href="#about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="#education">
                  <p>Education</p>
                </Link>
              </li>
              <li>
                <Link href="#experience">
                  <p>Experience</p>
                </Link>
              </li>
              <li>
                <Link href="#contacts">
                  <p>Contact Me</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;