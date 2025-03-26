'use client'

import React, { useEffect, useState } from "react";
import ProjectCard from "../project-card";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import { title } from "process";

interface ProjectProps {
  entries: any[]
}

const Project: React.FC<ProjectProps> = ({entries}) => {
  return (
    <>
      <section className='pt-10 text-lg' id='projects'>
        <div className='p-20 text-4xl flex justify-center w-full font-bold'>
          PROJECTS
        </div>
        <div className="grid grid-cols-2">
          {entries.map((x, i) => {
            return ProjectCard(x)
          })}
        </div>
      </section>
    </>
  );
};

export default Project;