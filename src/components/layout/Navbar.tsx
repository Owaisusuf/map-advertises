import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-new.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    items: [
      { label: "Flex Printing", href: "/flex-printing-srinagar" },
      { label: "Signage Services", href: "/signage-services-srinagar" },
      { label: "ACP Sign Boards", href: "/acp-sign-board-srinagar" },
      { label: "Hoarding Printing", href: "/hoarding-printing-kashmir" },
      { label: "Branding Agency", href: "/branding-agency-kashmir" },
      { label: "Logo Design", href: "/logo-design-srinagar" },
    ]
  },
  {
    label: "Sub-brands",
    items: [
      {
        href: "/tohfaa.html",
        customRender: (
          <div className="flex flex-col gap-1 px-3 py-2 hover:bg-white/5 rounded-lg text-left">
            <span className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">Tohfaa — Merchandise</span>
            <div className="flex items-center gap-3 mt-0.5">
              <a href="/tohfaa.html" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Website</a>
              <span className="text-muted-foreground/30">•</span>
              <a href="https://www.instagram.com/tohfaagifts/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
        )
      },
      {
        href: "https://www.instagram.com/smv.studios/",
        customRender: (
          <a href="https://www.instagram.com/smv.studios/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-lg transition-colors block text-left">
            <span className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider block mb-0.5">SMV Studios</span>
            <span className="block text-xs font-semibold text-muted-foreground hover:text-foreground">Media Services</span>
          </a>
        )
      },
      {
        href: "#web-studio",
        customRender: (
          <div className="px-3 py-2 rounded-lg cursor-default text-left">
            <span className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider block mb-0.5">MAP Web Studio</span>
            <span className="block text-xs font-semibold text-muted-foreground/50">Web Development</span>
          </div>
        )
      }
    ]
  },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs-printing-srinagar" },
  { label: "Contact", href: "/#contact" },
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
        scrolled ? "py-2 bg-background/95 backdrop-blur-md border-b border-white/5 shadow-sm" : "py-4 bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          {/* Logo — pure transparent PNG, never on a plate */}
          <Link to="/" aria-label="MAP Advertisers — home" className="flex items-center gap-3 group relative z-10 shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-brand opacity-0 group-hover:opacity-30 blur-2xl rounded-full transition-opacity duration-500" />
              <img
                src={logo}
                alt="MAP Advertisers"
                width={500}
                height={500}
                className={`relative w-auto transition-all duration-500 drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)] ${
                  scrolled ? "h-8 md:h-10" : "h-10 md:h-12"
                }`}
              />
            </div>
          </Link>

          {/* Center pill nav */}
          <nav className={`hidden md:flex items-center gap-7 glass-strong rounded-full px-7 py-2.5 transition-all ${scrolled ? "shadow-elegant" : ""}`}>
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.items ? (
                  <>
                    <button className="flex items-center gap-1 h-full text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors font-medium">
                      {item.label}
                      <ChevronDown className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </button>
                    {/* The pt-4 creates a seamless bridge for the mouse hover */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-[100]">
                      <div className="flex flex-col gap-1 w-[220px] p-2 rounded-xl bg-background border border-border shadow-2xl shadow-black/50">
                        {item.items.map((subItem, idx) => (
                          subItem.customRender ? (
                            <div key={idx}>
                              {subItem.customRender}
                            </div>
                          ) : (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors relative font-medium group-hover:text-foreground"
                  >
                    {item.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gradient-cm group-[&:hover:not(:has(.group-hover\\:opacity-100))]:w-full transition-all duration-300" />
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button variant="brand" size="sm" asChild>
              <a href="https://wa.me/919086001122?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote.">Get a Quote</a>
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="md:hidden mt-3 glass-strong rounded-2xl p-4 flex flex-col gap-3 origin-top"
          >
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                {item.items ? (
                  <>
                    <div className="px-3 py-2 text-sm font-semibold text-foreground border-b border-white/5">{item.label}</div>
                    <div className="flex flex-col pl-4 gap-1">
                      {item.items.map((subItem, idx) => (
                        subItem.customRender ? (
                          <div key={idx} onClick={() => setOpen(false)}>
                            {subItem.customRender}
                          </div>
                        ) : (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm text-muted-foreground"
                          >
                            {subItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <Button variant="brand" size="sm" className="mt-2" asChild>
              <a href="https://wa.me/919086001122?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote.">Get a Quote</a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};