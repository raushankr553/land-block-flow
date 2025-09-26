import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Database, FileText } from "lucide-react";
import blockchainHero from "@/assets/blockchain-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 blockchain-pattern opacity-30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${blockchainHero})` }}
      ></div>
      <div className="absolute inset-0 hero-gradient opacity-5"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Blockchain-Powered Security</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Secure Land Registration &
            <span className="text-gradient block">Digital Content Distribution</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary blockchain technology ensuring transparent, immutable, and secure 
            property registration while enabling trusted digital content distribution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-glow hover:shadow-card-hover transition-bounce"
              onClick={() => scrollToSection("features")}
            >
              Explore Features
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Immutable Records</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">Transparent Process</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Digital Certificates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;