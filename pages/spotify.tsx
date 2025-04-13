"use client"

import '@/app/globals.css'
import Navbar from '@/app/components/navigation/navbar'
import SpotifyCard from '@/app/components/spotify-card';
import React, { useEffect, useState } from "react";
import { json } from 'stream/consumers';
import {sha256} from 'js-sha256'
import AuthProvider from "@/app/components/AuthProvider";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

interface SeedTrack {
  title: string,
  artist: string,
  score: number
}

interface TrackRecommendation {
  title: string,
  artist: string,
  img_url: string,
  score: number,
  seed_tracks: SeedTrack[]
}

function Spotify() {

  const getSpotifyData_url = process.env.NEXT_PUBLIC_SPOTIFY_API
  
  const [myTracks, setTracks] = useState<TrackRecommendation[]>([]);
  const [type, setType] = useState('tracks');
  const [time_range, setTime] = useState('medium_term');
  const [limit, setLimit] = useState(48);
  const [isLoading, setIsLoading] = useState(true);
  const {data: session, status } = useSession();


  const fetchSpotifyData = () => {
    setTracks([]);
    setIsLoading(true)
    const tmpTracks: TrackRecommendation[] = [];
    const query = `?auth=${session?.token?.access_token}&type=${type}&time_range=${time_range}&limit=${limit}`;
    console.log(query)
    fetch(getSpotifyData_url+query).then((resp) => {
      resp.json().then((tracks) => {
        console.log(tracks)
        tracks.forEach((x: any) => {
          const tmp:TrackRecommendation = {
            title:x.track,
            artist: x.artist,
            img_url: x.img_url,
            score:x.score,
            seed_tracks:x.seed_tracks
          };
          tmpTracks.push(tmp);
        })
        setTracks(tmpTracks);
        setIsLoading(false)
      }).catch()
    }).catch()
  };

  useEffect(() => {
      if(session){
        fetchSpotifyData();
      }
  }, [type,time_range,limit, session])
  if (session) {
    console.log(session)
    return (
      <main className="min-h-screen bg-black text-white">

        {/* Button Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4 sm:px-8 md:px-20 mb-10">
          {["short_term", "medium_term", "long_term"].map((range) => (
            <button
              key={range}
              onClick={() => setTime(range)}
              className={range == time_range ? "border-white border rounded-xl bg-white bg-opacity-30 text-white text-sm py-2 px-4 w-full" : "border-white border rounded-xl text-white text-sm py-2 px-4 w-full"}
            >
              {range.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
          <div></div>
          <button 
            onClick={() => signOut()}
            className="border-white border rounded-xl text-white text-sm py-2 px-4 w-full">
            Sign Out
          </button>
        </div>

        {/* Card Grid */}
        {isLoading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-20 pb-20">
            {myTracks.sort((a,b) => {
              return b.seed_tracks.length - a.seed_tracks.length;
            }).map((x) => (
              <SpotifyCard
                key={sha256(JSON.stringify(x))}
                title={x.title}
                artist={x.artist}
                img_url={x.img_url}
                score={x.score}
                seed_tracks={x.seed_tracks}
              />
            ))}
          </div>
        )}
      </main>
  )} else {
    return (
      <button
        onClick={() => signIn("spotify")}
        className="w-56 h-16 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white text-3xl rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-[0.98] m-6 border-2 border-orange-800"
      >
        Sign In
      </button>
      )
  }
}

export default function SpotifyPageWrapper(props: any) {
  return (
    <>
    <Navbar />
    <AuthProvider>
      <div className="pt-20" />
      <Spotify />
    </AuthProvider>
    </>
  );
}