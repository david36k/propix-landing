import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AppScreensSection } from "@/components/AppScreensSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AppScreensSection />
      <Footer />
    </main>
  );
};

export default Index;
