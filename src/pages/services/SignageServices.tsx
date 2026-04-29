import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sign Board & Signage Services",
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
  "description": "Professional signage services in Srinagar, including LED boards, ACP signage, acrylic letters, and custom shop boards."
});

const SignageServices = () => {
  return (
    <SEOPageLayout
      title="Sign Board & Signage Services in Srinagar | MAP Advertisers"
      description="MAP Advertisers provides professional signage services in Srinagar, including LED boards, ACP signage, acrylic letters, and custom shop boards."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Sign Board & Signage Services in Srinagar
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          MAP Advertisers provides professional signage services in Srinagar, including LED boards, ACP signage, acrylic letters, and custom shop boards.
        </p>

        <p className="mb-8">
          We help businesses create strong visibility with high-quality signage solutions designed for durability and brand impact.
        </p>
      </div>
    </SEOPageLayout>
  );
};

export default SignageServices;
