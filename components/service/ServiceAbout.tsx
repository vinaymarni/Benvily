interface ServiceAboutProps {
  description: string;
}

export default function ServiceAbout({ description }: ServiceAboutProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          About This Style
        </h2>
        <p className="text-lg leading-relaxed text-foreground/80">
          {description}
        </p>
      </div>

      <div className="rounded-xl bg-accent/5 p-6 border border-accent/20">
        <h3 className="mb-3 text-lg font-semibold text-foreground">
          Why Choose This Style?
        </h3>
        <ul className="space-y-2 text-foreground/70">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
            <span>Perfect for making a bold statement and standing out</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
            <span>Highly adaptable to different face shapes and preferences</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
            <span>Creates dimension and movement that catches light beautifully</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
            <span>Trending on social media and among style-conscious individuals</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
