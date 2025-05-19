"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  FileJson,
  GitBranch,
  Globe,
  Layers,
  LayoutGrid,
  Server,
  Sparkles,
} from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  icon: string;
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills: Skill[] = [
    { id: "react", name: "React", category: "frontend", icon: "code2" },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      icon: "fileJson",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      icon: "code2",
    },
    { id: "nextjs", name: "Next.js", category: "frontend", icon: "globe" },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      icon: "layoutGrid",
    },
    { id: "redux", name: "Redux", category: "frontend", icon: "layers" },
    { id: "nodejs", name: "Node.js", category: "backend", icon: "server" },
    { id: "express", name: "Express", category: "backend", icon: "server" },
    { id: "mongodb", name: "MongoDB", category: "database", icon: "database" },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      icon: "database",
    },
    { id: "prisma", name: "Prisma", category: "tools", icon: "database" },
    { id: "git", name: "Git", category: "tools", icon: "gitBranch" },
  ];

  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getIconComponent = (iconName: string) => {
    const icons = {
      code2: <Code2 className="h-5 w-5" />,
      fileJson: <FileJson className="h-5 w-5" />,
      globe: <Globe className="h-5 w-5" />,
      layoutGrid: <LayoutGrid className="h-5 w-5" />,
      layers: <Layers className="h-5 w-5" />,
      server: <Server className="h-5 w-5" />,
      database: <Database className="h-5 w-5" />,
      gitBranch: <GitBranch className="h-5 w-5" />,
      sparkles: <Sparkles className="h-5 w-5" />,
    };
    return (
      icons[iconName as keyof typeof icons] || <Sparkles className="h-5 w-5" />
    );
  };

  const getCategoryName = (category: string) => {
    const names = {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & Utilities",
    };
    return names[category as keyof typeof names] || category;
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const isSkillVisible = (skill: Skill) => {
    return !activeCategory || skill.category === activeCategory;
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Technical Skills
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
            Expertise and technologies I work with
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 w-full flex justify-center">
          <div className="flex flex-wrap justify-center rounded-full border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800">
            <button
              onClick={() => setActiveCategory(null)}
              className={`m-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`m-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isSkillVisible(skill) ? 1 : 0.2,
                scale: isSkillVisible(skill) ? 1 : 0.95,
              }}
              transition={{ duration: 0.3 }}
              className={`group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 ${
                isSkillVisible(skill) ? "" : "pointer-events-none"
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white shadow-sm">
                {getIconComponent(skill.icon)}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h4>
              <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {getCategoryName(skill.category)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
