import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { About } from "@/components/sections/About";
import { Catalog } from "@/components/sections/Catalog";
import { Contact } from "@/components/sections/Contact";
import { InstagramReels } from "@/components/sections/InstagramReels";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Showcase />
      <InstagramReels />
      <About />
      <WhyUs />
      <Reviews />
      <Catalog />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
