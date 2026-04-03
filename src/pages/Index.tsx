import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpacesSection from "@/components/SpacesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RegionSection from "@/components/RegionSection";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <SpacesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <RegionSection />
      <InfoSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
