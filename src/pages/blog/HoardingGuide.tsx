import { SEOPageLayout } from "@/components/layout/SEOPageLayout";

const HoardingGuide = () => {
  return (
    <SEOPageLayout
      title="Hoarding Advertising in Kashmir – Complete Guide | MAP Advertisers"
      description="Hoardings are one of the most powerful forms of outdoor advertising in Kashmir. Learn why they work and the best locations."
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Hoarding Advertising in Kashmir – Complete Guide
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-8">
          Hoardings are one of the most powerful forms of outdoor advertising in Kashmir.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Why Hoardings Work</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>High visibility</li>
          <li>Strong brand recall</li>
          <li>Local targeting</li>
        </ul>

        <div className="glass-strong p-6 rounded-2xl border border-gold/30 mb-10">
          <h3 className="text-xl font-bold text-gold mb-3 mt-0">Running a Campaign Soon?</h3>
          <p className="mb-0">👉 We handle hoarding design, printing, and installation—fast turnaround guaranteed, with <strong>same-day options</strong>.</p>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6">Best Locations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Highways</li>
          <li>Busy markets</li>
          <li>Traffic junctions</li>
        </ul>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0">Launch your hoarding campaign today.</h3>
          <p className="mb-8">👉 Contact MAP Advertisers now.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%27m%20interested%20in%20hoarding%20advertising." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default HoardingGuide;
