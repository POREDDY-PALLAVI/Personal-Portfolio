import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function PortfolioContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `${formData.message}%0D%0A%0D%0AFrom: ${formData.name} <${formData.email}>`;
    window.location.href = `mailto:hello@alexmorgan.design?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Let’s connect
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-muted-foreground">
            Open to full-time roles, freelance projects, and interesting
            conversations.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <a
              href="mailto:hello@alexmorgan.design"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-accent"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-accent">
                <Mail className="h-4 w-4" />
              </div>
              <span className="font-medium">hello@alexmorgan.design</span>
            </a>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
