export const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-white/20">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#home" className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm font-medium">האפליקציה</a>
            <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm font-medium">צור קשר</a>
          </div>
          
          <button className="bg-gradient-to-r from-amber-400 to-orange-400 text-foreground px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm">
            הורדה
          </button>
        </div>
      </nav>
    </header>
  );
};