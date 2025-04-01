
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/ui/FadeIn';
import { ArrowRight, Bot, BrainCircuit, Database, Shield, Zap, Cpu, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [hoverEffect, setHoverEffect] = useState(false);
  
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[150%] rounded-full bg-gradient-to-b from-purple-700/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-[30%] -left-[30%] w-[70%] h-[70%] rounded-full bg-gradient-to-t from-cyan-700/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-1/3 left-1/4 w-[20%] h-[20%] rounded-full bg-blue-500/10 blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-400">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm font-medium">Next-Gen AI Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white">
              Advanced <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">AI</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              Revolutionizing industries with cutting-edge artificial intelligence and robotic systems for tomorrow's challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-lg px-8 py-7 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all transform hover:scale-105 hover:translate-y-[-4px]"
                onMouseEnter={() => setHoverEffect(true)}
                onMouseLeave={() => setHoverEffect(false)}
              >
                Explore AI Solutions
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${hoverEffect ? 'translate-x-1' : ''}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 text-lg px-8 py-7 rounded-xl transition-all transform hover:scale-105"
              >
                AI Portfolio
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <FadeIn delay={100} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                <span className="text-base text-gray-300">Neural Networks</span>
              </FadeIn>
              <FadeIn delay={200} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></div>
                <span className="text-base text-gray-300">Machine Learning</span>
              </FadeIn>
              <FadeIn delay={300} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-base text-gray-300">Quantum Computing</span>
              </FadeIn>
            </div>
          </FadeIn>
          
          <FadeIn delay={400} direction="left">
            <div className="relative">
              <div 
                className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl p-1.5 transform transition-all hover:scale-[1.02] duration-500"
              >
                <div className="w-full h-full bg-black/90 rounded-xl p-8 flex items-center justify-center backdrop-blur-lg overflow-hidden relative">
                  {/* Robot/AI Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-full h-full max-w-md max-h-md relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                      <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-full animate-pulse"></div>
                      <div className="absolute inset-[15%] border-2 border-purple-500/50 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute inset-[30%] border-2 border-blue-500/50 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    {[
                      { icon: <Bot className="w-12 h-12 text-purple-500" />, label: "AI Robots", animation: "hover:scale-110" },
                      { icon: <BrainCircuit className="w-12 h-12 text-cyan-400" />, label: "Neural Networks", animation: "hover:scale-110" },
                      { icon: <Database className="w-12 h-12 text-blue-500" />, label: "Big Data", animation: "hover:scale-110" },
                      { icon: <Shield className="w-12 h-12 text-purple-400" />, label: "Cyber Security", animation: "hover:scale-110" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className={`bg-gray-900/70 p-6 rounded-lg text-center flex flex-col items-center justify-center border border-gray-800 hover:border-gray-700 transition-all backdrop-blur-sm transform ${item.animation} duration-300`}
                      >
                        <div className="relative">
                          {item.icon}
                          <div className="absolute -right-2 -top-2 w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                        </div>
                        <p className="mt-3 text-base font-medium text-white">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800 transform hover:rotate-12 transition-transform duration-300">
                <Cpu className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="absolute -top-6 -right-6 bg-gray-900 p-3 rounded-lg shadow-xl border border-gray-800 transform hover:rotate-12 transition-transform duration-300">
                <Activity className="w-10 h-10 text-purple-500" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
