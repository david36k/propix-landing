import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";

export const AppScreensSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Suivez et inspirez
            <br />
            <span className="text-foreground/70">la communauté</span>
          </h2>
        </div>
        
        <div className="relative">
          <img 
            src={appScreen2} 
            alt="Community inspiration and following interface"
            className="w-full max-w-md mx-auto h-auto rounded-[3rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};