import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

import arvalImg from "@/assets/projects/arval.png";
import zillearnImg from "@/assets/projects/zillearn.png";
import teemieImg from "@/assets/projects/teemie.png";
import micardImg from "@/assets/projects/micard.png";
import loveveloImg from "@/assets/projects/lovevelo.png";
import reverImg from "@/assets/projects/rever.png";

const projects = [
  {
    title: "Arval",
    description:
      "Enterprise vehicle leasing and fleet management platform supporting 30+ countries. Built with Angular and Spring Boot, featuring real-time telematics, predictive maintenance AI, and SSO integrations.",
    tags: ["Angular", "Spring Boot", "Azure", "Oracle", "IoT", "Docker"],
    image: arvalImg,
    liveUrl: "https://www.arval.com/",
    featured: true,
  },
  {
    title: "Zillearn",
    description:
      "Innovative learning platform empowering individuals with dynamic educational resources and skill-building opportunities. Built with React and Django, featuring real-time WebRTC sessions and Stripe payments.",
    tags: ["React", "Django", "PostgreSQL", "AWS", "WebRTC", "Stripe"],
    image: zillearnImg,
    liveUrl: "https://zillearn.com/",
    featured: true,
  },
  {
    title: "Teemie",
    description:
      "Team collaboration platform for smart learning and seamless teamwork. Features dynamic knowledge-sharing, project management tools, and Slack integration.",
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "WebRTC"],
    image: teemieImg,
    liveUrl: "https://teemieapp.com/",
    featured: false,
  },
  {
    title: "MiCard",
    description:
      "Modern digital business card platform. Create and share eco-friendly digital cards with QR codes, real-time updates, and analytics.",
    tags: ["React", "Django", "Firebase", "Stripe", "QR APIs"],
    image: micardImg,
    liveUrl: "https://micard.io/en-de",
    featured: false,
  },
  {
    title: "LoveVelo",
    description:
      "Premier cycling travel company platform. Features booking engine, route planning with Google Maps, and payment processing.",
    tags: ["Laravel", "React", "PostgreSQL", "Stripe", "Google Maps"],
    image: loveveloImg,
    liveUrl: "https://lovevelo.co.uk/",
    featured: false,
  },
  {
    title: "Rever",
    description:
      "Leading Vietnamese real estate platform with virtual tours, property search, agent networks, and verified listings.",
    tags: ["Laravel", "React", "MySQL", "AWS", "Virtual Tours"],
    image: reverImg,
    liveUrl: "https://rever.vn/",
    featured: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="numbered-heading mb-16">Some Things I've Built</h2>

        {/* Featured projects - alternating layout */}
        <div className="space-y-24 mb-24">
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 items-center gap-4 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Image */}
              <div
                className={`md:col-span-7 relative group cursor-pointer ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                } md:row-start-1`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-6 relative z-10 md:row-start-1 ${
                  index % 2 === 0 ? "md:col-start-7 md:text-right" : "md:col-start-1"
                }`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3
                  className="font-display text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-xl mb-4 border border-border/30">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl font-semibold text-foreground">
            Other Noteworthy Projects
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {other.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group bg-card p-6 rounded-lg border border-border/30 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-auto">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground/70 mt-4 pt-4 border-t border-border/30">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] bg-card border-border p-0 overflow-hidden">
          {selectedProject && (
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-6">
                <DialogHeader className="space-y-3">
                  <DialogTitle className="font-display text-3xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-secondary text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
