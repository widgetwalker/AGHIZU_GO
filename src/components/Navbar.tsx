import { Button } from "@/components/ui/button";
import { Heart, Menu, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useSession, signOut } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

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
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 transition-all duration-300 hover:scale-105">
                    <User className="w-4 h-4" />
                    {session.user.name || session.user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={async () => {
                      await signOut();
                      window.location.href = "/";
                    }}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </>
            )}
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
              {session ? (
                <>
                  <Button variant="ghost" asChild className="w-full transition-all duration-300 hover:scale-105">
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105"
                    onClick={async () => {
                      await signOut();
                      window.location.href = "/";
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild className="w-full transition-all duration-300 hover:scale-105">
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
