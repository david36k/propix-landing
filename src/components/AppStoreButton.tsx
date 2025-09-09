import { Apple } from "lucide-react";

interface AppStoreButtonProps {
  className?: string;
}

export const AppStoreButton = ({ className }: AppStoreButtonProps) => {
  return (
    <button 
      className={`bg-black text-white rounded-lg px-6 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors min-w-[200px] ${className}`}
      onClick={() => window.open('https://apps.apple.com', '_blank')}
    >
      <Apple className="w-7 h-7 fill-white" />
      <div className="flex flex-col items-start leading-tight text-right" dir="rtl">
        <span className="text-xs opacity-90">הורד מה</span>
        <span className="text-lg font-medium -mt-0.5">App Store</span>
      </div>
    </button>
  );
};