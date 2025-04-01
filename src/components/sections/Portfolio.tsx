
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce solution with advanced filtering, payment integration, and inventory management.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Financial Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard providing real-time financial insights and predictive analytics for investment decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Patient-centered mobile application for appointment scheduling, telehealth consultations, and medical record access.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'AI-Powered Content Platform',
    category: 'Artificial Intelligence',
    description: 'Content creation and curation platform utilizing machine learning algorithms to personalize user experiences.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects showcasing our expertise and innovation in delivering digital solutions across various industries.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                      <span className="text-sm font-medium text-teal-300 mb-2">{item.category}</span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-4">{item.description}</p>
                      <Button variant="outline" size="sm" className="self-start border-white text-white hover:bg-white hover:text-gray-900">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 group-hover:hidden">
                    <span className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn direction="up" className="text-center">
          <Button 
            variant="outline" 
            className="border-brand-600 text-brand-600 hover:bg-brand-50"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;
