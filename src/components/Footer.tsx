import { Github, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Social icons - mobile only, desktop uses side elements */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/realdev71"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://docs.google.com/document/d/1MaspKjcD0rNdnUf1-gNpLaGbwgOM2aPWI9Kp43Drg1A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>

        <p className="text-center font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
          Built by Austin Mullins
        </p>
      </div>
    </footer>
  );
};

export default Footer;
