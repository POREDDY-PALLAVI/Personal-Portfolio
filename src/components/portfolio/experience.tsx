import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    school: "AIML Graduate",
    period: "Recently graduated",
    description:
      "Focused on programming fundamentals, data structures, machine learning, and web development. Built projects using Java, HTML, CSS, JavaScript, and MySQL.",
  },
];

export function PortfolioExperience() {
  return (
    <section id="education" className="section-padding px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Background
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 text-muted-foreground">
            I'm a fresher — here's my academic background and what I've been
            learning.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <Card key={item.degree} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-display text-xl font-normal text-foreground">
                        {item.degree}
                      </h3>
                      <span className="text-sm font-medium text-accent">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.school}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
