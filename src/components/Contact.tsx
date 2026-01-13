import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
            Let's Create
            <span className="text-gradient"> Something</span>
            <br />Amazing Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind? Let's talk about it. I'm always open to discussing new opportunities.
          </p>
        </div>
        
        {/* Contact card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
          
          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* Left side - Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Let's connect</h3>
                <p className="text-muted-foreground">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:jonathanking97@proton.me" 
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email me at</p>
                    <p className="font-medium">jonathanking97@proton.me</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Based in</p>
                    <p className="font-medium">Williamsport, PA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground resize-none"
                />
              </div>
              
              <Button variant="hero" className="w-full">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
