import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, DollarSign, TrendingUp, MapPin, Users, Filter } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import { useState } from "react";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  const careers = [
    {
      title: "Embedded Systems Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      salary: "$95,000 - $140,000",
      experience: "2-5 years",
      type: "Full-time",
      growth: "High",
      description: "Design and develop firmware for IoT devices and smart systems. Work with microcontrollers, sensors, and communication protocols.",
      skills: ["C/C++", "Embedded Linux", "RTOS", "PCB Design", "Hardware Debugging"],
      responsibilities: [
        "Develop firmware for embedded systems",
        "Design and test hardware interfaces",
        "Optimize system performance and power consumption",
        "Collaborate with hardware and software teams"
      ]
    },
    {
      title: "Power Systems Engineer",
      company: "Green Energy Solutions",
      location: "Austin, TX",
      salary: "$85,000 - $125,000",
      experience: "3-7 years",
      type: "Full-time",
      growth: "Very High",
      description: "Focus on renewable energy systems, grid integration, and power distribution networks.",
      skills: ["MATLAB", "Power Electronics", "Grid Analysis", "SCADA", "Renewable Energy"],
      responsibilities: [
        "Design and analyze power distribution systems",
        "Develop renewable energy integration strategies",
        "Perform load flow and fault analysis",
        "Ensure compliance with electrical codes"
      ]
    },
    {
      title: "Circuit Design Engineer",
      company: "MicroChip Dynamics",
      location: "Portland, OR",
      salary: "$75,000 - $115,000",
      experience: "1-4 years",
      type: "Full-time",
      growth: "Moderate",
      description: "Create analog and digital circuits for consumer electronics and industrial applications.",
      skills: ["Altium Designer", "SPICE Simulation", "Signal Integrity", "Component Selection", "Testing"],
      responsibilities: [
        "Design analog and digital circuits",
        "Perform circuit simulations and analysis",
        "Create PCB layouts and schematics",
        "Test and validate circuit performance"
      ]
    },
    {
      title: "Automation Engineer",
      company: "Industrial Automation Corp",
      location: "Detroit, MI",
      salary: "$80,000 - $120,000",
      experience: "2-6 years",
      type: "Full-time",
      growth: "High",
      description: "Implement industrial automation solutions using PLCs, robotics, and control systems.",
      skills: ["PLC Programming", "HMI Design", "Industrial Networks", "Robotics", "SCADA"],
      responsibilities: [
        "Program and configure PLCs",
        "Design control system architectures",
        "Integrate industrial communication networks",
        "Troubleshoot automation systems"
      ]
    },
    {
      title: "Signal Processing Engineer",
      company: "Communications Tech Ltd",
      location: "Boston, MA",
      salary: "$90,000 - $135,000",
      experience: "3-8 years",
      type: "Full-time",
      growth: "High",
      description: "Develop algorithms for telecommunications, audio processing, and data analysis systems.",
      skills: ["DSP", "MATLAB", "Python", "Machine Learning", "Communication Systems"],
      responsibilities: [
        "Develop digital signal processing algorithms",
        "Implement real-time signal processing systems",
        "Optimize algorithm performance",
        "Research new signal processing techniques"
      ]
    },
    {
      title: "RF Engineer",
      company: "Wireless Solutions Inc",
      location: "San Diego, CA",
      salary: "$85,000 - $130,000",
      experience: "2-7 years",
      type: "Full-time",
      growth: "High",
      description: "Design and optimize wireless communication systems, antennas, and RF circuits.",
      skills: ["RF Design", "Antenna Theory", "Microwave Engineering", "EM Simulation", "Network Analysis"],
      responsibilities: [
        "Design RF circuits and systems",
        "Perform electromagnetic simulations",
        "Test and characterize RF components",
        "Optimize wireless system performance"
      ]
    }
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSalary = !salaryRange || 
                         (salaryRange === "entry" && career.experience.includes("1-")) ||
                         (salaryRange === "mid" && (career.experience.includes("2-") || career.experience.includes("3-"))) ||
                         (salaryRange === "senior" && (career.experience.includes("5-") || career.experience.includes("7-")));
    
    const matchesExperience = !experienceLevel ||
                             (experienceLevel === "entry" && career.experience.includes("1-")) ||
                             (experienceLevel === "mid" && (career.experience.includes("2-") || career.experience.includes("3-"))) ||
                             (experienceLevel === "senior" && (career.experience.includes("5-") || career.experience.includes("7-")));
    
    return matchesSearch && matchesSalary && matchesExperience;
  });

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case "Very High": return "bg-electric-green text-black";
      case "High": return "bg-electric-blue text-white";
      case "Moderate": return "bg-electric-orange text-black";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Electrical Engineering Careers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities in Electrical Engineering with competitive salaries and growth potential
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search roles or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={salaryRange} onValueChange={setSalaryRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Salary Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">$70K - $90K (Entry)</SelectItem>
                    <SelectItem value="mid">$85K - $120K (Mid)</SelectItem>
                    <SelectItem value="senior">$115K+ (Senior)</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                    <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSalaryRange("");
                    setExperienceLevel("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredCareers.map((career, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{career.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {career.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {career.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {career.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                      <Badge className={getGrowthColor(career.growth)}>
                        {career.growth} Growth
                      </Badge>
                      <Badge variant="outline">
                        {career.experience}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {career.description}
                  </CardDescription>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium mb-3">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Key Responsibilities</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {career.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-gradient-primary">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                    <Button variant="ghost">
                      Save for Later
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCareers.length === 0 && (
            <div className="text-center py-12">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No careers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;