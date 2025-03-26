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
      <div className='content-center text-center px-10 text-2xl' key={key}>
        <div className="border-black border-2 rounded-xl w-auto w-fit p-3 shadow-xl bg-white text-black bg-opacity-30">
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
      </div>
  );
};

export default EducationEntry;
export type { EducationEntryProps } ;