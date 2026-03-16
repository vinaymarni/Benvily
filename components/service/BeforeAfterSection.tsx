'use client';

import { useState } from 'react';

interface BeforeAfterSectionProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSection({
  beforeImage,
  afterImage,
}: BeforeAfterSectionProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-foreground">
        Real Results
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Before/After Slider */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
          <div className="relative h-96 w-full overflow-hidden bg-muted">
            {/* After Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${afterImage})` }}
            />

            {/* Before Image */}
            <div
              className="absolute inset-0 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url(${beforeImage})`,
                width: `${sliderPosition}%`,
              }}
            />

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            />

            {/* Slider Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                <div className="flex gap-1">
                  <div className="h-4 w-1 bg-accent rounded-full" />
                  <div className="h-4 w-1 bg-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Input Range */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 h-full w-full cursor-col-resize opacity-0 z-20"
              aria-label="Drag to compare before and after"
            />

            {/* Labels */}
            <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
              BEFORE
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              AFTER
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              Dramatic Transformation
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              See the incredible difference our expert stylists can create. Using
              precision techniques and quality products, we deliver results that
              exceed expectations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-accent" />
              <div>
                <p className="font-semibold text-foreground">
                  Expert Styling Technique
                </p>
                <p className="text-sm text-foreground/60">
                  Each cut is customized to suit your face shape and features
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-accent" />
              <div>
                <p className="font-semibold text-foreground">
                  Quality Product Care
                </p>
                <p className="text-sm text-foreground/60">
                  Premium products keep your style looking fresh between appointments
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-accent" />
              <div>
                <p className="font-semibold text-foreground">
                  Long-lasting Results
                </p>
                <p className="text-sm text-foreground/60">
                  Professional styling ensures your look stays sharp for weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
