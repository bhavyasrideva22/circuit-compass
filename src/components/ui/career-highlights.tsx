import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { DollarSign, Briefcase, TrendingUp, Users } from "lucide-react";

const CareerHighlights = () => {
  const careers = [
    {
      title: "Embedded Systems Engineer",
      description: "Design firmware and microcontroller systems for IoT devices and smart products",
      salary: "$85,000 - $135,000",
      skills: ["C/C++", "PCB Design", "RTOS", "Hardware Integration"],
      growth: "High",
      icon: "🔧"
    },
    {
      title: "Power Systems Engineer",
      description: "Work on electrical grid infrastructure and renewable energy systems",
      salary: "$75,000 - $125,000",
      skills: ["Power Electronics", "MATLAB", "Grid Analysis", "Renewable Energy"],
      growth: "Very High",
      icon: "⚡"
    },
    {
      title: "Circuit Design Engineer",
      description: "Develop analog and digital circuit boards for various applications",
      salary: "$70,000 - $120,000",
      skills: ["CAD Tools", "Simulation", "Component Selection", "Testing"],
      growth: "Moderate",
      icon: "🔌"
    },
    {
      title: "Automation Engineer",
      description: "Integrate control systems with software for industrial automation",
      salary: "$80,000 - $130,000",
      skills: ["PLC Programming", "SCADA", "Sensors", "Industrial Networks"],
      growth: "High",
      icon: "🤖"
    },
    {
      title: "Signal Processing Engineer",
      description: "Analyze and transform signals for telecommunications and audio systems",
      salary: "$90,000 - $140,000",
      skills: ["DSP", "MATLAB", "Algorithms", "Communication Systems"],
      growth: "High",
      icon: "📡"
    }
  ];

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case "Very High": return "bg-electric-green text-black";
      case "High": return "bg-electric-blue text-white";
      case "Moderate": return "bg-electric-orange text-black";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Electrical Engineering Careers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore high-demand career paths with excellent growth potential and competitive compensation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {careers.map((career, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-tech opacity-10 rounded-bl-full" />
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{career.icon}</div>
                  <Badge className={getGrowthColor(career.growth)}>
                    {career.growth} Growth
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {career.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {career.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center mb-4 text-electric-green">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{career.salary}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">300K+</div>
            <div className="text-sm text-muted-foreground">Job Openings</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-electric-green" />
            </div>
            <div className="text-2xl font-bold text-electric-green">8%</div>
            <div className="text-sm text-muted-foreground">Growth Rate</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-8 h-8 text-electric-orange" />
            </div>
            <div className="text-2xl font-bold text-electric-orange">$95K</div>
            <div className="text-sm text-muted-foreground">Median Salary</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-electric-purple" />
            </div>
            <div className="text-2xl font-bold text-electric-purple">2M+</div>
            <div className="text-sm text-muted-foreground">Professionals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;