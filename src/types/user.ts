import { Blog } from "./blog";

export type Role = "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: string; // ISO date string
  updatedAt: string;
  Blog: Blog[];
}
