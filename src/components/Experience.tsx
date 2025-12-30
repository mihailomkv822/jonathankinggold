import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Stellar Labs",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    description:
      "Leading development of cloud-native applications serving 2M+ users. Architecting microservices, mentoring junior developers, and driving technical decisions.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    current: true,
  },
  {
    company: "NovaTech Solutions",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client-facing applications. Reduced load times by 40% through performance optimization and implemented CI/CD pipelines.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
    current: false,
  },
  {
    company: "CodeCraft Agency",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "Developed responsive web applications for startups and enterprises. Collaborated closely with designers to deliver pixel-perfect interfaces.",
    technologies: ["React", "TypeScript", "Sass", "Firebase"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 lg:px-16 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-20 space-y-4">
          <span className="text-primary font-display uppercase tracking-widest text-sm">
            Career Path
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Where I've
            <span className="text-gradient"> Worked</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A journey through the companies that shaped my skills and perspective.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-8 md:pl-20 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-8 top-2 w-4 h-4 -translate-x-1/2 rounded-full border-2 transition-all duration-300 ${
                    exp.current
                      ? "bg-primary border-primary shadow-[0_0_20px_hsl(78_100%_61%/0.5)]"
                      : "bg-background border-muted-foreground group-hover:border-primary group-hover:bg-primary/20"
                  }`}
                />

                {/* Content card */}
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl md:text-2xl font-bold">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
