import brandLogo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={brandLogo} alt="ADAL GROUP logo" className="h-8 w-8 rounded-lg border border-border/70 bg-white object-contain p-0.5" />
          <span className="text-sm font-bold tracking-widest text-foreground">ADAL GROUP</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ADAL GROUP. Все права защищены.
        </div>
      </div>
    </footer>
  );
}