import gsafetyLogo from "@/assets/partners/gsafety.png";
import isstechLogo from "@/assets/partners/isstech.png";
import supermapLogo from "@/assets/partners/supermap.png";
import tongyuanLogo from "@/assets/partners/tongyuan.png";
import bhyLogo from "@/assets/partners/bhy.png";
import kunjieLogo from "@/assets/partners/kunjie.png";

const partners = [
  {
    name: "GSafety",
    text: "Безопасность и мониторинг",
    logoUrl: gsafetyLogo,
    logoClassName: "bg-white p-1",
    website: "https://global.gsafety.com/",
  },
  {
    name: "iSSTech",
    text: "Метавселенная города",
    logoUrl: isstechLogo,
    logoClassName: "bg-white p-1",
    website: "https://www.isstech.com/",
  },
  {
    name: "SuperMap",
    text: "ГИС и Digital Twins",
    logoUrl: supermapLogo,
    logoClassName: "bg-transparent p-0",
    website: "https://www.supermap.com/en-us/",
  },
  {
    name: "Tongyuan",
    text: "Инжиниринг и моделирование",
    logoUrl: tongyuanLogo,
    logoClassName: "bg-white p-1",
    website: "https://www.tongyuheavy.com/",
  },
  {
    name: "Beijing BHY",
    text: "Технологии безопасности",
    logoUrl: bhyLogo,
    logoClassName: "bg-transparent p-0",
    website: "http://www.021bhy.com/",
  },
  {
    name: "Kunjie Smart",
    text: "Дроны и AI-инспекция",
    logoUrl: kunjieLogo,
    logoClassName: "bg-white p-1",
    website: "http://www.kunjie.cn/",
  },
  {
    name: "Акимат города Алматы",
    text: "",
    logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat_of_arms_of_Almaty.svg",
    logoClassName: "bg-white p-1",
    website: "https://www.gov.kz/memleket/entities/almaty?lang=ru",
  },
  {
    name: "Управление цифровизации города Алматы",
    text: "",
    logoUrl: "https://digital-almaty.kz/sites/all/themes/gwtheme/images/logo.svg",
    logoClassName: "bg-white p-1",
    website: "https://digital-almaty.kz/ru",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Партнёры</div>
          <h2 className="text-balance text-3xl font-bold md:text-5xl">
            Технологические <span className="text-gradient">альянсы</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-smooth hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <img
                  src={p.logoUrl}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className={`h-10 w-16 rounded-md border border-border/70 object-contain ${p.logoClassName}`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "grid";
                  }}
                />
                <div className="hidden h-10 w-10 place-items-center rounded-md border border-border/70 bg-muted text-xs font-semibold text-foreground">
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-lg font-semibold text-foreground">{p.name}</div>
              </div>
              {p.text ? <div className="mt-2 text-sm text-muted-foreground">{p.text}</div> : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}