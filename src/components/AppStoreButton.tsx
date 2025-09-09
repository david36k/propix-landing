import { Apple } from "lucide-react";

interface AppStoreButtonProps {
  className?: string;
}

export const AppStoreButton = ({ className }: AppStoreButtonProps) => {
  return (
    <button 
      className={`bg-black text-white rounded-2xl px-6 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors ${className}`}
      onClick={() => window.open('https://apps.apple.com', '_blank')}
    >
      <Apple className="w-8 h-8" />
      <div className="flex flex-col items-start leading-tight text-right" dir="rtl">
        <span className="text-sm opacity-90">הורד מה</span>
        <span className="text-xl font-semibold -mt-1">App Store</span>
      </div>
    </button>
  );
};