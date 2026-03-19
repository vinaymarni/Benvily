'use client';

import { Header } from '@/components/header';
import { StyleCard } from '@/components/style-card';
import { BookingSummary } from '@/components/booking-summary';
import { useAtom } from 'jotai';
import {
  selectedStyleAtom,
  selectedServiceAtom,
} from '@/lib/atoms';
import { styles } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function BookingStylesPage() {
  const [selectedService] = useAtom<any>(selectedServiceAtom);
  const [selectedStyle, setSelectedStyle] = useAtom<any>(selectedStyleAtom);

  let filteredStyles = styles;

  if (selectedService) {
    filteredStyles = filteredStyles.filter((s) => s.serviceId === selectedService.id);
  }

  const endPoint = selectedStyle ? `${selectedStyle.serviceId}_${selectedStyle.id}_${selectedStyle.name.replaceAll(" ", "-")}` : "";

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
                <span>Select Style</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Choose Your Style</h1>
              <p className="text-muted-foreground">
                Browse available styles for your {selectedService?.name} service.
              </p>
            </div>

            {/* Styles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredStyles.map((style) => (
                <StyleCard
                  key={style.id}
                  style={style}
                  onSelect={setSelectedStyle}
                  isSelected={selectedStyle?.id === style.id}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <BookingSummary
              service={selectedService}
              style={selectedStyle}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        {selectedStyle && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next:</p>
                <p className="font-semibold">Select Salon</p>
              </div>
              {/* <Link href="/services/booking/salon"> */}
              <Link href={`/services/booking/styles/${endPoint}/`}>
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
