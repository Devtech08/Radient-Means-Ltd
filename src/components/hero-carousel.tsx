'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { heroImages } from '@/lib/data';
import { cn } from '@/lib/utils';

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {heroImages.map((image, index) => (
          <div 
            className={cn(
                "relative flex-[0_0_100%] h-full",
                {"embla-zoom-out": index === activeIndex }
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
       <div className="absolute inset-0 bg-primary/80 z-10" />
    </div>
  );
}
