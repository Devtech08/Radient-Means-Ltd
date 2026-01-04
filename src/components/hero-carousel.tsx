'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { heroImages } from '@/lib/data';

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {heroImages.map((image, index) => (
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              className="bg-primary transition-opacity opacity-0 duration-[2s]"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
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
