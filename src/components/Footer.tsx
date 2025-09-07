export const Footer = () => {
  return (
    <footer className="bg-background py-16 px-6 border-t border-border/50">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground" dir="rtl">
          <a 
            href="#terms" 
            className="hover:text-foreground transition-colors underline-offset-4 hover:underline font-inter"
          >
            תנאי שימוש
          </a>
          <a 
            href="#privacy" 
            className="hover:text-foreground transition-colors underline-offset-4 hover:underline font-inter"
          >
            מדיניות פרטיות
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60" dir="rtl">
            © 2024 PropertyApp. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};