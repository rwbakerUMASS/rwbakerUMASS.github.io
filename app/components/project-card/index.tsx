'use client'

import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import { title } from "process";

interface ProjectCardProps {
  title: string,
  description: string,
  githubLink: string

}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
      <div className="w-full h-1/3 bg-white rounded" key={title}>
        
      </div>
  );
};

export default ProjectCard;