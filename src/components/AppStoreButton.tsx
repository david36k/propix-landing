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
        src="/lovable-uploads/e422f291-32ef-4efc-879a-5c841ec13ca9.png"
        alt="Download on the App Store"
        className="h-14 w-auto object-contain"
        style={{ minWidth: '140px', maxWidth: '160px' }}
      />
    </button>
  );
};