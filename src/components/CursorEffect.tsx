import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const colors = ['#a855f7', '#06b6d4', '#8b5cf6', '#0ea5e9', '#6366f1'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 60,
        maxLife: 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1,
      };
      particles.push(particle);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
      
      // Limit particles to prevent performance issues
      if (particles.length > 100) {
        particles.splice(0, 10);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Calculate opacity based on life
        const opacity = particle.life / particle.maxLife;
        
        // Draw geometric shapes instead of circles
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 1;
        
        // Draw different shapes randomly
        const shapeType = Math.floor(Math.random() * 3);
        
        if (shapeType === 0) {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
          ctx.closePath();
          ctx.fill();
        } else if (shapeType === 1) {
          // Square
          ctx.fillRect(
            particle.x - particle.size/2, 
            particle.y - particle.size/2, 
            particle.size, 
            particle.size
          );
        } else {
          // Circle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size/2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-canvas"
      style={{ pointerEvents: 'none' }}
    />
  );
};