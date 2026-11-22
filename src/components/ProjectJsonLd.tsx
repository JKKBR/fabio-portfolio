import type { Project } from "@/types/project";
import { JsonLd } from "./JsonLd";

const baseUrl = "https://ffssportfolio.vercel.app";

export function ProjectJsonLd({ project }: { project: Project }) {
  const pageUrl = `${baseUrl}/projetos/${project.slug}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${pageUrl}/#project`,
    name: project.title,
    description: project.description,
    url: pageUrl,
    inLanguage: "pt-BR",
    creator: {
      "@type": "Person",
      name: "Fabio Santos",
      url: baseUrl,
    },
    keywords: project.technologies.join(", "),
    genre: project.category,
    sameAs: project.liveUrl ? [project.liveUrl] : undefined,
  };

  return <JsonLd data={data} />;
}
