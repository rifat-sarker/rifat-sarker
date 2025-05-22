// import { User } from "./user";

export type BlogCategory =
  | "javascript"
  | "typescript"
  | "python"
  | "html"
  | "css"
  | "react"
  | "nodejs"
  | "nextjs"
  | "expressjs"
  | "mongodb"
  | "postgresql"
  | "mysql";

export interface Blog {
  id: string;
  title: string;
  content: string;
  image?: string;
  category: BlogCategory;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
}
