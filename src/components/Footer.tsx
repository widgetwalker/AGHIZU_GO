import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AGHIZU GO</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in accessible, quality healthcare. Expert medical care, anytime, anywhere.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#doctors" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Our Doctors</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary cursor-pointer group">
                <Phone className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-primary cursor-pointer group">
                <Mail className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <span>support@aghizugo.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground transition-all duration-300 hover:text-primary cursor-pointer group">
                <MapPin className="w-4 h-4 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                <span>123 Healthcare Ave, Medical District, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 AGHIZU GO. All rights reserved. HIPAA Compliant Healthcare Platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
