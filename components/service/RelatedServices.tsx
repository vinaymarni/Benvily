'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Style } from '@/lib/atoms';
import Link from 'next/link';

interface RelatedServicesProps {
  services: Style[];
  category: string;
}

export default function RelatedServices({ services, category }: RelatedServicesProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('services-carousel');
    if (container) {
      const scrollAmount = 320;
      const newPosition =
        direction === 'left'
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">
          You Might Also Like
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="rounded-full border border-border bg-white p-3 transition-all hover:bg-background"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="rounded-full border border-border bg-white p-3 transition-all hover:bg-background"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          id="services-carousel"
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {services.map((service) => {
            const endPoint = `${service.serviceId}_${service.id}_${service.name.replaceAll(" ", "-")}`;

            console.log(endPoint)
            return(
              <div
                key={service.id}
                className="group flex-shrink-0 w-80 rounded-2xl overflow-hidden bg-white shadow-md border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {category}
                  </p>
                  <h3 className="mb-4 mt-2 text-xl font-bold text-foreground">
                    {service.name}
                  </h3>

                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent">
                      ₹{service.price.toLocaleString()}
                    </span>
                  </div>

                  <Link href={`/services/booking/styles/${endPoint}/`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
          )})}
        </div>
      </div>

      {/* Helper Text */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Discover more services tailored to your style
      </p>
    </div>
  );
}
