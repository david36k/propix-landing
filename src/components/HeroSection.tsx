import { AppStoreButton } from "@/components/AppStoreButton";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/backgroundRemoval";

export const HeroSection = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processAppImage = async () => {
      setIsProcessing(true);
      try {
        // Fetch the uploaded image
        const response = await fetch("/lovable-uploads/920a6d53-4a16-4ab7-b9d6-d2310531dda5.png");
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (error) {
        console.error("Failed to process image:", error);
        // Fallback to original image
        setProcessedImageUrl("/lovable-uploads/920a6d53-4a16-4ab7-b9d6-d2310531dda5.png");
      } finally {
        setIsProcessing(false);
      }
    };

    processAppImage();
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup - Left Side */}
          <div className="flex justify-center lg:justify-end animate-fade-up">
            {isProcessing ? (
              <div className="w-80 h-[600px] bg-background/10 rounded-3xl animate-pulse flex items-center justify-center">
                <div className="text-hero-text-muted">מעבד תמונה...</div>
              </div>
            ) : processedImageUrl ? (
              <img 
                src={processedImageUrl}
                alt="propix app interface"
                className="w-80 h-auto max-h-[600px] object-contain"
              />
            ) : null}
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