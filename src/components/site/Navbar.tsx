import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import brandLogo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#products", label: "IT-продукты" },
  { href: "#projects", label: "Проекты" },
  { href: "#partners", label: "Партнёры" },
  { href: "#contacts", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={brandLogo} alt="ADAL GROUP logo" className="h-9 w-9 rounded-lg border border-border/70 bg-white object-contain p-0.5" />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-widest text-foreground">ADAL</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">GROUP</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03] md:inline-flex"
        >
          Связаться
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Связаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}