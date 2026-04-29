import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const PrintingMistakes = () => {
  return (
    <SEOPageLayout
      title="Top Printing Mistakes to Avoid for Better Results | MAP Advertisers"
      description="Avoiding common printing mistakes can save time and money. Learn the top mistakes to avoid when ordering prints for your business."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Top Printing Mistakes to Avoid for Better Results
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          Avoiding common printing mistakes can save time and money.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Common Mistakes</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Low-resolution designs</li>
          <li>Wrong material selection</li>
          <li>Skipping proof checks</li>
          <li>Poor color choices</li>
        </ul>

        <div className="glass-strong p-6 rounded-2xl border border-gold/30 mb-10">
          <h3 className="text-xl font-bold text-gold mb-3 mt-0">Avoid Delays</h3>
          <p className="mb-0">👉 Work with professionals who deliver accurate results—fast and <strong>same-day</strong>.</p>
        </div>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0">Get your printing done right the first time.</h3>
          <p className="mb-8">👉 Contact MAP Advertisers today.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%20want%20to%20discuss%20a%20printing%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default PrintingMistakes;
