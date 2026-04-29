const stats = [
  { value: "30", suffix: "лет", label: "На рынке Казахстана" },
  { value: "50+", label: "Опытных инженеров с высшим техническим образованием" },
  { value: "2.9M", suffix: "м²", label: "Общая площадь объектов" },
  { value: "99", label: "Выполненных проектов" },
  { value: "35+", label: "Крупных проектов реконструкции" },
  { value: "48", label: "Работ по благоустройству территории" },
];

export function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Цифры говорят</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Опыт, измеримый <span className="text-gradient">результатом</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-card p-8 transition-smooth hover:bg-card md:p-10"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient md:text-6xl">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="text-xl font-medium text-muted-foreground md:text-2xl">
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}