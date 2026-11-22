import Image from "next/image";
import type { Project } from "@/types/project";

const categoryClass: Record<string, string> = {
  "Micro SaaS e IA": "visual-ai",
  "Logística e Educacao": "visual-logistics",
  Logística: "visual-logistics",
  Carreira: "visual-career",
  "Carreira e Automacao": "visual-career",
  Produtividade: "visual-productivity",
  Experimental: "visual-experimental",
};

export function ProjectVisual({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (project.image) {
    return (
      <div className="project-visual project-image">
        <Image
          src={project.image}
          alt={
            project.imageAlt ?? `Captura de tela do projeto ${project.title}`
          }
          fill
          priority={priority}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
    );
  }

  const initials = project.title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`project-visual ${categoryClass[project.category] ?? "visual-default"}`}
      aria-hidden="true"
    >
      <span className="visual-grid" />
      <span className="visual-mark">{initials}</span>
      <span className="visual-label">{project.category}</span>
    </div>
  );
}
