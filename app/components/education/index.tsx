'use client'

import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import EducationEntry from "../education-entry";
import { EducationEntryProps } from "../education-entry";

interface EducationStyle {
  titleColor: string,
  institutionColor: string,
  otherColor: string
}

interface EducationPageProps {
    style: any,
    entries: any[]
}

const Education: React.FC<EducationPageProps> = ({entries, style}) => {
  return (
    <>
      <section className='pt-10 text-lg scroll-mt-10' id='education'>
        <div className='p-5 md:p-20 text-2xl md:text-4xl flex justify-center w-full font-bold'>
          EDUCATION
        </div>
        <div className='justify-center grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20 place-items-center'>
          {entries.map((entry, index) => {
            entry['key'] = index;
            return EducationEntry(entry);
          })}
        </div>
      </section>
    </>
  );
};

export default Education;