import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Calendar, FileText, MapPin, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Video Consultations",
    description: "Connect with doctors via secure, high-quality video calls with screen sharing and chat."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Book appointments instantly based on doctor availability and your preferred time slots."
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Receive verified e-prescriptions with QR codes, delivered instantly to your account."
  },
  {
    icon: MapPin,
    title: "Doorstep Services",
    description: "Request home health checks and medicine delivery with real-time tracking."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access healthcare services around the clock, whenever you need medical attention."
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your health data is encrypted and stored securely, meeting all privacy standards."
  }
];

const Features = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive Healthcare <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for quality healthcare, delivered with cutting-edge technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
