import * as React from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const products = [
  {
    name: "ЧС Алматы: Цифровой щит",
    text: "Приложение экстренной безопасности для жителей мегаполиса.",
    features: [
      "50 000+ активных пользователей",
      "Онлайн-оповещение о ЧС в реальном времени",
      "Построение маршрута эвакуации до ближайшего пункта помощи",
      "iOS / Android",
    ],
  },
  {
    name: "Азбука безопасности в 4D",
    text: "AR/VR платформа для обучения правилам безопасности.",
    features: [
      "4D-моделирование сценариев чрезвычайных ситуаций",
      "Иммерсивный визуальный опыт через дополненную и виртуальную реальность",
      "Мобильная платформа для всех категорий граждан",
    ],
  },
  {
    name: "Steppe Games",
    text: "Серия образовательных мобильных игр о Казахстане.",
    features: [
      "Геймификация истории, культуры и казахского языка",
      "Поддержка KK / RU / EN, офлайн-режим",
      "Целевая аудитория: 10 000+ пользователей",
    ],
  },
  {
    name: "Qalqan",
    text: "Цифровая экосистема для психологических служб силовых структур.",
    features: [
      "Автоматизация мониторинга психоэмоционального состояния",
      "Раннее выявление суицидальных рисков и буллинга",
      "Экономия до 40% рабочего времени психологов",
      "Цифровой документооборот — отказ от бумаги",
    ],
  },
  {
    name: "ЕДDS 112",
    text: "Единая диспетчерская служба экстренного реагирования.",
    features: [
      "Комплексная автоматизация служб 101, 103 и 112",
      "Единое информационное пространство без дублирования данных",
      "Архитектура для высоких нагрузок, работа 24/7/365",
    ],
  },
  {
    name: "AITK.KZ",
    text: "Образовательная экосистема для подготовки AI-специалистов.",
    features: [
      "Практическое обучение с созданием реальных AI-продуктов",
      "Хакатоны, стартапы, резиденты технопарка",
      "Формирование кадрового резерва региона",
    ],
  },
  {
    name: "Центр управления объектом",
    text: "AI-система контроля строительных площадок и промзон.",
    features: [
      "Автодетекция СИЗ (каски, жилеты) через компьютерное зрение",
      "GPS-мониторинг техники, расход ГСМ, индекс риска",
      "Хронология строительства через фото 360°",
      "Запуск пилота за 3 месяца",
    ],
  },
  {
    name: "Система мониторинга и анализа",
    text: "Платформа социологических исследований и предиктивной аналитики.",
    features: [
      "Полевой сбор данных (CAPI) с автоматической валидацией",
      "Предиктивное моделирование на основе Big Data",
      "Многоуровневый статистический анализ в реальном времени",
    ],
  },
  {
    name: "AR / VR",
    text: "Иммерсивные технологии для бизнеса и государства.",
    features: [
      "3D-визуализация данных и цифровые двойники объектов",
      "Интерактивное обучение и тренировка персонала",
      "Демонстрация решений стейкхолдерам в виртуальной среде",
    ],
  },
  {
    name: "SuperMap — ГИС и Digital Twins",
    text: "Интеллектуальные платформы управления городами.",
    features: [
      "Smart City — единая карта контроля транспорта, безопасности и инфраструктуры",
      "Land One Map — управление землёй через спутниковые данные и дроны",
      "Цифровизация добычи — 3D-моделирование шахт и проектирование взрывов",
    ],
  },
  {
    name: "NewsFlow (Multivision)",
    text: "Инструмент автоматизации медиа и пресс-служб.",
    features: [
      "Управление информационными потоками «Егемен Қазақстан»",
      "Полная автоматизация создания газет и контента",
      "Единое инфопространство для всех регионов Казахстана",
    ],
  },
];

export function Products() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || isPaused) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api, isPaused]);

  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">IT-продукты</div>
          <h2 className="text-balance text-3xl font-bold md:text-5xl">
            Собственные <span className="text-gradient">смарт-платформы</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Интегрированные решения для безопасности, инфраструктуры и управления городом.
          </p>
        </div>
        <div
          className="mt-16 px-2 md:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((p) => (
                <CarouselItem key={p.name} className="md:basis-1/2 xl:basis-1/3">
                  <div className="group h-full rounded-3xl border border-border/70 bg-gradient-to-b from-card/80 to-card/30 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_36px_rgba(56,189,248,0.18)]">
                    <div className="font-semibold text-foreground">{p.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{p.text}</div>
                    <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                      {p.features.map((feature) => (
                        <li key={feature}>- {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Перейти к слайду ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-7 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}