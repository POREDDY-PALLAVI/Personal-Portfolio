import { createFileRoute } from "@tanstack/react-router";
import { PortfolioNavigation } from "@/components/portfolio/navigation";
import { PortfolioHero } from "@/components/portfolio/hero";
import { PortfolioAbout } from "@/components/portfolio/about";
import { PortfolioSkills } from "@/components/portfolio/skills";
import { PortfolioProjects } from "@/components/portfolio/projects";
import { PortfolioExperience } from "@/components/portfolio/experience";
import { PortfolioContact } from "@/components/portfolio/contact";
import { PortfolioFooter } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poreddy Pallavi — Java Full Stack Developer" },
      { name: "description", content: "Portfolio of Poreddy Pallavi, an AIML graduate and aspiring Java Full Stack Developer building responsive web applications." },
      { property: "og:title", content: "Poreddy Pallavi — Java Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Poreddy Pallavi, an AIML graduate and aspiring Java Full Stack Developer building responsive web applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioNavigation />
      <main>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioSkills />
        <PortfolioProjects />
        <PortfolioExperience />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </div>
  );
}
