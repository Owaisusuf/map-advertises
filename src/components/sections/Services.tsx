import { motion } from "framer-motion";
import { Megaphone, Palette, Shirt, PenTool, Mic, Globe, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Large Format & Signage",
    desc: "Hoardings, flex boards, lighting boards, vinyl, ACP, sunpack, canopies & more.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Palette,
    title: "Brand Identity & Print",
    desc: "Business cards, letterheads, leaflets, certificates, booklets, stickers & labels.",
    gradient: "from-secondary to-highlight",
  },
  {
    icon: Shirt,
    title: "Tohfaa — Merchandise",
    desc: "T-shirts, hoodies, mugs, bottles, caps, embroidery, pens, diaries & gifts.",
    gradient: "from-highlight to-primary",
  },
  {
    icon: PenTool,
    title: "Logo Designing",
    desc: "Handmade logos, digitally perfected. Starting at ₹999 with mug + 100 visiting cards.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Mic,
    title: "SMV Studios — Media",
    desc: "Video production, audio recording, podcasting, TV & newspaper ads.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Globe,
    title: "MAP Web Studio",
    desc: "Static, dynamic, one-page & multi-page website design and development.",
    gradient: "from-highlight to-secondary",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 mb-5">
            <span className="h-px w-8 bg-gold" />
            What we do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            One studio.
            <br />
            <span className="text-gradient-editorial italic font-light">Every</span> <span className="text-gradient-brand">solution.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From the first sketch to the final print run — we handle it all so your brand shows up consistently, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const wa =
              "https://wa.me/919086001122?text=" +
              encodeURIComponent(`Hi, I'm interested in ${s.title}. Please share more details.`);
            return (
              <motion.a
                key={s.title}
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${s.title} on WhatsApp`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative glass rounded-3xl p-7 hover:bg-white/[0.07] transition-all duration-500 cursor-pointer overflow-hidden block"
              >
                {/* Gradient ring on hover */}
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-md`} />

                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} shadow-glow-cyan mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>

                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="mt-6 flex items-center text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enquire on WhatsApp
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};