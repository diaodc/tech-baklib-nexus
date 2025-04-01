
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  pulse: boolean;
  pulseSpeed: number;
  pulseSize: number;
  originalSize: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let interactionRadius = 150;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    
    // Initialize particles
    function initParticles() {
      particles = [];
      if (!canvas) return;
      
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 8000);
      
      const colors = [
        '#4F46E5', // Indigo
        '#06B6D4', // Cyan
        '#8B5CF6', // Purple
        '#3B82F6', // Blue
        '#EC4899', // Pink
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2.5 + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          originalSize: size,
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() > 0.7,
          pulseSpeed: Math.random() * 0.05 + 0.01,
          pulseSize: Math.random() * 1.5 + 1
        });
      }
    }
    
    // Connect particles with lines
    function connectParticles() {
      if (!ctx || !canvas) return;
      
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(120, 180, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Mouse interaction effect
    function handleMouseInteraction() {
      for (const particle of particles) {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const directionX = dx / distance || 0;
          const directionY = dy / distance || 0;
          
          // Push particles away from mouse
          particle.x -= directionX * force * 2;
          particle.y -= directionY * force * 2;
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      handleMouseInteraction();
      
      // Update and draw particles
      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Pulsating effect
        if (particle.pulse) {
          particle.size = particle.originalSize + Math.sin(Date.now() * particle.pulseSpeed) * particle.pulseSize;
        }
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particles with glow effect - Adding additional check to ensure valid size
        if (particle.size > 0) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    // Start the animation only when canvas is ready
    if (canvas.width > 0 && canvas.height > 0) {
      animate();
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent"
    />
  );
};

export default ParticleBackground;
