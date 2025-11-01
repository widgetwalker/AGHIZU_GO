import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
            <span className="text-xl font-bold">AGHIZU GO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</a>
            <a href="#doctors" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Doctors</a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" className="transition-all duration-300 hover:scale-105">Sign In</Button>
            <Button className="transition-all duration-300 hover:scale-105 hover:shadow-lg">Get Started</Button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2 transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <a href="#" className="block py-2 text-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 duration-300">Home</a>
            <a href="#doctors" className="block py-2 text-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 duration-300">Doctors</a>
            <a href="#services" className="block py-2 text-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 duration-300">Services</a>
            <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium hover:translate-x-1 duration-300">About</a>
            <div className="pt-3 space-y-2">
              <Button variant="ghost" className="w-full transition-all duration-300 hover:scale-105">Sign In</Button>
              <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
