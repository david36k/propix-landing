import appStoreBadge from "@/assets/app-store-badge.png";

interface AppStoreButtonProps {
  className?: string;
}

export const AppStoreButton = ({ className }: AppStoreButtonProps) => {
  return (
    <img 
      src={appStoreBadge}
      alt="Download on the App Store"
      className={`h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={() => window.open('https://apps.apple.com', '_blank')}
    />
  );
};