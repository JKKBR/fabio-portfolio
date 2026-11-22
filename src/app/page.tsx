import Link from "next/link";

import { AreasSection } from "@/components/AreasSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { PortfolioJsonLd } from "@/components/PortfolioJsonLd";
import { ProcessSection } from "@/components/ProcessSection";

export default function Home() {
  return (
    <>
      <PortfolioJsonLd />

      <Hero />
      <AreasSection />
      <FeaturedProjects />
      <ProcessSection />

      <section className="section">
        <div className="container cta">
          <p className="eyebrow">
            Vamos construir algo útil
          </p>

          <h2>
            Ideias ganham valor quando resolvem uma necessidade concreta.
          </h2>

          <Link
            className="button primary"
            href="/contato"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}