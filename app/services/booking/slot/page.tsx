'use client';

import { Header } from '@/components/header';
import { TimeSlotSelector } from '@/components/time-slot-selector';
import { BookingSummary } from '@/components/booking-summary';
import { useAtom } from 'jotai';
import {
  selectedSlotAtom,
  selectedStylistAtom,
  selectedSalonAtom,
  selectedServiceAtom,
  selectedStyleAtom,
} from '@/lib/atoms';
import { timeSlots } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function BookingSlotPage() {
  const [selectedService] = useAtom(selectedServiceAtom);
  const [selectedStyle] = useAtom(selectedStyleAtom);
  const [selectedSalon] = useAtom(selectedSalonAtom);
  const [selectedStylist] = useAtom(selectedStylistAtom);
  const [selectedSlot, setSelectedSlot] = useAtom(selectedSlotAtom);

  let filteredSlots = timeSlots;

  if (selectedStylist) {
    filteredSlots = filteredSlots.filter((s) => s.stylistId === selectedStylist.id);
  }

  if (selectedService) {
    filteredSlots = filteredSlots.filter((s) => s.serviceId === selectedService.id);
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
                <span>Select Time Slot</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Choose Your Time</h1>
              <p className="text-muted-foreground">
                Select an available time slot for your appointment with {selectedStylist?.name}.
              </p>
            </div>

            {/* Time Slots */}
            <div className="bg-card border border-border rounded-lg p-8">
              {filteredSlots.length > 0 ? (
                <TimeSlotSelector
                  slots={filteredSlots}
                  selectedSlot={selectedSlot}
                  onSelect={setSelectedSlot}
                />
              ) : (
                <div className="text-center text-muted-foreground">
                  <p>No available time slots. Please select a different stylist or date.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <BookingSummary
              service={selectedService}
              style={selectedStyle}
              salon={selectedSalon}
              stylist={selectedStylist}
              slot={selectedSlot}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        {selectedSlot && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next:</p>
                <p className="font-semibold">Confirm & Pay</p>
              </div>
              <Link href="/services/booking/payment">
                <Button className="gap-2">
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
