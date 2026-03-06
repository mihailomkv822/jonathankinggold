import { Code2 } from "lucide-react";

const technologies = [
  "C# / .NET Core",
  "ASP.NET MVC / Web API",
  "React / Angular",
  "TypeScript",
  "Azure DevOps",
  "SQL Server / CosmosDB",
  "Docker / Kubernetes",
  "Terraform",
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <h2 className="numbered-heading mb-12">About Me</h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side - Content (3 cols) */}
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Senior Software Engineer with hands-on end-to-end experience architecting,
              building, and delivering mission-critical web solutions. I combine deep expertise in{" "}
              <span className="text-primary">C# and the .NET platform</span> with a proven track
              record of leading teams, streamlining CI/CD workflows, and driving successful cloud
              migrations.
            </p>
            <p>
              Fast-forward to today, I've had the privilege of working at{" "}
              <a href="#experience" className="text-primary hover:underline">AutoPlayAI</a>,{" "}
              <a href="#experience" className="text-primary hover:underline">Glorium Technologies</a>, and{" "}
              <a href="#experience" className="text-primary hover:underline">DedSec Tech</a>, building
              enterprise applications, microservices, and cloud-native platforms that serve thousands of users.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>

            {/* Tech grid */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm mt-4">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary text-xs">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Visual (2 cols) */}
          <div className="lg:col-span-2 relative group">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-0 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />

              {/* Main content area */}
              <div className="relative bg-card rounded-lg p-6 overflow-hidden border border-border/50">
                {/* Code snippet */}
                <div className="font-mono text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div>
                    <span className="text-primary">public class</span>{" "}
                    <span className="text-foreground">Engineer</span>
                  </div>
                  <div>{"{"}</div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-primary">string</span>{" "}
                      <span className="text-foreground">Name</span>{" "}
                      <span className="text-muted-foreground">= </span>
                      <span className="text-accent">"Austin Mullins"</span>;
                    </div>
                    <div>
                      <span className="text-primary">string</span>{" "}
                      <span className="text-foreground">Role</span>{" "}
                      <span className="text-muted-foreground">= </span>
                      <span className="text-accent">"Sr. Software Eng"</span>;
                    </div>
                    <div>
                      <span className="text-primary">string[]</span>{" "}
                      <span className="text-foreground">Stack</span>{" "}
                      <span className="text-muted-foreground">= </span>
                      {"{ "}
                    </div>
                    <div className="pl-4">
                      <span className="text-accent">"C#"</span>,{" "}
                      <span className="text-accent">".NET"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-accent">"React"</span>,{" "}
                      <span className="text-accent">"Azure"</span>
                    </div>
                    <div>{" };"}</div>
                  </div>
                  <div>{"}"}</div>
                </div>

                {/* Floating icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
