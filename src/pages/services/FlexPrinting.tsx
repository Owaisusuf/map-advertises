import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Flex Printing Services",
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
  "description": "Premium flex banner printing for businesses, events, and outdoor advertising across Kashmir."
});

const FlexPrinting = () => {
  return (
    <SEOPageLayout
      title="Flex Printing Services in Srinagar | MAP Advertisers"
      description="Looking for high-quality flex printing in Srinagar? MAP Advertisers offers premium flex banner printing for businesses, events, and outdoor advertising across Kashmir."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Flex Printing Services in Srinagar
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          Looking for high-quality flex printing in Srinagar? MAP Advertisers offers premium flex banner printing for businesses, events, and outdoor advertising across Kashmir.
        </p>

        <p className="mb-8">
          We specialize in durable, high-resolution flex prints using advanced HP Latex technology, ensuring vibrant colors and long-lasting performance in all weather conditions.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Our Flex Printing Services Include:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Outdoor banners</li>
          <li>Event flex printing</li>
          <li>Promotional banners</li>
          <li>Shop branding flex</li>
        </ul>

        <h3 className="text-2xl font-bold mt-12 mb-6">Why Choose Us:</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Same Day Delivery</li>
          <li>High-quality materials</li>
          <li>Affordable pricing</li>
          <li>Trusted by 3000+ brands</li>
        </ul>

        <h3 className="text-2xl font-bold mt-12 mb-6">FAQ:</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold">Q: What is the cost of flex printing in Srinagar?</h4>
            <p className="text-muted-foreground mt-2">Depends on size and material. Contact us for a quote.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Q: Do you provide installation?</h4>
            <p className="text-muted-foreground mt-2">Yes, full installation available across Kashmir.</p>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default FlexPrinting;
