import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const BenefitsOfAcp = () => {
  return (
    <SEOPageLayout
      title="Benefits of ACP Sign Boards for Businesses | MAP Advertisers"
      description="ACP boards are widely used for modern, premium signage. Learn the advantages of upgrading your business appearance with ACP boards in Kashmir."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Benefits of ACP Sign Boards for Businesses
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          ACP boards are widely used for modern, premium signage.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Advantages</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Long-lasting</li>
          <li>Weather resistant</li>
          <li>Professional look</li>
        </ul>

        <div className="glass-strong p-6 rounded-2xl border border-gold/30 mb-10">
          <h3 className="text-xl font-bold text-gold mb-3 mt-0">Upgrade Your Signage Today</h3>
          <p className="mb-0">👉 Contact us for high-quality ACP boards with fast installation and <strong>same-day delivery on select sizes</strong>.</p>
        </div>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0">Enhance your business appearance with premium ACP signage.</h3>
          <p className="mb-8">👉 Contact MAP Advertisers today.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%20need%20a%20quote%20for%20ACP%20sign%20boards." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default BenefitsOfAcp;
