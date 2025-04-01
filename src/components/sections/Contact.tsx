
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import FadeIn from '@/components/ui/FadeIn';
import { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your business with cutting-edge technology? Connect with our team of experts today.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn direction="up" className="lg:col-span-2">
            <Card className="border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-lg shadow-purple-900/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Share your project details and we'll provide innovative solutions tailored to your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-base font-medium text-gray-300">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-700 bg-gray-900 text-white focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium text-gray-300">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-700 bg-gray-900 text-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-base font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="border-gray-700 bg-gray-900 text-white focus:border-purple-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-lg py-6 rounded-lg shadow-lg shadow-purple-500/20"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <div className="space-y-6">
              <Card className="border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-purple-900/50 rounded-full p-3 text-cyan-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-2 text-white">Email Us</h3>
                      <p className="text-gray-400 text-base mb-1">For general inquiries:</p>
                      <a href="mailto:info@technexus.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        info@technexus.com
                      </a>
                      <p className="text-gray-400 text-base mt-3 mb-1">For support:</p>
                      <a href="mailto:support@technexus.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        support@technexus.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-purple-900/50 rounded-full p-3 text-cyan-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-2 text-white">Call Us</h3>
                      <p className="text-gray-400 text-base mb-1">Main Office:</p>
                      <a href="tel:+15551234567" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        +1 (555) 123-4567
                      </a>
                      <p className="text-gray-400 text-base mt-3 mb-1">Customer Support:</p>
                      <a href="tel:+15559876543" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        +1 (555) 987-6543
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-purple-900/50 rounded-full p-3 text-cyan-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-2 text-white">Visit Us</h3>
                      <p className="text-gray-400 text-base mb-3">
                        123 Innovation Avenue<br />
                        Tech District, CA 94103<br />
                        United States
                      </p>
                      <p className="text-gray-400 text-base">
                        <span className="font-medium text-white">Hours:</span> Monday - Friday, 9am - 6pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
