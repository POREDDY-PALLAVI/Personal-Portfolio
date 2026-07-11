import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills, education, and contact details — built with modern web tooling and a mobile-first layout.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://github.com/POREDDY-PALLAVI",
  },
  {
    title: "Java Full Stack Practice",
    description:
      "Hands-on projects exploring Java fundamentals, MySQL database design, and CRUD operations — the foundation of my full stack journey.",
    tags: ["Java", "MySQL", "Git"],
    link: "https://github.com/POREDDY-PALLAVI",
  },
];

export function PortfolioProjects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few things I've built while learning and practicing full stack
            development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border-border bg-background/80 transition-shadow hover:shadow-md"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-normal text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
