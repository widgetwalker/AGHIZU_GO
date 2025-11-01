import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">MediConnect</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#doctors" className="text-foreground hover:text-primary transition-colors font-medium">Doctors</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#doctors" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Doctors</a>
            <a href="#services" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">About</a>
            <div className="pt-3 space-y-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
