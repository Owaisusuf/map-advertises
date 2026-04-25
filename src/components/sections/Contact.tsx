import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Globe, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 90860 01122",
    href: "tel:+919086001122",
  },
  {
    icon: Mail,
    label: "Email",
    value: "designmapadvertisers@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=designmapadvertisers@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.mapadvertisers.in",
    href: "https://www.mapadvertisers.in",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mapadvertisers365",
    href: "https://instagram.com/mapadvertisers365",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "MAP Advertisers",
    href: "https://www.facebook.com/share/1DafrHDWMp/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "MAP Advertisers",
    href: "https://youtube.com/@mapadvertisers?si=4AuG72hs0bzxupd9",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass rounded-full px-4 py-1.5 text-xs font-medium mb-5">
            Get in touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Let's build something <br />
            <span className="text-gradient-brand">remarkable together.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us about your project — we usually respond within minutes on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-5 space-y-4">
            {items.map((it, i) => (
              <motion.a
                key={it.label}
                href={it.href}
                target={(it.href.startsWith("http") || it.href.startsWith("mailto")) ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group block glass rounded-2xl p-5 hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-cm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <it.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </p>
                    <p className="font-display text-lg font-semibold truncate">{it.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            <Button
              variant="brand"
              size="xl"
              className="w-full mt-2"
              asChild
            >
              <a
                href="https://wa.me/919086001122?text=Hi%2C%20I%27m%20interested%20in%20your%20advertising%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp now
              </a>
            </Button>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-strong rounded-3xl overflow-hidden min-h-[460px] relative"
          >
            <iframe
              title="MAP Advertisers — Barzulla Bridge, Srinagar"
              src="https://www.google.com/maps?q=Map+Advertisers,+Barzulla+Bridge,+Bulbul+Bagh+A,+Srinagar,+Jammu+and+Kashmir+190005&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute top-4 left-4 glass-strong rounded-full px-4 py-2 text-xs font-medium flex items-center gap-2 z-10">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Barzulla Bridge, Srinagar — 190005
            </div>
            <a
              href="https://www.google.com/maps/dir//Map+Advertisers,+Barzulla+Bridge,+Bulbul+Bagh+A,+Srinagar,+Jammu+and+Kashmir+190005/@34.0506855,74.7946701,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38e18f0e9989108f:0x7c913c8ed0d8d4b9!2m2!1d74.7946701!2d34.0506855"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 glass-strong rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-2 z-10 hover:bg-white/20 transition-colors"
            >
              Get directions
              <MapPin className="h-3.5 w-3.5 text-secondary" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};