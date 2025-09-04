import { AppStoreButton } from "@/components/AppStoreButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import innovativeHouse from "@/assets/innovative-house.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden">
      {/* Background House Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={innovativeHouse} 
          alt="Modern innovative smart house architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-blue-900/80"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* Header Text */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
            </svg>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Find Success in One Tap
          </h1>
          <p className="font-inter text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Smart property management helps you invest, manage, and grow in seconds. Your pocket solution for real estate success.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-16">
          <button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
            Start Your Journey
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <AppStoreButton className="w-full sm:w-auto" />
          <GooglePlayButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};