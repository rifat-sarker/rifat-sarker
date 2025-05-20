export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "management"
  | "teamwork";

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  category: SkillCategory;
  createdAt: string;
  updatedAt: string;
}
