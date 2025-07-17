import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Wrench, 
  Layers,
  Braces,
  FileCode
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      color: 'primary',
      skills: ['C', 'C++', 'JavaScript', 'OOP', 'Data Structures & Algorithms']
    },
    {
      title: 'Frontend',
      icon: Globe,
      color: 'accent',
      skills: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'success',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'warning',
      skills: ['MongoDB', 'MySQL', 'Sequelize']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'primary',
      skills: ['Git', 'GitHub', 'Postman', 'AutoCAD']
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 bg-primary/10 hover:border-primary/50';
      case 'accent':
        return 'border-accent/30 bg-accent/10 hover:border-accent/50';
      case 'success':
        return 'border-success/30 bg-success/10 hover:border-success/50';
      case 'warning':
        return 'border-warning/30 bg-warning/10 hover:border-warning/50';
      default:
        return 'border-primary/30 bg-primary/10 hover:border-primary/50';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'accent':
        return 'text-accent';
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className={`skill-card ${getColorClasses(category.color)} border-2 hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full bg-background/50 ${getIconColor(category.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-background/70 text-foreground rounded-full text-sm font-medium border border-border/50 hover:bg-background transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'MERN Stack', icon: Layers },
              { name: 'API Development', icon: Server },
              { name: 'Version Control', icon: Braces },
              { name: 'Problem Solving', icon: FileCode }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.name} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/20 flex items-center justify-center group-hover:bg-gradient-primary/30 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};