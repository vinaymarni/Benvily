import { Clock, Users, Zap, RotateCw } from 'lucide-react';

interface ServiceInfoCardProps {
  service: {
    name: string;
    duration: string;
    price: number;
    suitableFor: string;
    hairType?: string[];
    maintenanceLevel: string;
    recommendedFrequency: string;
  };
}

export default function ServiceInfoCard({ service }: ServiceInfoCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md border border-border">
      <h3 className="mb-6 text-xl font-bold text-foreground">
        Service Details
      </h3>

      <div className="space-y-5">
        {/* Duration */}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Duration</p>
            <p className="text-base font-semibold text-foreground">
              {service.duration}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <span className="text-lg font-bold text-accent">₹</span>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Starting Price
            </p>
            <p className="text-base font-semibold text-foreground">
              ₹{service.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Suitable For */}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Suitable For
            </p>
            <p className="text-base font-semibold text-foreground">
              {service.suitableFor}
            </p>
          </div>
        </div>

        {/* Hair Type */}
        {service.hairType && service.hairType.length > 0 && (
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-accent/10 p-3">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Hair Type
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                {service.hairType.map((type) => (
                  <span
                    key={type}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Maintenance */}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <RotateCw className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Maintenance
            </p>
            <p className="text-base font-semibold text-foreground">
              {service.maintenanceLevel}
            </p>
          </div>
        </div>

        {/* Recommended Frequency */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-xs font-medium text-muted-foreground">
            RECOMMENDED TOUCH-UP
          </p>
          <p className="mt-1 text-lg font-bold text-foreground">
            Every {service.recommendedFrequency}
          </p>
        </div>
      </div>
    </div>
  );
}
