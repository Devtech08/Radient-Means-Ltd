
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { heroImages } from '@/lib/data';
import { cn } from '@/lib/utils';

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative h-full w-full">
        {heroImages.map((image, index) => (
          <div
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out",
              index === activeIndex ? "opacity-100 embla-zoom-out" : "opacity-0"
            )}
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              className="bg-primary"
              data-ai-hint={image.aiHint}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
    </div>
  );
}
