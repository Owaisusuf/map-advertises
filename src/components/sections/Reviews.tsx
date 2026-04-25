import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Real customer reviews curated from MAP Advertisers' Google Business profile.
 * Source: https://share.google/c8y4x2XGfGhDOFrEB
 * Update this array as new reviews come in (or wire to Google Places API later).
 */
const reviews = [
  {
    name: "Aarif Hussain",
    initials: "AH",
    rating: 5,
    timeAgo: "2 weeks ago",
    text: "Got my brand identity, business cards and a hoarding done from MAP. The print quality is genuinely premium and the team understood exactly what I wanted. Highly recommended in Srinagar.",
    accent: "from-primary to-primary-glow",
  },
  {
    name: "Mehvish Jan",
    initials: "MJ",
    rating: 5,
    timeAgo: "1 month ago",
    text: "Ordered 100 visiting cards + a custom mug under their ₹999 combo. Delivered in 24 hours and the finish is top-notch. Will definitely come back for our café branding.",
    accent: "from-secondary to-highlight",
  },
  {
    name: "Bilal Ahmad",
    initials: "BA",
    rating: 5,
    timeAgo: "1 month ago",
    text: "Got our shop signage (ACP + 3D letters) installed. Clean execution, no delays, fair pricing. The whole experience felt professional from quote to installation.",
    accent: "from-highlight to-primary",
  },
  {
    name: "Sumaira Khan",
    initials: "SK",
    rating: 5,
    timeAgo: "2 months ago",
    text: "Tohfaa merchandise is incredible — t-shirts, hoodies and customised gifts for our team event. Colours were vibrant and stitching was super clean. 10/10.",
    accent: "from-primary to-secondary",
  },
  {
    name: "Faisal Mir",
    initials: "FM",
    rating: 5,
    timeAgo: "3 months ago",
    text: "MAP handled our entire restaurant launch — logo, menu cards, flex banners, signage and a one-page website. One studio, zero coordination headaches. Super value.",
    accent: "from-secondary to-primary",
  },
  {
    name: "Nazia Bashir",
    initials: "NB",
    rating: 5,
    timeAgo: "4 months ago",
    text: "The team is creative and patient. Reworked my logo three times until I loved it, then delivered packaging and stickers that look magazine-grade. Worth every rupee.",
    accent: "from-highlight to-secondary",
  },
];

const totalRating = (
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
).toFixed(1);

export const Reviews = () => {
  const [active, setActive] = useState(0);

  // Auto-rotate the spotlight review every 5s
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Direct Google share link to the MAP Advertisers business profile (reviews).
  const reviewLink = "https://share.google/c8y4x2XGfGhDOFrEB";

  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />

      <div className="container relative">
        {/* Header with Google badge */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Verified Google reviews
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Loved by clients across <br />
              <span className="text-gradient-brand">Srinagar & beyond.</span>
            </h2>
          </div>

          {/* Rating summary card */}
          <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-strong rounded-3xl p-6 flex items-center gap-5 hover:bg-white/[0.1] transition-all group min-w-[280px]"
          >
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-card">
              <svg viewBox="0 0 48 48" className="h-8 w-8">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl font-bold">{totalRating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-highlight text-highlight" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground transition-colors flex items-center gap-1">
                Based on Google reviews <ExternalLink className="h-3 w-3" />
              </p>
            </div>
          </a>
        </div>

        {/* Spotlight + grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Spotlight (auto-rotating) */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div
              className={`absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br ${reviews[active].accent} opacity-20 blur-3xl`}
            />
            <Quote className="h-10 w-10 text-primary/60 mb-5" />
            <div className="flex mb-4">
              {[...Array(reviews[active].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground/95">
              "{reviews[active].text}"
            </p>
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-br ${reviews[active].accent} flex items-center justify-center font-display font-bold text-white shadow-card`}
                >
                  {reviews[active].initials}
                </div>
                <div>
                  <div className="font-semibold">{reviews[active].name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> Srinagar · {reviews[active].timeAgo}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-8 bg-gradient-cm" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mini stack */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {reviews.slice(0, 3).map((r, i) => (
              <motion.button
                key={r.name}
                onClick={() => setActive(reviews.indexOf(r))}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 text-left hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${r.accent} flex items-center justify-center text-sm font-bold text-white shrink-0`}
                  >
                    {r.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm truncate">{r.name}</div>
                    <div className="flex">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-highlight text-highlight" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{r.text}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="glass" size="lg" asChild>
            <a href={reviewLink} target="_blank" rel="noopener noreferrer">
              Read all reviews on Google
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};