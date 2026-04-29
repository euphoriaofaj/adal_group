import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Projects } from "@/components/site/Projects";
import { Geography } from "@/components/site/Geography";
import { Partners } from "@/components/site/Partners";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAL GROUP — Проектирование, строительство и смарт-технологии" },
      {
        name: "description",
        content:
          "ADAL GROUP — проектные и строительно-монтажные работы «под ключ» с интеграцией смарт-технологий. BIM, инжиниринг, архитектура, IT-платформы.",
      },
      { property: "og:title", content: "ADAL GROUP — Строительство и смарт-технологии" },
      {
        property: "og:description",
        content: "Полный цикл: от BIM-проекта до сдачи объекта и цифровых платформ управления.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Products />
        <Projects />
        <Geography />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
