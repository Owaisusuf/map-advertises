import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface SEOPageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  schema?: string;
}

export const SEOPageLayout: React.FC<SEOPageLayoutProps> = ({
  children,
  title,
  description,
  schema,
}) => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {schema && <script type="application/ld+json">{schema}</script>}
        <link rel="canonical" href={window.location.origin + window.location.pathname} />
      </Helmet>

      <Navbar />
      
      {/* Premium Hero Banner for Inner Pages */}
      <div className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-background to-background opacity-80" />
          <div className="absolute inset-0 grid-pattern opacity-[0.1]" />
        </div>
        
        <div className="container relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full glass-strong border border-white/10 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Same Day Delivery Available
          </div>
        </div>
      </div>

      <div className="flex-grow pb-24 -mt-6 relative z-20">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <button 
                onClick={() => navigate(-1)} 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <div className="glass-strong rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl">
                {/* We override the child prose h1 color here to make it gold and attractive */}
                <div className="[&_h1]:text-gold [&_h1]:text-gradient-gold">
                  {children}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar / CTA */}
            <div className="lg:col-span-4 sticky top-32 flex flex-col gap-6">
              <div className="glass-strong rounded-3xl p-8 border border-white/5 shadow-xl bg-gradient-to-br from-white/5 to-transparent">
                <h3 className="font-display text-2xl font-bold mb-4">Start Your Project</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Get a free quote today. We offer premium quality printing and branding with lightning-fast turnaround times across Kashmir.
                </p>
                <Button variant="brand" className="w-full group" asChild>
                  <a href="https://wa.me/919086001122?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="glass-strong rounded-3xl p-8 border border-white/5 shadow-xl">
                <h4 className="font-bold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  {[
                    "46 Years of Experience",
                    "In-house Production",
                    "Same Day Delivery",
                    "Premium Materials",
                    "Trusted by 3000+ Brands"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFab />
    </main>
  );
};
