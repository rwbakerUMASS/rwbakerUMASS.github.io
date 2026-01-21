'use client'

import React, { useEffect, useState } from "react";
import '@/app/globals.css'
import Image from "next/image";

const photos = [
  "https://live.staticflickr.com/65535/54896834917_754dfeebb9_c.jpg",
  "https://live.staticflickr.com/65535/54897705486_35e5677ef1_c.jpg",
  "https://live.staticflickr.com/65535/54896834772_80ed5c137e_c.jpg",
  "https://live.staticflickr.com/65535/54897947114_01f8f59705_c.jpg",
  "https://live.staticflickr.com/65535/54897947414_06c28cbb34_c.jpg",
  "https://live.staticflickr.com/65535/54898008585_cb1376bf50_c.jpg",
  "https://live.staticflickr.com/65535/54898008325_5d8d199751_c.jpg",
  "https://live.staticflickr.com/65535/54898008590_b549f5cc35_c.jpg",
];

export default function PhotographyPage() {
  
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="pt-16 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Small Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Photography
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            <a href="https://www.flickr.com/photos/203757089@N03/" className="underline hover:text-neutral-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
              Flickr
            </a>
          </p>
        </div>

        {/* Clean Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((src, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Open photo ${i + 1}`}
              className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md cursor-pointer group p-0 border-0 bg-transparent"
              onClick={() => setLightbox(src)}
            >
                <Image
                  src={src}
                  alt={`Photo ${i + 1}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full block transition duration-500 group-hover:scale-105"
                />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="max-h-[90vh] w-auto" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightbox}
                alt="Large"
                width={1200}
                height={900}
                className="rounded-xl shadow-2xl max-w-[90vw] max-h-[90vh] w-auto h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
