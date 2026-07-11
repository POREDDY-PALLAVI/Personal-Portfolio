export function PortfolioAbout() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Who I am
          </p>
          <h2 className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            About
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Hi, I'm <span className="text-foreground font-medium">Poreddy Pallavi</span> — an
            AIML graduate and aspiring Java Full Stack Developer. I enjoy turning
            ideas into clean, responsive web experiences and I'm always learning
            modern web technologies to sharpen my craft.
          </p>
          <p>
            I'm passionate about coding, problem-solving, and building
            applications that make a real impact. As a fresher, I'm eager to
            contribute to a team where I can grow, collaborate, and ship work
            that matters.
          </p>
          <dl className="grid gap-4 pt-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-accent">Role</dt>
              <dd className="mt-1 text-foreground">Full Stack Developer</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-accent">Focus</dt>
              <dd className="mt-1 text-foreground">Java, Web, Databases</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-accent">Education</dt>
              <dd className="mt-1 text-foreground">B.Tech in AI &amp; ML</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-accent">Status</dt>
              <dd className="mt-1 text-foreground">Open to opportunities</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
