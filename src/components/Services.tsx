import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Server, Users } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and MongoDB.',
      color: 'primary'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust API development, database design, and server-side logic implementation.',
      color: 'accent'
    },
    {
      icon: Smartphone,
      title: 'Frontend Development',
      description: 'Responsive and interactive user interfaces with modern frameworks and libraries.',
      color: 'success'
    },
    {
      icon: Users,
      title: 'Collaboration & Freelance',
      description: 'Open to internships, team collaborations, and freelance development projects.',
      color: 'warning'
    }
  ];

  const getCardClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10';
      case 'accent':
        return 'border-accent/30 bg-accent/5 hover:border-accent/50 hover:bg-accent/10';
      case 'success':
        return 'border-success/30 bg-success/5 hover:border-success/50 hover:bg-success/10';
      case 'warning':
        return 'border-warning/30 bg-warning/5 hover:border-warning/50 hover:bg-warning/10';
      default:
        return 'border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/20';
      case 'accent':
        return 'text-accent bg-accent/20';
      case 'success':
        return 'text-success bg-success/20';
      case 'warning':
        return 'text-warning bg-warning/20';
      default:
        return 'text-primary bg-primary/20';
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm a full stack web developer and I build full-stack web applications. I'm open to internships, collaborations, and freelance development work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`${getCardClasses(service.color)} border-2 hover-lift transition-all duration-300 group`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl ${getIconColor(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to work together?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you're looking for a dedicated team member or a freelance developer, 
              let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:bg-gradient-primary/90 transition-all duration-300 glow"
              >
                Get In Touch
              </a>
              <a
                href="mailto:goyalpranjali09@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};