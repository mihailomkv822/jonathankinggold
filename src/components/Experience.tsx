import { useState } from "react";

const experiences = [
  {
    company: "AutoPlayAI",
    shortName: "AutoPlayAI",
    role: "Senior Full Stack Developer",
    period: "Feb 2024 – Dec 2025",
    type: "Full-time",
    stack: "C# | .Net Framework | .Net Core | Angular | Azure DevOps",
    bullets: [
      "Design and develop enterprise applications using C#, ASP.NET MVC, Web API, and WCF across both .NET Framework and .NET Core, and Angular with TypeScript.",
      "Develop microservices-based solutions and RESTful APIs to create scalable, loosely coupled systems.",
      "Containerize applications with Docker and manage deployments using Kubernetes for consistent environments and reliable scaling.",
      "Implement and extend Sitefinity platforms as a certified developer, handling custom modules and integrations with legacy systems.",
      "Build and manage CI/CD pipelines in Azure DevOps with automated testing and zero-downtime deployments.",
      "Lead migrations to Azure services including App Services, Functions, Storage, and Key Vault.",
      "Tune SQL Server performance through data modeling and development of efficient stored procedures and indexes.",
    ],
  },
  {
    company: "Glorium Technologies",
    shortName: "Glorium",
    role: "Full Stack C# Developer",
    period: "Jan 2022 – Dec 2023",
    type: "Contract",
    stack: ".Net Framework | Javascript | React | SQL Server",
    bullets: [
      "Led full-stack growth work focused on improving acquisition, conversion, activation, and retention across web and email.",
      "Built personalization and lifecycle messaging features using C#, ASP.NET Core, and React/Redux with TypeScript.",
      "Developed scalable .NET 6/8 backend services supporting millions of transactions with Redis caching and Application Insights.",
      "Deployed to Azure App Services with ARM/Bicep, secured secrets via Key Vault, and maintained CI/CD pipelines.",
      "Collaborated with product and data teams on A/B testing and ML-driven recommendations.",
    ],
  },
  {
    company: "DedSec Tech",
    shortName: "DedSec",
    role: "Senior Web & Mobile Developer",
    period: "Mar 2020 – Dec 2022",
    type: "Full-time",
    stack: "ASP.NET | React | VB.NET | EF",
    bullets: [
      "Developed enterprise-level systems using ASP.NET MVC, Entity Framework, C#, Razor, React, Redux, Ajax, and JSON.",
      "Led the design and development of enterprise-level VB.NET applications using Visual Studio.",
      "Implemented complex business logic and algorithms, enhancing functionality and performance of critical applications.",
      "Conducted thorough code reviews and provided technical guidance to a team of developers.",
      "Collaborated with cross-functional teams to translate requirements into well-structured technical specifications.",
    ],
  },
  {
    company: "Tech Startup",
    shortName: "Startup",
    role: "Web Developer Intern",
    period: "Mar 2017 – Oct 2019",
    type: "Part-time",
    stack: ".NET 4 Framework | React",
    bullets: [
      "Developed and deployed applications using .NET 4 Framework and React based on business unit requirements.",
      "Provided technical support for vendor selection, deployment, and interface tools.",
      "Built reports from various databases and reporting tools.",
      "Collaborated with web designers and business units for web application development.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = experiences[activeTab];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 relative">
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <h2 className="numbered-heading mb-12">Where I've Worked</h2>

        {/* Tabbed experience */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
          {/* Tab buttons */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-0 md:min-w-[160px] shrink-0">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`tab-button whitespace-nowrap ${
                  activeTab === index ? "active" : ""
                }`}
              >
                {exp.shortName}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="pt-6 md:pt-0 min-h-[400px]">
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              {active.role}{" "}
              <span className="text-primary">@ {active.company}</span>
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-1">
              {active.period} · {active.type}
            </p>
            <p className="font-mono text-xs text-muted-foreground/70 mb-6">
              {active.stack}
            </p>

            <ul className="space-y-4">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
