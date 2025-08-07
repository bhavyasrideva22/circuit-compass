import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, TrendingUp, BookOpen, Target, Download, Share } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import { Link } from "react-router-dom";

const Results = () => {
  // Mock results data - in real app, this would come from assessment responses
  const results = {
    overallScore: 78,
    recommendation: "Yes",
    confidence: 85,
    sections: {
      psychometric: { score: 82, status: "strong" },
      technical: { score: 74, status: "moderate" },
      wiscar: { score: 78, status: "good" }
    },
    strengths: [
      "Strong analytical thinking",
      "High persistence and grit",
      "Good mathematical foundation",
      "Interest in problem-solving"
    ],
    improvements: [
      "Strengthen physics fundamentals",
      "Gain more hands-on experience",
      "Develop programming skills"
    ],
    careerMatches: [
      { role: "Embedded Systems Engineer", match: 85 },
      { role: "Circuit Design Engineer", match: 78 },
      { role: "Automation Engineer", match: 76 }
    ],
    learningPath: [
      { course: "Circuit Analysis Fundamentals", priority: "High", duration: "4 weeks" },
      { course: "Introduction to Programming", priority: "High", duration: "6 weeks" },
      { course: "Digital Electronics", priority: "Medium", duration: "5 weeks" },
      { course: "Control Systems Basics", priority: "Medium", duration: "4 weeks" }
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-electric-green";
    if (score >= 60) return "text-electric-blue";
    if (score >= 40) return "text-electric-orange";
    return "text-destructive";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-electric-green/10";
    if (score >= 60) return "bg-electric-blue/10";
    if (score >= 40) return "bg-electric-orange/10";
    return "bg-destructive/10";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "strong": return <CheckCircle className="w-5 h-5 text-electric-green" />;
      case "good": return <CheckCircle className="w-5 h-5 text-electric-blue" />;
      case "moderate": return <AlertCircle className="w-5 h-5 text-electric-orange" />;
      default: return <AlertCircle className="w-5 h-5 text-destructive" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Assessment Complete</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your EE Readiness Report
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on your responses, here's your personalized assessment for Electrical Engineering readiness
            </p>
          </div>

          {/* Overall Result */}
          <Card className="mb-8 border-primary/20 shadow-electric">
            <CardHeader className="text-center pb-4">
              <div className={`w-24 h-24 ${getScoreBg(results.overallScore)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className={`text-3xl font-bold ${getScoreColor(results.overallScore)}`}>
                  {results.overallScore}
                </span>
              </div>
              <CardTitle className="text-2xl mb-2">
                Should You Pursue Electrical Engineering?
              </CardTitle>
              <div className="flex items-center justify-center space-x-4">
                <Badge className="bg-electric-green text-black text-lg px-4 py-2">
                  {results.recommendation}
                </Badge>
                <span className="text-muted-foreground">
                  {results.confidence}% Confidence
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                You show strong potential for success in Electrical Engineering. Your analytical thinking 
                and problem-solving skills align well with the field's requirements.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Section Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Section Breakdown
                </CardTitle>
                <CardDescription>
                  Your performance across assessment modules
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(results.sections).map(([section, data]) => (
                  <div key={section}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(data.status)}
                        <span className="font-medium capitalize">
                          {section.replace('_', ' & ')}
                        </span>
                      </div>
                      <span className={`font-bold ${getScoreColor(data.score)}`}>
                        {data.score}%
                      </span>
                    </div>
                    <Progress value={data.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Career Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Top Career Matches
                </CardTitle>
                <CardDescription>
                  EE roles that align with your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.careerMatches.map((career, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium">{career.role}</span>
                    <Badge className={getScoreBg(career.match)}>
                      {career.match}% Match
                    </Badge>
                  </div>
                ))}
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/careers">Explore All Careers</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="text-electric-green">Your Strengths</CardTitle>
                <CardDescription>
                  Areas where you excel for EE success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {results.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-electric-green mr-3 flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Areas for Improvement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-electric-orange">Growth Areas</CardTitle>
                <CardDescription>
                  Skills to develop for better EE readiness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {results.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-electric-orange mr-3 flex-shrink-0" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Learning Pathway */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Recommended Learning Path
              </CardTitle>
              <CardDescription>
                Structured courses to enhance your EE readiness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.learningPath.map((course, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{course.course}</h4>
                      <Badge variant={course.priority === "High" ? "default" : "secondary"}>
                        {course.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" size="lg">
              <Share className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/assessment">Retake Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;