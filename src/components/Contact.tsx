import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative text-center">
        <p className="font-mono text-primary text-sm mb-4">05. What's Next?</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Whether you have a question or just want to say hi, my inbox is always open.
          I'm currently looking for new opportunities and would love to hear from you!
        </p>

        <a href="mailto:austinmullins69@outlook.com">
          <Button variant="outline" size="lg" className="font-mono text-sm px-10 py-6">
            Say Hello
          </Button>
        </a>

        <div className="mt-12 flex flex-col items-center gap-2 text-muted-foreground font-mono text-sm">
          <span>austinmullins69@outlook.com</span>
          <span>+1 (831) 756-8859</span>
          <span>Mount Carmel, TN</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
