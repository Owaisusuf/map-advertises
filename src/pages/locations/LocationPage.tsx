import { SEOPageLayout } from "@/components/layout/SEOPageLayout";
import { useLocation } from "react-router-dom";

const LocationPage = () => {
  const location = useLocation();
  const path = location.pathname;
  
  let locationName = "Kashmir";
  if (path.includes("anantnag")) locationName = "Anantnag";
  else if (path.includes("baramulla")) locationName = "Baramulla";
  else if (path.includes("srinagar")) locationName = "Srinagar";

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `MAP Advertisers - ${locationName}`,
    "image": "https://mapadvertisers.in/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationName,
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    },
    "description": `MAP Advertisers provides premium printing, signage, and branding services in ${locationName}, Kashmir.`
  });

  return (
    <SEOPageLayout
      title={`Printing & Signage Services in ${locationName} | MAP Advertisers`}
      description={`MAP Advertisers proudly serves businesses across ${locationName} with premium printing, signage, and branding services. Fast delivery across Kashmir.`}
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Printing & Signage Services in {locationName}
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          MAP Advertisers is proud to be the trusted partner for businesses in {locationName}, offering high-quality printing, durable signage, and creative branding solutions.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Our Services in {locationName}</h3>
        <ul className="list-disc pl-6 space-y-3 mb-10 text-muted-foreground">
          <li><strong>Digital & Flex Printing:</strong> High-resolution banners and marketing materials.</li>
          <li><strong>Sign Board Making:</strong> ACP, LED, and traditional shop boards.</li>
          <li><strong>Custom Branding:</strong> Logo design and business identity solutions.</li>
          <li><strong>Hoarding Printing:</strong> Large format outdoor advertising.</li>
        </ul>

        <div className="glass-strong p-8 rounded-2xl border border-gold/20 mb-12">
          <h3 className="text-xl font-bold text-gold mb-4 mt-0">Fast Delivery in {locationName}</h3>
          <p className="mb-0">We understand the importance of time for your business. We offer reliable delivery and professional installation services across {locationName} and surrounding areas.</p>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default LocationPage;
