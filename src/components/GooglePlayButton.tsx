import { useState, useEffect } from "react";
import { removeBackground, loadImage } from "@/lib/backgroundRemoval";

interface GooglePlayButtonProps {
  className?: string;
}

export const GooglePlayButton = ({ className }: GooglePlayButtonProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processGooglePlayImage = async () => {
      setIsProcessing(true);
      try {
        // Fetch the uploaded image
        const response = await fetch("/lovable-uploads/feb40077-8184-4aee-8194-2f46ec1d9337.png");
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (error) {
        console.error("Failed to process Google Play image:", error);
        // Fallback to original image
        setProcessedImageUrl("/lovable-uploads/feb40077-8184-4aee-8194-2f46ec1d9337.png");
      } finally {
        setIsProcessing(false);
      }
    };

    processGooglePlayImage();
  }, []);

  return (
    <button 
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={() => window.open('https://play.google.com', '_blank')}
    >
      {isProcessing ? (
        <div className="h-14 w-48 bg-background/10 rounded-lg animate-pulse flex items-center justify-center">
          <div className="text-foreground/50 text-sm">מעבד...</div>
        </div>
      ) : (
        <img 
          src={processedImageUrl || "/lovable-uploads/feb40077-8184-4aee-8194-2f46ec1d9337.png"}
          alt="Get it on Google Play"
          className="h-14 w-auto"
        />
      )}
    </button>
  );
};