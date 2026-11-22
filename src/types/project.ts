export type ProjectStatus =
  "Disponível" | "Demonstração" | "Em desenvolvimento";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  status: ProjectStatus;
  technologies: string[];
  problem: string;
  solution: string;
  role: string;
  aiUse?: string;
  resources: string[];
  nextSteps?: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
};
