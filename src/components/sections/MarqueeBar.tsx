const items = [
  "Offset Printing",
  "Digital Printing",
  "Flex & Vinyl",
  "Brand Identity",
  "Packaging",
  "Signage & ACP",
  "Web Design",
  "Social Media",
  "Merchandise",
  "Photography",
  "3D Letters",
  "Roll-up Standees",
];

/**
 * Editorial marquee — clean hairline borders, gold separator dots,
 * silently auto-loops with the .animate-marquee utility (defined in index.css).
 * Pauses on hover.
 */
export const MarqueeBar = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative py-7 border-y border-border/40 overflow-hidden bg-background/40">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-10 pr-10 text-xl md:text-2xl font-display font-medium text-muted-foreground/55 whitespace-nowrap"
          >
            <span className="hover:text-foreground transition-colors">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold/80 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
