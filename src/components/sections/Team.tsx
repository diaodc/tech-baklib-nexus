
import FadeIn from '@/components/ui/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Over 15 years of experience in tech leadership and innovation strategy.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Former Google engineer with expertise in cloud architecture and AI.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Olivia Rodriguez',
    role: 'Lead Designer',
    bio: 'Award-winning UX/UI designer with a passion for creating intuitive interfaces.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'David Park',
    role: 'Lead Developer',
    bio: 'Full-stack expert specializing in complex web applications and systems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our talented team of experts brings diverse skills and deep industry experience to every project.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <Card className="border-none shadow-md hover:shadow-xl transition-all h-full bg-white dark:bg-gray-800 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex space-x-3">
                        <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-brand-500 hover:text-white transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-brand-500 hover:text-white transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a href={member.social.github} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-brand-500 hover:text-white transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-teal-600 dark:text-teal-400 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
