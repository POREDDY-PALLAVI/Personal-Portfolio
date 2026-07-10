import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-portfolio.jpg";

export function PortfolioHero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Product Designer & Developer
        </p>
        <h1 className="text-balance font-display text-5xl font-normal leading-[1.1] text-foreground sm:text-6xl md:text-7xl">
          Alex Morgan
        </h1>
        <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I design and build digital experiences that feel intuitive, look
          beautiful, and solve real problems. Currently based in San Francisco,
          working with teams who care about craft.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to projects"
      >
        <span className="sr-only">Scroll to projects</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
