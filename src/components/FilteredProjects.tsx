"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

const categories = ["Todos", "Micro SaaS e IA", "Logistica", "Carreira", "Produtividade", "Experimental"];

function categoryMatches(project: Project, category: string) {
  if (category === "Todos") return true;
  if (category === "Logistica") return project.category.includes("Logistica");
  if (category === "Carreira") return project.category.includes("Carreira");
  return project.category === category;
}

export function FilteredProjects({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filtered = useMemo(
    () => projects.filter((project) => categoryMatches(project, activeCategory)),
    [projects, activeCategory],
  );

  return (
    <>
      <div className="project-filters" aria-label="Filtrar projetos por categoria">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "filter-button active" : "filter-button"}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "projeto exibido" : "projetos exibidos"}
      </p>
      <div className="grid grid-3">
        {filtered.map((project) => <ProjectCard project={project} key={project.slug} />)}
      </div>
    </>
  );
}
