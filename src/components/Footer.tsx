import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Shield,
  Database,
  FileText,
  Phone
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "Land Registry", href: "#features" },
      { name: "Content Distribution", href: "#features" },
      { name: "Smart Contracts", href: "#how-it-works" },
      { name: "API Documentation", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" }
    ],
    resources: [
      { name: "Whitepaper", href: "#" },
      { name: "Case Studies", href: "#use-cases" },
      { name: "Developer Docs", href: "#" },
      { name: "Support Center", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Security", href: "#" },
      { name: "Compliance", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gradient">BlockLand</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Revolutionizing land registration and digital content distribution 
              through secure, transparent blockchain technology.
            </p>
            
            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Database className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Immutable Records</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Digital Certificates</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            © 2024 BlockLand Technologies. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth group"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-sm text-muted-foreground">
            Built with blockchain technology
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;