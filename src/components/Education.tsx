import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="numbered-heading mb-12">Education</h2>

        <div className="bg-card p-8 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                Bachelor's Degree in Information Technology
              </h3>
              <p className="text-primary font-medium mb-3">Trevecca Nazarene University</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  2015 – 2017
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Nashville, TN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
