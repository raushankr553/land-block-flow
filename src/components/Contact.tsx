import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@blockland.tech",
      description: "Get in touch for partnerships and inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Speak with our technical team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "Schedule an in-person demonstration"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to revolutionize your land registration or content distribution? 
            Let's discuss how our blockchain platform can transform your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a government agency looking to modernize land records, 
                a business seeking secure content distribution, or an organization 
                interested in blockchain solutions, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-gradient shadow-card hover:shadow-card-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-lg font-medium text-primary mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
              <h4 className="font-semibold mb-3">What to Expect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Initial consultation within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Custom demo tailored to your needs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Technical architecture review
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Implementation roadmap discussion
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Organization</label>
                  <Input placeholder="Your company or organization" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Interest Area</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select your primary interest</option>
                    <option value="land-registry">Land Registration System</option>
                    <option value="content-distribution">Digital Content Distribution</option>
                    <option value="custom-solution">Custom Blockchain Solution</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project, requirements, or questions..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join the blockchain revolution and transform your organization with 
              our cutting-edge platform. Schedule a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow hover:shadow-card-hover">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;