import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hoarding Printing Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MAP Advertisers",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Srinagar",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Jammu and Kashmir"
  },
  "description": "Large-format hoarding printing across Kashmir. From highway hoardings to city advertising boards."
});

const HoardingPrinting = () => {
  return (
    <SEOPageLayout
      title="Hoarding Printing Services in Kashmir | MAP Advertisers"
      description="MAP Advertisers specializes in large-format hoarding printing across Kashmir. From highway hoardings to city advertising boards, we deliver impactful outdoor branding solutions."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Hoarding Printing Services in Kashmir
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          MAP Advertisers specializes in large-format hoarding printing across Kashmir. From highway hoardings to city advertising boards, we deliver impactful outdoor branding solutions.
        </p>
      </div>
    </SEOPageLayout>
  );
};

export default HoardingPrinting;
