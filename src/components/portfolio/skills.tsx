import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
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
            The tools and technologies I work with as a Java Full Stack Developer.
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
                    <li key={skill} className="text-sm text-muted-foreground">
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
