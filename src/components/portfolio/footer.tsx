export function PortfolioFooter() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Poreddy Pallavi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
