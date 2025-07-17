import { GraduationCap, Code, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Info */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center">
                  <div className="text-8xl font-bold gradient-text">PG</div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">IIIT Gwalior</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  B.Tech in Information Technology • 3rd Year Student
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                My Journey
              </h3>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  I am a <span className="gradient-accent-text font-semibold">student and full stack developer</span> who loves to explore new technologies and build scalable applications. 
                </p>
                <p>
                  Currently pursuing my <span className="text-primary font-semibold">Bachelor of Technology in Information Technology</span> at IIIT Gwalior, I'm in my 3rd year and passionate about creating innovative solutions.
                </p>
                <p>
                  My expertise spans across the entire development stack, from crafting beautiful user interfaces to building robust backend systems. I thrive on turning complex problems into elegant, user-friendly solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-primary/10 border-primary/20 hover-lift">
                <CardContent className="p-4 text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-primary">Full Stack</h4>
                  <p className="text-sm text-muted-foreground">MERN Stack Expert</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-accent/10 border-accent/20 hover-lift">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-accent">Student</h4>
                  <p className="text-sm text-muted-foreground">IIIT Gwalior</p>
                </CardContent>
              </Card>
            </div>

            <div className="p-6 rounded-xl bg-gradient-accent/5 border border-accent/20">
              <p className="text-lg italic text-center text-foreground">
                "Passionate about building scalable applications and exploring cutting-edge technologies to solve real-world problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};