import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Senior Product Designer",
    company: "Atlas Labs",
    period: "2022 — Present",
    description:
      "Lead design for the core platform, built a component library, and partnered with engineering to ship features used by 50k+ customers.",
  },
  {
    role: "Product Designer & Frontend Engineer",
    company: "Studio North",
    period: "2019 — 2022",
    description:
      "Designed and developed websites and products for startups, nonprofits, and Fortune 500 clients.",
  },
  {
    role: "UX Designer",
    company: "Digital Foundry",
    period: "2017 — 2019",
    description:
      "Conducted user research, created wireframes and prototypes, and helped launch two mobile apps from concept to App Store.",
  },
];

export function PortfolioExperience() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Career Path
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 text-muted-foreground">
            Years of working across design, research, and frontend delivery.
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border sm:left-[23px]" />
          {experiences.map((job) => (
            <Card
              key={`${job.company}-${job.period}`}
              className="relative border-border bg-card"
            >
              <div className="absolute top-6 left-4 h-3 w-3 rounded-full bg-accent ring-4 ring-background sm:left-6" />
              <CardContent className="pl-12 sm:pl-16">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-xl font-normal text-foreground">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {job.company}
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
