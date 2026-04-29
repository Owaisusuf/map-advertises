import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const AcpVsFlex = () => {
  return (
    <SEOPageLayout
      title="ACP vs Flex Boards – Which is Better for Your Business? | MAP Advertisers"
      description="Choosing between ACP boards and flex printing depends on your branding goals, budget, and duration. Learn which is right for your business in Srinagar."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          ACP vs Flex Boards – Which is Better for Your Business?
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-12">
          Choosing between ACP boards and flex printing depends on your branding goals, budget, and duration.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-strong p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mt-0 mb-4 text-gradient-brand">ACP Boards</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Premium appearance</li>
              <li>Long-lasting (5–10 years)</li>
              <li>Weather-resistant</li>
            </ul>
            <h4 className="font-bold mb-2">Best for:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Shops</li>
              <li>Showrooms</li>
              <li>Permanent signage</li>
            </ul>
          </div>

          <div className="glass-strong p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mt-0 mb-4 text-gradient-gold">Flex Boards</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Affordable</li>
              <li>Quick to produce</li>
              <li>Ideal for temporary promotions</li>
            </ul>
            <h4 className="font-bold mb-2">Best for:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Events</li>
              <li>Campaigns</li>
              <li>Short-term use</li>
            </ul>
          </div>
        </div>

        <div className="glass-strong p-6 rounded-2xl border border-gold/30 mb-10">
          <h3 className="text-xl font-bold text-gold mb-3 mt-0">Not Sure What to Choose?</h3>
          <p className="mb-0">👉 Talk to our team—we’ll guide you and deliver fast, including <strong>same-day flex printing options</strong>.</p>
        </div>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0">Get expert advice and fast execution for your signage needs.</h3>
          <p className="mb-8">👉 Contact MAP Advertisers today.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%20need%20advice%20on%20ACP%20vs%20Flex%20boards." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default AcpVsFlex;
