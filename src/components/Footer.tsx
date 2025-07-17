import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="h-4 w-4 text-red-500" /> by{' '}
              <span className="gradient-text font-semibold">Pranjali Goyal</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/pranjaligoyal31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/pranjali-goyal-2516b8296"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:goyalpranjali09@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-success hover:text-white transition-all duration-300 hover-lift"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};