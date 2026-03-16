import { CheckCircle2 } from 'lucide-react';

interface ServiceBenefitsProps {
  benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-foreground">Benefits</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border hover:border-accent/50"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
              </div>
              <p className="text-base font-medium text-foreground">{benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
