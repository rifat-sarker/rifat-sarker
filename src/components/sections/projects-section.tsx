"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

// Static data
const projectsData = [
  {
    id: 1,
    title: "Cyclify",
    category: "fullstack",
    image: "/image.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A dynamic and user-friendly bicycle e-commerce platform with real-time inventory management, user authentication, and payment processing.",
    githubUrl: "https://github.com/yourusername/cyclify",
    liveUrl: "https://cyclify-demo.vercel.app",
  },
  {
    id: 2,
    title: "Mixhub Blog",
    category: "fullstack",
    image: "/image.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    description:
      "A digital platform that hosts a collection of articles, posts, and entries with a modern UI, comment system, and content management.",
    githubUrl: "https://github.com/yourusername/mixhub-blog",
    liveUrl: "https://mixhub-blog.vercel.app",
  },
  {
    id: 3,
    title: "Tech Radar",
    category: "frontend",
    image: "/image.jpg",
    technologies: ["React", "Material UI", "Redux", "Firebase"],
    description:
      "Dive into detailed insights on smartphones, laptops, and more from top tech companies with advanced filtering and comparison tools.",
    githubUrl: "https://github.com/yourusername/tech-radar",
    liveUrl: "https://tech-radar-demo.vercel.app",
  },
  {
    id: 4,
    title: "Task Manager API",
    category: "backend",
    image: "/image.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
    description:
      "A comprehensive RESTful API for task management with authentication, authorization, and data persistence.",
    githubUrl: "https://github.com/yourusername/task-manager-api",
    liveUrl: "https://task-manager-api-docs.vercel.app",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    category: "frontend",
    image: "/image.jpg",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API"],
    description:
      "Real-time weather information with interactive maps, forecasts, and historical data visualization.",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
  },
  {
    id: 6,
    title: "E-Learning Platform",
    category: "fullstack",
    image: "/image.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS S3"],
    description:
      "A full-stack e-learning platform with course management, student progress tracking, and interactive lessons.",
    githubUrl: "https://github.com/yourusername/e-learning-platform",
    liveUrl: "https://e-learning-platform-demo.vercel.app",
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 "
    >
      <motion.div variants={item}>
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
          My Projects
        </h2>
      </motion.div>

      <motion.div variants={item}>
        <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
          <TabsList className="mx-auto inline-flex flex-wrap justify-center gap-2 mb-8 bg-muted/50 p-1 border rounded-lg">
            {["all", "frontend", "backend", "fullstack"].map((type) => (
              <TabsTrigger
                key={type}
                value={type}
                className="capitalize px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-center mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-white/10 text-white border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="bg-white/10 text-white border-none"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
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
              className="bg-card max-w-3xl w-full max-h-[90vh] overflow-auto rounded-lg p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projectsData.find(
                  (p) => p.id === selectedProject
                );
                if (!project) return null;

                return (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
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
                        src={project.image}
                        alt={project.title}
                        height={300}
                        width={300}
                        className="w-full h-auto rounded-lg mb-4"
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
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
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
