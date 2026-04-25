import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import hoarding from "@/assets/showcase/hoarding.jpg";
import lighting from "@/assets/showcase/lighting-board-new.jpg";
import acp from "@/assets/showcase/acp-3d.jpg";
import rollup from "@/assets/showcase/rollup-new.jpg";
import frost from "@/assets/showcase/frost-vinyl.jpg";
import marriage from "@/assets/showcase/marriage-board.jpg";
import flex from "@/assets/showcase/flex-banner-new.jpg";
import oneway from "@/assets/showcase/one-way-vision-new.jpg";

const items = [
  { title: "Highway Hoardings", tag: "Outdoor", img: hoarding, h: "h-80" },
  { title: "Lighting Boards", tag: "Signage", img: lighting, h: "h-96" },
  { title: "ACP 3D Acrylic", tag: "Premium", img: acp, h: "h-72" },
  { title: "Roll-up Standees", tag: "Events", img: rollup, h: "h-96" },
  { title: "Frost Vinyl", tag: "Interior", img: frost, h: "h-72" },
  { title: "Marriage Boards", tag: "Wedding", img: marriage, h: "h-80" },
  { title: "Flex Banners", tag: "Print", img: flex, h: "h-72" },
  { title: "One Way Vision", tag: "Glass", img: oneway, h: "h-80" },
];

const waLink = (product: string) =>
  "https://wa.me/919086001122?text=" +
  encodeURIComponent(`Hi, I'm interested in ${product}. Please share more details.`);

export const Showcase = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 mb-5">
              <span className="h-px w-8 bg-gold" />
              Recent work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Crafted for brands <br /> that <span className="text-gradient-editorial italic font-light">refuse</span> to <span className="text-gradient-brand">blend in.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse of recent campaigns and creative collaborations across print, digital and outdoor.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={waLink(it.title)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${it.title} on WhatsApp`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`mb-6 break-inside-avoid relative ${it.h} rounded-3xl overflow-hidden glass-strong group cursor-pointer block`}
            >
              <img
                src={it.img}
                alt={it.title}
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
              <div className="relative h-full flex flex-col justify-between p-6">
                <span className="self-start glass rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-white/90">{it.tag}</span>
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">{it.title}</h3>
                  <span className="shrink-0 h-10 w-10 rounded-full bg-gradient-cm flex items-center justify-center shadow-glow-cyan opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};