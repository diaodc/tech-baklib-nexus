
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/ui/FadeIn';
import { ArrowRight, Bot, Cpu, Database, Shield, Smartphone } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[50%] -right-[20%] w-[80%] h-[150%] rounded-full bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[30%] w-[70%] h-[70%] rounded-full bg-gradient-to-t from-cyan-900/20 to-transparent blur-3xl" />
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white">
              Next-Gen <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              Pioneering digital innovation with cutting-edge AI and robotic integration for tomorrow's business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 text-lg px-8 py-6 rounded-xl">
                View Our Work
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <FadeIn delay={100} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span className="text-base text-gray-300">Intelligent Automation</span>
              </FadeIn>
              <FadeIn delay={200} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></div>
                <span className="text-base text-gray-300">Neural Networks</span>
              </FadeIn>
              <FadeIn delay={300} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-base text-gray-300">Quantum Computing</span>
              </FadeIn>
            </div>
          </FadeIn>
          
          <FadeIn delay={400} direction="left">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl p-1.5">
                <div className="w-full h-full bg-black rounded-xl p-8 flex items-center justify-center backdrop-blur-sm bg-opacity-70">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: <Bot className="w-12 h-12 text-purple-500" />, label: "AI Systems" },
                      { icon: <Smartphone className="w-12 h-12 text-cyan-400" />, label: "Smart Devices" },
                      { icon: <Database className="w-12 h-12 text-blue-500" />, label: "Cloud Computing" },
                      { icon: <Shield className="w-12 h-12 text-purple-400" />, label: "Cyber Security" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-900/60 p-6 rounded-lg text-center flex flex-col items-center justify-center border border-gray-800 hover:border-gray-700 transition-all backdrop-blur-sm"
                      >
                        {item.icon}
                        <p className="mt-3 text-base font-medium text-white">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800">
                <Cpu className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="absolute -top-6 -right-6 bg-gray-900 p-3 rounded-lg shadow-xl border border-gray-800">
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
