'use client';

import { Service, Style, Salon, Stylist, TimeSlot } from '@/lib/atoms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { IndianRupee } from 'lucide-react';

interface BookingSummaryProps {
  service?: Service;
  style?: Style;
  salon?: Salon;
  stylist?: Stylist;
  slot?: TimeSlot;
}

export function BookingSummary({ service, style, salon, stylist, slot }: BookingSummaryProps) {
  let total = 0;
  if (service) total += service.basePrice;
  if (style) total += (style.price - (service?.basePrice || 0));

  return (
    <Card className="sticky top-4 h-fit">
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {service && (
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Service</p>
            <p className="font-semibold">{service.name}</p>
            <p className="text-xs text-muted-foreground">{service.duration} minutes</p>
          </div>
        )}

        {style && (
          <>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Style</p>
              <p className="font-semibold">{style.name}</p>
            </div>
          </>
        )}

        {salon && (
          <>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Salon</p>
              <p className="font-semibold">{salon.name}</p>
              <p className="text-xs text-muted-foreground">{salon.location}</p>
            </div>
          </>
        )}

        {stylist && (
          <>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Stylist</p>
              <p className="font-semibold">{stylist.name}</p>
              <p className="text-xs text-muted-foreground">
                Rating: {stylist.rating} ({stylist.reviews} reviews)
              </p>
            </div>
          </>
        )}

        {slot && (
          <>
            <Separator />
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Date & Time</p>
              <p className="font-semibold">
                {new Date(slot.date).toLocaleDateString()} at {slot.time}
              </p>
            </div>
          </>
        )}

        <Separator />
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5" />
            <span className="text-lg font-bold">Total:</span>
          </div>
          <span className="text-2xl font-bold text-accent">₹{total}/-</span>
        </div>
      </CardContent>
    </Card>
  );
}
