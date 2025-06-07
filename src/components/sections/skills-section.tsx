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
  Users,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import { Skill } from "@/types/skill";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
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
      users: <Users className="h-5 w-5" />,
      briefcaseBusiness: <BriefcaseBusiness className="h-5 w-5" />,
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
      management: "Management",
      teamleading: "Team Leading",
    };
    return names[category as keyof typeof names] || category;
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const isSkillVisible = (skill: Skill) => {
    return !activeCategory || skill.category === activeCategory;
  };

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

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -90, transformOrigin: "left center" }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 20,
        mass: 0.8,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8 w-full"
    >
      <section className="w-full">
        <div className="mx-auto">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold border-b-2 inline-block border-primary pb-2">
              Skills
            </h2>
            <p className="max-w-[700px] text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Expertise and technologies I work with
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              <button
                onClick={() => setActiveCategory(null)}
                className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === null
                    ? "bg-black text-white shadow dark:bg-white dark:text-black"
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All Skills
              </button>

              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`flex-shrink-0 relative px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all overflow-hidden ${
                    activeCategory === category
                      ? "text-white shadow"
                      : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {activeCategory === category && (
                    <div
                      className={`absolute inset-0 ${getCategoryColorClass(
                        category
                      )}`}
                    ></div>
                  )}
                  <span className="relative flex items-center">
                    <span className="mr-2">
                      {getIconComponent(
                        categories[category][0].icon ?? "sparkles"
                      )}
                    </span>
                    {getCategoryName(category)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {skills
              .filter((skill) => isSkillVisible(skill))
              .map((skill) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: isSkillVisible(skill) ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`group relative w-full flex flex-col items-center overflow-hidden rounded-xl border border-gray-200 bg-white p-4 sm:p-6 text-center transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 ${
                    isSkillVisible(skill)
                      ? "hover:shadow-lg hover:-translate-y-1"
                      : "pointer-events-none"
                  }`}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-24 w-24 rotate-45 transform transition-opacity ${getCategoryColorClass(
                      skill.category
                    )} ${
                      hoveredSkill === skill.id ? "opacity-20" : "opacity-10"
                    }`}
                  ></div>
                  <div
                    className={`relative mb-3 sm:mb-4 flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full p-2 sm:p-3 text-white shadow-md ${getCategoryColorClass(
                      skill.category
                    )}`}
                  >
                    {getIconComponent(skill.icon ?? "sparkles")}
                  </div>
                  <h4 className="mb-2 text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </h4>
                  {skill.description && (
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {skill.description}
                    </p>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
