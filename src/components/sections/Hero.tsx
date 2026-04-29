import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroEditorial from "@/assets/hero-printer.jpg";

const FOUNDED = 1980;
const yearsOfCraft = new Date().getFullYear() - FOUNDED;

const WA_URL =
  "https://wa.me/919086001122?text=" +
  encodeURIComponent("Hi MAP, I'd like a free quote for my brand.");

const SERVICES = [
  "Offset Printing",
  "Digital Printing",
  "Flex & Vinyl",
  "Brand Identity",
  "Packaging",
  "Signage",
];

/**
 * Editorial / awwwards-style hero.
 * - Asymmetric magazine layout
 * - Massive display headline that breaks the grid
 * - Editorial gold accent against cyan/magenta brand
 * - Hero image as a single uninterrupted artwork (no overlapping blob z-issues)
 * - Vertical "EST. 1980" tag, marker numerals, hairline metadata strips
 */
export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-stretch pt-24 md:pt-28 pb-12 overflow-hidden noise-overlay">
      {/* Ambient ground — single soft radial, no clashing blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-radial-brand opacity-80" />
        <div className="absolute inset-0 grid-pattern opacity-[0.18]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container relative flex-1 pb-20 md:pb-24">
        {/* Vertical EST. tag — left edge */}
        <div className="flex absolute left-2 md:left-6 xl:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-[50]">
          <div className="vertical-rl text-[11px] tracking-[0.4em] uppercase text-foreground/90 font-semibold drop-shadow-md">
            Est. 1980 — Srinagar, Kashmir
          </div>
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70 vertical-rl">
            №&nbsp;{yearsOfCraft}
          </div>
        </div>

        {/* Top metadata strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-muted-foreground/70 mb-10"
        >
          <span>Vol. {yearsOfCraft} · Edition 2026</span>
          <span className="hidden lg:flex items-center gap-2">
            <span className="h-px w-12 bg-foreground/30" />
            Print · Signage · Brand · Web · Media
            <span className="h-px w-12 bg-foreground/30" />
          </span>
          <span>Kashmir / India</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — copy block */}
          <div className="lg:col-span-7 relative pl-10 md:pl-16 lg:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-7"
            >
              <span className="inline-flex items-center gap-1.5 bg-gradient-gold text-gold-foreground rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] shadow-glow-gold">
                <Sparkles className="h-3 w-3" /> Since 1980
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {yearsOfCraft} years of craft
              </span>
            </motion.div>

            <h1 className="font-display font-bold tracking-[-0.02em] leading-[1.1] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="block text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05]"
              >
                Printing, Signage and
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="block text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] text-gradient-brand"
              >
                Branding Services
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="block text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.1] text-muted-foreground mt-2"
              >
                in Srinagar, Kashmir
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              MAP Advertisers is a leading printing press and branding studio based in Srinagar, offering high-quality flex printing, signage, ACP boards, hoardings, and complete brand identity solutions. With over 46 years of experience, we help businesses across Kashmir stand out with premium visual communication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button variant="brand" size="xl" asChild className="group">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  Start a project
                  <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/85 hover:text-foreground transition-colors"
              >
                <span className="relative">
                  See the work
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground/40 group-hover:bg-foreground transition-colors" />
                </span>
                <span className="h-9 w-9 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground/60 group-hover:bg-foreground/5 transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </motion.div>

            {/* Hairline trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-12 pt-6 border-t border-foreground/10 grid grid-cols-3 gap-6 max-w-xl"
            >
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">5.0 Google</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">3,000+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Brands served</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gradient-gold">Same Day</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Delivery</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — editorial visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[1.75rem] overflow-hidden"
            >
              {/* Hero image — the artwork itself, full bleed */}
              <img
                src={heroEditorial}
                alt="MAP Advertisers — High-fidelity industrial HP Latex printing press"
                width={1280}
                height={1600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Subtle inner frame + bottom fade so caption sits cleanly */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.75rem]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

              {/* Top-right caption — magazine-style */}
              <div className="absolute top-4 right-4 text-right">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">Series</p>
                <p className="font-display text-base font-semibold text-white leading-none mt-1">
                  HP Latex
                </p>
              </div>

              {/* Bottom caption */}
              <div className="absolute left-5 right-5 bottom-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-white/70 mb-1">
                      Technology · Dual Setup
                    </p>
                    <p className="font-display text-lg md:text-xl font-semibold text-white leading-tight">
                      High-fidelity. Unmatched speed.
                      <br />
                      Industrial precision.
                    </p>
                  </div>
                  <div className="hidden sm:block text-right shrink-0">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">Crafted</p>
                    <p className="font-display text-sm font-semibold text-gold">in-house</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating gold medallion — anchored to the frame, not floating in space */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-5 -left-5 md:-left-8 h-24 w-24 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow-gold border-[3px] border-background"
            >
              <div className="text-center">
                <p className="text-[8px] uppercase tracking-[0.2em] text-gold-foreground/80 font-bold">Est.</p>
                <p className="font-display text-2xl font-extrabold text-gold-foreground leading-none">1980</p>
                <p className="text-[7px] uppercase tracking-[0.25em] text-gold-foreground/80 font-bold mt-0.5">Kashmir</p>
              </div>
            </motion.div>

            {/* Award chip — bottom right, anchored */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-4 -right-2 md:-right-6 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 shadow-elegant"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-cm flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">Trusted by</p>
                <p className="font-display text-sm font-semibold leading-tight">3,000+ brands</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 py-3 md:py-4 flex overflow-hidden z-40">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {SERVICES.map((service, j) => (
                <div key={`${i}-${j}`} className="flex items-center">
                  <span className="text-sm font-medium text-white/80 uppercase tracking-widest px-6 md:px-8">
                    {service}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
