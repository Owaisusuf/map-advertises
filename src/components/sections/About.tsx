import { motion } from "framer-motion";
import { Sparkles, Target, Layers } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "4K-grade finishes, every time.",
  },
  {
    icon: Layers,
    title: "End-to-End Service",
    desc: "Design through delivery — under one roof.",
  },
  {
    icon: Target,
    title: "Brand-First Thinking",
    desc: "Strategy in every detail we craft.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 mb-5">
              <span className="h-px w-8 bg-gold" />
              Who we are
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Printed with <span className="text-gradient-editorial italic font-light">purpose.</span>
              <br />
              <span className="text-gradient-brand">Branded with precision.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              MAP Advertisers is a full-service creative printing and branding studio committed
              to delivering superior visual communication for brands that demand distinction.
              From concept development to final production, every element is executed with
              precision, innovation, and uncompromising quality.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Powered by our in-house brands{" "}
              <span className="text-foreground font-semibold">Tohfaa</span> (merchandise & gifts),{" "}
              <span className="text-foreground font-semibold">SMV Studios</span> (media & production),
              and <span className="text-foreground font-semibold">MAP Web Studio</span> (web), we are
              your single creative partner.
            </p>
          </div>

          <div className="lg:col-span-6 grid gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-strong rounded-3xl p-6 flex items-start gap-5 hover:bg-white/[0.07] transition-colors"
              >
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-cm flex items-center justify-center shadow-glow-cyan">
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};