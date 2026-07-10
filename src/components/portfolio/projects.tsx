import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import projectOneImage from "@/assets/project-1.jpg";
import projectTwoImage from "@/assets/project-2.jpg";
import projectThreeImage from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Nova Analytics",
    description:
      "A real-time analytics dashboard for SaaS teams. Redesigned the data visualization layer and improved report load times by 40%.",
    tags: ["Product Design", "React", "Data Viz"],
    image: projectOneImage,
    link: "#",
  },
  {
    title: "Bloom Health",
    description:
      "A mobile companion app for a wellness platform. Led UX research, interaction design, and design system implementation.",
    tags: ["Mobile UX", "Design System", "Research"],
    image: projectTwoImage,
    link: "#",
  },
  {
    title: "Terrace Brand",
    description:
      "Brand identity and web experience for a sustainable architecture studio. Built a scalable visual language across digital and print.",
    tags: ["Branding", "Web Design", "Typography"],
    image: projectThreeImage,
    link: "#",
  },
];

export function PortfolioProjects() {
  return (
    <section id="projects" className="section-padding px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few highlights from recent years — from early-stage products to
            established platforms.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardContent className="grid gap-6 p-0 sm:grid-cols-[1.2fr_1fr]">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:py-8">
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
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-primary"
                  >
                    View case study
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
