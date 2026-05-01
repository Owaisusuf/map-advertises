import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { WhyUs } from "@/components/sections/WhyUs";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { CTA } from "@/components/sections/CTA";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { About } from "@/components/sections/About";
import { Catalog } from "@/components/sections/Catalog";
import { Contact } from "@/components/sections/Contact";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { SEOSection } from "@/components/sections/SEOSection";
import { Helmet } from "react-helmet-async";

const localBusinessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MAP Advertisers",
  "image": "https://www.mapadvertisers.in/assets/logo-new.png",
  "url": "https://www.mapadvertisers.in",
  "telephone": "+919086001122",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Srinagar",
    "addressLocality": "Srinagar",
    "addressRegion": "Jammu and Kashmir",
    "postalCode": "190001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0837",
    "longitude": "74.7973"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://instagram.com/mapadvertisers365",
    "https://www.facebook.com/share/1DafrHDWMp/",
    "https://youtube.com/@mapadvertisers?si=4AuG72hs0bzxupd9"
  ]
});

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Printing & Signage Services in Srinagar | MAP Advertisers</title>
        <meta name="description" content="Professional printing, signage & branding services in Srinagar, Kashmir. Flex, ACP boards, hoardings, digital printing & design solutions. Get a free quote today." />
        <link rel="canonical" href="https://www.mapadvertisers.in" />
        <script type="application/ld+json">{localBusinessSchema}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <SEOSection />
      <Stats />
      <Services />
      <Showcase />
      <InstagramReels />
      <InstagramFeed />
      <About />
      <WhyUs />
      <GoogleReviews />
      <Catalog />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
