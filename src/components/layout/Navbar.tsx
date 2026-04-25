import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-transparent.png";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Reels", href: "#reels" },
  { label: "Catalog", href: "#catalog" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          {/* Logo — pure transparent PNG, never on a plate */}
          <a href="#" aria-label="MAP Advertisers — home" className="flex items-center gap-3 group relative z-10 shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-brand opacity-0 group-hover:opacity-30 blur-2xl rounded-full transition-opacity duration-500" />
              <img
                src={logo}
                alt="MAP Advertisers"
                width={500}
                height={500}
                className={`relative w-auto transition-all duration-500 drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] ${
                  scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
                }`}
              />
            </div>
          </a>

          {/* Center pill nav */}
          <nav className={`hidden md:flex items-center gap-7 glass-strong rounded-full px-7 py-2.5 transition-all ${scrolled ? "shadow-elegant" : ""}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gradient-cm group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button variant="brand" size="sm" asChild>
              <a href="https://wa.me/919086001122?text=Hi%2C%20I%27m%20interested%20in%20your%20advertising%20services.">Start a project</a>
            </Button>
          </div>

          <button
            className="md:hidden glass-strong rounded-xl p-2.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass-strong rounded-2xl p-4 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
              >
                {l.label}
              </a>
            ))}
            <Button variant="brand" size="sm" className="mt-2" asChild>
              <a href="https://wa.me/919086001122?text=Hi%2C%20I%27m%20interested%20in%20your%20advertising%20services.">Start a project</a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};