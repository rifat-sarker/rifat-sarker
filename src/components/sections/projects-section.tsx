"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { Project } from "@/types/project";

type Props = {
  projectsData: Project[];
};

export function ProjectsSection({ projectsData }: Props) {
  const [filter, setFilter] = useState<string | null>("all"); 
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = ["all", "frontend", "backend", "fullstack"];

  function handleFilterClick(category: string) {
    if (filter === category) {
      setFilter(null);
    } else {
      setFilter(category);
    }
  }

  const filteredProjects =
    !filter || filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      animate="show"
      className="space-y-8 w-full"
    >
      <motion.div variants={item}>
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
          Projects
        </h2>
      </motion.div>

      <motion.div variants={item}>
        <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 rounded-lg overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`capitalize px-4 py-2 rounded-md transition-colors duration-200 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent hover:bg-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project.id)}
              className="bg-card  rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs px-2 py-0.5 rounded-md"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card max-w-6xl w-full max-h-[90vh] overflow-auto rounded-lg p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projectsData.find(
                  (p) => p.id === String(selectedProject)
                );
                if (!project) return null;

                return (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <Image
                        src={project.image || "/placeholder.jpg"}
                        alt={project.name}
                        width={900} 
                        height={675} 
                        className="w-full h-auto rounded-lg mb-4"
                        quality={100} 
                        priority
                      />

                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.clientUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className="mr-2 h-4 w-4" /> Client
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.serverUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className="mr-2 h-4 w-4" /> Server
                        </a>
                      </Button>
                      <Button
                        className="ml-auto"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
