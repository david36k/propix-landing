import { Play } from "lucide-react";

interface GooglePlayButtonProps {
  className?: string;
}

export const GooglePlayButton = ({ className }: GooglePlayButtonProps) => {
  return (
    <button 
      className={`bg-black text-white rounded-2xl px-6 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors ${className}`}
      onClick={() => window.open('https://play.google.com', '_blank')}
    >
      <Play className="w-8 h-8" />
      <div className="flex flex-col items-start leading-tight text-right" dir="rtl">
        <span className="text-sm opacity-90">קבל את זה ב</span>
        <span className="text-xl font-semibold -mt-1">Google Play</span>
      </div>
    </button>
  );
};