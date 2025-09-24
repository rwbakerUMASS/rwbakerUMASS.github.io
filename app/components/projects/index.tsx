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
    <section className="pt-10 text-lg scroll-mt-10" id="projects">
  <div className="mx-auto max-w-[90%] bg-white/90 rounded-2xl shadow-2xl p-10">
        <div className="text-3xl md:text-5xl flex justify-center w-full font-extrabold mb-10 tracking-tight text-orange-700">PROJECTS</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {entries.map((x, i) => (
            <ProjectCard key={i} {...x} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;