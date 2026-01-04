import { Code2, Coffee, Gamepad2, Music } from "lucide-react";

const About = () => {
  const traits = [
    { icon: Code2, label: "Clean Code Enthusiast", color: "text-primary" },
    { icon: Coffee, label: "Coffee Dependent", color: "text-amber-400" },
    { icon: Music, label: "Lo-fi Beats Lover", color: "text-purple-400" },
    { icon: Gamepad2, label: "Indie Game Collector", color: "text-cyan-400" },
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform -rotate-3" />
              
              {/* Main content area */}
              <div className="relative h-full bg-gradient-to-br from-secondary to-card rounded-2xl p-8 flex flex-col justify-center items-center overflow-hidden">
                {/* Code snippet decoration */}
                <div className="font-mono text-sm text-muted-foreground space-y-2 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">const</span>
                    <span className="text-foreground">developer</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-cyan-400">{"{"}</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-purple-400">name:</span> <span className="text-amber-300">'Jonathan King'</span>,</div>
                    <div><span className="text-purple-400">role:</span> <span className="text-amber-300">'Full-Stack Dev'</span>,</div>
                    <div><span className="text-purple-400">loves:</span> <span className="text-cyan-400">[</span></div>
                    <div className="pl-4">
                      <span className="text-amber-300">'Python'</span>,
                      <span className="text-amber-300"> 'Node.js'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-amber-300">'Building Scalable Apps'</span>
                    </div>
                    <div><span className="text-cyan-400">]</span>,</div>
                    <div><span className="text-purple-400">status:</span> <span className="text-primary">'ready_to_code'</span></div>
                  </div>
                  <div className="text-cyan-400">{"}"}</div>
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center animate-float">
                  <Code2 className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-display uppercase tracking-widest text-sm">About Me</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Not your typical 
                <span className="text-gradient"> developer.</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Full Stack Developer with several years of experience building, maintaining, and scaling web 
                applications using Python, Node.js, C#, and PHP.
              </p>
              <p>
                Strong background in backend development, API design, database architecture, and frontend 
                integration. Experienced in remote work environments, collaborating with cross-functional 
                teams, and delivering production-ready solutions aligned with business objectives.
              </p>
              <p>
                Bachelor's degree from Purdue University (2016-2020).
              </p>
            </div>
            
            {/* Personality traits */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {traits.map(({ icon: Icon, label, color }) => (
                <div 
                  key={label}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors duration-300"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
