
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/ui/FadeIn';
import { ArrowRight, BarChart2, Code, Database, LineChart, Smartphone } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] rounded-full bg-gradient-to-b from-brand-100/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[30%] w-[70%] h-[70%] rounded-full bg-gradient-to-t from-teal-100/30 to-transparent blur-3xl" />
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative Digital <span className="gradient-text">Solutions</span> for Forward-Thinking Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              We combine cutting-edge technology with strategic thinking to deliver digital experiences that drive growth and transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-brand-600 to-teal-500 hover:from-brand-700 hover:to-teal-600 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                View Our Work
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
              <FadeIn delay={100} className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-brand-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">95% Client Satisfaction</span>
              </FadeIn>
              <FadeIn delay={200} className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-brand-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">100+ Completed Projects</span>
              </FadeIn>
              <FadeIn delay={300} className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-brand-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">12+ Years Experience</span>
              </FadeIn>
            </div>
          </FadeIn>
          
          <FadeIn delay={400} direction="left">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-brand-600 to-teal-500 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl p-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { icon: <Code className="w-8 h-8 text-brand-600" />, label: "Web Development" },
                      { icon: <Smartphone className="w-8 h-8 text-teal-500" />, label: "Mobile Apps" },
                      { icon: <Database className="w-8 h-8 text-brand-500" />, label: "Data Solutions" },
                      { icon: <BarChart2 className="w-8 h-8 text-teal-600" />, label: "Analytics" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        {item.icon}
                        <p className="mt-2 text-sm font-medium">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                <LineChart className="w-10 h-10 text-teal-500" />
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
