import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contacts() {
  return (
    <section id="contacts" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-background p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Контакты</div>
              <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
                Готовы обсудить <span className="text-gradient">ваш проект</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Напишите нам — подготовим предложение и оценку сроков в течение рабочего дня.
              </p>

              <a
                href="mailto:info@adalgroupcorp.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03]"
              >
                Написать нам
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              <a href="mailto:info@adalgroupcorp.com" className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5 backdrop-blur transition-smooth hover:border-primary/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                  <div className="mt-1 font-medium text-foreground">info@adalgroupcorp.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Телефон</div>
                  <div className="mt-1 space-y-1 font-medium text-foreground">
                    <a href="tel:+77770070709" className="block transition-smooth hover:text-primary">
                      +7 777 007 0709
                    </a>
                    <a href="tel:+77054557400" className="block transition-smooth hover:text-primary">
                      +7 705 455 7400
                    </a>
                    <a href="tel:+77717453027" className="block transition-smooth hover:text-primary">
                      +7 771 745 3027
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Алматы, Медеуский район</div>
                  <div className="mt-1 font-medium text-foreground">мкр. Алатау, ул. Ибрагимова, дом 9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}