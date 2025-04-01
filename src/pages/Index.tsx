
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
