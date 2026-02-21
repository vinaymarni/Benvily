'use client';

import { Salon } from '@/lib/atoms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Clock } from 'lucide-react';
import Image from 'next/image';

interface SalonCardProps {
  salon: Salon;
  onSelect: (salon: Salon) => void;
  isSelected?: boolean;
}

export function SalonCard({ salon, onSelect, isSelected }: SalonCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg overflow-hidden ${
        isSelected ? 'ring-2 ring-accent' : ''
      }`}
      onClick={() => onSelect(salon)}
    >
      <div className="relative h-40 bg-gradient-to-br from-secondary/30 to-accent/20">
        <p className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground font-medium">
          <Image
            alt={salon.name}
            src={salon.image} 
            fill
            className=' contain-conten '
          />
        </p>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{salon.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {salon.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">{salon.rating}</span>
            <span className="text-sm text-muted-foreground">({salon.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{salon.openHours.open} - {salon.openHours.close}</span>
          </div>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(salon);
          }}
          className="w-full"
          variant={isSelected ? 'default' : 'outline'}
        >
          {isSelected ? 'Selected' : 'View Salon'}
        </Button>
      </CardContent>
    </Card>
  );
}
