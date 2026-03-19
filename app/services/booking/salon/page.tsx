'use client';

import { Header } from '@/components/header';
import { SalonCard } from '@/components/salon-card';
import { BookingSummary } from '@/components/booking-summary';
import { useAtom } from 'jotai';
import {
  selectedSalonAtom,
  selectedServiceAtom,
  selectedStyleAtom,
} from '@/lib/atoms';
import { salons } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function BookingSalonPage() {
  const [selectedService] = useAtom(selectedServiceAtom);
  const [selectedStyle] = useAtom(selectedStyleAtom);
  const [selectedSalon, setSelectedSalon] = useAtom(selectedSalonAtom);

  let filteredSalons = salons;

  if (selectedService) {
    filteredSalons = filteredSalons.filter((s) => s.services.includes(selectedService.id));
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <span>Booking</span>
                <span>/</span>
                <span>Select Salon</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Choose Your Salon</h1>
              <p className="text-muted-foreground">
                Select a premium salon location for your appointment.
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
          </div>

          {/* Sidebar */}
          <div>
            <BookingSummary
              service={selectedService}
              style={selectedStyle}
              salon={selectedSalon}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        {selectedSalon && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next:</p>
                <p className="font-semibold">Select Stylist</p>
              </div>
              <Link href="/services/booking/stylist">
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
