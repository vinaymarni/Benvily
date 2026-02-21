'use client';

import { TimeSlot } from '@/lib/atoms';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TimeSlotSelectorProps {
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSelect: (slot: TimeSlot) => void;
}

export function TimeSlotSelector({ slots, selectedSlot, onSelect }: TimeSlotSelectorProps) {
  // Group slots by date
  const slotsByDate = slots.reduce(
    (acc, slot) => {
      if (!acc[slot.date]) acc[slot.date] = [];
      acc[slot.date].push(slot);
      return acc;
    },
    {} as Record<string, TimeSlot[]>
  );

  return (
    <div className="space-y-6">
      {Object.entries(slotsByDate).map(([date, dateSlots]) => (
        <div key={date}>
          <h3 className="font-semibold mb-3">
            {new Date(date).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
            })}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {dateSlots.map((slot) => (
              <Button
                key={slot.id}
                onClick={() => slot.available && onSelect(slot)}
                disabled={!slot.available}
                variant={selectedSlot?.id === slot.id ? 'default' : 'outline'}
                className="text-sm"
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
