'use client'

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Image from 'next/image';

interface SpotifyCardProps {
  title: string,
  artist: string,
  img_url: string
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({title, artist, img_url}) => {

  return (
<Card className="bg-white rounded-xl overflow-hidden shadow transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
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
    </Card.Title>
  </Card.Body>
</Card>
  );
};

export default SpotifyCard;