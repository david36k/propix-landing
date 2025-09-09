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
        src="/lovable-uploads/feb40077-8184-4aee-8194-2f46ec1d9337.png"
        alt="Get it on Google Play"
        className="h-14 w-auto"
      />
    </button>
  );
};