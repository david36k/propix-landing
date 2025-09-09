interface AppStoreButtonProps {
  className?: string;
}

export const AppStoreButton = ({ className }: AppStoreButtonProps) => {
  return (
    <button 
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={() => window.open('https://apps.apple.com', '_blank')}
    >
      <img 
        src="/lovable-uploads/4bef318e-f22c-4964-a200-b673b65482de.png"
        alt="Download on the App Store"
        className="h-14 w-auto"
      />
    </button>
  );
};