import { Github, FileText } from "lucide-react";

const SideElements = () => {
  return (
    <>
      {/* Left side - Social icons */}
      <div className="hidden lg:flex fixed bottom-0 left-8 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
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

      {/* Right side - Email */}
      <div className="hidden lg:flex fixed bottom-0 right-8 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href="mailto:austinmullins69@outlook.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
          style={{ writingMode: "vertical-rl" }}
        >
          austinmullins69@outlook.com
        </a>
      </div>
    </>
  );
};

export default SideElements;
