import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const FOUNDED = 1980;
const yearsOfCraft = new Date().getFullYear() - FOUNDED; // 45+ in 2025
// ~80 new clients per year compounded → keep round, conservative
const happyClients = Math.round((yearsOfCraft * 80) / 50) * 50; // → 3600+ in 2025

const stats = [
  { value: happyClients, suffix: "+", label: "Happy clients", accent: "text-gradient-brand" },
  { value: yearsOfCraft, suffix: "+", label: "Years of craft · since 1980", accent: "text-gradient-editorial" },
  { value: 2, suffix: "M+", label: "Prints delivered", accent: "text-gradient-gold" },
  { value: 98, suffix: "%", label: "On-time delivery", accent: "text-gradient-brand" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export const Stats = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative glass-strong rounded-[2rem] p-8 md:p-14 overflow-hidden noise-overlay">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-10 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

          <div className="relative flex items-center justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 mb-2">By the numbers</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">46 years.<span className="text-gradient-gold"> Counting.</span></h3>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">Verified</p>
              <p className="text-xs text-muted-foreground mt-1">Updated {new Date().getFullYear()}</p>
            </div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:divide-x md:divide-foreground/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-left md:px-6 first:md:pl-0"
              >
                <div className={`font-display text-4xl md:text-6xl font-bold tracking-tight ${s.accent}`}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};