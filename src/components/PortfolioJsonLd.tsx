import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { JsonLd } from "./JsonLd";

const baseUrl = "https://ffssportfolio.vercel.app";

export function PortfolioJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: profile.name,
        url: baseUrl,
        email: `mailto:${profile.email}`,
        jobTitle: profile.role,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Maricá",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: [
          "Soluções digitais",
          "Automacao",
          "Micro SaaS",
          "Logística",
          "Redes de computadores",
          "Microsoft 365",
          "Inteligência artificial aplicada",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Portfólio Fabio Santos",
        inLanguage: "pt-BR",
        author: { "@id": `${baseUrl}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${baseUrl}/#projects`,
        name: "Projetos de Fabio Santos",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseUrl}/projetos/${project.slug}`,
          name: project.title,
        })),
      },
    ],
  };

  return <JsonLd data={data} />;
}
