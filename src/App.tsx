import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { HelmetProvider } from "react-helmet-async";

// SEO Pages
import FlexPrinting from "./pages/services/FlexPrinting";
import SignageServices from "./pages/services/SignageServices";
import ACPSignBoard from "./pages/services/ACPSignBoard";
import HoardingPrinting from "./pages/services/HoardingPrinting";
import BrandingAgency from "./pages/services/BrandingAgency";
import LogoDesign from "./pages/services/LogoDesign";
import LocationPage from "./pages/locations/LocationPage";
import FAQ from "./pages/FAQ";
import BlogIndex from "./pages/blog/BlogIndex";
import BestPrintingServices from "./pages/blog/BestPrintingServices";
import FlexPrintingCost from "./pages/blog/FlexPrintingCost";
import AcpVsFlex from "./pages/blog/AcpVsFlex";
import ChoosingSignage from "./pages/blog/ChoosingSignage";
import BrandingTips from "./pages/blog/BrandingTips";
import HoardingGuide from "./pages/blog/HoardingGuide";
import BenefitsOfAcp from "./pages/blog/BenefitsOfAcp";
import PrintingMistakes from "./pages/blog/PrintingMistakes";
import OutdoorAdvertising from "./pages/blog/OutdoorAdvertising";
import FlexVsVinyl from "./pages/blog/FlexVsVinyl";
import SignageIdeas from "./pages/blog/SignageIdeas";
import AdvertisingMethods from "./pages/blog/AdvertisingMethods";
import ChoosingPrintingService from "./pages/blog/ChoosingPrintingService";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
            {/* SEO Routes */}
            <Route path="/printing-services-srinagar" element={<FlexPrinting />} />
            <Route path="/flex-printing-srinagar" element={<FlexPrinting />} />
            <Route path="/signage-services-srinagar" element={<SignageServices />} />
            <Route path="/branding-services-srinagar" element={<BrandingAgency />} />
            <Route path="/acp-sign-board-srinagar" element={<ACPSignBoard />} />
            <Route path="/hoarding-printing-kashmir" element={<HoardingPrinting />} />
            <Route path="/branding-agency-kashmir" element={<BrandingAgency />} />
            <Route path="/logo-design-srinagar" element={<LogoDesign />} />
            
            {/* Location Specific Service Pages */}
            <Route path="/printing-services-kashmir" element={<LocationPage />} />
            <Route path="/printing-services-anantnag" element={<LocationPage />} />
            <Route path="/printing-services-baramulla" element={<LocationPage />} />
            
            <Route path="/locations/srinagar" element={<LocationPage />} />
            <Route path="/locations/anantnag" element={<LocationPage />} />
            <Route path="/locations/baramulla" element={<LocationPage />} />
            <Route path="/faqs-printing-srinagar" element={<FAQ />} />
            <Route path="/blog" element={<BlogIndex />} />
            
            {/* Blog Posts */}
            <Route path="/blog/best-printing-services-srinagar" element={<BestPrintingServices />} />
            <Route path="/blog/printing-cost-in-srinagar" element={<FlexPrintingCost />} />
            <Route path="/blog/acp-vs-flex-boards" element={<AcpVsFlex />} />
            <Route path="/blog/how-to-choose-signage-srinagar" element={<ChoosingSignage />} />
            <Route path="/blog/branding-tips-local-businesses" element={<BrandingTips />} />
            <Route path="/blog/hoarding-advertising-guide" element={<HoardingGuide />} />
            <Route path="/blog/benefits-of-acp-boards" element={<BenefitsOfAcp />} />
            <Route path="/blog/printing-mistakes-to-avoid" element={<PrintingMistakes />} />
            <Route path="/blog/outdoor-advertising-kashmir" element={<OutdoorAdvertising />} />

            <Route path="/blog/flex-vs-vinyl-printing" element={<FlexVsVinyl />} />
            <Route path="/blog/signage-ideas-shops-kashmir" element={<SignageIdeas />} />
            <Route path="/blog/advertising-methods-srinagar" element={<AdvertisingMethods />} />
            <Route path="/blog/choosing-printing-service-kashmir" element={<ChoosingPrintingService />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
