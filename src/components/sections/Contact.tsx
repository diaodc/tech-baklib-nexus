
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
    <section id="contact" className="py-20">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? Reach out to us today.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn direction="up" className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
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
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
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
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-600 to-teal-500 hover:from-brand-700 hover:to-teal-600"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-brand-100 rounded-full p-2 text-brand-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">For general inquiries:</p>
                      <a href="mailto:info@technexus.com" className="text-brand-600 hover:underline">
                        info@technexus.com
                      </a>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 mb-1">For support:</p>
                      <a href="mailto:support@technexus.com" className="text-brand-600 hover:underline">
                        support@technexus.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-brand-100 rounded-full p-2 text-brand-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Main Office:</p>
                      <a href="tel:+15551234567" className="text-brand-600 hover:underline">
                        +1 (555) 123-4567
                      </a>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 mb-1">Customer Support:</p>
                      <a href="tel:+15559876543" className="text-brand-600 hover:underline">
                        +1 (555) 987-6543
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-brand-100 rounded-full p-2 text-brand-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        123 Innovation Avenue<br />
                        Tech District, CA 94103<br />
                        United States
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <span className="font-medium">Hours:</span> Monday - Friday, 9am - 6pm
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
