import googlePlayBadge from "@/assets/google-play-badge.png";

interface GooglePlayButtonProps {
  className?: string;
}

export const GooglePlayButton = ({ className }: GooglePlayButtonProps) => {
  return (
    <img 
      src={googlePlayBadge}
      alt="Get it on Google Play"
      className={`h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={() => window.open('https://play.google.com', '_blank')}
    />
  );
};