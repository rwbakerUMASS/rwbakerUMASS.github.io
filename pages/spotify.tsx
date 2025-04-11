"use client"

import '@/app/globals.css'
import Navbar from '@/app/components/navigation/navbar'
import SpotifyCard from '@/app/components/spotify-card';
import React, { useEffect, useState } from "react";
import { json } from 'stream/consumers';
import {sha256} from 'js-sha256'

interface Track {
  title: string,
  artist: string,
  img_url: string
}

export default function Spotify() {

  const getSpotifyData_url = process.env.NEXT_PUBLIC_SPOTIFY_API
  
  const [myTracks, setTracks] = useState<Track[]>([]);
  const [type, setType] = useState('tracks');
  const [time_range, setTime] = useState('medium_term');
  const [limit, setLimit] = useState(48);
  const [isLoading, setIsLoading] = useState(true);


  const fetchSpotifyData = () => {
    setTracks([]);
    setIsLoading(true)
    const tmpTracks: Track[] = [];
    const query = `?type=${type}&time_range=${time_range}&limit=${limit}`;
    fetch(getSpotifyData_url+query).then((resp) => {
      resp.json().then((tracks) => {
        console.log(tracks)
        tracks.items.forEach((x: any) => {
          const tmp:Track = {
            title:x.name,
            artist: x.artists[0].name,
            img_url: x.album.images[0].url
          };
          tmpTracks.push(tmp);
        })
        setTracks(tmpTracks);
        setIsLoading(false)
      })
    })
  };

  useEffect(() => {
      fetchSpotifyData();
  }, [type,time_range,limit])
  
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-20" />

      {/* Button Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4 sm:px-8 md:px-20 mb-10">
        {["short_term", "medium_term", "long_term"].map((range) => (
          <button
            key={range}
            onClick={() => setTime(range)}
            className="border-white border rounded-xl text-white text-sm py-2 px-4 w-full"
          >
            {range.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}
          </button>
        ))}
        <button className="border-white border rounded-xl text-white text-sm py-2 px-4 w-full">
          More Info
        </button>
        <button className="border-white border rounded-xl text-white text-sm py-2 px-4 w-full">
          More Info
        </button>
      </div>

      {/* Card Grid */}
      {isLoading ? (
        <p className="text-center text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 md:px-20 pb-20">
          {myTracks.map((x) => (
            <SpotifyCard
              key={sha256(JSON.stringify(x))}
              title={x.title}
              artist={x.artist}
              img_url={x.img_url}
            />
          ))}
        </div>
      )}
    </main>
  )
}
