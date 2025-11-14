import Hero from "@/components/Hero";
import UrgencySection from "@/components/UrgencySection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ProofSection from "@/components/ProofSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <UrgencySection />
      <HowItWorks />
      <Pricing />
      <ProofSection />
      <PortfolioGallery />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
