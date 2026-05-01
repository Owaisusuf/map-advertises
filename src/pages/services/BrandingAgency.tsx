import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Branding Services in Srinagar, Kashmir",
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
  "description": "Premium branding agency in Srinagar offering logo design, brand identity, and complete marketing solutions in Kashmir."
});

const BrandingAgency = () => {
  return (
    <SEOPageLayout
      title="Branding Services in Srinagar | Logo Design Kashmir | MAP Advertisers"
      description="Professional branding agency in Srinagar, Kashmir. We specialize in logo design, brand identity, packaging, and custom branding solutions for local businesses."
      schema={schema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Branding Services in Srinagar, Kashmir
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          MAP Advertisers is a leading branding agency in Srinagar, helping businesses across Kashmir build powerful and memorable brand identities.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Our Branding Solutions</h3>
        <ul className="list-disc pl-6 space-y-3 mb-10 text-muted-foreground">
          <li><strong>Logo Design:</strong> Creative and unique logos that represent your brand value.</li>
          <li><strong>Brand Identity:</strong> Complete visual language including color palettes and typography.</li>
          <li><strong>Business Stationery:</strong> Professional visiting cards, letterheads, and envelopes.</li>
          <li><strong>Marketing Collateral:</strong> Brochures, flyers, and social media branding.</li>
        </ul>

        <div className="glass-strong p-8 rounded-2xl border border-gold/20 mb-12">
          <h3 className="text-xl font-bold text-gold mb-4 mt-0">Why Branding Matters?</h3>
          <p className="mb-0">In a competitive market like Kashmir, a strong brand identity helps you stand out, build trust with customers, and command premium pricing. Let us help you tell your brand story effectively.</p>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default BrandingAgency;
