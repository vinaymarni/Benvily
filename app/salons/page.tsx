'use client';

import { Header } from '@/components/header';
import { SalonCard } from '@/components/salon-card';
import { useAtom } from 'jotai';
import { selectedSalonAtom, selectedServiceAtom } from '@/lib/atoms';
import { salons } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function SalonsPage() {
  const [selectedService] = useAtom(selectedServiceAtom);
  const [selectedSalon, setSelectedSalon] = useAtom(selectedSalonAtom);

  let filteredSalons = salons;

  if (selectedService) {
    filteredSalons = filteredSalons.filter((s) => s.services.includes(selectedService.id));
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            {selectedService && (
              <>
                <span>{selectedService.name}</span>
                <span>/</span>
              </>
            )}
            <span>Salons</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Premium Salons & Spas</h1>
          <p className="text-muted-foreground mb-6">
            Discover our curated selection of luxury salons. All locations feature expert stylists and premium amenities.
          </p>
        </div>

        {/* Salons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSalons.map((salon) => (
            <SalonCard
              key={salon.id}
              salon={salon}
              onSelect={setSelectedSalon}
              isSelected={selectedSalon?.id === salon.id}
            />
          ))}
        </div>

        {/* Next Step CTA */}
        {selectedSalon && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Selected:</p>
                <p className="font-semibold">{selectedSalon.name}</p>
              </div>
              {/* <Link href="/services/booking/stylist"> */}
              <Link href="/services/booking/slot">
                <Button className="gap-2">
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
