import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Brain, Calculator, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AssessmentModules = () => {
  const modules = [
    {
      id: "intro",
      title: "Test Introduction",
      description: "Learn about Electrical Engineering careers and what makes someone successful in this field",
      icon: Lightbulb,
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/10",
      features: ["Career Overview", "Success Traits", "Typical Roles"]
    },
    {
      id: "psychometric",
      title: "Psychometric Assessment",
      description: "Evaluate personality and motivational alignment with electrical engineering",
      icon: Brain,
      color: "text-electric-purple",
      bgColor: "bg-electric-purple/10",
      features: ["Big Five Personality", "Holland Codes", "Grit & Mindset"]
    },
    {
      id: "technical",
      title: "Technical & Aptitude",
      description: "Assess cognitive foundation and academic readiness for Electrical Engineering",
      icon: Calculator,
      color: "text-electric-orange",
      bgColor: "bg-electric-orange/10",
      features: ["Math Foundations", "Physics Concepts", "Logical Reasoning"]
    },
    {
      id: "wiscar",
      title: "WISCAR Framework",
      description: "Deep dive into Will, Interest, Skill, Cognitive readiness, Ability, and Real-world alignment",
      icon: Target,
      color: "text-electric-green",
      bgColor: "bg-electric-green/10",
      features: ["6-Dimensional Analysis", "Radar Chart", "Gap Identification"]
    },
    {
      id: "recommendations",
      title: "AI Recommendations",
      description: "Get personalized insights and next steps based on your complete assessment",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: ["Career Guidance", "Learning Path", "Confidence Score"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Assessment Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive evaluation covers every aspect needed to determine your fit for Electrical Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.id} 
                className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
                
                <CardHeader>
                  <div className={`w-12 h-12 ${module.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${module.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 ${module.color.replace('text-', 'bg-')} rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-sm text-muted-foreground mb-4">
                    Module {index + 1} of {modules.length}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-primary hover:shadow-electric transition-all duration-300 text-lg px-8 py-6"
          >
            <Link to="/assessment">
              Begin Complete Assessment
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Complete all modules in 20-30 minutes • Save progress anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssessmentModules;