import { AppStoreButton } from "@/components/AppStoreButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup - Left Side */}
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <img 
              src="/lovable-uploads/c7b8a489-822c-4117-b36e-e4baa5917c88.png"
              alt="propix app interface"
              className="w-80 h-auto max-h-[600px] object-contain"
            />
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-right animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-8 leading-[0.9]" dir="rtl">
              ניהול נכסים
              <br />
              <span className="text-hero-text/80">מעולם לא היה קל כל כך</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl text-hero-text-muted mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed" dir="rtl">
              אפליקציית propix לניהול נדל״ן עצמאי חכם
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
              <AppStoreButton className="w-full sm:w-auto" />
              <GooglePlayButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};