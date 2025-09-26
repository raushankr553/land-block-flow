import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Our <span className="text-gradient">Blockchain Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're revolutionizing land registration and digital content distribution through 
            cutting-edge blockchain technology, ensuring security, transparency, and trust 
            in every transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-gradient shadow-card hover:shadow-card-hover transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging cutting-edge blockchain technology to create immutable, 
                transparent, and secure digital records for property and content.
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-card hover:shadow-card-hover transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-smooth">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To eliminate fraud, reduce disputes, and streamline processes in 
                land registration while enabling secure digital content distribution.
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient shadow-card hover:shadow-card-hover transition-smooth group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                Building a trusted ecosystem where governments, businesses, and 
                individuals can interact with confidence and transparency.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Why Blockchain Matters</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Traditional land registration systems are plagued by inefficiencies, fraud, and lack of transparency. 
              Our blockchain-based solution creates an immutable ledger that eliminates these issues while 
              providing instant verification and reducing costs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                100% Transparent
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                Fraud Prevention
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                Cost Reduction
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                Instant Verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;