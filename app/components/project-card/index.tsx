'use client'

import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import Link from "next/link";
import { title } from "process";
import { Card } from "react-bootstrap";
import ghIcon from '../../../public/assets/img/GITHUB-LOGO.png'
import Image from 'next/image';

interface GitHubInfo {
  owner: string,
  repo: string,
  githubLink: string
}

interface ProjectCardProps {
  title: string,
  description: string,
  github: GitHubInfo
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, github}) => {
  const [languages, setLanguages] = useState<{[key: string]: number}>({});
  //const [total, setTotal] = useState(0);
  const fetchLanguages = () => {
    if (github) {
      const path = 'https://api.github.com/repos/' + github.owner + '/' + github.repo + '/languages';
      console.log(path)
      fetch(path).then((resp) => {
        resp.json().then((langs) => {
          setLanguages(langs);
        })
      })
    }
  }

  const getPercent = (lang: string): string => {
    const percent = Math.round((languages[lang]/total)*100);
    return percent > 0 ? percent + '%' : '<1%'
  }

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "#F7DF1E",
      Python: "#3572A5",
      TypeScript: "#3178C6",
      C: "#555555",
      "C++": "#f34b7d",
      "C#": "#178600",
      Java: "#b07219",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Go: "#00ADD8",
      Rust: "#dea584",
      default: "#999999"
    };
  
    return colors[language] || colors.default;
  };

  const total = Object.values(languages).reduce((a: number,x: number) => a + x,0);

  useEffect(() => {
    fetchLanguages();
  }, [])

  return (
    <Card className="card shadow-s mb-5 mx-5 bg-white rounded-xl transition delay-150 duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-2xl" key={title}>
      <Card.Body className="px-10 py-5">
        <Card.Title as="h2" className="text-black text-2xl">
          {title}
        </Card.Title>
        <Card.Text className="text-black pb-5">
          {description}
        </Card.Text>
        {github ? <GitHubButton url={github.githubLink}/> : null}
        <div className="mt-4">
          <h3 className="text-black text-sm font-semibold mb-2">Languages Used:</h3>
          <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
          <div className="flex">
          {github ? Object.keys(languages).map((lang) => {
            return (
                      <div
                        key={lang}
                        className={`h-2`}
                        style={{ width: `${getPercent(lang)}`, backgroundColor: getLanguageColor(lang) }}
                      />
                    )}): null}
              </div>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {github ? Object.keys(languages).map((lang) => {
                return (
                <span key={lang} className="text-xs bg-gray-100 text-black px-2 py-1 rounded-md">
                  {lang}: {getPercent(lang)}
                </span>
              )}): null}
            </div>
          </div>
        <OtherButton url={''}/>
      </Card.Body>
    </Card>
  );
};

interface CardButtonsProps {
  url: string
}

const GitHubButton: React.FC<CardButtonsProps> = ({ url }) => {
  return (
    <div className="">
      <a href={url} className="flex items-center justify-center gap-2 border-black border-2 rounded-xl text-black text-md p-2 w-full sm:w-40">
        <Image
          src={ghIcon.src}
          width={50}
          height={50}
          alt="GH"
        />
        Repo
      </a>
    </div>
  );
};

const OtherButton: React.FC<CardButtonsProps> = ({ url }) => {
  return (
    <div className="mt-5">
      <a href={url} className="border-black w-full md:w-1/2 border-2 rounded-xl text-black text-sm p-2 m-5">
        More Info
      </a>
    </div>
  );
};

export default ProjectCard;