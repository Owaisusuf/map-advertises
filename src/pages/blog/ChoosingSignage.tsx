import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const ChoosingSignage = () => {
  return (
    <SEOPageLayout
      title="How to Choose the Right Signage in Srinagar | MAP Advertisers"
      description="Your signage is often the first thing customers notice. Learn how to choose the right signage in Srinagar for your business."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          How to Choose the Right Signage in Srinagar for Your Business
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          Your signage is often the first thing customers notice. Choosing the right one can significantly impact your business visibility.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Types of Signage</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>LED boards</li>
          <li>ACP signage</li>
          <li>Acrylic letters</li>
          <li>Flex boards</li>
        </ul>

        <div className="glass-strong p-6 rounded-2xl border border-gold/30 mb-10">
          <h3 className="text-xl font-bold text-gold mb-3 mt-0">Need Signage Quickly?</h3>
          <p className="mb-0">👉 Get your signage designed, printed, and installed—fast execution with <strong>same-day options available</strong>.</p>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6">Key Factors to Consider</h3>
        
        <div className="space-y-8 mb-12">
          <div>
            <h4 className="font-bold text-xl mb-2 text-brand">1. Location</h4>
            <p className="text-muted-foreground">Outdoor signage must withstand local weather conditions in Kashmir.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2 text-brand">2. Visibility</h4>
            <p className="text-muted-foreground">Use bold fonts and proper lighting to stand out.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2 text-brand">3. Budget</h4>
            <p className="text-muted-foreground">Balance cost with long-term durability.</p>
          </div>
        </div>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0">Upgrade your business visibility today.</h3>
          <p className="mb-8">👉 Contact MAP Advertisers for expert signage solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%20need%20help%20choosing%20signage%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default ChoosingSignage;
