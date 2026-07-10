import { createFileRoute } from "@tanstack/react-router";
import { PortfolioNavigation } from "@/components/portfolio/navigation";
import { PortfolioHero } from "@/components/portfolio/hero";
import { PortfolioProjects } from "@/components/portfolio/projects";
import { PortfolioSkills } from "@/components/portfolio/skills";
import { PortfolioExperience } from "@/components/portfolio/experience";
import { PortfolioContact } from "@/components/portfolio/contact";
import { PortfolioFooter } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Product Designer & Developer" },
      { name: "description", content: "Portfolio of Alex Morgan, a product designer and developer crafting thoughtful digital experiences." },
      { property: "og:title", content: "Alex Morgan — Product Designer & Developer" },
      { property: "og:description", content: "Portfolio of Alex Morgan, a product designer and developer crafting thoughtful digital experiences." },
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
        <PortfolioProjects />
        <PortfolioSkills />
        <PortfolioExperience />
        <PortfolioContact />
      </main>
      <PortfolioFooter />
    </div>
  );
}
