import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const projects = [
  {
    title: "Arval",
    description: "Looking to elevate your business mobility? Arval is your ultimate partner for vehicle leasing and fleet management solutions. With decades of expertise, Arval specializes in providing tailored leasing plans and innovative mobility solutions to meet the unique needs of businesses, big or small. From optimizing fleet efficiency to offering cutting-edge sustainable solutions like electric vehicles, Arval is all about making your mobility smarter, greener, and hassle-free. With a presence in over 30 countries and a commitment to exceptional service, Arval helps businesses focus on what matters most—while they take care of the wheels. Discover why Arval is the go-to choice for businesses around the world!",
    tags: ["HTML5", "CSS3", "Angular.js", "Node.js", "Java (Spring Boot)", "Oracle", "Microsoft SQL Server", "Azure", "AWS", "Akamai", "REST", "SOAP", "SAML", "Single Sign-On (SSO)", "SSL/TLS", "Power BI", "Tableau", "New Relic", "IoT for Telematics", "AI for Predictive Maintenance", "Docker", "Jenkins", "Terraform"],
    image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_6.png",
    liveUrl: "https://www.arval.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Zillearn",
    description: "ZiLearn is an innovative learning platform designed to empower individuals and businesses with access to a wide range of educational resources and skill-building opportunities. Whether you're a student aiming to learn new concepts, a professional seeking career advancement, or an organization looking to upskill your workforce, ZiLearn provides dynamic and engaging solutions tailored to your needs. With its user-friendly interface and comprehensive offerings, ZiLearn makes education more accessible, personalized, and impactful for everyone.",
    tags: ["HTML5", "CSS3", "React.js", "Node.js", "Django", "PostgreSQL", "MongoDB", "AWS", "GCP", "Cloudflare", "REST", "GraphQL", "OAuth 2.0", "Firebase", "Auth", "SSL/TLS", "Google Analytics", "Facebook Pixel", "WebRTC", "Interactive", "Content APIs", "Stripe", "PayPal", "Docker", "Kubernetes"],
    image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_7.png",
    liveUrl: "https://zillearn.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Teemie",
    description: "Transform how your team collaborates with Teemie—the ultimate platform for smart learning and seamless teamwork. Designed to enhance communication, learning, and engagement, Teemie offers intuitive tools that bring your team closer, no matter where they are. From dynamic knowledge-sharing to streamlined project management, Teemie turns collaboration into a breeze. Perfect for businesses, educational institutions, or any organization looking to simplify teamwork while boosting productivity. With its user-friendly interface and innovative features, it's no wonder teams everywhere are loving Teemie! Ready to supercharge your team's potential? Dive into TeemieApp.com and experience the future of collaboration today!",
    tags: ["HTML5", "CSS3", "React.js", "Node.js", "Django", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Cloudflare", "REST", "GraphQL", "OAuth 2.0", "Firebase", "Auth", "SSL/TLS", "Google Analytics", "Mixpanel", "WebRTC", "Slack", "Integration", "Docker", "Kubernetes"],
    image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_8.png",
    liveUrl: "https://teemieapp.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "MiCard",
    description: "Micard.io is a modern and innovative platform that allows individuals and businesses to create and share digital business cards effortlessly. With its sleek design and easy-to-use interface, Micard.io replaces traditional paper cards with eco-friendly, digital alternatives that can be shared instantly and updated in real time. Whether you're networking at an event, sharing contact information online, or showcasing your professional profile, Micard.io helps you leave a lasting impression with just a tap or a scan.",
    tags: ["Node.js", "Django", "PostgreSQL", "Firebase", "AWS", "Google Cloud", "Cloudflare", "REST", "GraphQL", "OAuth 2.0", "Firebase Auth", "SSL/TLS", "Google Analytics", "Facebook Pixel", "Dynamic QR Code APIs", "Stripe", "PayPal", "Docker", "Docker"],
    image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_9.png",
    liveUrl: "https://micard.io/en-de",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "LoveVelo",
    description: "Love Velo is a premier cycling travel company specializing in creating unforgettable bike holidays and tours worldwide. Whether you're a seasoned cyclist seeking an adventurous route or a leisure rider looking to explore stunning destinations, Love Velo curates the perfect cycling experiences tailored to your needs. With options ranging from scenic self-guided tours to fully supported group adventures, Love Velo ensures every journey is as smooth and enjoyable as the ride itself. Discover the world on two wheels with expert planning, local insights, and exceptional service.",
    tags: ["Node.js", "PHP/Laravel", "PostgreSQL", "Booking Engine APIs", "AWS", "DigitalOcean", "Cloudflare", "REST", "GraphQL", "OAuth 2.0", "Firebase Pixel", "SSL/TLS", "Google Analytics", "Google Maps", "Stripe", "PayPal", "Kubernetes"],
    image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_10.png",
    liveUrl: "https://lovevelo.co.uk/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Rever",
    description: "Rever.vn is a leading real estate platform in Vietnam, offering seamless property buying, selling, and renting experiences. Whether you're searching for your dream home, selling a property, or exploring investment opportunities, Rever.vn provides professional services, market insights, and cutting-edge technology to guide you every step of the way. With a trusted network of agents, verified listings, and advanced tools like virtual tours, Rever.vn is the ultimate destination for making informed real estate decisions.",
    tags: ["Node.js", "PHP/Laravel", "PostgreSQL", "MySQL", "AWS", "DigitalOcean", "Cloudflare", "REST", "GraphQL", "OAuth 2.0", "Firebase Auth", "SSL/TLS", "Google Analytics", "Facebook Pixel", "Google Maps", "Virtual Tour Integration", "Stripe", "PayPal", "Kubernetes"],
    image: "https://694c86670fe1214ef2882353.imgix.net/Screenshot_11.png",
    liveUrl: "https://rever.vn/",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-6 lg:px-16 relative">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <span className="text-primary font-display uppercase tracking-widest text-sm">Selected Work</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Things I've
              <span className="text-gradient"> Built</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A collection of projects that showcase my passion for creating impactful digital experiences.
          </p>
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group relative bg-card rounded-2xl overflow-hidden hover-lift hover-glow cursor-pointer ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Quick actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    aria-label="View live site"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] bg-card border-border p-0 overflow-hidden">
          {selectedProject && (
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Modal Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                <DialogHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <DialogTitle className="font-display text-3xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                    {selectedProject.featured && (
                      <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                    Live Demo
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
