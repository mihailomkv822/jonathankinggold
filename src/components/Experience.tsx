import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Self-employed",
    role: "Senior Full Stack Developer",
    period: "2025.02 - Present",
    description:
      "Designed and delivered custom web applications for startups, agencies, and small businesses. Developed RESTful and GraphQL APIs using Python (Django, FastAPI), Node.js (Express, NestJS), C# (.NET), and PHP (Laravel). Built responsive UIs with React, designed databases, implemented auth systems, and deployed using Docker and cloud infrastructure.",
    technologies: ["Python", "Django", "FastAPI", "Node.js", "React", "Docker", "AWS"],
    current: true,
  },
  {
    company: "Speed Gamba",
    role: "Software Developer",
    period: "2022.02 - 2024.11",
    description:
      "Contributed to the development of multiple web-based products. Built backend services using Python and PHP, developing APIs for frontend consumption and implementing business logic for real-time data processing. Optimized database queries and modernized codebase for better scalability.",
    technologies: ["Python", "PHP", "PostgreSQL", "REST APIs"],
    current: false,
  },
  {
    company: "Water Babies Global",
    role: "Back End Developer",
    period: "2020.05 - 2021.12",
    description:
      "Built and enhanced web applications for clients across different industries. Focused on backend development using Python and C#, designing database schemas, implementing authentication systems, and building internal tools. Collaborated in an agile environment with cross-functional teams.",
    technologies: ["Python", "C#", ".NET", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-16 relative">
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
