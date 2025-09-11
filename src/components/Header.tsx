import { useState, useEffect } from "react";
import { Home, Settings, Info, Eye } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "about", "screens"];
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
    { 
      name: "בית", 
      url: "#home",
      icon: Home,
      onClick: () => scrollToSection("home")
    },
    { 
      name: "פיצ׳רים", 
      url: "#features",
      icon: Settings,
      onClick: () => scrollToSection("features")
    },
    { 
      name: "אודות", 
      url: "#about",
      icon: Info,
      onClick: () => scrollToSection("about")
    },
    { 
      name: "מסכים", 
      url: "#screens",
      icon: Eye,
      onClick: () => scrollToSection("screens")
    }
  ];

  return <NavBar items={navItems} activeItem={activeSection} />;
};