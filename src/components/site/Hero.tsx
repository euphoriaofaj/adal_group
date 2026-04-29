import { ArrowRight, Building2, Cpu, Compass } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const tags = [
  { icon: Building2, label: "Инжиниринг / Строительство" },
  { icon: Compass, label: "Архитектура / Дизайн" },
  { icon: Cpu, label: "Смарт-технологии" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* Floating glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            ADAL GROUP — 30 лет на рынке Казахстана
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Проектные и строительно-монтажные работы с{" "}
            <span className="text-gradient">интеллектуальными технологиями</span> «под ключ»
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Для частных, общественных и коммерческих объектов. Полный цикл — от концепции
            и BIM-проектирования до сдачи объекта и цифровых платформ управления.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contacts"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03]"
            >
              Обсудить проект
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3 text-sm font-medium text-foreground backdrop-blur transition-smooth hover:bg-card"
            >
              Наши проекты
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {tags.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-xs text-foreground backdrop-blur"
              >
                <t.icon className="h-3.5 w-3.5 text-primary" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}