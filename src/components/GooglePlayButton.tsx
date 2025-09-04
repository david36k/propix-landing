import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface GooglePlayButtonProps {
  className?: string;
}

export const GooglePlayButton = ({ className }: GooglePlayButtonProps) => {
  return (
    <Button 
      variant="google-play" 
      size="xl"
      className={className}
      onClick={() => window.open('https://play.google.com', '_blank')}
    >
      <Play className="w-6 h-6" />
      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs opacity-90">Get it on</span>
        <span className="text-lg font-semibold -mt-1">Google Play</span>
      </div>
    </Button>
  );
};