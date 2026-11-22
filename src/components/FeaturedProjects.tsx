import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return <section className="section section-alt"><div className="container"><div className="section-heading split"><div><p className="eyebrow">Selecao</p><h2>Projetos em destaque</h2></div><Link className="text-link" href="/projetos">Ver todos os projetos</Link></div><div className="grid grid-2">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>;
}
