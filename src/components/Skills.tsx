const skillCategories = [
  {
    title: "Backend",
    skills: [".NET Framework", ".NET Core", "C#", "ASP.NET MVC", "VB.Net", "Python", "FastAPI", "Ruby on Rails"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Redux", "Razor", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Azure DevOps"],
  },
  {
    title: "Database",
    skills: ["SQL Server", "CosmosDB", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"],
  },
  {
    title: "Event & Messaging",
    skills: ["Kafka", "RabbitMQ", "MSMQ", "Azure Service Bus", "Azure Event Grid"],
  },
  {
    title: "Tools & APM",
    skills: ["Application Insights", "New Relic", "DataDog", "Splunk", "Git", "Jira", "Postman"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="numbered-heading mb-16">Technical Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-lg border border-border/30 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/60 text-muted-foreground text-xs font-mono rounded hover:text-primary hover:bg-secondary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
