import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://ffssportfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/sobre", "/projetos", "/contato"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projetos/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...projectPages];
}
