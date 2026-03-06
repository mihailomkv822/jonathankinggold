import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideElements from "@/components/SideElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden section-counter">
      <Navigation />
      <SideElements />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
