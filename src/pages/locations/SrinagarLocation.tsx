import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MAP Advertisers",
  "image": "https://mapadvertisers.in/favicon.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Barzulla Bridge",
    "addressLocality": "Srinagar",
    "addressRegion": "Jammu and Kashmir",
    "addressCountry": "IN"
  },
  "description": "MAP Advertisers proudly serves businesses across Srinagar with premium printing, signage, and branding services."
});

const SrinagarLocation = () => {
  return (
    <SEOPageLayout
      title="Printing & Signage Services in Srinagar | MAP Advertisers"
      description="MAP Advertisers proudly serves businesses across Srinagar with premium printing, signage, and branding services. Located near Barzulla Bridge."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Printing & Signage Services in Srinagar
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          MAP Advertisers proudly serves businesses across Srinagar with premium printing, signage, and branding services. Located near Barzulla Bridge, we offer fast delivery and high-quality results.
        </p>
      </div>
    </SEOPageLayout>
  );
};

export default SrinagarLocation;
