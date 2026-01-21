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
        <div className="w-full flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            EDUCATION
          </h2>
          <div className="mt-2 h-1 w-16 bg-neutral-900 dark:bg-white rounded-full"></div>
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