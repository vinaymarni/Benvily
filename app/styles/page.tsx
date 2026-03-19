'use client';

import { Header } from '@/components/header';
import { GenderFilterToggle } from '@/components/gender-filter-toggle';
import { StyleCard } from '@/components/style-card';
import { useAtom } from 'jotai';
import { genderAtom, selectedStyleAtom, selectedServiceAtom } from '@/lib/atoms';
import { styles } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function StylesPage() {
  const [gender] = useAtom(genderAtom);
  const [selectedService] = useAtom(selectedServiceAtom);
  const [selectedStyle, setSelectedStyle] = useAtom(selectedStyleAtom);

  let filteredStyles = styles;

  if (selectedService) {
    filteredStyles = filteredStyles.filter((s) => s.serviceId === selectedService.id);
  }

  if (gender) {
    filteredStyles = filteredStyles.filter((s) => s.availableGenders.includes(gender));
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
            <span>Styles</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Choose Your Style</h1>
          <p className="text-muted-foreground mb-6">
            Browse our collection of premium styles. Each option is expertly crafted for a sophisticated look.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-3">Filter by preference:</p>
              <GenderFilterToggle />
            </div>
            {gender && (
              <p className="text-sm text-muted-foreground">
                Showing {filteredStyles.length} styles available for <span className="font-semibold text-accent">{gender}</span>
              </p>
            )}
          </div>
        </div>

        {/* Styles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStyles.map((style) => (
            <StyleCard
              key={style.id}
              style={style}
              onSelect={setSelectedStyle}
              isSelected={selectedStyle?.id === style.id}
            />
          ))}
        </div>

        {/* Next Step CTA */}
        {selectedStyle && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Selected:</p>
                <p className="font-semibold">{selectedStyle.name}</p>
              </div>
              <Link href="/services/booking/salon">
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
