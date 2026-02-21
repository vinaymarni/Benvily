'use client';

import { Service } from '@/lib/atoms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, IndianRupee } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
  isSelected?: boolean;
}

export function ServiceCard({ service, onSelect, isSelected }: ServiceCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'ring-2 ring-accent' : ''
      }`}
      onClick={() => onSelect(service)}
    >
      <CardHeader>
        <CardTitle className="text-lg">{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{service.duration} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">₹{service.basePrice}/-</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {service.availableGenders.map((g) => (
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
            onSelect(service);
          }}
          className="w-full"
          variant={isSelected ? 'default' : 'outline'}
        >
          {isSelected ? 'Selected' : 'Choose Service'}
        </Button>
      </CardContent>
    </Card>
  );
}
