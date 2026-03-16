'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceGalleryProps {
  images: string[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Style Gallery</h2>

      {/* Main Image */}
      <div className="relative h-96 overflow-hidden rounded-2xl bg-muted shadow-md">
        <div
          className="h-full w-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[activeIndex]})` }}
        />

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl transition-all ${
              activeIndex === index
                ? 'ring-2 ring-accent shadow-lg'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
