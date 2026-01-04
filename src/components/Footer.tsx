import { Github, Heart, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 lg:px-16 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="font-display text-2xl font-bold">
            JK<span className="text-primary">.</span>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/jonathankinggold", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jonathan-king-101b573a1/", label: "LinkedIn" },
              { icon: FileText, href: "https://jumpshare.com/share/3G0kFninPsVmdvG7TLtY", label: "Resume" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Jonathan King. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
