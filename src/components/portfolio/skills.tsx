import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Design",
    skills: ["UI/UX Design", "Design Systems", "Prototyping", "User Research", "Visual Identity"],
  },
  {
    title: "Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "TanStack"],
  },
  {
    title: "Tools",
    skills: ["Figma", "Framer", "GitHub", "Vercel", "Notion"],
  },
];

export function PortfolioSkills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Capabilities
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 text-muted-foreground">
            A mix of design craft and frontend engineering — I like to work
            where product and code meet.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="border-border bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <h3 className="mb-4 font-display text-xl font-normal text-foreground">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
