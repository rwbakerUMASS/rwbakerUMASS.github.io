'use client'

import React, { useEffect, useState } from "react";
import ProjectCard from "../project-card";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import { title } from "process";

interface ProjectProps {
  entries: any[]
}

const Project: React.FC<ProjectProps> = ({ entries }) => {
  return (
    <>
      <section className="pt-10 text-lg scroll-mt-10" id="projects">
        <div className="w-full flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            PROJECTS
          </h2>
          <div className="mt-2 h-1 w-16 bg-neutral-900 dark:bg-white rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20">
          {entries.map((x, i) => (
            <ProjectCard key={i} {...x} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;