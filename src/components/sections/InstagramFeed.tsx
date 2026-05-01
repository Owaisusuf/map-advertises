import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * InstagramFeed Component
 * 
 * This component displays a live Instagram feed using a third-party widget.
 * By default, it's set up for Elfsight, but can be adapted for any provider.
 */
export const InstagramFeed = () => {
  const instagramUrl = "https://www.instagram.com/mapadvertisers365/";
  
  // User provided ID: eee7ba92-1e49-4e76-88f9-1b8b1291a7aa
  const WIDGET_ID = "eee7ba92-1e49-4e76-88f9-1b8b1291a7aa"; 

  useEffect(() => {
    // Load Elfsight platform script if not already present
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="instagram-feed" className="py-24 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6"
          >
            <Instagram className="h-3.5 w-3.5 text-secondary" />
            <span className="text-secondary-foreground">Live Updates</span>
            <Sparkles className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            See the <span className="text-gradient-brand">Art of Branding</span> <br className="hidden md:block" /> come to life.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            From giant highway hoardings to intricate office signage — watch our daily installs 
            and behind-the-scenes magic directly from the floor.
          </motion.p>
        </div>

        {/* Widget Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden glass-strong shadow-2xl min-h-[600px] relative border border-white/10"
        >
          {/* Elfsight Widget Implementation */}
          {/* If WIDGET_ID is 'YOUR_ELFSIGHT_WIDGET_ID', we show a beautiful placeholder */}
          {WIDGET_ID === "YOUR_ELFSIGHT_WIDGET_ID" ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-sm">
              <div className="h-20 w-20 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-glow-magenta">
                <Instagram className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instagram Feed is Ready</h3>
              <p className="text-muted-foreground max-w-md mb-8">
                To show your direct Instagram feed here, simply create a widget on Elfsight or LightWidget and paste the ID in the code.
              </p>
              <Button variant="brand" size="lg" asChild>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  View Profile on Instagram
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ) : (
            <div 
              className={`elfsight-app-${WIDGET_ID}`} 
              data-elfsight-app-lazy
            />
          )}
        </motion.div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5" asChild>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Watch the Craft in Action — Follow @mapadvertisers365
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
