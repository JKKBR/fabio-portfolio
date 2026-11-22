import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FilteredProjects } from "@/components/FilteredProjects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Estudos de caso de soluções digitais, automações e protótipos de Micro SaaS.",
};

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfólio"
        title="Projetos e estudos de caso"
        description="Ferramentas criadas para carreira, logística, produtividade, automacao e validação de ideias."
      />
      <section className="section section-alt">
        <div className="container">
          <FilteredProjects projects={projects} />
        </div>
      </section>
    </>
  );
}
