import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const techStack = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Full Stack'];
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTech = techStack[currentTechIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTech.length) {
          setTypedText(currentTech.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentTech.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTechIndex, techStack]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          {/* Profile picture placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-primary p-1">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-6xl font-bold gradient-text">
              PG
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Pranjali Goyal</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Full Stack Developer | Aspiring Software Engineer
          </h2>

          <div className="text-lg md:text-xl mb-8 h-8">
            <span className="text-foreground">I build with </span>
            <span className="gradient-accent-text font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Building scalable full-stack solutions with passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 glow"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/pranjaligoyal31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/pranjali-goyal-2516b8296"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover-lift"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:goyalpranjali09@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-success hover:text-white transition-all duration-300 hover-lift"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};