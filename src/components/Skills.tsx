const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "GraphQL"],
    color: "from-primary/20 to-cyan-500/20",
    borderColor: "border-primary/30",
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Flask", "FastAPI", "Node.js", "Express", "C#", ".NET", "ASP.NET Core", "PHP", "Laravel"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    title: "Database & DevOps",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS", "Git", "REST APIs"],
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Tech Stack</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Tools of the
            <span className="text-gradient"> Trade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies I use to bring ideas to life. Always learning, always evolving.
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`relative p-8 rounded-2xl border ${category.borderColor} bg-gradient-to-br ${category.color} backdrop-blur-sm hover-lift`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category title */}
              <h3 className="font-display text-xl font-bold mb-6">{category.title}</h3>
              
              {/* Skills list */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background/60 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Marquee of all skills */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="text-6xl md:text-8xl font-display font-bold text-muted/20 whitespace-nowrap select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
