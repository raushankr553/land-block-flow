import { Card, CardContent } from "@/components/ui/card";
import { Building, Music, FileImage, Briefcase, Home, Globe } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Building,
      title: "Government Land Registry",
      description: "Streamline property registration processes, reduce bureaucracy, and eliminate fraud in government land records.",
      benefits: ["Reduced processing time", "Fraud elimination", "Cost savings", "Public transparency"]
    },
    {
      icon: Home,
      title: "Real Estate Transactions",
      description: "Facilitate secure property transfers, title verification, and escrow services with blockchain transparency.",
      benefits: ["Instant verification", "Secure transfers", "Lower fees", "Global accessibility"]
    },
    {
      icon: Music,
      title: "Music & Media Distribution",
      description: "Protect artist rights, ensure fair royalty distribution, and create transparent music licensing agreements.",
      benefits: ["Fair royalties", "Rights protection", "Global distribution", "Automated payments"]
    },
    {
      icon: FileImage,
      title: "Digital Art & NFTs",
      description: "Authenticate digital artwork, manage ownership transfers, and create provable scarcity for digital assets.",
      benefits: ["Ownership proof", "Scarcity creation", "Transfer tracking", "Anti-counterfeiting"]
    },
    {
      icon: Briefcase,
      title: "Corporate Asset Management",
      description: "Track company assets, manage intellectual property, and maintain auditable ownership records.",
      benefits: ["Asset tracking", "IP protection", "Audit trails", "Compliance management"]
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Secure cross-border property and content transactions with immutable proof of ownership and transfer.",
      benefits: ["Cross-border security", "Legal compliance", "Instant verification", "Reduced disputes"]
    }
  ];

  return (
    <section id="use-cases" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real-World <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how our blockchain platform transforms industries and solves 
            real challenges across various sectors and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <Card key={index} className="card-gradient shadow-card hover:shadow-card-hover transition-smooth group h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold flex-1">{useCase.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Success Stories</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations worldwide are already benefiting from our blockchain solutions, 
              achieving significant improvements in efficiency, security, and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-lg font-semibold mb-2">Faster Processing</div>
              <div className="text-sm text-muted-foreground">
                Average reduction in property registration time
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">99.8%</div>
              <div className="text-lg font-semibold mb-2">Fraud Reduction</div>
              <div className="text-sm text-muted-foreground">
                Decrease in fraudulent property transactions
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.3M</div>
              <div className="text-lg font-semibold mb-2">Cost Savings</div>
              <div className="text-sm text-muted-foreground">
                Average annual savings for government agencies
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading organizations that have already revolutionized their processes 
            with our blockchain-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-smooth shadow-glow hover:shadow-card-hover">
              Schedule Demo
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;