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
      <section className="pt-10 text-lg" id="projects">
        <div className="p-5 md:p-20 text-2xl md:text-4xl flex justify-center w-full font-bold">
          PROJECTS
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