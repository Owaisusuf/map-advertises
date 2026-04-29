import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const OutdoorAdvertising = () => {
  return (
    <SEOPageLayout
      title="Outdoor Advertising in Kashmir – Best Strategies | MAP Advertisers"
      description="Outdoor advertising remains one of the most effective ways to reach local customers in Kashmir. Learn the best strategies for local businesses."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Outdoor Advertising in Kashmir – Best Strategies for Local Businesses
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          Outdoor advertising remains one of the most effective ways to reach local customers in Kashmir.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Popular Methods</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Hoardings</li>
          <li>Signage</li>
          <li>Flex banners</li>
        </ul>

        <div className="glass-strong p-6 rounded-2xl border border-gold/30 mb-10">
          <h3 className="text-xl font-bold text-gold mb-3 mt-0">Need Visibility Fast?</h3>
          <p className="mb-0">👉 Launch your campaign today with <strong>same-day printing support</strong>.</p>
        </div>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0">Boost your business visibility today.</h3>
          <p className="mb-8">👉 Contact MAP Advertisers for outdoor advertising solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%20want%20to%20boost%20my%20outdoor%20advertising." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default OutdoorAdvertising;
