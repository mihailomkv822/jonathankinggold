import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "AutoPlayAI",
    role: "Senior Full Stack AI Engineer",
    period: "2024.02 - 2025.12",
    description:
      "Architected and delivered a multi-tenant SaaS platform using React, TypeScript, Node.js, Python (FastAPI), and PostgreSQL. Designed RESTful APIs and microservices with asynchronous processing. Built scalable backend services with optimized database indexing and Redis caching, reducing API response times by 35%. Designed cloud-native infrastructure on AWS with Terraform-based IaC.",
    technologies: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "Terraform"],
    current: false,
  },
  {
    company: "Glorium Technologies",
    role: "Full Stack Developer",
    period: "2022.01 - 2023.12",
    description:
      "Developed high-availability backend systems using Python (Flask), Ruby on Rails, and PostgreSQL supporting millions of transactional events annually. Optimized SQL queries and implemented indexing strategies improving throughput by 30%. Built scalable React + TypeScript frontend modules with SSR and performance optimizations.",
    technologies: ["Python", "Flask", "Ruby on Rails", "React", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    current: false,
  },
  {
    company: "DedSec Tech",
    role: "Senior Web & Mobile Developer",
    period: "2020.03 - 2022.12",
    description:
      "Led development of a full-stack SaaS platform using Node.js, Express, TypeScript, React, and PostgreSQL. Built cross-platform mobile experiences using React Native and Flutter. Implemented secure payment integrations and Docker-based containerization. Enhanced observability with structured logging and monitoring dashboards.",
    technologies: ["Node.js", "Express", "React", "React Native", "Flutter", "TypeScript", "PostgreSQL", "Docker"],
    current: false,
  },
  {
    company: "Tech Startup",
    role: "Web Developer Intern",
    period: "2017.03 - 2019.10",
    description:
      "Assisted in building responsive web applications using HTML5, CSS3, JavaScript, and React. Collaborated with senior developers to develop interactive UI components and integrate APIs. Optimized website performance, accessibility, and cross-browser compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
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
