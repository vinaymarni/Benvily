'use client';

import { Header } from '@/components/header';
import { GenderFilterToggle } from '@/components/gender-filter-toggle';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { genderAtom } from '@/lib/atoms';
import Link from 'next/link';
import { Scissors, Star, MapPin, Clock } from 'lucide-react';
import { styles } from '@/lib/dummy-data';
import Image from 'next/image';
import CardsCarousal from '@/components/commonComponents/CardsCarousal';

export default function Home() {
  const [gender] = useAtom(genderAtom);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Luxury Salon Experiences
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Discover and book premium grooming and styling services at the finest salons in your area. 
              Personalized service selection tailored to your preferences.
            </p>

            {/* Gender Filter */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Filter by preference:</p>
              <GenderFilterToggle />
              {gender && (
                <p className="text-sm text-muted-foreground">
                  Showing services for <span className="font-semibold text-accent">{gender}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <CardsCarousal  
        gap={20}
        scrollSize={100}
        containerClass='pt-[2rem] '
        dataLength={styles.length}
        allCards={styles.map((style) => (
          <div key={style.id} className='cursor-pointer w-30 h-30 min-w-30 rounded-sm relative flex justify-center items-center   transform transition duration-300 hover:scale-105 overflow-hidden '>
            <Image
              alt={style.name}
              src={style.image} 
              fill
              className=' rounded-sm '
            />
            <span className='absolute bottom-[6px] z-1 font-bold bg-white rounded-sm text-[12px] px-[4px]  '>{style.name}</span>
          </div>
        ))}
      />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* Service-Based Booking */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <Scissors className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-bold">Browse by Service</h2>
            <p className="text-muted-foreground">
              Choose from haircuts, coloring, styling, and more. Find the perfect service for you.
            </p>
            <Link href="/services" className="inline-block">
              <Button className="w-full">Explore Services</Button>
            </Link>
          </div>

          {/* Salon-Based Booking */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <MapPin className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-bold">Browse by Salon</h2>
            <p className="text-muted-foreground">
              Discover premium salons near you. Check ratings, reviews, and available stylists.
            </p>
            <Link href="/salons" className="inline-block">
              <Button className="w-full">Find Salons</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Benvily</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center">
              <Star className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Premium Stylists</h3>
              <p className="text-muted-foreground">
                Book with highly-rated professionals at luxury salons
              </p>
            </div>
            <div className="space-y-3 text-center">
              <Clock className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Convenient Booking</h3>
              <p className="text-muted-foreground">
                Real-time availability and instant confirmations
              </p>
            </div>
            <div className="space-y-3 text-center">
              <MapPin className="h-8 w-8 text-accent mx-auto" />
              <h3 className="font-semibold text-lg">Multiple Locations</h3>
              <p className="text-muted-foreground">
                Access the best salons across multiple premium locations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Loved by Customers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                &quot;Amazing experience! The booking process was seamless and the service exceeded my expectations.&quot;
              </p>
              <p className="font-semibold">Customer {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Benvily. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
