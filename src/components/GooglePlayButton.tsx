interface GooglePlayButtonProps {
  className?: string;
}

export const GooglePlayButton = ({ className }: GooglePlayButtonProps) => {
  return (
    <button 
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={() => window.open('https://play.google.com', '_blank')}
    >
      <img 
        src="/lovable-uploads/8d6182d4-2a97-4773-a459-8527ea69efbf.png"
        alt="Get it on Google Play"
        className="h-16 w-auto"
      />
    </button>
  );
};