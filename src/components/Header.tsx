import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gradient">BlockLand</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-muted-foreground hover:text-primary transition-smooth"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-muted-foreground hover:text-primary transition-smooth"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-left text-muted-foreground hover:text-primary transition-smooth"
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              <Button variant="default" className="w-full shadow-glow">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;