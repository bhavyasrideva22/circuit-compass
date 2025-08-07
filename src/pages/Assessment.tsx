import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle, Brain, Calculator, Target } from "lucide-react";
import Navigation from "@/components/ui/navigation";

const Assessment = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const modules = [
    {
      id: "psychometric",
      title: "Psychometric Assessment",
      description: "Personality and motivational alignment",
      icon: Brain,
      color: "text-electric-purple",
      questions: [
        {
          id: "interest_1",
          question: "How curious are you about understanding how electrical devices work?",
          type: "likert",
          options: [
            { value: 1, label: "Not curious at all" },
            { value: 2, label: "Slightly curious" },
            { value: 3, label: "Moderately curious" },
            { value: 4, label: "Very curious" },
            { value: 5, label: "Extremely curious" }
          ]
        },
        {
          id: "personality_1",
          question: "When working on complex problems, I prefer to:",
          type: "single",
          options: [
            { value: "systematic", label: "Follow a systematic, step-by-step approach" },
            { value: "intuitive", label: "Trust my intuition and try different approaches" },
            { value: "collaborative", label: "Discuss with others and gather multiple perspectives" },
            { value: "analytical", label: "Break down the problem into smaller components" }
          ]
        },
        {
          id: "motivation_1",
          question: "What motivates you most in your work or studies?",
          type: "single",
          options: [
            { value: "innovation", label: "Creating something new and innovative" },
            { value: "problem_solving", label: "Solving complex technical challenges" },
            { value: "impact", label: "Making a positive impact on society" },
            { value: "learning", label: "Continuously learning and growing" }
          ]
        }
      ]
    },
    {
      id: "technical",
      title: "Technical & Aptitude",
      description: "Cognitive foundation and academic readiness",
      icon: Calculator,
      color: "text-electric-orange",
      questions: [
        {
          id: "math_1",
          question: "If V = IR and I = 2A, R = 5Ω, what is V?",
          type: "single",
          options: [
            { value: "7V", label: "7V" },
            { value: "10V", label: "10V" },
            { value: "3V", label: "3V" },
            { value: "2.5V", label: "2.5V" }
          ],
          correct: "10V"
        },
        {
          id: "logic_1",
          question: "Complete the pattern: 2, 4, 8, 16, ?",
          type: "single",
          options: [
            { value: "24", label: "24" },
            { value: "32", label: "32" },
            { value: "20", label: "20" },
            { value: "18", label: "18" }
          ],
          correct: "32"
        },
        {
          id: "physics_1",
          question: "What happens to current in a series circuit when resistance increases?",
          type: "single",
          options: [
            { value: "increases", label: "Current increases" },
            { value: "decreases", label: "Current decreases" },
            { value: "stays_same", label: "Current stays the same" },
            { value: "depends", label: "Depends on the voltage" }
          ],
          correct: "decreases"
        }
      ]
    },
    {
      id: "wiscar",
      title: "WISCAR Framework",
      description: "Will, Interest, Skill, Cognitive, Ability, Real-world alignment",
      icon: Target,
      color: "text-electric-green",
      questions: [
        {
          id: "will_1",
          question: "How willing are you to spend years mastering complex technical concepts?",
          type: "likert",
          options: [
            { value: 1, label: "Not willing at all" },
            { value: 2, label: "Slightly willing" },
            { value: 3, label: "Moderately willing" },
            { value: 4, label: "Very willing" },
            { value: 5, label: "Extremely willing" }
          ]
        },
        {
          id: "real_world_1",
          question: "Which work environment appeals to you most?",
          type: "single",
          options: [
            { value: "lab", label: "Research laboratory with cutting-edge equipment" },
            { value: "field", label: "Field work at power plants or construction sites" },
            { value: "office", label: "Office environment designing systems and solutions" },
            { value: "manufacturing", label: "Manufacturing floor improving production processes" }
          ]
        },
        {
          id: "learning_1",
          question: "When you encounter a technical concept you don't understand, you typically:",
          type: "single",
          options: [
            { value: "research", label: "Research extensively until you fully understand" },
            { value: "ask_help", label: "Ask for help from experts or mentors" },
            { value: "practice", label: "Find practical examples to work through" },
            { value: "move_on", label: "Note it for later and move on to other topics" }
          ]
        }
      ]
    }
  ];

  const totalQuestions = modules.reduce((sum, module) => sum + module.questions.length, 0);
  const currentQuestionGlobal = modules.slice(0, currentModule).reduce((sum, module) => sum + module.questions.length, 0) + currentQuestion;
  const progress = (currentQuestionGlobal / totalQuestions) * 100;

  const currentModuleData = modules[currentModule];
  const currentQuestionData = currentModuleData?.questions[currentQuestion];

  const handleAnswer = (value: any) => {
    if (!currentQuestionData) return;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestionData.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < currentModuleData.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentModule < modules.length - 1) {
      setCurrentModule(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      // Assessment complete, redirect to results
      window.location.href = "/results";
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentModule > 0) {
      setCurrentModule(prev => prev - 1);
      setCurrentQuestion(modules[currentModule - 1].questions.length - 1);
    }
  };

  const canProceed = currentQuestionData && answers[currentQuestionData.id] !== undefined;

  if (!currentModuleData || !currentQuestionData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const ModuleIcon = currentModuleData.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center`}>
                  <ModuleIcon className={`w-5 h-5 ${currentModuleData.color}`} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{currentModuleData.title}</h1>
                  <p className="text-muted-foreground">{currentModuleData.description}</p>
                </div>
              </div>
              <Badge variant="secondary">
                Question {currentQuestionGlobal + 1} of {totalQuestions}
              </Badge>
            </div>
            
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>{Math.round(progress)}% Complete</span>
              <span>~{Math.round((totalQuestions - currentQuestionGlobal) * 0.5)} min remaining</span>
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-8 border-border/50 shadow-glow">
            <CardHeader>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestionData.question}
              </CardTitle>
              {currentQuestionData.type === "likert" && (
                <CardDescription>
                  Rate on a scale from 1 (strongly disagree) to 5 (strongly agree)
                </CardDescription>
              )}
            </CardHeader>

            <CardContent>
              <RadioGroup 
                value={answers[currentQuestionData.id]?.toString()} 
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {currentQuestionData.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option.value.toString()} 
                      id={`option-${index}`}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer p-3 rounded-lg border border-transparent hover:border-border transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentModule === 0 && currentQuestion === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {modules.map((_, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index < currentModule 
                      ? "bg-success" 
                      : index === currentModule 
                      ? "bg-primary" 
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center space-x-2 bg-gradient-primary"
            >
              <span>{currentModule === modules.length - 1 && currentQuestion === currentModuleData.questions.length - 1 ? "Complete" : "Next"}</span>
              {currentModule === modules.length - 1 && currentQuestion === currentModuleData.questions.length - 1 ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;