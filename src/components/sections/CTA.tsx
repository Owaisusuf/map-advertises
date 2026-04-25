import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="relative rounded-[2rem] overflow-hidden glass-strong p-10 md:p-16">
          <div className="absolute inset-0 bg-gradient-brand opacity-30" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/40 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Ready to make your brand <span className="text-gradient-soft">unforgettable?</span>
              </h2>
              <p className="mt-5 text-lg text-white/85 max-w-md">
                Tell us about your project — get a free consultation and a quote within 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button
                variant="default"
                size="xl"
                className="bg-white text-background hover:bg-white/90 shadow-elegant"
                asChild
              >
                <a
                  href="https://wa.me/919086001122?text=Hi%2C%20I%27m%20interested%20in%20your%20advertising%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="/catalogue-map-advertisers.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Catalog
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};