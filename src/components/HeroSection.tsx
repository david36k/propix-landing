import { AppStoreButton } from "@/components/AppStoreButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import appMockup from "@/assets/app-mockup.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl mx-auto text-center">
        {/* Header Text */}
        <div className="animate-fade-up">
          <h1 className="text-hero md:text-6xl lg:text-7xl font-bold text-hero-text mb-6 max-w-4xl mx-auto">
            Manage Properties Like a Pro
          </h1>
          <p className="text-xl md:text-2xl text-hero-text-muted mb-12 max-w-2xl mx-auto">
            The ultimate property management app designed specifically for real estate investors. 
            Track portfolios, analyze returns, and maximize profits.
          </p>
        </div>

        {/* App Mockup */}
        <div className="relative animate-slide-up mb-16">
          <div className="relative inline-block">
            <img 
              src={appMockup} 
              alt="Property management app interface showing dashboard with investment metrics and property listings"
              className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {/* Floating glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-3xl -z-10 scale-110"></div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <AppStoreButton className="w-full sm:w-auto" />
          <GooglePlayButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};