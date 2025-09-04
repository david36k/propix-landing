export const Footer = () => {
  return (
    <footer className="bg-purple-900 py-12 px-6">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-purple-200">
          <a 
            href="#terms" 
            className="hover:text-white transition-colors underline-offset-4 hover:underline font-inter"
          >
            Terms of Use
          </a>
          <a 
            href="#privacy" 
            className="hover:text-white transition-colors underline-offset-4 hover:underline font-inter"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};