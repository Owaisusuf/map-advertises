import { SEOPageLayout } from "@/components/layout/SEOPageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What are the best printing services in Srinagar?",
    answer: "The best printing services in Srinagar offer high-quality output, fast turnaround, and reliable installation. MAP Advertisers provides flex printing, signage, branding, and hoarding services with same-day delivery on most projects."
  },
  {
    question: "Do you offer same-day printing in Srinagar?",
    answer: "Yes, we provide same-day printing services in Srinagar for most jobs, including flex banners, visiting cards, and basic signage, depending on the order size and design readiness."
  },
  {
    question: "What is the cost of flex printing in Kashmir?",
    answer: "Flex printing costs in Kashmir usually range from ₹15 to ₹40 per square foot, depending on quality, size, and usage (indoor or outdoor)."
  },
  {
    question: "Which is better: ACP boards or flex printing?",
    answer: "ACP boards are better for long-term, premium branding, while flex printing is more affordable and suitable for temporary promotions or events."
  },
  {
    question: "Do you provide signage installation in Srinagar?",
    answer: "Yes, we offer complete signage solutions including design, printing, and installation across Srinagar and nearby areas."
  },
  {
    question: "How long do ACP sign boards last?",
    answer: "ACP boards typically last between 5 to 10 years, depending on environmental conditions and maintenance."
  },
  {
    question: "What types of signage do you offer?",
    answer: "We provide ACP signage, LED sign boards, Acrylic letters, Flex banners, and Hoardings."
  },
  {
    question: "Can I get logo design and branding services?",
    answer: "Yes, we offer complete branding solutions including logo design, business cards, packaging, and marketing materials."
  },
  {
    question: "Do you handle large hoarding projects in Kashmir?",
    answer: "Yes, we specialize in large-format hoarding printing and installation across Kashmir, including highways and commercial areas."
  },
  {
    question: "Where is your printing press located in Srinagar?",
    answer: "MAP Advertisers is located near Barzulla Bridge in Srinagar, serving businesses across the region."
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order by calling us directly, messaging on WhatsApp, or visiting our office."
  },
  {
    question: "Do you provide custom printing solutions?",
    answer: "Yes, all our services are customizable based on your business needs, design preferences, and budget."
  }
];

const FAQ = () => {
  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });

  return (
    <SEOPageLayout
      title="Printing & Signage FAQs in Srinagar | MAP Advertisers"
      description="Get answers to common questions about printing, flex banners, signage, ACP boards, and branding services in Srinagar, Kashmir."
      schema={faqSchema}
    >
      <div className="prose prose-invert lg:prose-xl max-w-none">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-brand mb-8">
          Frequently Asked Questions – Printing & Signage in Srinagar
        </h1>
        
        <p className="lead text-xl text-muted-foreground mb-12">
          If you're looking for printing, signage, or branding services in Srinagar, you probably have questions about pricing, materials, delivery time, and quality. Here are the most common questions customers ask before starting a project.
        </p>

        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-muted/20 border border-white/5 rounded-xl px-6 data-[state=open]:bg-white/5 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-brand/10 p-8 rounded-2xl border border-brand/20 mt-12">
          <h3 className="text-2xl font-bold mb-4 mt-0 text-white">Ready to get started?</h3>
          <p className="mb-6">Need printing, signage, or branding done today?</p>
          <p className="mb-6">MAP Advertisers offers <strong>same-day delivery across Srinagar</strong> with premium quality and fast service.</p>
          
          <ul className="space-y-2 mb-8 font-medium">
            <li className="flex gap-2">✔ Same-day delivery available</li>
            <li className="flex gap-2">✔ Trusted by 3000+ brands</li>
            <li className="flex gap-2">✔ Complete design + print + installation</li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919086001122" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors">
              Call now: +91 90860 01122
            </a>
            <a href="https://wa.me/919086001122?text=Hi%2C%20I%20have%20a%20few%20questions%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Looking for something else? Back to <Link to="/" className="text-gold hover:underline">Home</Link> or check out our <Link to="/blog" className="text-gold hover:underline">Blog</Link>.
          </p>
        </div>
      </div>
    </SEOPageLayout>
  );
};

export default FAQ;
