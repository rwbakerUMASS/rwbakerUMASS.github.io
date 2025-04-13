'use client'

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Image from 'next/image';

interface SeedTrack {
  track: string,
  artist: string,
  score: number
}

interface SpotifyCardProps {
  title: string,
  artist: string,
  img_url: string,
  score: number,
  seed_tracks: SeedTrack[]
}

const Chevron = ({ size = 24, color = "black", up=true}) => (
  <svg
    width={size}
    height={size/2}
    viewBox="0 0 24 12"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={up? 'transform scale-y-[-1]':''}
  >
    <polyline points="4 2 12 6 20 2" />
  </svg>
);

const SpotifyCard: React.FC<SpotifyCardProps> = ({title, artist, img_url, score, seed_tracks}) => {

  const [open, setOpen] = useState(false);

  return (
<Card className="bg-white rounded-xl h-fit overflow-hidden shadow transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
  <Card.Body className="p-4">
    <div className="relative w-full aspect-square mb-4">
      <Image
        src={img_url}
        alt={`${title} album cover`}
        fill
        className="object-cover rounded-lg"
        unoptimized
      />
    </div>
    <Card.Title as="h2" className="text-black text-base sm:text-lg font-semibold break-words">
      {artist}
      <br />
      <span className="font-normal text-sm sm:text-base">{title}</span>
      <br/>
      {open ? <div className="mt-5 font-normal">
        {seed_tracks.sort((a,b) => (b.score-a.score)).map((x) => {
          return <div className="pt-3">
            <div className="text-sm">{x.track+' '+x.artist}</div>
            <div className="text-xs">{'Similarity: '+Math.trunc(x.score*1000)/1000}</div>
          </div>
        })}
      </div>
       : null}
      <button
        className="mt-5 w-full font-normal content-center grid grid-cols-1"
        onClick={() => setOpen(!open)}>
        <div className="text-center">{seed_tracks.length} Matches</div>
        <div className="w-full flex items-center justify-center">
        <Chevron up={open}/>
        </div>
      </button>
    </Card.Title>
  </Card.Body>
</Card>
  );
};

export default SpotifyCard;