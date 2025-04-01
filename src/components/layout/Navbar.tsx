
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, BrainCircuit, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      )}
    >
      <div className="container-custom py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center group">
            <BrainCircuit className="h-7 w-7 text-cyan-500 mr-2 group-hover:text-purple-500 transition-colors duration-300" />
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative group">
              TECH<span className="font-bold">NEXUS</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "text-gray-300 hover:text-cyan-400 font-medium transition-colors text-lg relative group",
                  activeLink === link.href.substring(1) && "text-cyan-400"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full",
                  activeLink === link.href.substring(1) && "w-full"
                )}></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-lg text-base shadow-lg shadow-purple-500/25 transition-all transform hover:scale-105 hover:translate-y-[-2px] group">
              Get Started
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-7 h-7">
              <span className={cn(
                "absolute block w-full h-0.5 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "rotate-45 top-3" : "top-1.5"
              )}></span>
              <span className={cn(
                "absolute block w-full h-0.5 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : "opacity-100 top-3"
              )}></span>
              <span className={cn(
                "absolute block w-full h-0.5 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 top-3" : "top-4.5"
              )}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-gray-800",
          mobileMenuOpen ? "max-h-96 opacity-100 border-t mt-2" : "max-h-0 opacity-0 border-t-0"
        )}>
          <nav className="py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="flex items-center py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={cn(
                  "w-1 h-5 rounded-full mr-3 transition-colors",
                  activeLink === link.href.substring(1) ? "bg-cyan-500" : "bg-gray-700"
                )}></span>
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white group">
              Get Started
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
