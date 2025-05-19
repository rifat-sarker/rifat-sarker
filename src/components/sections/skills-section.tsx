"use client";

import { useState, useEffect } from "react";
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
  Users,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "management"
    | "teamleading";
  icon: string;
  description?: string;
}

// This would be replaced with actual API call in production
const fetchSkills = async (): Promise<Skill[]> => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: "react",
      name: "React",
      category: "frontend",
      icon: "code2",
      description: "Building interactive UIs",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      icon: "fileJson",
      description: "Type-safe JavaScript",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      icon: "code2",
      description: "Web programming language",
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      icon: "globe",
      description: "React framework",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      icon: "layoutGrid",
      description: "Utility-first CSS",
    },
    {
      id: "redux",
      name: "Redux",
      category: "frontend",
      icon: "layers",
      description: "State management",
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      icon: "server",
      description: "JavaScript runtime",
    },
    {
      id: "express",
      name: "Express",
      category: "backend",
      icon: "server",
      description: "Web framework for Node.js",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      icon: "database",
      description: "NoSQL database",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      icon: "database",
      description: "SQL database",
    },
    {
      id: "prisma",
      name: "Prisma",
      category: "tools",
      icon: "database",
      description: "ORM for Node.js",
    },
    {
      id: "git",
      name: "Git",
      category: "tools",
      icon: "gitBranch",
      description: "Version control",
    },
    {
      id: "management",
      name: "Management",
      category: "management",
      icon: "briefcaseBusiness",
      description: "Project oversight and planning",
    },
    {
      id: "teamleading",
      name: "Team Leading",
      category: "teamleading",
      icon: "users",
      description: "Team coordination and leadership",
    },
  ];
};

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Fetch skills on component mount
  useEffect(() => {
    const getSkills = async () => {
      try {
        const data = await fetchSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      } finally {
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Map string icon names to actual components
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
      users: <Users className="h-5 w-5" />,
      briefcaseBusiness: <BriefcaseBusiness className="h-5 w-5" />,
      sparkles: <Sparkles className="h-5 w-5" />,
    };
    return (
      icons[iconName as keyof typeof icons] || <Sparkles className="h-5 w-5" />
    );
  };

  // Get category display name
  const getCategoryName = (category: string) => {
    const names = {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & Utilities",
      management: "Management",
      teamleading: "Team Leading",
    };
    return names[category as keyof typeof names] || category;
  };

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  // Check if skill should be visible
  const isSkillVisible = (skill: Skill) => {
    return !activeCategory || skill.category === activeCategory;
  };

  // Get category color class
  const getCategoryColorClass = (category: string) => {
    const colors = {
      frontend: "bg-gradient-to-br from-blue-500 to-cyan-400",
      backend: "bg-gradient-to-br from-green-500 to-emerald-400",
      database: "bg-gradient-to-br from-purple-500 to-violet-400",
      tools: "bg-gradient-to-br from-orange-500 to-amber-400",
      management: "bg-gradient-to-br from-rose-500 to-pink-400",
      teamleading: "bg-gradient-to-br from-indigo-500 to-blue-400",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gradient-to-br from-gray-500 to-gray-400"
    );
  };

  // Loading skeleton
  if (loading) {
    return (
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-8 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            <div className="mx-auto h-4 w-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="h-12 w-64 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold border-b-2 inline-block border-primary pb-2">
            Skills
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
            Expertise and technologies I work with
          </p>
        </div>

        {/* Category Selector - Unique Horizontal Slider */}
        <div className="mb-12 overflow-hidden">
          <div className="flex justify-">
            <div className="relative flex space-x-1 overflow-x-auto pb-4 sm:space-x-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`
                  flex min-w-[100px] items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all
                  ${
                    activeCategory === null
                      ? "bg-black text-white shadow-lg dark:bg-white dark:text-black"
                      : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }
                `}
              >
                All Skills
              </button>

              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    group relative flex min-w-[100px] items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-sm font-medium transition-all
                    ${
                      activeCategory === category
                        ? "text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    }
                  `}
                >
                  {/* Background gradient for active category */}
                  {activeCategory === category && (
                    <div
                      className={`absolute inset-0 ${getCategoryColorClass(
                        category
                      )}`}
                    ></div>
                  )}

                  {/* Icon and text */}
                  <span className="relative flex items-center">
                    <span className="mr-2">
                      {getIconComponent(
                        Object.values(categories[category])[0].icon
                      )}
                    </span>
                    {getCategoryName(category)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid - Unique Hexagonal Design */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isSkillVisible(skill) ? 1 : 0.2,
                y: 0,
                scale: isSkillVisible(skill) ? 1 : 0.95,
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`
                group relative flex flex-col items-center overflow-hidden rounded-xl border border-gray-200 
                bg-white p-6 text-center transition-all duration-300 dark:border-gray-700 dark:bg-gray-800
                ${
                  isSkillVisible(skill)
                    ? "hover:shadow-lg hover:-translate-y-1"
                    : "pointer-events-none"
                }
              `}
            >
              {/* Decorative background shape */}
              <div
                className={`
                absolute -right-12 -top-12 h-24 w-24 rotate-45 transform opacity-10 transition-opacity
                ${getCategoryColorClass(skill.category)} 
                ${hoveredSkill === skill.id ? "opacity-20" : "opacity-10"}
              `}
              ></div>

              {/* Icon with gradient background */}
              <div
                className={`
                relative mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3 text-white shadow-md
                ${getCategoryColorClass(skill.category)}
              `}
              >
                {getIconComponent(skill.icon)}
              </div>

              {/* Skill name */}
              <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-100">
                {skill.name}
              </h4>

              {/* Category badge */}
              <span className="mb-3 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                {getCategoryName(skill.category)}
              </span>

              {/* Description - only visible on hover */}
              {skill.description && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredSkill === skill.id ? 1 : 0,
                    height: hoveredSkill === skill.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  {skill.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
