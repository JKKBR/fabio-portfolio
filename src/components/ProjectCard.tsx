import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal">
      <ProjectVisual project={project} />
      <div className="project-card-body">
        <div className="project-meta">
          <span className="tag">{project.category}</span>
          <span className="status">{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list" aria-label="Tecnologias útilizadas">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/projetos/${project.slug}`}>
          Ver estudo de caso <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
