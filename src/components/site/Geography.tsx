import { MapPin } from "lucide-react";

const cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Актобе", "Атырау", "Усть-Каменогорск", "Тараз", "Павлодар", "Кызылорда"];

export function Geography() {
  return (
    <section id="geography" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-border bg-card/40 p-10 backdrop-blur md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">География</div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">
                Реализуем проекты по всему <span className="text-gradient">Казахстану</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Региональные офисы и проектные команды позволяют работать с объектами в любом городе страны.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-4 py-2 text-sm text-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}