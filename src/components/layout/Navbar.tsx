
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Cpu } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
          <div className="flex items-center">
            <Cpu className="h-6 w-6 text-cyan-500 mr-2" />
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">TECH<span className="font-bold">NEXUS</span></a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-cyan-400 font-medium transition-colors text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-lg text-base shadow-lg shadow-purple-500/25">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 mt-2 space-y-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
