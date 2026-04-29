import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SEOSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-display font-bold mb-6">Best Printing Services in Srinagar</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you are searching for the best printing services in Srinagar or reliable sign board makers in Kashmir, MAP Advertisers delivers unmatched quality with fast turnaround. From flex printing and hoarding installations to custom branding and logo design, we provide end-to-end solutions for businesses of all sizes.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> 46 Years of Experience in Kashmir</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Same Day Delivery on Select Orders</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> 100% In-house Production</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Premium HP Latex Printing</li>
        </ul>
        
        <h3 className="text-xl font-bold mb-6">Our Core Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/flex-printing-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Flex Printing in Srinagar</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/signage-services-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Signage Services</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/acp-sign-board-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">ACP Sign Boards</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/branding-agency-kashmir" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Branding Agency</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/hoarding-printing-kashmir" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Hoarding Printing</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link to="/logo-design-srinagar" className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border hover:border-foreground/30 transition-colors group">
            <span className="font-medium group-hover:text-gold transition-colors">Logo Design</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/faqs-printing-srinagar" className="text-sm font-medium text-gold hover:underline">
            Have more questions? View our Printing & Signage FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
};
