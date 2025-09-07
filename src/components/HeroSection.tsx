import { AppStoreButton } from "@/components/AppStoreButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import innovativeHouse from "@/assets/innovative-house.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Header Text */}
        <div className="animate-fade-up">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-hero-text mb-8 max-w-5xl mx-auto leading-[0.9]" dir="rtl">
            שתפו והמליצו
            <br />
            <span className="text-hero-text/80">על הגילויים הטובים ביותר שלכם</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-hero-text-muted mb-16 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            PropertyApp, אפליקציית הנייד לניהול נדל״ן למשקיעים שמהפכת את הדרך שלכם להשקיע.
          </p>
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