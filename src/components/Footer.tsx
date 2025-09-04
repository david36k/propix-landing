export const Footer = () => {
  return (
    <footer className="bg-background py-8 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
          <a 
            href="#terms" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Terms of Use
          </a>
          <a 
            href="#privacy" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};