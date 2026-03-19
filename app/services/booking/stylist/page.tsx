'use client';

import { Header } from '@/components/header';
import { StylistCard } from '@/components/stylist-card';
import { BookingSummary } from '@/components/booking-summary';
import { useAtom } from 'jotai';
import {
  selectedStylistAtom,
  selectedSalonAtom,
  selectedServiceAtom,
  selectedStyleAtom,
} from '@/lib/atoms';
import { stylists } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function BookingStylistPage() {
  const [selectedService] = useAtom(selectedServiceAtom);
  const [selectedStyle] = useAtom(selectedStyleAtom);
  const [selectedSalon] = useAtom(selectedSalonAtom);
  const [selectedStylist, setSelectedStylist] = useAtom(selectedStylistAtom);

  let filteredStylists = stylists;

  if (selectedSalon) {
    filteredStylists = filteredStylists.filter((s) => s.salonId === selectedSalon.id);
  }

  if (selectedService) {
    filteredStylists = filteredStylists.filter((s) =>
      s.specializations.includes(selectedService.name as any)
    );
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
                <span>Select Stylist</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Choose Your Stylist</h1>
              <p className="text-muted-foreground">
                Select from our team of expert stylists at {selectedSalon?.name}.
              </p>
            </div>

            {/* Stylists Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStylists.map((stylist) => (
                <StylistCard
                  key={stylist.id}
                  stylist={stylist}
                  onSelect={setSelectedStylist}
                  isSelected={selectedStylist?.id === stylist.id}
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
              stylist={selectedStylist}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        {selectedStylist && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next:</p>
                <p className="font-semibold">Select Time Slot</p>
              </div>
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
