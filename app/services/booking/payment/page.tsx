'use client';

import { Header } from '@/components/header';
import { BookingSummary } from '@/components/booking-summary';
import { useAtom } from 'jotai';
import {
  selectedSlotAtom,
  selectedStylistAtom,
  selectedSalonAtom,
  selectedServiceAtom,
  selectedStyleAtom,
} from '@/lib/atoms';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const [selectedService] = useAtom(selectedServiceAtom);
  const [selectedStyle] = useAtom(selectedStyleAtom);
  const [selectedSalon] = useAtom(selectedSalonAtom);
  const [selectedStylist] = useAtom(selectedStylistAtom);
  const [selectedSlot] = useAtom(selectedSlotAtom);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsConfirmed(true);
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[70vh]">
          <div className="text-center space-y-6 max-w-md">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl font-bold">Booking Confirmed!</h1>
            <p className="text-muted-foreground">
              Your appointment has been successfully booked. A confirmation email has been sent to your inbox.
            </p>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3 text-left">
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-semibold">{selectedService?.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Salon</p>
                <p className="font-semibold">{selectedSalon?.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stylist</p>
                <p className="font-semibold">{selectedStylist?.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-semibold">
                  {selectedSlot && new Date(selectedSlot.date).toLocaleDateString()} at {selectedSlot?.time}
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Link href="/dashboard">
                <Button>View Booking</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
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
                <span>Confirm & Pay</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Complete Your Booking</h1>
              <p className="text-muted-foreground">
                Review your booking details and complete the payment.
              </p>
            </div>

            {/* Booking Review */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedService && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{selectedService.name}</span>
                    <span className="font-semibold">₹{selectedService.basePrice}/-</span>
                  </div>
                )}
                {selectedStyle && (
                  <div className="flex justify-between border-t pt-4">
                    <span className="text-muted-foreground">{selectedStyle.name}</span>
                    <span className="font-semibold">₹{selectedStyle.price}/-</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your card details to complete the booking</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1-555-0123" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card">Card Number</Label>
                    <Input
                      id="card"
                      placeholder="4532 1234 5678 9010"
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" maxLength={5} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" maxLength={3} required />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isProcessing}
                    size="lg"
                  >
                    {isProcessing ? 'Processing...' : 'Confirm Booking'}
                  </Button>
                </form>
              </CardContent>
            </Card>
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
      </div>
    </div>
  );
}
