const services = [
  { title: "Архитектура и дизайн", text: "Концепции, эскизные и рабочие проекты, авторский надзор." },
  { title: "BIM-проектирование", text: "Информационное моделирование зданий и инженерных систем." },
  { title: "Строительно-монтажные работы", text: "Полный цикл СМР для частных, общественных и коммерческих объектов." },
  { title: "Инжиниринг", text: "Расчёт, проектирование и сопровождение инженерных систем." },
  { title: "Смарт-технологии", text: "Интеграция IoT, систем безопасности и цифровых двойников." },
  { title: "Управление проектами", text: "Сопровождение от идеи до сдачи объекта «под ключ»." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Услуги</div>
          <h2 className="text-balance text-3xl font-bold md:text-5xl">
            Полный цикл <span className="text-gradient">проектирования и строительства</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-smooth group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}