import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Work", href: "#projects" },
  { num: "04", label: "Skills", href: "#skills" },
  { num: "05", label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-primary text-2xl font-bold hover:text-primary/80 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {"<AM />"}
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary text-xs">{link.num}.</span>{" "}
                {link.label}
              </button>
            ))}
            <a
              href="https://docs.google.com/document/d/1RNGznXhzWpsJVxgO_YYYKDLLmV8WJU9MFezSvajQbA4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="ml-4">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-1 text-center">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-center text-lg font-mono text-muted-foreground hover:text-primary transition-colors py-3"
            >
              <span className="text-primary text-sm">{link.num}.</span>{" "}
              {link.label}
            </button>
          ))}
          <a
            href="https://docs.google.com/document/d/1RNGznXhzWpsJVxgO_YYYKDLLmV8WJU9MFezSvajQbA4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full mt-4">
              Resume
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
