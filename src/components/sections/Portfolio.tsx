
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Neural Interface Platform',
    category: 'AI Development',
    description: 'Revolutionary brain-computer interface allowing direct neural interaction with digital systems.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Quantum Financial System',
    category: 'Quantum Computing',
    description: 'Financial analytics platform leveraging quantum algorithms for predictive market analysis and risk assessment.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Robotic Healthcare Assistant',
    category: 'Robotic Automation',
    description: 'Autonomous medical robot with advanced diagnostics, patient care, and surgical assistance capabilities.',
    image: 'https://images.unsplash.com/photo-1594878411232-354ad3e2bfa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Immersive Reality Platform',
    category: 'Extended Reality',
    description: 'Next-generation XR environment merging physical and digital worlds for enterprise training and operations.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary projects at the cutting edge of technology, redefining industries and setting new standards for innovation.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {portfolioItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <Card className="overflow-hidden border-gray-800 bg-black hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                      <span className="text-sm font-medium text-cyan-400 mb-3">{item.category}</span>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-base text-gray-300 mb-6">{item.description}</p>
                      <Button variant="outline" size="sm" className="self-start border-2 border-purple-500 text-purple-400 hover:bg-purple-950/50 rounded-lg">
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn direction="up" className="text-center">
          <Button 
            variant="outline" 
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 rounded-lg px-8 py-6 text-lg"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;
