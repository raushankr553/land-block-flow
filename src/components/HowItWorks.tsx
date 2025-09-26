import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, FileText, Shield, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Registration",
      description: "Create your secure account and complete identity verification through our streamlined onboarding process.",
      color: "primary"
    },
    {
      icon: FileText,
      title: "Document Upload",
      description: "Upload property documents or digital content files. Our system validates and prepares them for blockchain recording.",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Blockchain Recording",
      description: "Documents are encrypted, hashed, and permanently recorded on the blockchain with timestamps and digital signatures.",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Verification & Access",
      description: "Receive instant digital certificates and access your immutable records anytime, anywhere with full transparency.",
      color: "accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our streamlined process makes blockchain technology accessible and easy to use 
            for everyone, from individuals to large organizations.
          </p>
        </div>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="card-gradient shadow-card hover:shadow-card-hover transition-smooth group">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 ${step.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-full flex items-center justify-center mx-auto mb-6 ${step.color === 'primary' ? 'group-hover:bg-primary/20' : 'group-hover:bg-accent/20'} transition-smooth`}>
                        <step.icon className={`w-10 h-10 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div className={`w-8 h-8 ${step.color === 'primary' ? 'bg-primary' : 'bg-accent'} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold`}>
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-card">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="card-gradient shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${step.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <step.icon className={`w-8 h-8 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-8 h-8 ${step.color === 'primary' ? 'bg-primary' : 'bg-accent'} rounded-full flex items-center justify-center text-white font-bold`}>
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Vertical connector */}
              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent mx-auto mt-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Built on Proven Technology</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our platform leverages enterprise-grade blockchain infrastructure with advanced 
              cryptographic security, ensuring your data remains tamper-proof and accessible 
              only to authorized parties.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption Standard</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Global Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;