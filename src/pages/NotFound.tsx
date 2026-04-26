import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/logo-new.png";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-24 pb-12">
        <div className="max-w-md w-full space-y-8 glass-strong p-8 rounded-3xl border border-white/5 shadow-elegant">
          <div className="flex justify-center mb-6 relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-2xl rounded-full" />
            <img src={logo} alt="MAP Advertisers Logo" className="relative h-20 w-auto drop-shadow-xl" />
          </div>
          <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">404</h1>
          <h2 className="text-2xl font-semibold text-white/90">Page Not Found</h2>
          <p className="text-muted-foreground text-sm">
            It looks like this page stepped out of the studio. 
            Don't worry, MAP Advertisers is still here to handle all your Print, Branding, and Digital needs!
          </p>
          <div className="pt-4 flex justify-center">
            <Button variant="brand" asChild>
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
