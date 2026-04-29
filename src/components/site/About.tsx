import aboutImg from "@/assets/about-company-real.png";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Полный цикл: проектирование, СМР, ввод в эксплуатацию",
  "BIM-моделирование и цифровые двойники объектов",
  "Собственные IT-решения и смарт-платформы",
  "Опыт работы с государственными и частными заказчиками",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
            <img
              src={aboutImg}
              alt="О компании ADAL GROUP"
              className="relative rounded-3xl border border-border object-cover"
            />
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">О компании</div>
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
              Современное объединение <span className="text-gradient">проектных и строительных</span> подразделений
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              ADAL GROUP осуществляет строительство широкого спектра объектов в Казахстане — от
              жилых комплексов и социальных учреждений до промышленных и инфраструктурных
              объектов с интеграцией интеллектуальных технологий.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}