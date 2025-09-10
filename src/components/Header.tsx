import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "about"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "בית" },
    { id: "features", label: "פיצ׳רים" },
    { id: "about", label: "אודות" }
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-white/20">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-6" dir="rtl">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-foreground text-background"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <div className="w-px h-4 bg-foreground/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};