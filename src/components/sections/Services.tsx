
import FadeIn from '@/components/ui/FadeIn';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, LineChart, Layout, Smartphone, Globe, Shield, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Layout />,
    title: 'Web Design & Development',
    description: 'Custom responsive websites that engage visitors and drive conversions with cutting-edge technologies.',
  },
  {
    icon: <Smartphone />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
  },
  {
    icon: <Code />,
    title: 'Custom Software Development',
    description: 'Bespoke software solutions tailored to your unique business challenges and growth objectives.',
  },
  {
    icon: <Database />,
    title: 'Database Solutions',
    description: 'Robust database architecture, optimization, and management for efficient data operations.',
  },
  {
    icon: <Globe />,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms with secure payment processing and inventory management.',
  },
  {
    icon: <Shield />,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security audits and implementation of robust protection systems for your digital assets.',
  },
  {
    icon: <LineChart />,
    title: 'Data Analytics',
    description: 'Advanced analytics solutions that transform raw data into valuable business insights and visualizations.',
  },
  {
    icon: <Cpu />,
    title: 'AI Integration',
    description: 'Cutting-edge artificial intelligence and machine learning solutions to automate and enhance processes.',
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We deliver comprehensive technology solutions that help businesses innovate, transform, and grow in the digital landscape.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-brand-100 to-teal-100 text-brand-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
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
