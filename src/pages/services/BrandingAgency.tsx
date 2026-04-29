import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Branding Agency in Kashmir",
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
  "description": "Full-service branding agency in Kashmir offering logo design, brand identity, packaging, and marketing materials."
});

const BrandingAgency = () => {
  return (
    <SEOPageLayout
      title="Branding Agency in Kashmir | MAP Advertisers"
      description="We are a full-service branding agency in Kashmir offering logo design, brand identity, packaging, and marketing materials to help businesses grow and stand out."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Branding Agency in Kashmir
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          We are a full-service branding agency in Kashmir offering logo design, brand identity, packaging, and marketing materials to help businesses grow and stand out.
        </p>
      </div>
    </SEOPageLayout>
  );
};

export default BrandingAgency;
