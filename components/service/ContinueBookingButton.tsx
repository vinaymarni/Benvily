import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ContinueBookingButtonProps {
  serviceName: string;
}

export default function ContinueBookingButton({
  serviceName,
}: ContinueBookingButtonProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-accent to-accent/80 p-12 text-center shadow-lg border border-accent/50">
      <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
        Ready to Get {serviceName}?
      </h2>
      <p className="mb-8 text-lg text-white/90">
        Choose your preferred salon and book your appointment today
      </p>

      <Link href="/services/booking/salon">
        <Button
          size="lg"
          className="relative h-14 px-10 text-lg font-semibold bg-white text-accent hover:bg-white/90 shadow-lg transition-all duration-300 hover:scale-105"
        >
          Select Salon & Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>

      <p className="mt-6 text-sm text-white/70">
        Compare salons, prices, and availability all in one place
      </p>
    </div>
  );
}
