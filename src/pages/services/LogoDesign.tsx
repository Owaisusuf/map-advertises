import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Logo Design Services",
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
  "description": "Custom logo design services in Srinagar starting at ₹999. We create unique brand identities tailored to your business vision."
});

const LogoDesign = () => {
  return (
    <SEOPageLayout
      title="Logo Design Services in Srinagar | MAP Advertisers"
      description="Get custom logo design services in Srinagar starting at ₹999. We create unique brand identities tailored to your business vision."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Logo Design Services in Srinagar
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          Get custom logo design services in Srinagar starting at ₹999. We create unique brand identities tailored to your business vision.
        </p>
      </div>
    </SEOPageLayout>
  );
};

export default LogoDesign;
