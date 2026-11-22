import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projetos" };
export default function ProjetosPage() { return <><PageHeader eyebrow="Portfolio" title="Projetos e estudos de caso" description="Ferramentas criadas para carreira, logistica, produtividade, automacao e validacao de ideias."/><section className="section section-alt"><div className="container"><div className="filter-note">Todos os projetos</div><div className="grid grid-3">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></div></section></>; }
