'use client';

import { Stylist } from '@/lib/atoms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Award } from 'lucide-react';

interface StylistCardProps {
  stylist: Stylist;
  onSelect: (stylist: Stylist) => void;
  isSelected?: boolean;
}

export function StylistCard({ stylist, onSelect, isSelected }: StylistCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg text-center ${
        isSelected ? 'ring-2 ring-accent' : ''
      }`}
      onClick={() => onSelect(stylist)}
    >
      <div className="relative h-32 bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <p className="text-xs text-muted-foreground font-medium">Avatar</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{stylist.name}</CardTitle>
        <CardDescription className="text-xs">
          <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
            {stylist.genderSpecialization}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Specializations</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {stylist.specializations.map((spec) => (
              <span
                key={spec}
                className="text-xs px-2 py-1 bg-muted text-foreground rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">{stylist.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({stylist.reviews} reviews)</span>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(stylist);
          }}
          className="w-full"
          variant={isSelected ? 'default' : 'outline'}
        >
          {isSelected ? 'Selected' : 'Book Now'}
        </Button>
      </CardContent>
    </Card>
  );
}
