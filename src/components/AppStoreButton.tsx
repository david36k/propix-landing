import { useState, useEffect } from "react";
import { removeBackground, loadImage } from "@/lib/backgroundRemoval";

interface AppStoreButtonProps {
  className?: string;
}

export const AppStoreButton = ({ className }: AppStoreButtonProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processAppStoreImage = async () => {
      setIsProcessing(true);
      try {
        // Fetch the uploaded image
        const response = await fetch("/lovable-uploads/22c22b5b-36e6-40f0-ab51-b62490333291.png");
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (error) {
        console.error("Failed to process App Store image:", error);
        // Fallback to original image
        setProcessedImageUrl("/lovable-uploads/22c22b5b-36e6-40f0-ab51-b62490333291.png");
      } finally {
        setIsProcessing(false);
      }
    };

    processAppStoreImage();
  }, []);

  return (
    <button 
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={() => window.open('https://apps.apple.com', '_blank')}
    >
      {isProcessing ? (
        <div className="h-14 w-48 bg-background/10 rounded-lg animate-pulse flex items-center justify-center">
          <div className="text-foreground/50 text-sm">מעבד...</div>
        </div>
      ) : (
        <img 
          src={processedImageUrl || "/lovable-uploads/22c22b5b-36e6-40f0-ab51-b62490333291.png"}
          alt="Download on the App Store"
          className="h-14 w-auto"
        />
      )}
    </button>
  );
};