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
      <section className='pt-10 text-lg' id='education'>
        <div className='p-20 text-4xl flex justify-center w-full font-bold'>
          EDUCATION
        </div>
        <div className='grid grid-cols-2 px-20'>
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