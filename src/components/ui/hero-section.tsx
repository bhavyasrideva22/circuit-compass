import { Button } from "./button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Electrical Engineering Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-electric-blue rounded-full animate-pulse-electric" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-electric-purple rounded-full animate-pulse-electric" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-electric-orange rounded-full animate-pulse-electric" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-electric-green rounded-full animate-pulse-electric" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">AI-Powered Career Assessment</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-electric">
              Electrical Engineering
            </span>{" "}
            Right for You?
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover your fit, readiness, and potential for a career in Electrical Engineering through our comprehensive assessment covering psychological, cognitive, technical, and career-alignment dimensions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-primary">20-30</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-electric-purple">5</div>
              <div className="text-sm text-muted-foreground">Assessment Modules</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-electric-orange">100%</div>
              <div className="text-sm text-muted-foreground">Personalized</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 text-lg px-8 py-6 group"
            >
              <Link to="/assessment">
                Start Your Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary/60 text-lg px-8 py-6"
            >
              <Link to="/careers">
                Explore Careers
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-electric-green rounded-full mr-2" />
              Scientifically Validated
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-electric-blue rounded-full mr-2" />
              Industry Aligned
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-electric-purple rounded-full mr-2" />
              Personalized Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;