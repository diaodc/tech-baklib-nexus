
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cpu, Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Cpu className="h-6 w-6 text-cyan-500 mr-2" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">TECH<span className="font-bold">NEXUS</span></h3>
            </div>
            <p className="text-gray-300 mb-8 text-base">
              Pioneering the future through advanced AI, robotics, and quantum computing solutions. Redefining what's possible in technology.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {[
                'Robotic Automation', 
                'AI Development', 
                'Quantum Computing', 
                'Neural Interfaces', 
                'Immersive Reality', 
                'Blockchain Solutions', 
                'Cybernetic Systems'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-300 mb-6 text-base">
              Subscribe to receive updates on cutting-edge technology and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Your email" 
                className="bg-gray-900 border-gray-700 text-white focus:border-purple-500" 
              />
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TechNexus. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
