import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle, Eye, Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import reel1 from "@/assets/reels/reel-1.jpg";
import reel2 from "@/assets/reels/reel-2.jpg";
import reel3 from "@/assets/reels/reel-3.jpg";
import reel4 from "@/assets/reels/reel-4.jpg";
import reel5 from "@/assets/reels/reel-5.jpg";
import reel6 from "@/assets/reels/reel-6.jpg";

/**
 * Realistic reel previews — each thumbnail is a real photograph that maps
 * 1:1 to a service we offer (signage, branding, merch, ACP, logo, studio).
 * The image gently Ken-Burns zooms to feel cinematic without being heavy.
 */
const reels = [
  {
    code: "DR1VdBTDOFm",
    img: reel1,
    service: "Premium Sunboard",
    caption: "Premium Sunboard Vinyl Printing on HP Latex — High Quality • Waterproof • Long Last Life.",
    duration: "0:24",
    likes: "4.2k",
    comments: 112,
    views: "32k",
    url: "https://www.instagram.com/reel/DR1VdBTDOFm/",
  },
  {
    code: "DKw9jP5yAUD",
    img: reel2,
    service: "Flex Printing",
    caption: "High-Quality Flex Printing at Unbeatable Rates! Vibrant event banners & bold brand promotions.",
    duration: "0:18",
    likes: "3.8k",
    comments: 94,
    views: "21k",
    url: "https://www.instagram.com/reel/DKw9jP5yAUD/",
  },
  {
    code: "DR_cDsRklvy",
    img: reel3,
    service: "Branding & Signs",
    caption: "Premium Vinyl Sunboard Printing on HP Latex – sharp colors, long-lasting quality, perfect for branding.",
    duration: "0:31",
    likes: "5.1k",
    comments: 156,
    views: "45k",
    url: "https://www.instagram.com/reel/DR_cDsRklvy/",
  },
  {
    code: "DTCb4xXEqnI",
    img: reel4,
    service: "Studio Magic",
    caption: "High-quality flex prints with sharp colors, strong material & fast delivery. Best Rates.",
    duration: "0:22",
    likes: "2.9k",
    comments: 88,
    views: "15k",
    url: "https://www.instagram.com/reel/DTCb4xXEqnI/",
  },
  {
    code: "DK4EYeeyoDJ",
    img: reel5,
    service: "Logo Identity",
    caption: "Boost your brand with vibrant vinyl graphics! Scratch-resistant. Weatherproof. Impactful.",
    duration: "0:27",
    likes: "6.3k",
    comments: 210,
    views: "68k",
    url: "https://www.instagram.com/reel/DK4EYeeyoDJ/",
  },
  {
    code: "DUM7qSAkhwr",
    img: reel6,
    service: "Media House",
    caption: "Premium Printing. Powerful Impact. Flex • Vinyl • Banners • Stickers. Stand out.",
    duration: "0:35",
    likes: "3.4k",
    comments: 120,
    views: "22k",
    url: "https://www.instagram.com/reel/DUM7qSAkhwr/",
  },
];

const ReelTile = ({ reel, idx }: { reel: (typeof reels)[number]; idx: number }) => {
  const defaultProfile = "https://instagram.com/mapadvertisers365";
  return (
    <motion.a
      href={reel.url || defaultProfile}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden glass-strong shadow-card hover:shadow-glow-magenta transition-all duration-500"
    >
      <img
        src={reel.img}
        alt={reel.service}
        width={576}
        height={1024}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns will-change-transform"
      />

      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="absolute top-3 left-3 z-10 glass-strong rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide flex items-center gap-1.5">
        <Instagram className="h-3 w-3" />
        Reel
      </div>

      <div className="absolute top-3 right-3 z-10 glass-strong rounded-full px-2 py-1 text-[10px] font-semibold flex items-center gap-1">
        <Eye className="h-3 w-3" />
        {reel.views}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="h-16 w-16 rounded-full glass-strong flex items-center justify-center scale-90 opacity-80 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-glow-cyan transition-all duration-300">
          <Play className="h-7 w-7 text-white fill-white ml-0.5" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono opacity-90">{reel.duration}</span>
          <span className="glass rounded-full px-1.5 py-0.5 flex items-center gap-1 text-[10px]">
            <Volume2 className="h-2.5 w-2.5" />
            HD
          </span>
        </div>
        <p className="text-[11px] font-semibold leading-snug line-clamp-2 mb-1.5">
          {reel.caption}
        </p>
        <p className="text-[10px] uppercase tracking-wider text-white/60 mb-2">
          {reel.service}
        </p>
        <div className="flex items-center gap-3 text-[10px] opacity-95">
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3 fill-white" strokeWidth={1.5} /> {reel.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" /> {reel.comments}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 rounded-3xl ring-0 ring-white/0 group-hover:ring-2 group-hover:ring-white/40 transition-all duration-300" />
    </motion.a>
  );
};

export const InstagramReels = () => {
  const profile = "https://instagram.com/mapadvertisers365";
  return (
    <section id="reels" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <Instagram className="h-3.5 w-3.5 text-secondary" />
              @mapadvertisers365 · Recent reels
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Reels &amp; momnoments <br />
              <span className="text-gradient-brand">from the studio.</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-md">
              Real shots from our floor — print runs, signage installs and brand reveals,
              straight to your feed.
            </p>
          </div>
          <Button variant="brand" size="lg" asChild>
            <a href={profile} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {reels.map((r, i) => (
            <ReelTile key={r.service} reel={r} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};