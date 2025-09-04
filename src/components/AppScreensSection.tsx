import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";

export const AppScreensSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8">
          Everything You Need in One App
        </h2>
        <p className="text-xl text-purple-100 mb-16 max-w-2xl mx-auto">
          Monitor your investments, track performance, and make data-driven decisions with our comprehensive suite of tools.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div className="relative group">
            <img 
              src={appScreen1} 
              alt="Property portfolio dashboard showing investment overview and key metrics"
              className="w-64 h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-[3rem] blur-3xl -z-10 scale-110"></div>
          </div>
          
          <div className="relative group">
            <img 
              src={appScreen2} 
              alt="Investment analytics screen with charts and financial performance data"
              className="w-64 h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-[3rem] blur-3xl -z-10 scale-110"></div>
          </div>
          
          <div className="relative group">
            <img 
              src={appScreen3} 
              alt="Property management settings and configuration interface"
              className="w-64 h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-[3rem] blur-3xl -z-10 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};