import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AssessmentModules from "@/components/ui/assessment-modules";
import CareerHighlights from "@/components/ui/career-highlights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AssessmentModules />
      <CareerHighlights />
    </div>
  );
};

export default Index;
