import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "MAP transformed our entire brand presence. The print quality is exceptional and the team is genuinely creative.", name: "Aarav Mehta", role: "Founder, Noor Cafe" },
  { quote: "Fastest turnaround I've ever experienced. They delivered a full hoarding campaign in 36 hours.", name: "Priya Shah", role: "Marketing Lead, Lumio" },
  { quote: "From logo to packaging to the website — every touchpoint feels cohesive. Worth every rupee.", name: "Rahul Khan", role: "CEO, Ember Studios" },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
            Loved by clients
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Words from <span className="text-gradient-brand">our partners</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-7 relative"
            >
              <Quote className="h-8 w-8 text-primary/60 mb-4" />
              <p className="text-foreground/90 leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="h-10 w-10 rounded-full bg-gradient-cm" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};