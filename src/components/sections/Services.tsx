
import FadeIn from '@/components/ui/FadeIn';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cpu, Database, Globe, Layout, Shield, Smartphone, BrainCircuit } from 'lucide-react';

const services = [
  {
    icon: <Bot />,
    title: 'Robotic Automation',
    description: 'Advanced robotic systems and process automation solutions for enhanced productivity and precision.',
  },
  {
    icon: <Smartphone />,
    title: 'Advanced Mobile Integration',
    description: 'Next-generation mobile applications with cutting-edge features and seamless cross-platform performance.',
  },
  {
    icon: <BrainCircuit />,
    title: 'AI Development',
    description: 'Custom artificial intelligence solutions utilizing machine learning and neural networks for intelligent automation.',
  },
  {
    icon: <Database />,
    title: 'Quantum Data Solutions',
    description: 'Revolutionary database architecture leveraging quantum computing principles for unparalleled processing power.',
  },
  {
    icon: <Globe />,
    title: 'Blockchain Platforms',
    description: 'Secure, decentralized blockchain solutions for transparent, tamper-proof business operations and transactions.',
  },
  {
    icon: <Shield />,
    title: 'Neural Security',
    description: 'Adaptive cybersecurity systems using AI to predict, identify, and neutralize threats in real-time.',
  },
  {
    icon: <Layout />,
    title: 'Immersive Interfaces',
    description: 'Revolutionary UI/UX design with augmented and virtual reality components for immersive user experiences.',
  },
  {
    icon: <Cpu />,
    title: 'Quantum Computing',
    description: 'Pioneering quantum computing solutions that solve complex problems beyond classical computing capabilities.',
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering solutions at the intersection of artificial intelligence, robotics, and quantum computing to redefine what's possible.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <Card className="h-full border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-900 to-blue-900 text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
