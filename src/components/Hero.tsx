import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-glow opacity-40 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Greeting */}
        <p
          className="font-mono text-primary text-base mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, my name is
        </p>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-2 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-foreground">Austin Mullins.</span>
        </h1>

        {/* Tagline */}
        <h2
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] text-muted-foreground mb-8 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          I build things for the web.
        </h2>

        {/* Description */}
        <p
          className="max-w-xl text-lg text-muted-foreground leading-relaxed mb-12 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          I'm a <span className="text-primary">Senior Software Engineer</span> with hands-on experience architecting,
          building, and delivering mission-critical web solutions. Specializing in{" "}
          <span className="text-primary">C#, .NET, React, Angular</span>, and{" "}
          <span className="text-primary">Azure</span> cloud infrastructure.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 animate-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button variant="outline" size="lg" onClick={scrollToProjects}>
            Check out my work!
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" onClick={scrollToContact} className="text-muted-foreground hover:text-primary">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
