import { motion } from "framer-motion";
import { Zap, Award, Users, Shield, ArrowUpRight } from "lucide-react";

const features = [
  { icon: Award, title: "Premium Finish", desc: "Foil, emboss, deboss, spot UV — every spec is print-shop grade." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most jobs delivered in 24–48 hours, without compromise." },
  { icon: Users, title: "Brand-First Thinking", desc: "Strategy in every kerning detail. We design to convert." },
  { icon: Shield, title: "End-to-End", desc: "Concept, design, print, install, support — one studio." },
];

export const WhyUs = () => {
  return (
    <section id="why" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 mb-5">
              <span className="h-px w-8 bg-gold" />
              Why MAP
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Built on creativity. <br />
              <span className="text-gradient-editorial italic font-light">Delivered </span>
              <span className="text-gradient-brand">with precision.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We obsess over the details — kerning, ink density, paper grain, install symmetry — so your brand
              always shows up at its absolute best.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Bulk discounts", "Free design", "Fast delivery", "Custom branding packages"].map((t) => (
                <span key={t} className="glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group glass rounded-3xl p-6 hover:bg-white/[0.07] transition-all relative overflow-hidden ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}
              >
                <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                <div className="h-11 w-11 rounded-xl bg-gradient-cm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};