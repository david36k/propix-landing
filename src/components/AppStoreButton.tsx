import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

interface AppStoreButtonProps {
  className?: string;
}

export const AppStoreButton = ({ className }: AppStoreButtonProps) => {
  return (
    <Button 
      variant="app-store" 
      size="xl"
      className={className}
      onClick={() => window.open('https://apps.apple.com', '_blank')}
    >
      <Apple className="w-6 h-6" />
      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs opacity-90">Download on the</span>
        <span className="text-lg font-semibold -mt-1">App Store</span>
      </div>
    </Button>
  );
};