'use client'

import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import { trackSynchronousRequestDataAccessInDev } from "next/dist/server/app-render/dynamic-rendering";
import { copyFileSync } from "fs";

interface EducationEntryProps {
  title: string,
  university: string,
  time: string,
  gpa: number,
  key: number
}

const EducationEntry: React.FC<EducationEntryProps> = ({ title, university, time, gpa, key}) => {
  return (
      <div className='content-center text-center text-2xl border-black w-full' key={key}>
        {title}
        <div>
          {university}
        </div>
        <div>
          {time}
        </div>
        <div>
          {`GPA: ${gpa}`}
        </div>
      </div>
  );
};

export default EducationEntry;
export type { EducationEntryProps } ;