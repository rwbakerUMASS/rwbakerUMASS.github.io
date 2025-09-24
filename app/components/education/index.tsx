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
    <section className="pt-10 text-lg scroll-mt-10" id="education">
      <div className="mx-auto max-w-[90%] bg-white/90 rounded-2xl shadow-2xl p-10">
        <div className="text-3xl md:text-5xl flex justify-center w-full font-extrabold mb-10 tracking-tight text-orange-700">EDUCATION</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch place-items-center">
          {entries.map((entry, index) => {
            entry['key'] = index;
            return (
              <div className="p-6 mb-4 flex flex-col justify-between h-full">
                {EducationEntry(entry)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
