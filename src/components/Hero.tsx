import { Button } from "@/components/ui/button";
import { Video, Calendar, FileText, Heart } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Trusted Healthcare at Your Fingertips
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Expert Medical Care,
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Anytime, Anywhere</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with certified doctors instantly. Book appointments, get consultations, and receive prescriptions—all from the comfort of your home.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/consultation">
                <Button variant="hero" size="lg" className="text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Book Consultation
                </Button>
              </Link>
              <Link to="/doctors">
                <Button variant="outline" size="lg" className="text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Browse Doctors
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Video className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-sm font-medium">Video Consult</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Calendar className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-sm font-medium">Easy Booking</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <FileText className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-sm font-medium">Digital Rx</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Heart className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-sm font-medium">24/7 Care</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl transition-opacity duration-500 group-hover:opacity-75"></div>
            <img 
              src={heroImage} 
              alt="Professional healthcare consultation" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
