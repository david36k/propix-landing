import { AppStoreButton } from "@/components/AppStoreButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-16 pt-24 relative overflow-hidden">
      {/* Text Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20 animate-fade-in">
        <h1 className="font-heebo text-3xl font-bold text-hero-text">
          propix
        </h1>
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup - Left Side */}
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <img 
              src="/lovable-uploads/c7b8a489-822c-4117-b36e-e4baa5917c88.png"
              alt="propix app interface"
              className="w-96 h-auto max-h-[700px] object-contain"
            />
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-right animate-fade-up">
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-6 leading-[0.9]" dir="rtl">
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent font-extrabold">ניהול נכסים</span>
              <br />
              <span className="text-hero-text font-semibold">מעולם לא היה קל כל כך</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl text-hero-text/70 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" dir="rtl">
              אפליקציית propix לניהול נדל״ן עצמאי חכם
            </p>

            {/* Stats */}
            <div className="mb-8 animate-fade-in">
              <p className="text-xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent" dir="rtl">
                +2300 נכסים במערכת
              </p>
            </div>

            {/* Download Section */}
            <div className="animate-fade-in">
              <p className="text-lg font-semibold text-hero-text mb-4" dir="rtl">
                הורידו עכשיו
              </p>
              <div className="flex flex-row gap-4 justify-center lg:justify-start items-center">
                <AppStoreButton className="flex-shrink-0" />
                <GooglePlayButton className="flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};