import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, CreditCard, Users, Calendar } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'StudyNotion',
      subtitle: 'MERN EdTech Platform',
      description: 'Full-stack platform for online course creation, streaming, and purchasing with secure authentication and payment integration.',
      features: [
        'Secure authentication (JWT, bcrypt)',
        'Razorpay payment integration',
        'Course streaming functionality',
        'Analytics dashboard',
        'Responsive design'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay'],
      icon: Shield,
      color: 'primary',
      github: '#',
      demo: '#'
    },
    {
      title: 'Dirghayu',
      subtitle: 'Hospital Management System',
      description: 'Multi-role platform supporting Admin, Doctor, and Patient roles with comprehensive appointment booking and management features.',
      features: [
        'Multi-role authentication system',
        'Appointment booking & management',
        'Email alerts & notifications',
        'Donation tracking system',
        'Responsive user interface'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer', 'JWT'],
      icon: Calendar,
      color: 'accent',
      github: '#',
      demo: '#'
    }
  ];

  const getCardClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 hover:border-primary/50';
      case 'accent':
        return 'border-accent/30 hover:border-accent/50';
      default:
        return 'border-primary/30 hover:border-primary/50';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/20';
      case 'accent':
        return 'text-accent bg-accent/20';
      default:
        return 'text-primary bg-primary/20';
    }
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'accent':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`project-card ${getCardClasses(project.color)} bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${getIconColor(project.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className={`${getBadgeVariant(project.color)} hover:bg-opacity-30 transition-colors duration-200`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-border hover:bg-muted"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className={`flex-1 ${project.color === 'primary' ? 'bg-gradient-primary hover:bg-gradient-primary/90' : 'bg-gradient-accent hover:bg-gradient-accent/90'}`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/pranjaligoyal31" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};