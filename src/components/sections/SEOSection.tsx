import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SEOSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-display font-bold mb-6">Printing Services in Srinagar & Kashmir</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
          <p>
            MAP Advertisers is a leading provider of printing, signage and branding services in Srinagar, Kashmir. We specialize in <Link to="/printing-services-srinagar" className="text-gold hover:underline">digital printing</Link>, flex printing, ACP boards, hoardings and custom branding solutions for businesses of all sizes.
          </p>
          <p>
            Whether you need high-quality <Link to="/flex-printing-srinagar" className="text-gold hover:underline">flex printing in Srinagar</Link>, shop signage or complete brand identity, our team delivers precision, creativity and fast turnaround across Kashmir.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Best printing services Kashmir</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Sign board makers in Srinagar</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> ACP board printing Srinagar</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Branding agency in Srinagar</li>
        </ul>
        
        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/printing-services-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Printing Services Srinagar</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/signage-services-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Signage Solutions Srinagar</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/branding-services-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Branding Services</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/printing-services-kashmir" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Services in Kashmir</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <h4 className="text-lg font-bold mb-4">Location Pages</h4>
          <div className="flex flex-wrap gap-4">
            <Link to="/printing-services-kashmir" className="text-sm text-muted-foreground hover:text-gold transition-colors underline underline-offset-4">Kashmir</Link>
            <Link to="/printing-services-anantnag" className="text-sm text-muted-foreground hover:text-gold transition-colors underline underline-offset-4">Anantnag</Link>
            <Link to="/printing-services-baramulla" className="text-sm text-muted-foreground hover:text-gold transition-colors underline underline-offset-4">Baramulla</Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog" className="text-sm font-medium text-gold hover:underline">
            Read our latest Printing & Branding Blogs →
          </Link>
        </div>
      </div>
    </section>
  );
};
