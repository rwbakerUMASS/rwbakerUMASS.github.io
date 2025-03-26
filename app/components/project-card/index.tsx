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
      const path = 'http://api.github.com/repos/' + github.owner + '/' + github.repo + '/languages';
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
        {github ? Object.keys(languages).map((lang) => {
          return <div key={lang} className="text-black text-s ml-5">{lang}: {getPercent(lang)}</div>
        }): null}
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
      <a href={url} className="grid grid-cols-2 border-black w-1/2 border-2 rounded-xl text-black text-s p-2 ml-5">
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
      <a href={url} className="border-black w-1/2 border-2 rounded-xl text-black text-s p-2 m-5">
        More Info
      </a>
    </div>
  );
};

export default ProjectCard;