import { Instagram, Facebook, Phone, Mail, MapPin, Youtube } from "lucide-react";
import logo from "@/assets/logo-new.png";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Printing in Srinagar", href: "/printing-services-srinagar" },
      { label: "Signage Solutions", href: "/signage-services-srinagar" },
      { label: "Branding Agency", href: "/branding-services-srinagar" },
      { label: "Hoarding Printing", href: "/hoarding-printing-kashmir" },
      { label: "Logo Design", href: "/logo-design-srinagar" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Kashmir", href: "/printing-services-kashmir" },
      { label: "Srinagar", href: "/locations/srinagar" },
      { label: "Anantnag", href: "/printing-services-anantnag" },
      { label: "Baramulla", href: "/printing-services-baramulla" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Blog & Price Guide", href: "/blog" },
      { label: "FAQs", href: "/faqs-printing-srinagar" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 pt-12 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img src={logo} alt="MAP Advertisers" className="h-12 w-auto mb-5" width={500} height={500} loading="lazy" />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Design • Print • Branding • Signages • Media • Websites — all under one creative roof.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919086001122" className="hover:text-foreground transition-colors">+91 90860 01122</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=designmapadvertisers@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors break-all">designmapadvertisers@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>www.mapadvertisers.in</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com/mapadvertisers365" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="glass h-10 w-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/share/1DafrHDWMp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="glass h-10 w-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/@mapadvertisers?si=4AuG72hs0bzxupd9" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="glass h-10 w-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-display font-semibold mb-4">Sub-brands</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">Tohfaa — Merchandise</span>
                  <div className="flex items-center gap-2 text-xs">
                    <a href="/tohfaa.html" className="text-muted-foreground hover:text-foreground hover:underline transition-colors">Website</a>
                    <span className="text-muted-foreground/30">•</span>
                    <a href="https://www.instagram.com/tohfaagifts/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:underline transition-colors">Instagram</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="https://www.instagram.com/smv.studios/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  SMV Studios — Media
                </a>
              </li>
              <li>MAP Web Studio</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MAP Advertisers. All rights reserved. | <span className="font-medium text-foreground/80">Made by <a href="https://wa.me/9149691391?text=Hi%2C%20I%20saw%20your%20work%20on%20MAP%20Advertisers%20and%20I%20want%20a%20website%20like%20that!" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">owaisusuf</a></span></p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};