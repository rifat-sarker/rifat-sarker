export type ProjectCategory = "frontend" | "backend" | "fullstack" | "database";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description?: string;
  clientUrl?: string;
  serverUrl?: string;
  liveUrl?: string;
  image?: string;
  technologies: string[];
  createdAt: string;
  updatedAt: string;
}
