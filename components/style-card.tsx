'use client';

import { Style } from '@/lib/atoms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IndianRupee } from 'lucide-react';
import Image from 'next/image';

interface StyleCardProps {
  style: Style;
  onSelect: (style: Style) => void;
  isSelected?: boolean;
}

export function StyleCard({ style, onSelect, isSelected }: StyleCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg overflow-hidden ${
        isSelected ? 'ring-2 ring-accent' : ''
      }`}
      onClick={() => onSelect(style)}
    >
      <div className="relative h-40 bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#F5F5DC]/20" />
        <p className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground font-medium">
          <Image
            alt={style.name}
            src={style.image} 
            fill
            className=' object-contain '
          />
        </p>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{style.name}</CardTitle>
        <CardDescription>{style.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
            <span className="text-lg font-semibold">₹{style.price}/-</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {style.availableGenders.map((g) => (
            <span
              key={g}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(style);
          }}
          className="w-full"
          variant={isSelected ? 'default' : 'outline'}
        >
          {isSelected ? 'Selected' : 'Choose Style'}
        </Button>
      </CardContent>
    </Card>
  );
}
