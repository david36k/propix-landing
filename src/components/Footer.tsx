export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/20">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-hero-text/70" dir="rtl">
          <a 
            href="#terms" 
            className="hover:text-hero-text transition-colors underline-offset-4 hover:underline font-inter"
          >
            תנאי שימוש
          </a>
          <a 
            href="#privacy" 
            className="hover:text-hero-text transition-colors underline-offset-4 hover:underline font-inter"
          >
            מדיניות פרטיות
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-xs text-hero-text/50" dir="rtl">
            © 2024 PropertyApp. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};