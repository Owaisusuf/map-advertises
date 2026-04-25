import { motion } from "framer-motion";
import { Download, Eye, FileText, Check, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import catalogCover from "@/assets/catalog-cover.jpg";

const highlights = [
  "Hoardings, lighting boards & flex boards",
  "Vinyl, sunboards, frost & one-way vision",
  "ACP / Acrylic 3D, canopies, retro boards",
  "Business cards, leaflets, certificates, booklets",
  "Tohfaa custom merchandise & corporate gifts",
  "SMV Studios — video, audio, podcasting, ads",
  "MAP Web Studio — websites & digital",
  "Logo design starting at ₹999 (combo)",
];

export const Catalog = () => {
  return (
    <section id="catalog" className="py-24 md:py-32 relative overflow-hidden">
      {/* Distinctive backdrop — sets this section apart from neighbours */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
      <div className="absolute top-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] rounded-full bg-secondary/10 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Magazine-style 3D tilted cover with floating "next page" peek */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative [perspective:1600px]"
          >
            <div className="absolute -inset-8 bg-gradient-brand opacity-25 blur-3xl rounded-[3rem]" />

            {/* Back page peeking out — gives "real catalogue" depth */}
            <div
              className="absolute top-6 left-10 right-2 bottom-2 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-[2px] opacity-60"
              style={{ transform: "rotate(4deg) translateZ(-40px)" }}
              aria-hidden
            />
            <div
              className="absolute top-3 left-6 right-4 bottom-4 rounded-3xl bg-card/80 border border-border/40"
              style={{ transform: "rotate(2deg)" }}
              aria-hidden
            />

            {/* Front cover — interactive 3D tilt on hover */}
            <div
              className="relative group glass-strong rounded-3xl p-3 shadow-elegant transition-transform duration-500 hover:[transform:rotateY(-8deg)_rotateX(4deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={catalogCover}
                alt="MAP Advertisers Catalogue 2026 cover"
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl"
              />

              {/* Spine shadow gives book feel */}
              <div className="absolute inset-y-3 left-3 w-6 rounded-l-2xl bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

              {/* Floating top-left badge */}
              <div className="absolute top-7 left-7 glass-strong rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                PDF · 13 pages
              </div>

              {/* Floating bottom-right "new" badge */}
              <div className="absolute bottom-7 right-7 glass-strong rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 shadow-glow-magenta">
                <Sparkles className="h-3.5 w-3.5 text-highlight" strokeWidth={2} />
                Edition 2026
              </div>

              {/* Hover overlay — Open hint */}
              <div className="absolute inset-3 rounded-2xl flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <div className="glass-strong rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-2">
                  <BookOpen className="h-4 w-4" strokeWidth={2} />
                  Open catalogue
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7">
            <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
              Our catalogue
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Everything we do, <br />
              <span className="text-gradient-brand">in one place.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Browse our complete services catalogue — large format printing, signage,
              brand identity, merchandise, media production and web. Preview online or
              download the PDF.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-cm flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="brand" size="xl">
                    <Eye className="mr-2 h-5 w-5" /> Preview Catalog
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-card border-border/60">
                  <DialogHeader className="px-6 py-4 border-b border-border/60">
                    <DialogTitle className="font-display">
                      MAP Advertisers — Catalogue
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 h-full">
                    <iframe
                      src="/catalogue-map-advertisers.pdf#view=FitH"
                      title="MAP Advertisers Catalogue"
                      loading="lazy"
                      className="w-full h-full rounded-b-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="glass" size="xl" asChild>
                <a href="/catalogue-map-advertisers.pdf" download>
                  <Download className="mr-2 h-5 w-5" /> Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};