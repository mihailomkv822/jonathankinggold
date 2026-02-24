import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-50 pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-primary/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Status badge */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </div>
        
        {/* Name and title */}
        <div className="space-y-6">
          <h1 
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="block text-foreground">I'm</span>
            <span className="block text-gradient glow-text">Austin Mullins</span>
          </h1>
          
          <div 
            className="max-w-xl animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A <span className="text-foreground font-medium">Senior Full Stack Engineer</span> with 10+ years of experience designing and scaling
              <span className="text-primary"> SaaS platforms</span> and cloud-native systems.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 pt-4 animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button variant="hero" onClick={scrollToProjects}>
              View My Work
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </Button>
            <Button variant="outline" size="lg">
              Let's Talk
            </Button>
          </div>
          
          {/* Social links */}
          <div 
            className="flex items-center gap-6 pt-8 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Find me on</span>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
                { icon: FileText, href: "https://docs.google.com", label: "Resume" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
