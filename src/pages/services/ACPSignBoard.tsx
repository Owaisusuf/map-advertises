import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ACP Sign Board Services",
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
    "@type": "City",
    "name": "Srinagar"
  },
  "description": "Premium ACP sign boards in Srinagar for shops, offices, and commercial spaces."
});

const ACPSignBoard = () => {
  return (
    <SEOPageLayout
      title="ACP Sign Board Services in Srinagar | MAP Advertisers"
      description="We design and install premium ACP sign boards in Srinagar for shops, offices, and commercial spaces. Our ACP boards are weather-resistant and modern."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          ACP Sign Board Services in Srinagar
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          We design and install premium ACP sign boards in Srinagar for shops, offices, and commercial spaces. Our ACP boards are weather-resistant, modern, and perfect for long-term branding.
        </p>
      </div>
    </SEOPageLayout>
  );
};

export default ACPSignBoard;
