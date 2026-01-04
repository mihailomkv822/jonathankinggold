import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-20 space-y-4">
          <span className="text-primary font-display uppercase tracking-widest text-sm">
            Education
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Academic
            <span className="text-gradient"> Background</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            The foundation that shaped my technical skills and problem-solving approach.
          </p>
        </div>

        {/* Education card */}
        <div className="relative pl-8 md:pl-20">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-8 top-2 w-4 h-4 -translate-x-1/2 rounded-full border-2 bg-primary border-primary shadow-[0_0_20px_hsl(78_100%_61%/0.5)]" />

          {/* Content card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    Bachelor's Degree
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <span className="font-medium">Purdue University</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2016 - 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>West Lafayette, IN</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Completed a comprehensive computer science curriculum with focus on software engineering, 
              data structures, algorithms, and web development. Built a strong foundation in programming 
              principles and collaborative project work that prepared me for a career in full-stack development.
            </p>

            {/* Key subjects */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Computer Science", "Software Engineering", "Data Structures", "Algorithms", "Web Development"].map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
