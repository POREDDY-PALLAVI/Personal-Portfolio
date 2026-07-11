import { Mail, Github, Linkedin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "pallavireddyporeddypallavi@gmail.com",
    href: "mailto:pallavireddyporeddypallavi@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "POREDDY-PALLAVI",
    href: "https://github.com/POREDDY-PALLAVI",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "poreddy-pallavi",
    href: "https://www.linkedin.com/in/poreddy-pallavi-477201343/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Contact",
    value: "+91 93816 86532",
    href: "tel:+919381686532",
    icon: Phone,
  },
];

export function PortfolioContact() {
  return (
    <section id="contact" className="section-padding px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Let's connect
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-muted-foreground">
            Open to internships, entry-level roles, and interesting
            conversations. The quickest way to reach me is below.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {contactItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex min-h-14 items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent hover:bg-secondary/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-accent group-hover:text-accent">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    {item.label}
                  </span>
                  <span className="truncate text-sm font-medium text-foreground">
                    {item.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
