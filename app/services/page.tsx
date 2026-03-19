'use client';

import { Header } from '@/components/header';
import { GenderFilterToggle } from '@/components/gender-filter-toggle';
import { ServiceCard } from '@/components/service-card';
import { useAtom } from 'jotai';
import { genderAtom, selectedServiceAtom } from '@/lib/atoms';
import { services } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function ServicesPage() {
  const [gender] = useAtom(genderAtom);
  const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);

  const filteredServices = gender
    ? services.filter((s) => s.availableGenders.includes(gender))
    : services;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Premium Salon Services</h1>
          <p className="text-muted-foreground mb-6">
            Choose from our selection of luxury grooming and styling services. Each service is available at multiple premium salons.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-3">Filter by preference:</p>
              <GenderFilterToggle />
            </div>
            {gender && (
              <p className="text-sm text-muted-foreground">
                Showing {filteredServices.length} services available for <span className="font-semibold text-accent">{gender}</span>
              </p>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
              isSelected={selectedService?.id === service.id}
            />
          ))}
        </div>

        {/* Next Step CTA */}
        {selectedService && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Selected:</p>
                <p className="font-semibold">{selectedService.name}</p>
              </div>
              <Link href="/services/booking/styles">
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
