import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, FileCheck, Clock, Globe, Lock } from "lucide-react";
import landRegistration from "@/assets/land-registration.jpg";
import contentDistribution from "@/assets/content-distribution.jpg";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Immutable Security",
      description: "Blockchain technology ensures that once data is recorded, it cannot be altered or tampered with, providing absolute security."
    },
    {
      icon: Database,
      title: "Decentralized Storage", 
      description: "Data is stored across multiple nodes, eliminating single points of failure and ensuring high availability."
    },
    {
      icon: FileCheck,
      title: "Smart Contracts",
      description: "Automated verification and execution of agreements, reducing paperwork and processing time significantly."
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Instant verification and processing of transactions, eliminating traditional waiting periods."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Access your property records and digital content from anywhere in the world, 24/7."
    },
    {
      icon: Lock,
      title: "Privacy Protection",
      description: "Advanced cryptographic techniques ensure your sensitive information remains private and secure."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our blockchain platform combines cutting-edge technology with practical solutions 
            for modern land registration and digital content distribution needs.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient shadow-card hover:shadow-card-hover transition-smooth group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Case Images */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-6">Land Registration System</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Transform traditional property registration with blockchain technology. 
              Our system provides tamper-proof records, instant verification, and 
              eliminates the need for intermediaries.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Permanent, immutable property records
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Instant ownership verification
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Reduced fraud and disputes
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Lower transaction costs
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src={landRegistration} 
                alt="Land Registration System" 
                className="rounded-2xl shadow-card-hover w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div>
            <div className="relative">
              <img 
                src={contentDistribution} 
                alt="Digital Content Distribution" 
                className="rounded-2xl shadow-card-hover w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Digital Content Distribution</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Secure and transparent distribution of digital content with blockchain-powered 
              rights management. Protect intellectual property while ensuring fair 
              compensation for creators.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Encrypted content protection
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Transparent royalty distribution
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Automated licensing agreements
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Global content marketplace
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;