import { Star, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceHeroProps {
  service: {
    name: string;
    category: string;
    rating: number;
    reviewCount: number;
    duration: string;
    price: number;
  };
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-white to-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/service-hero.jpg)',
          opacity: 0.15,
        }}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 min-h-screen">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              {service.category}
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance">
            {service.name}
          </h1>

          {/* Rating */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 transition-colors ${
                    i < Math.round(service.rating)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-lg font-semibold text-foreground">
              {service.rating}
            </span>
            <span className="text-muted-foreground">
              ({service.reviewCount} reviews)
            </span>
          </div>

          {/* Details */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-medium text-foreground">{service.duration}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
              <DollarSign className="h-5 w-5 text-accent" />
              <span className="font-medium text-foreground">
                From ₹{service.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="relative h-14 px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Continue Booking
          </Button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs font-medium">Scroll to explore</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
